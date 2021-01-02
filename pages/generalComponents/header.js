import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "../../styles/styles"

const Header = () => (
	<View style={[styles.bgPrimary, styles.textCenter]}>
		<View
			style={[
				styles.borderBottom,
				styles.borderDark,
				styles.textCenter,
				styles.centerX,
				{ marginTop: 35 },
			]}
		>
			<Text>Toplay</Text>
		</View>
	</View>
)

export default Header
