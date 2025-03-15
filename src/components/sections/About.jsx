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
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate software engineer in the automation field with expertise in ROS2 and DDS/Zenoh. When 
              I'm not coding, I enjoy working out in the gym or play team sports (Football, Padel). I listen to podcasts 
              while cooking dinner and a good book helps me unwind before sleeping. I'm always looking for new
              challenges and opportunities to learn and grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Coding Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {codingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer Intern @ Leonardo S.p.A.(Nov 2024 - Present){" "}
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
                    Automation Engineer Intern @ MAKRO Labelling S.R.L. (Sep 2017 - Nov 2017){" "}
                  </h4>
                  <li>
                    Developed the mathematical model of the labelling machine’s carousel using Simulink
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
