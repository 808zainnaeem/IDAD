import React, { useEffect, useRef } from 'react';

export default function CompetenciesSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let rotation = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    // Proper text along circular arc
    const drawTextAlongArc = (text, radius, startAngle = 0, clockwise = true) => {
      ctx.save();
      ctx.translate(centerX(), centerY());
      ctx.rotate(rotation + startAngle);
      const chars = text.split('');
      const totalAngle = Math.PI * 1.2;
      const anglePerChar = totalAngle / (chars.length - 1);

      ctx.font = 'bold 28px Arial, Helvetica, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      chars.forEach((char, i) => {
        const charAngle = -totalAngle / 2 + i * anglePerChar;
        ctx.save();
        ctx.rotate(charAngle * (clockwise ? 1 : -1));
        ctx.translate(0, clockwise ? -radius : radius);
        ctx.rotate(Math.PI / 2);
        ctx.fillText(char, 0, 0);
        ctx.restore();
      });
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#0b3d62'; /* Updated background */
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = centerX();
      const cy = centerY();
      const accentRGBA = (opacity) => `rgba(1, 169, 107, ${opacity})`; /* #01a96b */

      // Outer circle segments
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      const outerSegments = [
        { start: -0.5, end: 1.5, opacity: 0.7 },
        { start: 1.5, end: 3.0, opacity: 0.15 },
        { start: 3.0, end: 4.8, opacity: 0.65 },
        { start: 4.8, end: 6.28, opacity: 0.15 }
      ];
      outerSegments.forEach(seg => {
        ctx.beginPath();
        ctx.arc(0, 0, 380, seg.start, seg.end);
        ctx.strokeStyle = accentRGBA(seg.opacity);
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ctx.restore();

      // Middle circle segments
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation * 0.85);
      const midSegments = [
        { start: 0.2, end: 1.8, opacity: 0.55 },
        { start: 1.8, end: 3.4, opacity: 0.15 },
        { start: 3.4, end: 5.2, opacity: 0.6 },
        { start: 5.2, end: 6.48, opacity: 0.15 }
      ];
      midSegments.forEach(seg => {
        ctx.beginPath();
        ctx.arc(0, 0, 280, seg.start, seg.end);
        ctx.strokeStyle = accentRGBA(seg.opacity);
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ctx.restore();

      // Inner circle segments
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation * 1.15);
      const innerSegments = [
        { start: 0.8, end: 2.2, opacity: 0.45 },
        { start: 2.2, end: 3.8, opacity: 0.15 },
        { start: 3.8, end: 5.5, opacity: 0.5 },
        { start: 5.5, end: 7.08, opacity: 0.15 }
      ];
      innerSegments.forEach(seg => {
        ctx.beginPath();
        ctx.arc(0, 0, 200, seg.start, seg.end);
        ctx.strokeStyle = accentRGBA(seg.opacity);
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ctx.restore();

      // Center dark circle (background for logo) - now dark to match new palette
      ctx.beginPath();
      ctx.arc(cx, cy, 110, 0, Math.PI * 2);
      ctx.fillStyle = '#337543'; /* Deep green center */
      ctx.fill();

      // Rotating texts on circular paths
      drawTextAlongArc('ONLINE GAMING', 340, Math.PI * 0.3);
      drawTextAlongArc('DIGITAL MEDIA', 245, Math.PI * 0.4);
      drawTextAlongArc('MARKETING', 340, Math.PI * 1.3);

      rotation += 0.003;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-[110vh] overflow-hidden" style={{ backgroundColor: '#0b3d62' }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Center Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/logow.png" 
          alt="Logo" 
          style={{ width: '120px', marginTop: "-55px" }}
        />
      </div>
    </div>
  );
}