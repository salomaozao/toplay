import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"

import Control from "./pages/control/index"
import ProductView from "./pages/productExibition"
import Nav from "./pages/generalComponents/navigation"

export default function App() {
	return (
		<Nav scenes={[<ProductView />, <Control />, <Text>haha</Text>]}></Nav>
	)
}
