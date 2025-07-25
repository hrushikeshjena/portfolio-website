const InnerPageHeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="w-full p-32 flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default InnerPageHeroSection;
