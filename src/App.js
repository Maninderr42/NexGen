import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,useParams } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Service from './Components/Service';
import content from './content/Service';
import ServiceCard from './Components/ServiceCard';
import About from './Components/About';
import Blog from './Components/Blog';
import Careers from './Components/Careers';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';
import ConsultForm from './Components/ConsultForm';


function App() {
  return (
    <Router>
     <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ServiceCard" element={<ServiceCard />} />
        <Route path="/consultForm" element={<ConsultForm />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path="/service/:type" element={<ServiceWrapper />} />
      </Routes>
      <Footer />
    </Router>

  );
}
const ServiceWrapper = () => {
  const { type } = useParams();
  const serviceData = content[type];

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <Service service={serviceData} />;
};

export default App;
