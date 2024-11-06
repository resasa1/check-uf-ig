
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../component/Navbar';
import ListUser from '../component/ListUser';
import Footer from '../component/Footer';
import Guide from '../component/Guide';
// import { Switch, Router, Link } from 'react-router-dom';

function App() {
    return (
        <div className='container'>
            <Navbar />
            <div className='body__content'>
            <ListUser />
            <Guide />
            </div>
            
       
            <Footer />
        
        </div>
    );
}

export default App;