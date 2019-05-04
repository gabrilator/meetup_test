
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark (limit: 5, sort:
        {
          order:DESC,
          fields: [frontmatter___date]
        }
        ) {
          edges {
            node {
              excerpt(pruneLength:80)
              frontmatter {
                slug
                title
                date (formatString: "MMMM DD, YYYY")
              }
            }
          }
    }
  }
`
const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
       <aside>
        <h3>Archive</h3> 
        <ul>
        {allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <h4>{edge.node.frontmatter.title} </h4>
            <p>{edge.node.excerpt} </p>
            <p>{edge.node.frontmatter.date} </p>
            <Link to = {`/posts${edge.node.frontmatter.slug}` }>Read More... </Link>
          </li>
        ))}
        </ul>  

       </aside>
      </>
    )}
  />
)


export default Archive
