import Header from "./components/Header";
import Clients from "./pages/Clients";
import Hiring from "./pages/Hiring";
import Services from "./pages/Services";
import Sourcing from "./pages/Sourcing";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Header />

      <Services />
      <Clients />
      <Hiring />
      <Sourcing />
    </div>
  );
}

export default App;
