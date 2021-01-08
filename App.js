import React from "react"
import { DefaultTheme, Text, Provider, Colors } from "react-native-paper"

import Control from "./pages/control/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc/index"
import Nav from "./pages/generalComponents/navigation"

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "#3498db",
		accent: "#f1c40f",
		// background: Colors.blueA100,
		surface: Colors.grey100,
		text: Colors.grey900,
	},
}

export default function App() {
	return (
		<Provider theme={theme}>
			<Nav scenes={[<Acc />, <ProductView />, <Control />]} />
		</Provider>
	)
}
