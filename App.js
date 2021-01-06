import React from "react"
import { Text, Provider } from "react-native-paper"

import Control from "./pages/control/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc"
import Nav from "./pages/generalComponents/navigation"

export default function App() {
	return (
		<Provider>
			<Nav scenes={[<Acc />, <ProductView />, <Control />]} />
		</Provider>
	)
}
