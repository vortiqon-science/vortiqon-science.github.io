import React, { useRef, useEffect } from 'react';

// This is a wrapper component that applies the vanilla-tilt.js effect to its children.
// It ensures that the tilt effect is initialized only after the component has mounted
// and is properly cleaned up when the component is unmounted.
export const Tilt = ({ options, ...rest }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (!tiltNode) return;

    // Default options for the tilt effect, can be overridden by props
    const tiltOptions = {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      ...options,
    };

    // Check if VanillaTilt is available on the window object
    if (window.VanillaTilt) {
      window.VanillaTilt.init(tiltNode, tiltOptions);
    }

    // Cleanup function to destroy the tilt instance when the component unmounts
    return () => {
      if (tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return <div ref={tiltRef} {...rest} />;
};
