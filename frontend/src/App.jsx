import './styles/App.css'
import ProfilePic from './components/Profile';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
// import ModernIreland from './pages/ModernIreland';
import PostsPage from './pages/PostsPage';
import CelticGods from './pages/CelticGods';
import Folklore from './pages/Folklore';
import Myths from './pages/Myths';
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <div className='bg-dark text-light'>
        <BrowserRouter>
        <Layout>
          <Routes>
         {/* Default route to login */}
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/post" element={<ProtectedRoute> <PostsPage /> </ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute> <ProfilePic /> </ProtectedRoute>} />
              {/* <Route path="/thread" element={<ProtectedRoute> <Thread /> </ProtectedRoute>} /> */}
        
            {/* Other routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myths" element={<Myths />} />
            <Route path="/folklore" element={<Folklore />} />
            {/* <Route path="/modireland" element={<ModernIreland />} /> */}
            <Route path="/celticgods" element={<CelticGods />} />
            <Route path="/contact" element={<Contact /> } />
            <Route path="*" element={<NotFound />} />
            </Routes>
            </Layout>
        </BrowserRouter>
          </div>
    </>
  )
}

export default App
