import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import './Navbar.scss'

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

      <StaticQuery
        query={graphql`
          query {
            file(extension: {eq: "pdf"}, name: {eq: "cv-15-03-2020"}) {
              publicURL
            }
          }
        `}
        render={data => (
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
                    to="/#selected-work"
                    activeClassName="active">
                      Portfolio
                  </Link>
                  <a 
                    href={data.file.publicURL}
                    download
                    target="_blank"
                    rel="noopener noreferrer">
                      CV
                  </a>
                  <Link
                    to="/#get-in-touch-hero"
                    activeClassName="active">
                      Get in touch
                  </Link>
                </div>
              </nav>
            </div>
          </header>   
        )}
      />
    )
  }
}

export default Navbar;