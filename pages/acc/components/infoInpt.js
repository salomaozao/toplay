import React, { useState } from "react"
import { View, Dimensions, ScrollView } from "react-native"
import { TextInput, Button } from "react-native-paper"
import styles from "../../../styles/styles"

const InfoInpt = ({ label, value, pw = false }) => {
	const [isPwHidden, setPwHidden] = useState(false)

	return (
		<View style={pw ? styles.row : {}}>
			<ScrollView>
				<TextInput
					style={[
						styles.mx4,
						styles.my2,
						styles.textCenter,
						{
							alignSelf: "stretch",
							width: pw
								? Dimensions.get("window").width * 0.8
								: null,
						},
					]}
					theme={{
						colors: { primary: "green" },
					}}
					mode="outlined"
					label={label}
					value={value}
					secureTextEntry={pw ? isPwHidden : false}
					scrollEnabled
				/>
			</ScrollView>

			{pw ? (
				<View
					style={[
						styles.center,
						{
							position: "relative",
							right: 10,
							top: 5,
							width: Dimensions.get("window").height * 0.05,
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
		</View>
	)
}

export default InfoInpt
