import React from 'react';

// stateless functional Component

const Navbar=({totalCounters})=>
{
    console.log('Navbar-rendered')
      return  ( 
        <React.Fragment>
       <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
        Navbar{' '}<span className='badge badge-pill badge-secondary'>
        {totalCounters}</span></a>
      </nav> 
      </React.Fragment>
      );
}


 
export default Navbar;