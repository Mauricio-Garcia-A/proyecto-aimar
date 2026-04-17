import { useEffect, useRef, useState } from 'react';
import './Stars.scss'

const STARS = [
  { value: 24, suffix:'+', label: 'Años de experiencia' },
  { value: 300, suffix:'+', label: 'Alumnos activos' },
  { value: 6, suffix:'', label: 'Días a la semana' },
  { value: 100, suffix:'%', label: 'Compromiso' },
]

// eslint-disable-next-line react/prop-types
const StatItem = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value);
    const duration = 2000; // 2 segundos
    const incrementTime = Math.max(duration / end, 20); // Mínimo 20ms para fluidez

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div className="stars__item" ref={elementRef}>
      <span className="stars__number">
        {count}{suffix}
      </span>
      <span className="stars__label">{label}</span>
    </div>
  );
};

const Stars = () => (
  <section className='container-stars'>
    <div className='SECTION-STANDAR '>
      <div className='CONTAINER-STANDAR '>
        <article className="stars" id="stars">
          {STARS.map((star) => (
            <StatItem 
              key={star.label} 
              value={star.value} 
              suffix={star.suffix} 
              label={star.label} 
            />
          ))}
        </article>
      </div>
    </div>
  </section>

)

export default Stars