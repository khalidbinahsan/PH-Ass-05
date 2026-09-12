
import Logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 font-sans border-t border-gray-50">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          <div className="lg:w-[45%]">
            <a href="/" className="flex items-center gap-2.5 mb-5 inline-flex">
              <img src={Logo} alt="Logo" className="h-6 sm:h-8 w-auto" />
              <span className="text-[22px] font-bold text-gray-900 tracking-tight">
                Dev<span className="text-brand-gradient">Stack</span>
              </span>
            </a>
            <p className="text-[14px] text-gray-500 mb-6 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-6">
              <a href="#github" className="text-[14px] font-semibold text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
              <a href="#twitter" className="text-[14px] font-semibold text-gray-600 hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#linkedin" className="text-[14px] font-semibold text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="lg:w-[55%] grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-5">Product</h4>
              <nav className="flex flex-col space-y-3.5">
                <a href="#home" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Home</a>
                <a href="#technologies" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Technologies</a>
                <a href="#projects" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Projects</a>
              </nav>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-5">Company</h4>
              <nav className="flex flex-col space-y-3.5">
                <a href="#about" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">About</a>
                <a href="#contact" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
                <a href="#careers" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Careers</a>
              </nav>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-5">Legal</h4>
              <nav className="flex flex-col space-y-3.5">
                <a href="#privacy" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
              </nav>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-gray-400">
            © {currentYear} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-[13px] text-gray-400 hover:text-gray-700 transition-colors">Privacy</a>
            <a href="#terms" className="text-[13px] text-gray-400 hover:text-gray-700 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;