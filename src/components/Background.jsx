const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-cream overflow-hidden">
      {/* Subtle Sky-to-Cream Atmospheric Gradient Wash */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% -10%, rgba(220, 235, 245, 0.45), transparent 75%)'
        }}
      />

      {/* Scattered Organic Decorative Dots System (4-12px) */}
      <div className="absolute top-[14%] left-[10%] w-2 h-2 rounded-full bg-lemon/80" />
      <div className="absolute top-[22%] right-[14%] w-3 h-3 rounded-full bg-lemon/90" />
      <div className="absolute top-[45%] left-[6%] w-2.5 h-2.5 rounded-full bg-ink/15" />
      <div className="absolute top-[68%] right-[8%] w-2 h-2 rounded-full bg-lemon/75" />
      <div className="absolute top-[85%] left-[18%] w-3 h-3 rounded-full bg-ink/10" />
      <div className="absolute top-[35%] right-[28%] w-1.5 h-1.5 rounded-full bg-lemon/90" />
    </div>
  );
};

export default Background;
