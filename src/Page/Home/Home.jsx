import React, { useState } from 'react';
import Hero from '../../Component/Hero/Hero';
import HomeCard from '../../Component/HomeCard/HomeCard';

const Home = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <div>
            <Hero setSearchText={setSearchText}/>
            <HomeCard searchText={searchText}/>
        </div>
    );
};

export default Home;