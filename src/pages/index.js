import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import HomeLayout from '../components/layout/home'
import SEO from '../components/seo'

const IndexPage = () => (
	<StaticQuery 
		query={graphql`
			query HomeDescQuery {
				site {
					siteMetadata {
						description
						author
					}
				}
			}
		`}

		render={data => (
			<HomeLayout>
				<SEO title='Home' keywords={[`gatsby`, `react`, `docs`]} />
				<h1>{data.site.siteMetadata.description}</h1>
				<div className="buttonContainer">
					<Link className='btn btn-primary' to='/docs/classes'>Docs</Link>
					<a href="https://github.com/gdmgent-1819-csse2/01-webgl2-Vl-Wouter" className='btn btn-outline-primary'>Github</a>
				</div>

				<div className='homeFooter'>
					<p>&copy; {new Date().getFullYear()} - {data.site.siteMetadata.author} @ Artevelde University College Ghent</p>
				</div>
			</HomeLayout>
		)}
	/>
)

export default IndexPage