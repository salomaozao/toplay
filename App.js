import React from "react"
import { Text, Provider } from "react-native-paper"
import { View } from "react-native"

import Control from "./pages/control/index"
import ProductView from "./pages/productExibition"
import Nav from "./pages/generalComponents/navigation"
import styles from "./styles/styles"

import Settime from "./pages/productExibition/components/setTime"
export default function App() {
	return (
		<Provider>
			<Nav scenes={[<Control />, <ProductView />, <Settime />]} />
		</Provider>
	)
}
