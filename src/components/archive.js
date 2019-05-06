import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25,17,34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

// TODO: 
// 1. Use StaticQuery to query MD information
// 2. Display the MD information in JSX 
// 3. Add link to Each blog post


const POST_ARCHIVE_QUERY =  graphql`
query BlogInfo {
allMarkdownRemark (limit: 5, sort:{
  fields:[frontmatter___date],
  order:DESC
}) {
 edges {
   node {
     excerpt(pruneLength:150)
     frontmatter {
       title
       date (formatString:"MMMM DD, YYYY")
       slug
     }
   }
 }
}
}
` 
const Archive = () => (
 <StaticQuery
 query = {POST_ARCHIVE_QUERY}
 render= {data=>(
   <div>
   
  </div>
 )}
 
 />
)
export default Archive
