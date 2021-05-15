import Header from './components/Header'
import Forecast from './components/Forecast'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="currentDay">
        <Forecast id={0} />
      </div>
      <br></br>
      <Forecast id={2} />
      <br></br>
      <div className="brightLine">
        <Forecast id={4} />
      </div>
      <br></br>
      <Forecast id={6} />
      <br></br>
      <div className="brightLine">
        <Forecast id={8} />
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
