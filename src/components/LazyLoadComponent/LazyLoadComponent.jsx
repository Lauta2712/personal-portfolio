import React, { useState, useEffect, useRef } from "react";

const LazyLoadComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null, // Usar el viewport
        rootMargin: "0px",
        threshold: 0.1, // Cargar cuando el 10% del componente sea visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`lazy-load-wrapper ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default LazyLoadComponent;