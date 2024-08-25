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

    const currentElement = elementRef.current; // Copia la referencia actual a una variable

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
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