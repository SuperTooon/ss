import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function TiltCard({ 
  children, 
  href, 
  onClick, 
  className, 
  whileHover, 
  whileTap, 
  style = {}, 
  variants, 
  as = 'a', 
  ...props 
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse coordinate deviations from the center to subtle -8 to 8 degree rotation range
  const rotateX = useTransform(y, [-180, 180], [8, -8]);
  const rotateY = useTransform(x, [-180, 180], [-8, 8]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Resolve target tag based on props
  const Tag = href ? motion.a : (as === 'div' ? motion.div : motion.button);

  // Strip transition property to prevent interference with Framer Motion physics updates
  const { transition, ...cleanStyle } = style;

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={className}
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...cleanStyle,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        // Smooth transitions for other visual style updates, keeping physical transforms responsive
        transition: 'box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease',
      }}
      {...props}
    >
      <span style={{ 
        transform: 'translateZ(18px)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: style.gap || '12px', 
        width: '100%',
        height: '100%',
        fontFamily: 'inherit'
      }}>
        {children}
      </span>
    </Tag>
  );
}
