import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const SideBar = () => (
	<StaticQuery
			query={graphql`
				query DocsTitleQuery {
					allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___chapter] }) {
						edges {
							node {
								id
								frontmatter {
									path
									title
									chapter
									chapter_title
								}
							}
						}
					}
				}
			`}

			render={ data => {
				const { allMarkdownRemark } = data
				const { edges } = allMarkdownRemark
				return (
					<>
						{edges.map((element, i) => <Link key={i} className={element.node.frontmatter.title === element.node.frontmatter.chapter_title ? "sideLink chapterLink" : "sideLink"}  to={element.node.frontmatter.path}>{element.node.frontmatter.title}</Link>)}
					</>
				)
				}
			}
		/>
)
	// console.log(edges)
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

//   return (
		
// 			<div>{Posts}</div>
// 	)
// }

export default SideBar
