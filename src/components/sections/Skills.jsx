import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const Robotics = ["ROS2", "Docker", "PX4", "Git", "NVIDIA Jetson", "VXWorks", "LabVIEW", "MATLAB", "Simulink", "20Sim", "CI/CD"];
  const RoboticsSimulation = ["Gazebo", "AirSim", "Unreal Engine"];
  const RoboticsMiddleware = ["DDS", "Zenoh", "ConnextDDS", "FastDDS", "CycloneDDS","Wireshark"];
  const ArtificialIntelligence = ["Sklearn", "TensorFlow", "PyTorch", "Pandas", "OpenCV", "Numpy", "MLP", "LSTM", "Hopfield Network", "CNN", "Deep Boltzmann Machines", "Transformers", "Generative Adversarial Network", "Variational Autoencoder"];
  const ProgrammingLanguages = ["Python", "C", "Bash", "C++/C#", "JavaScript", "HTML/CSS"];
  const Visualization = ["Plotjuggler", "Matplotlib", "Tkinter"];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            🛠️ Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Robotics */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center">Robotics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Robotics.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center">Artificial Intelligence</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ArtificialIntelligence.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ProgrammingLanguages.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulation */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center">Simulation</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {RoboticsSimulation.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center">Communication & Networking</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {RoboticsMiddleware.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4 text-center">Visualization</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Visualization.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center animate-[bounce_2.5s_infinite]">
            <span className="text-lg mb-3 font-medium bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
              Projects
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
