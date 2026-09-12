import Logo from '../assets/images/logo.png'

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technologies', href: '#', active: false },
    { name: 'Projects', href: '#', active: false },
    { name: 'About', href: '#', active: false },
    { name: 'Contact', href: '#', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-50 shadow-sm">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-[15px] font-medium transition-colors ${link.active ? 'text-[#D91B7E]' : 'text-gray-600 hover:text-gray-900'}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#signin" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"> Sign In
            </a>
            <a href="#signup" className="px-7 py-2.5 text-[15px] font-medium text-white bg-[#D91B7E] rounded-full hover:bg-pink-700 transition-colors">
              Sign Up
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;