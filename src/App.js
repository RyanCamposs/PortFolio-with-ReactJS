
import './App.css';
import Topo from './componentes/Layout/Topo';
import Home from './componentes/Layout/Home';
import About from './componentes/Layout/About';
import Projetos from './componentes/Layout/Projetos';
import Contato from './componentes/Layout/Contato';

function App() {
  return (
    <div className="App">
      <header>
          <Topo></Topo>
      </header>

      <main>
          <Home></Home>
      </main>

      <section>
          <About></About>
      </section>

      <section>
          <Projetos></Projetos>
      </section>

      <section>
          <Contato></Contato>
      </section>
    </div>

  );
}

export default App;
