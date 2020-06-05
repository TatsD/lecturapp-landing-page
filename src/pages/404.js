import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGINA NO ENCONTRADA :(</h1>
    <p>Tu has puesto una ruta que no existe.</p>
  </Layout>
)

export default NotFoundPage
