import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>ahahaha</Text>
			<TextInput></TextInput>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
