import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


function AppView(props) {
    return (
        <div>
            <Footer {...props} />
            <Header {...props} />
            <Main   {...props} />

        </div>
    );
}

export default AppView;
