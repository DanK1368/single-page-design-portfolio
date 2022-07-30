import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";

function App() {
  return (
    <main className=" min-h-screen bg-neutral">
      <div className=" w-[90%] m-auto ">
        <Header />
        <Intro />
        <Work />
      </div>
    </main>
  );
}

export default App;
