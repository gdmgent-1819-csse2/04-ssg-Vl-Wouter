import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import "./home.css"

const HomeLayout = ({ children }) => (
	<StaticQuery 
		query={graphql`
			query HomeTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}

		render={data => (
			<>
				{/* <HomeHeader siteTitle={data.site.siteMetadata.title} /> */}
				<main className='homeContainer'>
					{children}
				</main>
			</>
		)}
	/>
)

HomeLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default HomeLayout