import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './login'
import Home from './home'
import About from './about'

// CHANGE HOME TO CLASS, Moved to Home.js

// CHANGE ABOUT TO CLASS, Moved to About.js

// LOGIN moved to Login.js

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;







// OLD STYLE
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );


// NEW HOTNESS

// PREVIOUS, EXPLICIT FORM of ReactDOM
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// CHANGED: when About, Login, Home migrated / became classes, we changed
// <Route exact path="/" render...> to
// <Route exact path="/" component...>

// Or, to include the Path Data in One Line:
// <Route path="/" render={() => <h1>Home!</h1>} />
