import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu after scroll
  };

  const menuItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Contacts", target: "contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {menuItems.map(({ label, target }) => (
        <button
          key={target}
          onClick={() => handleScroll(target)}
          className={`text-gray-300 hover:text-white text-2xl font-medium my-4 transform transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
