import './App.css';
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import AddEditBlog from './pages/AddEditBlog';
import SingleBlog from './pages/SingleBlog';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';



function App() {




  return (
    <>
    
<Routes>
  
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/addblog' element={<ProtectedRoutes><AddEditBlog/></ProtectedRoutes> } />
  <Route path='/editblog/:id' element={<ProtectedRoutes><AddEditBlog/></ProtectedRoutes> } />
  <Route path='/singleblog/:id' element={<SingleBlog/> } />
  <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} />
  
</Routes>

       <Toaster
       position="top-right"
       reverseOrder={false} />




    </>
  );
}

export default App;
