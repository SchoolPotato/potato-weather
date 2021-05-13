import Header from './components/Header'
import Forecast from './components/Forecast'

function App() {
  return (
    <div className="App">
      <Header />
      <Forecast id={0} />
    </div>
  );
}

export default App;
