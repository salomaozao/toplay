import * as React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"

import Navigation from "../generalComponents/navigation"
import SearchBar from "../generalComponents/searchBar"
import Card from "../mainPage/components/card"

const Control = () => {
	return (
		<View>
			<View>
				<View style={{ margin: 25 }}>
					<Text> NAVIGATION: </Text>
					<Navigation></Navigation>
				</View>

				<View style={{ margin: 25 }}>
					<SearchBar></SearchBar>
				</View>

				<View style={{ margin: 25 }}>
					<Card></Card>
				</View>
			</View>
		</View>
	)
}

export default Control
