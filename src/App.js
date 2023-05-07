import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/nav/Routing";
import UserContext from "./auth_forms/UserContext";

// import NavBar from './routes/nav/NavBar';

function App() {
  const localStorageToken = localStorage.getItem("session");
  const localStorageUsername = localStorage.getItem("username");
  const [token, setToken] = useState(localStorageToken);
  const [username, setUserName] = useState(localStorageUsername);
  return (
    <UserContext.Provider value={{ token, setToken, username, setUserName }}>
      <div className="App">
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
