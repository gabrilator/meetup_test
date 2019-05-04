import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import gatsbyLogo from '../images/gatsby-icon.png'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #663399;
  margin-bottom: 1rem;
  img {
    margin-bottom: 0;
  }
`;

const HeaderCont = styled.div`
        margin: 0 auto;
        max-width: 960px;
        padding: 0.8rem ;
`;
const Header = ({ siteTitle }) => (
  <HeaderWrapper  >
    <HeaderCont>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style = {{
            width: '100px' 
          }
          } src= {gatsbyLogo} alt = "gatsby Logo"/>
        </Link>
      </h1>
    </HeaderCont>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
