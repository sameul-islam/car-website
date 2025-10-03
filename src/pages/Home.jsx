import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch'
import LoanBannerWrapper from '../LoanBanner/LoanBannerWrapper'
import AdvancedCarCategories from '../AdvancedCarCategories/AdvancedCarCategories'
import UpcomingCars from '../components/UpComingCars/UpcomingCars'
import LogoCarouselParent from '../components/LogoCarouselParent/LogoCarouselParent'
import AdvancedVideo from '../components/AdvancedVideo'
import UsedCar from '../components/UsedCar/UsedCar'
import PopularCars from '../components/PopularCars/PopularCars'
import BangladeshMap from '../components/Bangladesh/BangladeshMap'
import Newsletter from '../components/NewsLetter/NewsLetter'





const Home = () => {
  return (
    <div>
        <Hero/>
        <LoanBannerWrapper/>
        <AdvancedSearch/>
        <AdvancedCarCategories/>
        <LogoCarouselParent/>
        <PopularCars/>
        <UsedCar/>
        <AdvancedVideo/>
        {/* <UpcomingCars/> */}
        <BangladeshMap/>
        <Newsletter/>
    </div>
  )
}

export default Home
