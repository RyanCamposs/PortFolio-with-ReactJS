
import './App.css';
import Topo from './componentes/Layout/Topo';
import Home from './componentes/Layout/Home';
import About from './componentes/Layout/About';
import Projetos from './componentes/Layout/Projetos';
import Contato from './componentes/Layout/Contato';
import Footer from './componentes/Layout/Footer';

function App() {
  return (
    <div className="App">
      
          <Topo></Topo>
     

     
          <Home></Home>
      

     
          <About></About>
     

    
          <Projetos></Projetos>
      

      
        <Contato></Contato>
     

        <Footer></Footer>
    </div>

  );
}

export default App;
