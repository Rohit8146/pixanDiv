import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CursorFollower from "./components/CursorFollower/CursorFollower";
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './Routes/Routes';

function App() {

  return (
    <BrowserRouter>
      <CursorFollower />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
