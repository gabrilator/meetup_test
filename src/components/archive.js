
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
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
              excerpt(pruneLength:140)
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

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25,17,34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;
const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <h3>Archive</h3> 
        {allMarkdownRemark.edges.map(edge => (
          <Post key={edge.node.frontmatter.slug}>
          <Link to = {`/posts${edge.node.frontmatter.slug}` }><h4>{edge.node.frontmatter.title} </h4></Link>
            <p>{edge.node.excerpt} </p>
            <p>{edge.node.frontmatter.date} </p>
            <Link to = {`/posts${edge.node.frontmatter.slug}` }>Read More... </Link>
          </Post>
        ))}
         

      </>
    )}
  />
)


export default Archive
