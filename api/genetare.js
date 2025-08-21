// File: /api/generate.js

// This function runs on Vercel's servers, not in the user's browser.
// It acts as a secure bridge between our website and the Gemini API.

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Get the user's prompt from the request body
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt is required and must be a non-empty string.' });
    }

    // Securely get the API key from Vercel's environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // This error will only show in the Vercel logs, not to the user.
      console.error("Gemini API key is not set in environment variables.");
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    const fullPrompt = `As an expert aerospace engineering consultant, generate a concise and professional mission brief for the following concept. The response must be in Markdown format. The brief should be structured with these exact sections: ### Mission Title, ### Mission Objective, ### Key Technologies, ### Potential Impact. Concept: "${prompt}"`;
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [{
        parts: [{ text: fullPrompt }]
      }]
    };

    // Make the request to the Gemini API from the secure server environment
    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok || !data.candidates || data.candidates.length === 0) {
      console.error('API Error:', data);
      throw new Error(data.error ? data.error.message : 'API request failed');
    }

    const generatedText = data.candidates[0].content.parts[0].text;

    // Send the successful response back to our frontend
    return res.status(200).json({ result: generatedText });

  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
}
