const ComingSoon = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 p-8">
    <img src="/coming_soon.png" alt="Coming Soon" className="max-w-xs md:max-w-md mb-8 rounded-3xl shadow-2xl animate-float" />
    <h1 className="text-3xl md:text-4xl font-kids font-bold text-orange-500 mb-2 text-center drop-shadow-lg">Coming Soon!</h1>
    <p className="text-lg text-muted-foreground text-center max-w-xl">This feature is not available yet. Stay tuned for exciting updates!</p>
  </div>
);

export default ComingSoon; 