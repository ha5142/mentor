import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import { HeroSectionOne } from './Components/HeroSection';
import App from './App';

// import UserForm from './Components/UserForm'

// import {CardSpotlightDemo} from './Components/Card'
// import {BackgroundBeamsDemo} from './Components/Back'
// import {NavbarDemo} from './Components/Nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    </StrictMode>,
    
    

    // {/* <CardSpotlightDemo /> */}
    
    // {/* <BackgroundBeamsDemo /> */}
  
)
