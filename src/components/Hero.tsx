import Banner from '../assets/images/banner-stack.png'
const Hero = () => {
  return (
    <section className="relative bg-white pt-20 pb-24 font-sans overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#0B1120] leading-[1.1] mb-6 tracking-tight">
              Build Your Ideal <br className="hidden lg:block" />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>
            <p className="text-[17px] text-gray-500 mb-10 max-w-[502px] mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#explore" className="w-full sm:w-auto px-8 py-3.5 text-[15px] font-semibold text-white bg-brand-gradient rounded-lg shadow-sm hover:opacity-90 transition-opacity text-center">
                Explore Technologies
              </a>
              <a href="#learn" className="w-full sm:w-auto px-8 py-3.5 text-[15px] font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-colors text-center">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end max-w-lg lg:max-w-none">
            <img src={Banner} className="w-full h-auto object-contain lg:max-w-[500px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;