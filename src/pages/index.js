import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import 'reset-css'

function Intro () {
  return <p className="intro">This is a small web shop, we sell things we make for ourselves. You can buy what we have MADE, or you can show interest by funding what we're MAKING.</p>
}
const IndexPage = () => {

	return (
		<Layout>
			<Intro />
			<SEO title="Home" />
		</Layout>
	  )
}

export default IndexPage
