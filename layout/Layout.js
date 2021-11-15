import React from 'react';
import Navbar from './Navbar';

export default function Layout({children}) {
    return (
        <div id="app">
            <Navbar/>
            <main id="body">
                {children}
            </main>
        </div>
    )
}
