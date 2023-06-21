import React, { useEffect, useRef } from 'react';

const HighlightText = () => {
  const highlightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = highlightRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        // Element is visible in the viewport
        // Implement your highlight animation logic here
        // You can use inline styles or add/remove classes to achieve the desired effect
        highlightRef.current.classList.add('highlight-animation');
      } else {
        // Element is not visible in the viewport
        // Implement logic to reset or remove animation classes if needed
        highlightRef.current.classList.remove('highlight-animation');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container m-10 text-center  flex items-center justify-center w-1/2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        <span ref={highlightRef} className="inline-block">
          specific word
        </span>
        Donec ultricies, lectus sed tempor consectetur, neque elit ullamcorper nisi,
        ut tincidunt leo neque vel ligula.
      </p>
    </div>
  );
};

export default HighlightText;
