import * as React from "react"


// markup
const NavBar = (props: any) => {
	return (
		<nav className="w-full  h-auto bg-opacity top-0 z-50 fixed text-white font-RobotoSlab">
			<div className="flex flex-col ">
				<div className="flex flex-row py-5 gap-x-2 justify-center">
					<a className="block text-2xl p-5">ABOUT</a>
					<a className="block text-2xl p-5">PROJECTS</a>
					<a className="block text-2xl p-5">CONTACT</a>
				</div>
				<div></div>
			</div>
		</nav>
	)
}

export default NavBar