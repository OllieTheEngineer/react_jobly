import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/nav/Routing';
// import NavBar from './routes/nav/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar/> */}
      <Routing/>
      </BrowserRouter>
    {/* <CompaniesList/>
    <JobList/> */}
    </div>
  );
}

export default App;
