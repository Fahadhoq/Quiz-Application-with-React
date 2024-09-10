import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute element={Signup} />}/>
            <Route path="/login" element={<PublicRoute element={Login} />}/>
            <Route path="/quiz/:id" element={<PrivateRoute element={Quiz} />} />
            <Route path="/result/:id" element={<PrivateRoute element={Result} />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
