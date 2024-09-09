import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import {AuthProvider} from '../contexts/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/signup' Component={Signup}/>
            <Route exact path='/login' Component={Login}/>
            <Route exact path='/quiz' Component={Quiz}/>
            <Route exact path='/result' Component={Result}/>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
