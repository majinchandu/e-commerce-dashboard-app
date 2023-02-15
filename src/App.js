// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Updateproduct from './components/UpdateProduct';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          
          <Route element={<PrivateComponent />}>

            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<Addproduct />} />
            <Route path="/update/:id" element={<Updateproduct />} />
            <Route path="/logout" element={<h1> logout   Component</h1>} />
            <Route path="/profile" element={<h1>profile  Component</h1>} />
          
          </Route>
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
