import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "../styles/styles";

var show = true;

const formFase = (props) => {
	return (
		<View name="formFase" style={[props.style, styles.bgPrimary]}>
			<View>
				<Text>{props.content[0].title}:</Text>
				<TextInput
					placeholder={props.content[0].placeholder}
					style={{ borderColor: "gray", borderWidth: 1 }}
				/>
			</View>

			<View>
				<Text>{props.content[1].title}:</Text>
				<TextInput
					placeholder={props.content[1].placeholder}
					style={{ borderColor: "gray", borderWidth: 1 }}
				/>
			</View>
		</View>
	);
};

export default formFase;
