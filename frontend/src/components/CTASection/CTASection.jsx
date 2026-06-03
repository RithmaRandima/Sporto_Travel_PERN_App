const CTASection = (props) => {
  return (
    <section className="relative bg-red-500 py-18 px-6 text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {props.heading}
        </h2>

        <p className="mt-6 text-white/90 text-lg">{props.text}</p>

        <button className="mt-10 bg-white text-red-500 px-6 py-2.5 rounded-full font-bold hover:scale-105 transition">
          {props.button}
        </button>
      </div>
    </section>
  );
};

export default CTASection;
