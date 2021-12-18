import { MainLayout } from "./Layout.styled"
import Div100vh from "react-div-100vh"

const Layout = ({children, background}) => {
	return (
		<Div100vh>
			<MainLayout background={background}>
				{children}
			</MainLayout>
		</Div100vh>	
	)
}

export default Layout
