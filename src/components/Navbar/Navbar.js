import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarActive: false,
      navbarActiveClass: '',
    }
  }

  toggleNavbar = () => {
    this.setState({
      active: !this.state.active
    },
    () => {
      this.state.active ? this.setState({ navBarActiveClass: "navbar-active" }) : this.setState({ navBarActiveClass: "" });
    });
  }

  render() {
    return (
      <header className={this.state.navBarActiveClass}>
        <div className="outer-container">
          <div className="site-logo">
            <Link to="/">mba.</Link>
          </div>
          <button className="mobile-menu" onClick={() => this.toggleNavbar()}>
            <span></span>
            <span></span>
            <span></span>
            Menu
          </button>
          <nav className="site-navigation" role="navigation" aria-label="main-navigation">
            <div className="navigation-items">
              <Link
                to="/"
                activeClassName="active">
                  Biography
              </Link>
              <Link
                to="/portfolio"
                activeClassName="active">
                  Portfolio
              </Link>
              <Link
                to="/cv"
                activeClassName="active">
                  CV
              </Link>
              <Link
                to="/"
                activeClassName="active">
                  Get in touch
              </Link>
            </div>
            <div className="current-position">
              <p>Currently working at <span>Next&amp;Co</span></p>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar;