import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"

import Control from "./pages/control/index"
import ProductView from "./pages/productExibition"

export default function App() {
	return (
		<View>
			<ProductView />
		</View>
	)
}
