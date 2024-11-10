import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto py-6'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;