import React from "react"
import { graphql } from "gatsby"


const BlogIndex = ({ data}) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
         
          return (
                  <img src={post.frontmatter.image} alt="alt" />
          )
        })}
      </ol>
   
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          image
        }
      }
    }
  }
`