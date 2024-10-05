import { useState } from 'react';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Features from './components/features';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <Features /> 
        <Products/>
<Testimonial/>

        <ContactUs />
        
       
      </div>
    </div>
  );
}

export default App;