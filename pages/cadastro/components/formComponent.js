import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

var show = true;

const formFase = (props) => {
	return (
		<View name="formFase" style={[props.style]}>
			<Text>Nome:</Text>
			<TextInput
				placeholder="Exemplo de nome"
				style={{ borderColor: "gray", borderWidth: 1 }}
			/>
		</View>
	);
};

export default formFase;
