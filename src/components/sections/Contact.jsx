import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center px-6">
        <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          📬 Contact
        </h2>
          <p className="text-gray-300 text-lg mb-4">
            📧 Personal Email: <a href="mailto:andreadario_@hotmail.com" className="text-blue-400 hover:underline">andreadario_@hotmail.com</a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            🎓 University Email: <a href="mailto:andrea.dario@studio.unibo.it" className="text-blue-400 hover:underline">andrea.dario@studio.unibo.it</a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📞 Mobile Phone: <a href="tel:+39 3662641148" className="text-blue-400 hover:underline">+39 3662641148</a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            💼 LinkedIn: <a href="https://www.linkedin.com/in/andrea-dario1999/" target="_blank" className="text-blue-400 hover:underline">https://www.linkedin.com/in/andrea-dario1999/</a>
          </p>
          <p className="text-gray-300 text-lg">
            🌍 Location: Mantova, Italy
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};