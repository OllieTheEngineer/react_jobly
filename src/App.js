import './App.css';
import CompaniesList from './companies/CompaniesList';
import JobList from './Jobs/JobList';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import NavBar from './routes/nav/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes/>
      </BrowserRouter>
    {/* <CompaniesList/>
    <JobList/> */}
    </div>
  );
}

export default App;
