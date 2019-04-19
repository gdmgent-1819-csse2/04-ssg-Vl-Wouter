import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import DocHeader from '../doc/header'

import "./doc.css"
import SideBar from '../sidebar';

const DocLayout = ({ children }) => (
	<StaticQuery 
		query={graphql`
			query DocTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		
		render={data => (
			<>
				<DocHeader siteTitle={data.site.siteMetadata.title} />
				<main className='docs-container'>
					<div className='docs-sidebar'>
						<SideBar />
					</div>
					<div className='docs-content'>
						{ children }
					</div>
				</main>
			</>
		)}
		/>
)

DocLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default DocLayout