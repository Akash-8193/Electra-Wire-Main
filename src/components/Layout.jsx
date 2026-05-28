import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { useGlobalAnimations } from './useGlobalAnimations';

const Layout = ({ children }) => {
    const rootRef = useRef(null);
    const location = useLocation();

    useGlobalAnimations(rootRef);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (rootRef.current) {
            rootRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [location.pathname]);

    return (
        <div ref={rootRef} className="website-container" data-theme-scope="elegant-serif" style={{ containerName: 'root', containerType: 'inline-size' }}>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
