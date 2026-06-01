import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Manufacturing', to: '/about#legacy-excellence' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact Us', to: '/contact' },
];

const getDesktopLinkStyle = (textColor) => ({
  '--typography-font-size': 'var(--typography-body-sm-font-size)',
  '--typography-font-weight': '600',
  '--typography-line-height': 'var(--typography-body-sm-line-height)',
  '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)',
  '--typography-font-family': 'var(--typography-body-sm-font-family)',
  color: textColor,
});

const DesktopHeader = ({ bgColor, shadow, textColor }) => (
  <div className="desktop-header-wrapper">
    <div className="mx-auto mt-4 max-w-[1536px] px-6">
      <div className="relative rounded-3xl p-1 transition-all duration-500">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl backdrop-blur-lg transition-all duration-500"
          style={{ backgroundColor: bgColor, boxShadow: shadow }}
        />

        <div className="relative flex w-full items-center gap-4">
          <Link className="flex shrink-0 items-center" aria-label="Home" to="/">
            <img
              src="/images/electra-wires-logo.png"
              alt="Electra Wires"
              className="header-logo h-10 w-auto max-w-[170px] shrink-0 object-contain"
            />
          </Link>

          <nav className="flex min-w-0 flex-1 items-center gap-x-4">
            {NAV_ITEMS.map((item) => (
              <Link key={item.label} to={item.to} className="shrink-0">
                <span
                  className="whitespace-nowrap py-2 transition-colors duration-500 hover:text-[#c62828] [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                  style={getDesktopLinkStyle(textColor)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <a
            data-slot="button"
            aria-label="Call Us Now"
            href="tel:+12345678900"
            className="btn-text-white nav-icon-button inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-3xl border border-(--bg-color) bg-(--bg-color) px-6 py-3 transition-all outline-none hover:bg-(--hover-bg-color) hover:-translate-y-0.5 hover:shadow-lg"
            style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }}
          >
            <span
              className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
              style={{
                '--typography-font-size': 'var(--typography-body-sm-em-font-size)',
                '--typography-font-weight': '600',
                '--typography-line-height': 'var(--typography-body-sm-em-line-height)',
                '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)',
                '--typography-font-family': 'var(--typography-body-sm-em-font-family)',
                color: '#fff',
              }}
            >
              Call Us Now
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const MobileHeader = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className="mobile-header-wrapper">
    <div className="fixed left-4 top-4 z-[60]">
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        type="button"
        data-slot="button"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        className="nav-icon-button inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white p-3 text-black shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          width="24"
          height="24"
          className="size-6 transition-colors duration-500"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
        isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className={`fixed left-0 top-0 z-[101] flex h-full w-3/4 max-w-sm flex-col p-6 shadow-2xl transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <img src="/images/electra-wires-logo.png" alt="Electra Wires" className="drawer-logo" />

          <button
            onClick={() => setIsMenuOpen(false)}
            type="button"
            className="nav-icon-button p-2 text-gray-500 transition-colors hover:text-red-600"
            aria-label="Close navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="hide-scrollbar flex flex-col gap-4 overflow-y-auto pb-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="border-b border-gray-100 pb-2 text-lg font-semibold text-gray-800 transition-colors hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-gray-200 pt-6">
          <a
            href="tel:+918684800529"
            className="flex items-center justify-center gap-2 rounded-3xl bg-[#c62828] px-6 py-3 text-center font-semibold text-white shadow-md transition-colors hover:bg-[#a00000]"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      // Keep the desktop header visually solid after the hero has scrolled away.
      const threshold = window.innerHeight - 80;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = '#000';
  const bgColor = isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.85)';
  const shadow = isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.05)';

  return (
    <header
      className="w-full relative z-50 transition-all duration-500"
      style={{ position: 'fixed', top: '0', left: '0', width: '100%' }}
    >
      <DesktopHeader bgColor={bgColor} shadow={shadow} textColor={textColor} />
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
