import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';

const MainLayout = (props) =>
    <div className='main-layout'>
      <header>
        <h1><Link to='/'>Voting tutorial</Link></h1>
        <LoginButtons />
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      {props.children}
    </div>

export default MainLayout;
