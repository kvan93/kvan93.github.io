import { StaticImage } from "gatsby-plugin-image"
import { FaLinkedin, FaFacebook, FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import * as React from "react"

// markup
const LandingPage = (props: any) => {
	return (
		<div className="w-full h-screen top-0">
			<StaticImage src="../images/esports_LandingPage.jpg" className="object-cover w-full h-full" alt="Background image of rocket league"></StaticImage>
			<div className="w-full h-full bg-black opacity-80 top-0 absolute flex flex-col justify-center items-center">
				<div>
					<p className="text-white text-center text-8xl font-Fredericka animate__fadeInUp animate__animated animate__slow">Kevin Vanaerschodt</p>
					<p className="text-white text-center font-RobotoSlab text-3xl my-3 animate__fadeInUp animate__delay-2s animate__animated animate__slow ">Front-end developer met .NET achtergrond</p>
				</div>
				<div className="flex flex-row my-3 gap-6 animate__fadeInUp animate__animated animate__slow animate__delay-5s">
					<FaFacebook size={'3em'} className="fill-white stroke-red-400 text-lg transition"></FaFacebook>
					<FaLinkedin size={'3em'} className="fill-white stroke-red-400 text-lg"></FaLinkedin>
					<FaGithub size={'3em'} className="fill-white stroke-red-400 text-lg"></FaGithub>
					<FaInstagram size={'3em'} className="fill-white stroke-red-400 text-lg"></FaInstagram>
					<FaTwitter size={'3em'} className="fill-white stroke-red-400 text-lg"></FaTwitter>
					<FaDiscord size={'3em'} className="fill-white stroke-red-400 text-lg"></FaDiscord>
				</div>
			</div>
		</div>

	)
}

export default LandingPage