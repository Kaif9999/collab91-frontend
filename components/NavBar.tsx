export default function NavBar() {
  return (
    <header className="w-full bg-white px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <img src="/collab.svg" alt="Logo" className="w-55 h-15" />

    
      <nav className="flex items-center gap-8">
        <a href="#" className="text-[#00406E] font-normal hover:font-semibold transition-all">
          Home
        </a>
        <a href="#" className="text-[#00406E] font-normal hover:font-semibold transition-all">
          Services
        </a>
        <a href="#" className="text-[#00406E] font-normal hover:font-semibold transition-all">
          Products
        </a>
        <a href="#" className="text-[#00406E] font-normal hover:font-semibold transition-all">
          About
        </a>
        <a href="#" className="text-[#00406E] font-normal hover:font-semibold transition-all">
          Contact us
        </a>
      </nav>
    </header>
  );
}

