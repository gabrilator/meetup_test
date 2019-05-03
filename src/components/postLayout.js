import React, { Component } from 'react';
import Layout from './layout';
import {graphql} from 'gatsby';
class postLayout extends Component {
    
    render() {
        const {markdownRemark}= this.props.data;

        return (
            <Layout>
                <h1> {markdownRemark.frontmatter.title} </h1>
                <div dangerouslySetInnerHTML = { {
                    
        __html: markdownRemark.html }}/>
            </Layout>
        );
    }
}

export default postLayout;


// if we want a query on a page, we have to do a bit of gatsby magic!!! 

// WE HAVE TO CREATE THIS QUERY AS A NAMED EXPORT QUERY: 
export const query = graphql `
    query PostQuery ($slug: String!){
        markdownRemark(frontmatter: {
        slug: {
            eq: $slug
        }
        }) {
        html
        frontmatter{
            title
            date
        }
        }
    } 
    `;