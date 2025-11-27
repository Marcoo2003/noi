import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FloatingHearts: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr('width', width).attr('height', height);

    const hearts = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * width,
      y: height + Math.random() * 200,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

    svg.selectAll('path')
      .data(hearts)
      .enter()
      .append('path')
      .attr('d', heartPath)
      .attr('fill', '#e11d48') // Rose-600
      .attr('opacity', d => d.opacity)
      .attr('transform', d => `translate(${d.x}, ${d.y}) scale(${d.size / 24})`);

    const animate = () => {
      svg.selectAll('path')
        .each(function(d: any) {
          d.y -= d.speed;
          if (d.y < -50) {
            d.y = height + 50;
            d.x = Math.random() * width;
          }
          d3.select(this).attr('transform', `translate(${d.x}, ${d.y}) scale(${d.size / 24})`);
        });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      svg.attr('width', window.innerWidth).attr('height', window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg 
      ref={svgRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default FloatingHearts;