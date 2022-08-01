import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <main className=" min-h-screen bg-neutral">
      <div className=" w-[90%] m-auto ">
        <Header />
        <Intro />
        <Work />
        <About />
        <Portfolio />
      </div>
    </main>
  );
}

export default App;
