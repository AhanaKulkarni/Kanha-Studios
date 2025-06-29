const FloatingElements = () => {
  return (
    <>
      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 text-lotus-pink/30 text-6xl dholak-pulse pointer-events-none z-10">
        🍃
      </div>
      <div className="fixed bottom-1/4 right-10 text-soft-gold/30 text-4xl dholak-pulse pointer-events-none z-10" style={{ animationDelay: '1s' }}>
        🪶
      </div>
    </>
  );
};

export default FloatingElements;
