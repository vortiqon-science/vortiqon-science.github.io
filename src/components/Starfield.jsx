import React, { useRef, useEffect } from 'react';

export const Starfield = React.memo(() => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let stars = [];
    const numStars = 500;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        dAlpha: Math.random() * 0.02 - 0.01,
      }));
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.alpha += star.dAlpha;
        if (star.alpha <= 0 || star.alpha >= 1) star.dAlpha *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Use a timeout to ensure the parent element has rendered and has dimensions
    const timeoutId = setTimeout(resizeCanvas, 0);
    
    window.addEventListener('resize', resizeCanvas);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full" />;
});
