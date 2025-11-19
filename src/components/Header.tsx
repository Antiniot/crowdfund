import { useState } from 'react'
const logo = '/images/logo.svg'
const iconHamburger = '/images/icon-hamburger.svg'
const iconCloseMenu = '/images/icon-close-menu.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 flex items-center justify-between">
        <img src={logo} alt="Crowdfund" className="h-5 md:h-6 brightness-0 invert" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-white hover:opacity-70 transition-opacity font-medium">About</a>
          <a href="#discover" className="text-white hover:opacity-70 transition-opacity font-medium">Discover</a>
          <a href="#get-started" className="text-white hover:opacity-70 transition-opacity font-medium">Get Started</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <img 
            src={isMenuOpen ? iconCloseMenu : iconHamburger} 
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            className="h-4 w-4 brightness-0 invert"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-6 pb-6">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 max-w-3xl mx-auto overflow-hidden">
            <nav className="flex flex-col divide-y divide-gray-100 text-center">
              <a 
                href="#about" 
                className="py-4 font-semibold text-black hover:text-moderate-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#discover" 
                className="py-4 font-semibold text-black hover:text-moderate-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Discover
              </a>
              <a 
                href="#get-started" 
                className="py-4 font-semibold text-black hover:text-moderate-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

