import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create cursor trails
    const trailCount = 8;
    const trails: { element: HTMLDivElement; x: number; y: number }[] = [];

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trails.push({
        element: trail,
        x: 0,
        y: 0
      });
    }

    trailsRef.current = trails.map(t => t.element);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';

      // Animate trails
      trails.forEach((trail, index) => {
        trail.x += (cursorX - trail.x) * (0.08 - index * 0.008);
        trail.y += (cursorY - trail.y) * (0.08 - index * 0.008);

        trail.element.style.left = trail.x - 4 + 'px';
        trail.element.style.top = trail.y - 4 + 'px';
        trail.element.style.opacity = String((trailCount - index) / trailCount * 0.5);
      });

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Cursor hover effects
    const handleMouseEnter = () => {
      if (cursor) cursor.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.transform = 'scale(1)';
    };

    const interactiveElements = document.querySelectorAll('button, a, .service-card, .portfolio-item');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trailsRef.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
};

export default CustomCursor;
