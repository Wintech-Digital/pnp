import React, { useEffect, useRef, useState } from 'react';

const ShowContent = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null, // Using the viewport as the root
          rootMargin: '0px',
          threshold: 0.1, // Adjust this value if needed, from 0 to 1
        }
      );
  
      if (observerRef.current) {
        observer.observe(observerRef.current);
      }
  
      return () => {
        if (observerRef.current) {
          observer.unobserve(observerRef.current);
        }
      };
    }, []);
  
    return (
      <div ref={observerRef} className={`${ !isVisible ? 'invisible' : 'visible'}`}>
        {children}
      </div>
    );};

export default ShowContent;