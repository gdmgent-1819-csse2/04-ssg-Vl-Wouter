import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const DocHeader = ({ siteTitle }) => (
	<header className='docheader'>
		<h3 className='docTitle'><Link to='/'>{siteTitle}</Link></h3>
		<div className='docHeaderLinks'>
			<Link className='docHeaderLink' to='/'>Home</Link>
			<Link className='docHeaderLink' to='/docs/classes'>Docs</Link>
			<a className='docHeaderLink' href='https://github.com/gdmgent-1819-csse2/01-webgl2-Vl-Wouter'>Github</a>
		</div>
	</header>
)

DocHeader.propTypes = {
	siteTitle: PropTypes.string,
}

DocHeader.defaultProps = {
	siteTitle: `WebGL2 - CSSE II`
}

export default DocHeader