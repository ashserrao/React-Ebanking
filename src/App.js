import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UserProfilePage from './admin/UserProfilePage';
import LoginPage from './login/login';
import RegistrationForm from './registration/registration';
import Home from './home/home';
import Header from './static/header';
import Footer from './static/footer';
import PrivateRoutes from './PrivateRoutes';
import Accounts from './admin/Accounts';
function App() {
  return (
    <Router>
    <div className="container">
      
        <Header className="header" />

        <div className='content'>
        
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            
               <Route element={<PrivateRoutes />}>
                   <Route path="/accounts" element={<Accounts />} />
                   

               </Route> 
          </Routes>
        

        </div>
        <Footer className="footer" />

      
    </div>

    </Router>


  );
}

export default App;
