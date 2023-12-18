
import { Copyright } from '@mui/icons-material';
import './App.css';
import DrawerAppBar from './Pages/Home';
import SignInSide from './Pages/SignIn';
 import NavBar from './NavBar';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Pages/SingUp';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<SignUp />} />
          <Route path="contact" element={<SignInSide />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);