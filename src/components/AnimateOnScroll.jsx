import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimateOnScroll — Wrap any element to animate it when it enters the viewport.
 * 
 * @prop animation  'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in'
 * @prop delay      ms delay before animation starts (for staggered children)
 * @prop duration   ms duration override (default 650ms via CSS)
 * @prop threshold  0–1 how much of element must be visible to trigger (default 0.12)
 * @prop className  additional classes on the wrapper div
 * @prop as         element tag to render (default 'div')
 */
export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.12,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`aos-${animation} ${visible ? 'aos-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
