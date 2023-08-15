import Header from "./components/Header";
import Clients from "./pages/Clients";
import Services from "./pages/Services";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Header />

      <Services />
      <Clients />
    </div>
  );
}

export default App;
