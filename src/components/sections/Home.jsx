import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Andrea Dario
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m an automation engineer in love with coding and autonomous robots. 
            My goal is to write robust and modular packages to improve the 
            autonomy stack of unnmanned vehicles.
          </p>
          <div className="mt-16 flex flex-col items-center animate-[bounce_2.5s_infinite]">
            <span className="text-lg mb-3 font-medium bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
              About Me
            </span>
            <div className="flex flex-col items-center leading-none">
              {[...Array(2)].map((_, i) => (
                <svg
                  key={i}
                  className="w-10 h-10 -mt-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" /> {/* blue-500 */}
                      <stop offset="100%" stopColor="#22D3EE" /> {/* cyan-400 */}
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
