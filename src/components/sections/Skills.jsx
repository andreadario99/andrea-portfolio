import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const Robotics = ["ROS2", "Docker", "PX4", "Git", "NVIDIA Jetson", "VXWorks", "LabVIEW", "MATLAB", "Simulink", "20Sim", "CI/CD"];
  const RoboticsSimulation = ["Gazebo", "AirSim", "Unreal Engine"];
  const RoboticsMiddleware = ["DDS", "Zenoh", "ConnextDDS", "FastDDS", "CycloneDDS","Wireshark"];
  const ArtificialIntelligence = ["Sklearn", "TensorFlow", "PyTorch", "Pandas", "OpenCV", "Numpy", "MLP", "LSTM", "Hopfield Network", "CNN", "Deep Boltzmann Machines", "Transformers", "Generative Adversarial Network", "Variational Autoencoder"];
  const ProgrammingLanguages = ["Python", "C", "Bash", "C++/C#", "JavaScript", "HTML/CSS"];
  const GameDevelopment = ["Unreal Engine", "Plotjuggler", "Matplotlib", "Tkinter"];

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6max-w-6xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
            {/* Robotics */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Robotics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Robotics.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Artificial Intelligence</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ArtificialIntelligence.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ProgrammingLanguages.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulation */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Simulation</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {RoboticsSimulation.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Communication & Networking</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {RoboticsMiddleware.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Game Dev */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Game Development & Visualization</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {GameDevelopment.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
