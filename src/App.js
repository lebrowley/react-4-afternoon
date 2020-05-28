import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>

            <div>WestSide University</div> 

            <div className='link-wrap'>
              <Link to='/'className='links'>Home</Link>
              <Link to='/about' className='links'>About</Link>
            </div>

          </nav>
          {routes}    {/*so this is how our Home and About components are brought into App.js for rendering? the divs className='links' above are just place holders for the links that take you to other views. Since home is the landing page and Home.js renders the class list, it is now appearing on the landing page because {routes} brought this component in...right? */}
        </div>
      </HashRouter>
     
    )
  }
}