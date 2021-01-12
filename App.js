import React, { Component } from "react"
import { DefaultTheme, Text, Provider, Colors } from "react-native-paper"

import Nav from "./pages/generalComponents/navigation"

import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc/index"

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.blue900,
		accent: "#f1c40f",
		// background: Colors.blueA100,
		surface: Colors.grey100,
		text: Colors.grey700,
	},
}

export default class App extends Component {
	// componentDidMount() {
	// 	Orientation.getInitialOrientation()
	// }

	render() {
		return (
			<Provider theme={theme}>
				<Nav scenes={[<Agendamentos />, <ProductView />, <Cadastro />]} />
			</Provider>
		)
	}
}
