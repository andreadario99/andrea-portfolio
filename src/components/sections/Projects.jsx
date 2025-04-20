import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            💻 Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Autonomous House Sanitizer Robot</h3>
              <p className="text-gray-400 mb-4">
                Autonomous robot performing SLAM and sanitizing the house (or the rooms of interest)
                with UV-C light from COVID virus.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ROS2", "Python", "Gazebo"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Optimal Control of a Supersonic Aircraft</h3>
              <p className="text-gray-400 mb-4">
                Design and implementation of an optimal control law for a
                supersonic aircraft with nonlinear drag and lift using LQR and MPC.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Trajectory Generation", "Trajectory Tracking"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">RMW Benchmarking Tool</h3>
              <p className="text-gray-400 mb-4">
                Tool to benchmark the performance of different ROS middlewares in ROS2 under different
                working scenarios with synthetic and real traffic. Interactive GUI to setup the tests.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ROS2", "Python", "Bash", "Tkinter", "DDS", "Zenoh", "Matplotlib"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Quality Control of Bottle Caps</h3>
              <p className="text-gray-400 mb-4">
                Software for quality control of bottle caps using computer vision 
                to detect defects and classify them.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-time Traffic Analyser</h3>
              <p className="text-gray-400 mb-4">
                ROS2 package performing traffic analysis topic-wise, 
                logging performance metrics and triggering warnings on latency degradation. 
                Deployed on a real drone (NVIDIA Jetson) through Docker.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ROS2", "C++", "DDS", "Docker", "Jetson"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Analysys and Tuning of Neural Networks</h3>
              <p className="text-gray-400 mb-4">
                In-depth analysis and tuning of different neural networks for 
                Linear regression, Image reconstruction, Prediction, Image Generation. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "PyTorch", "MLP", "LSTM", "Hopfield Network", "CNN", "Deep Boltzmann Machines", "Transformers", "Generative Adversarial Network", "Variational Autoencoder"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">STM32F4 embedded programming</h3>
              <p className="text-gray-400 mb-4">
                Embedded programming of an STM32F4 microcontroller reading accelerometer data, 
                filtering them and blinking the LED based on the orientation of the board. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "STM32CubeIde", "Filtering"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
          <div className="mt-16 flex flex-col items-center animate-[bounce_2.5s_infinite]">
            <span className="text-lg mb-3 font-medium bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
              Contacts
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
