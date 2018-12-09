import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'

const Layout = ({ children }) => (
    <Site>
        <Helmet
            title = "Anna is Awesome"
            meta={[
                { name: 'description', content: 'Anna\'s personol website, portfolio, blog, whatever she wants it to be'},
                { name: 'keywords', content: 'resume, blog, portfolio, Anna Nester'},
            ]}
            scripts={[
                { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
            ]}
            link={[
                {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
            ]}
        />
        <Header />
        <Content> 
            {/* {children()} */}
        </Content>
        <Footer />
    </Site>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout