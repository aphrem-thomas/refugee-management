import React from 'react';
import SignIn from './refugeeSignIn.jsx';
import Navbar from './Navbar.jsx';
class RefugeeHome extends React.Component{
    render(){
        return(
            <div className='h-100'>
                <Navbar/>
                <SignIn/>
                <h1></h1>
            </div>
        );
    }
}

export default RefugeeHome;