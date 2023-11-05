import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SubFooter from './SubFooter';

function Layout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
                <SubFooter/>
            </footer>
        </>
    )
}

export default Layout