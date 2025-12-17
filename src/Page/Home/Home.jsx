import React, { useState } from 'react';
import Hero from '../../Component/Hero/Hero';
import HomeCard from '../../Component/HomeCard/HomeCard';
import Testimonials from '../../Component/Testimonials/Testimonials';
import Faq from '../../Component/Faq/Faq';
import HomeLast from '../../Component/HomeLast/HomeLast';
import Count from '../../Component/Count/Count';

const Home = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <div>
            <Hero setSearchText={setSearchText}/>
            <HomeCard searchText={searchText}/>
           
                <Testimonials />
           <Faq />
           <div className='relative'>
            <Count />
           </div>
           
           <HomeLast />

        </div>
    );
};

export default Home;