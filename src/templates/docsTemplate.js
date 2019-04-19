import React from 'react'
import { graphql, Link } from "gatsby"
import DocLayout from '../components/layout/doc';

export default function Template({
	data,
}) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	
	return (
		<DocLayout>
			<h1 className='docPostTitle'>{ frontmatter.title }</h1>
			<Link className='docPostSubTitle' to={frontmatter.chapter_path} >{frontmatter.chapter_title}</Link>
			<div className="doc-post-content" dangerouslySetInnerHTML={{ __html: html }}>
			</div>
		</DocLayout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path }}) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				chapter
				chapter_title
				chapter_path
			}
		}
	}
`