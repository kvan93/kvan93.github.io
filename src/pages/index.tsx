import * as React from "react"
import NavBar from "../components/navbar"
import AboutPage from "./About"
import LandingPage from "./LandingPage"



// markup
const IndexPage = () => {
	return (
		<main className="bg-black">
			<NavBar></NavBar>
			<LandingPage></LandingPage>
			<AboutPage></AboutPage>
		</main>
	)
}

export default IndexPage
