import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const technicalSkills = [
    "ROS2",
    "DDS",
    "Zenoh",
    "Wireshark",
    "Git",
    "Docker",
    "Jetson",
    "CI/CD",
  ];

  const codingLanguages = ["C++", "Python", "C"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            👨‍💼 About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <p className="text-gray-300 mb-6">
              Passionate software engineer in the automation field with expertise in ROS2 and DDS/Zenoh. When 
              I'm not coding, I enjoy working out in the gym or play team sports (Football, Padel). I listen to podcasts 
              while cooking dinner and a good book helps me unwind before sleeping. I'm always looking for new
              challenges and opportunities to learn and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <h4>
                  <strong> M.S. in Automation Engineering </strong> - University of Bologna
                  (2022-Jul 2025)
                </h4>
                <h4>
                  <strong> M.S. Exchange Student </strong> - Katholieke Universiteit Leuven
                  (2024)
                </h4>
                <h4>
                  <strong> B.S. in Automation Engineering </strong> - University of Bologna
                  (2018-2022)
                </h4>
                <li>
                  Relevant Coursework: Autonomous and Mobile Robotics, Image Processing and Computer Vision, Optimal Control,
                   Artificial Neural Networks and Deep Learning...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer | AizoOn @ Leonardo S.p.A.<br />(Sep 2025 - Present){" "}
                  </h4>
                  <li>
                    Working as software engineer on an international aircraft program
                  </li>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer Intern @ Leonardo S.p.A.<br />(Nov 2024 - May 2025){" "}
                  </h4>
                  <li>
                    Developed a benchmarking tool for different RMW performance comparison
                  </li>
                  <li>
                    Created a ROS2 package for real-time traffic analysis
                  </li>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Automation Engineer Intern @ MAKRO Labelling S.R.L.<br />(Sep 2017 - Nov 2017){" "}
                  </h4>
                  <li>
                    Developed the mathematical model of the labelling machine’s carousel using Simulink
                  </li>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 mt-8 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>English Level C1</strong> – IELTS Official (2022)
              </li>
            </ul>
          </div>
          <div className="mt-16 flex flex-col items-center animate-[bounce_2.5s_infinite]">
            <span className="text-lg mb-3 font-medium bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
              Skills
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
