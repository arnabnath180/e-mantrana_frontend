import logo from './logo.svg';
import './App.css';
import AdminLogin from './Admin/Login/Index.js'
import AdminHeader from './Admin/Header/Index.js'
import Protected from './ProtectedRoutes/AdminProtectedRoutes/Index.js'
import AdminDashboard from './Admin/Home/Index.js'
import LogoutHeader from './Admin/LogoutHeader/Index.js'
import DoctorRegister from './Admin/DoctorRegister/Index.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AdminAuthState from './Context/AdminAuthState';
function App() {
  return (
    <div className="App">
      <AdminAuthState>
        <Router>
          <Routes>
            <Route exact path="/admin/login" element={<><AdminHeader/><AdminLogin/></>}></Route>
            <Route exact path="/admin/dashboard" element={<><Protected Component={LogoutHeader}/><Protected Component={AdminDashboard}/></>}></Route>
            <Route exact path="/admin/doctorregister" element={<><Protected Component={LogoutHeader}/><Protected Component={DoctorRegister}/></>}></Route>
          </Routes>
        </Router>
      </AdminAuthState>
    </div>
  );
}

export default App;
