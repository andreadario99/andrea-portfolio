import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {OptimalControl} from "./pages/OptimalControl";
import {NeuralNetworks} from "./pages/NeuralNetworks";
import {Sanitization} from "./pages/Sanitization";
import {EmbeddedProgramming} from "./pages/EmbeddedProgramming";
import {QualityControl} from "./pages/QualityControl";
import {RMWBenchmark} from "./pages/RMWBenchmark";
import {TrafficAnalyser} from "./pages/TrafficAnalyser";


function App() {
  
return(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/optimal_control" element={<OptimalControl />} />
      <Route path="/embedded_programming" element={<EmbeddedProgramming />} />
      <Route path="/neural_networks" element={<NeuralNetworks />} />
      <Route path="/quality_control" element={<QualityControl />} />
      <Route path="/sanitization" element={<Sanitization />} />
      <Route path="/rmw_benchmark" element={<RMWBenchmark />} />
      <Route path="/traffic_analyser" element={<TrafficAnalyser />} />
    </Routes>
  </Router>
)

}

export default App;
