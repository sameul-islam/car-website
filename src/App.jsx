import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';
import LoanApplication from './pages/LoanApplication';
import CarDetailsPage from './components/CarDetails/CarDetailsPage';
import Footer from './components/Footer/Footer';
import AdminProductForm from './components/AdminProductFrom/AdminProductForm';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import MissionVision from './pages/MissionVision';
import Testimonials from './pages/Testimonials';
import PartnersPage from './pages/PartnersPage';
import Blog from './pages/Blog';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BuyPage from './pages/BuyPage';
import ToyotaPage from './pages/ToyotaPage';
import BMWPage from './pages/BmwPage';
import LamborghiniPage from './pages/LamborghiniPage';
import MarcedesPage from './pages/MarcedesPage';
import IsuzuPage from './pages/IsuzuPage';
import TeslaPage from './pages/TeslaPage';
import AudiPage from './pages/AudiPage';
import PorschePage from './pages/PorschePage';
import RivianPage from './pages/RivianPage';
import LucidPage from './pages/LucidPage';
import FordPage from './pages/FordPage';
import NissanPage from './pages/NissanPage';
import HyundaiPage from './pages/HyundaiPage';
import KiaPage from './pages/KiaPage';
import NewCarsPage from './pages/NewCar';
import OldCar from './pages/OldCar';
import ElectricCarsPage from './pages/ElectricCar';
import SuvCarsPage from './pages/SuvCar';
import LuxuryCarsPage from './pages/LuxaryCar';
import AllProductsPage from './pages/AllProductsPage';
import { SearchProvider } from './components/Navbar/SearchContext';
import ServicesPage from './pages/ServicesPage';






const App = () => {
  return (
    <SearchProvider>
    <LanguageProvider>
      <Router>
        <div className='bg-gray-50'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/loanform' element={ <LoanApplication/>} />
            <Route path='/cars/:id' element={<CarDetailsPage />} /> 
            <Route path='/admin' element={ <AdminProductForm/>}/>
            <Route path='/about-us' element={ <AboutUs/>} />
            <Route path='/our-team' element={ <OurTeam/>} />
            <Route path='/mission-vision' element={ <MissionVision/>} />
            <Route path='/testimonials' element={ <Testimonials/>} />
            <Route path='/partners' element={ <PartnersPage/>} />
            <Route path='/blog' element={<Blog/> } />
            <Route path='/products' element={<ProductPage/>} />
            <Route path='/product/:id' element={<ProductDetailPage/>} />
            <Route path='/buy' element={<BuyPage/>}/>
            <Route path='/buy/:id' element={<BuyPage/>}/>
            <Route path='/toyota' element={<ToyotaPage/>} />
            <Route path='/bmw' element={<BMWPage/>} />
            <Route path='/lamborghini' element={<LamborghiniPage/>}/>
            <Route path='/marcedes' element={<MarcedesPage/>} />
            <Route path='/isuzu' element={<IsuzuPage/>} />
            <Route path='/tesla' element={<TeslaPage/>} />
            <Route path='/audi' element={<AudiPage/>} />
            <Route path='/porsche' element={<PorschePage/>} />
            <Route path='/rivian' element={<RivianPage/>} />
            <Route path='/lucid' element={<LucidPage/>} />
            <Route path='/ford' element={<FordPage/>} />
            <Route path='/nissan' element={<NissanPage/>} />
            <Route path='/hyundai' element={<HyundaiPage/>} />
            <Route path='/kia' element={<KiaPage/>} />
            <Route path='/newcar' element={<NewCarsPage/>} />
            <Route path='/oldcar' element={<OldCar/>} />
            <Route path='/electriccar' element={<ElectricCarsPage/>} />
            <Route path='/suvcar' element={<SuvCarsPage/>} />
            <Route path='/luxarycar' element={<LuxuryCarsPage/>} />
            <Route path='/allproducts' element={<AllProductsPage/>}/>
            <Route path='/services' element={<ServicesPage/>}/>

          </Routes>
          <Footer/>
        </div>
      </Router>
    </LanguageProvider>
    </SearchProvider>
  );
}

export default App;










