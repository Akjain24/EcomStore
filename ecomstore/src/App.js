import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routing from './router/Routing';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
}

export default App;
 