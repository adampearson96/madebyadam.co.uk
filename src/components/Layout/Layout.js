import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../SiteMetadata';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../scss/global.scss';

const Layout = ({ children }) => {

  const { title, description, image } = useSiteMetadata();

  return (
    <div className="site-container">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="/" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;