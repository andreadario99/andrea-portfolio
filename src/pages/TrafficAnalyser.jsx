import { useNavigate } from "react-router-dom";

export function TrafficAnalyser() {
  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100); // wait for home to render
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">This is traffic analyser project page</h1>

      <button
        onClick={handleGoToProjects}
        className="mt-4 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-cyan-700 hover:brightness-110 transition-all"
      >
        ← Back to Projects
      </button>
    </div>
  );
}
