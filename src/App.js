import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
