import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ companyInfo }) => {
 
  const displayCompany = (companyInfo) ?
    (
      <header>
        <h1>{companyInfo.companyName}</h1>
        <h3>{companyInfo.companyMotto}</h3>
        <h3 className='text-right'>Since {new Date(companyInfo.companyEst).toLocaleDateString()}</h3>
        <hr />
      </header>
    ) 
    :
    (
      <span>no info</span>
    )

  return (
    <div>
      {displayCompany}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header