import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Meditations from "./components/Meditation";
import About from "./components/About";
import HowToMeditate from "./components/HowToMeditate";
import Footer from "./components/Footer";

function App() {
  const home = () => {
    const otherDiv = document.getElementById("welcome");
    window.scrollTo({ top: otherDiv.offsetTop, behavior: "smooth" });
  };
  const howTo = () => {
    const otherDiv = document.getElementById("howTo");
    window.scrollTo({ top: otherDiv.offsetTop, behavior: "smooth" });
  };
  const meditate = () => {
    const otherDiv = document.getElementById("meditations");
    window.scrollTo({ top: otherDiv.offsetTop, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar howToMeditate={howTo} />
      <Welcome meditate={meditate} />
      <HowToMeditate />
      <Meditations />

      <Footer home={home} howToMeditate={howTo} meditate={meditate} />
    </div>
  );
}

export default App;
