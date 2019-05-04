import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Archive from "../components/archive"
const IndexPage = () => (
  <Layout>
    <h1>Gatsby is Kewlz!</h1>
    <Link to="/page-2/">Go to page 2</Link>
    <Archive/>

  </Layout>
)

export default IndexPage
