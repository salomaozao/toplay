import React, { useState } from "react"
import { View, Dimensions, ScrollView } from "react-native"
import { TextInput, Button } from "react-native-paper"
import styles from "../../../styles/styles"

const InfoInpt = ({ label, value, pw = false, icon = null }) => {
	const [isPwHidden, setPwHidden] = useState(false)

	return (
		<View style={pw || icon !== null ? styles.row : {}}>
			<TextInput
				style={[
					styles.mx4,
					styles.my2,
					styles.textCenter,
					{
						alignSelf: "stretch",
						width:
							pw || icon !== null
								? Dimensions.get("window").width * 0.8
								: null,
					},
				]}
				theme={{
					colors: { primary: "green", background: "#cccccc" },
				}}
				mode="outlined"
				label={label}
				value={value}
				secureTextEntry={pw ? isPwHidden : false}
				scrollEnabled
			/>

			{pw ? (
				<View
					style={[
						styles.center,
						{
							position: "relative",
							right: -5,
							top: 5,
							width: Dimensions.get("window").width * 0.05,
						},
					]}
				>
					<Button
						icon={isPwHidden ? "eye" : "eye-off"}
						onPress={() => setPwHidden(!isPwHidden)}
					></Button>
				</View>
			) : (
				<></>
			)}

			{icon !== null ? (
				<View
					style={[
						styles.center,
						{
							position: "relative",
							right: -5,
							top: 5,
							width: Dimensions.get("window").width * 0.05,
						},
					]}
				>
					<Button icon={icon}></Button>
				</View>
			) : (
				<></>
			)}
		</View>
	)
}

export default InfoInpt
