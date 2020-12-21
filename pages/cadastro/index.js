import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import FormComponent from "./components/formComponent";
// import styles from "./styles/styles";

const cadastro = (props) => {
	const [showingComp, setShowingComp] = useState([true, false, false, false]);

	const styles = StyleSheet.create({
		formComp1: {
			display: showingComp === 1 ? "flex" : "none",
			backgroundColor: "green",
		},
		formComp2: {
			display: showingComp === 2 ? "flex" : "none",
			backgroundColor: "pink",
		},
		formComp3: {
			display: showingComp === 3 ? "flex" : "none",
			backgroundColor: "blue",
		},
		formComp4: {
			display: showingComp === 4 ? "flex" : "none",
			backgroundColor: "purple",
		},
	});

	const changeForm = (num) => {
		let arr = [false, false, false, false];
		arr[num] = true;
		setShowingComp(arr);
	};

	const nextForm = () => {
		changeForm(showingComp.indexOf(true) + 1);
	};

	return (
		<View>
			<View>
				<FormComponent
					style={{
						backgroundColor: "black",
						display: showingComp[0] ? "flex" : "none",
					}}
				></FormComponent>
				<FormComponent
					style={{
						backgroundColor: "green",
						display: showingComp[1] ? "flex" : "none",
					}}
				></FormComponent>
				<FormComponent
					style={{
						backgroundColor: "pink",
						display: showingComp[2] ? "flex" : "none",
					}}
				></FormComponent>
				<FormComponent
					style={{
						backgroundColor: "purple",
						display: showingComp[3] ? "flex" : "none",
					}}
				></FormComponent>
			</View>
			<Button onPress={nextForm} title={"Próximo"}></Button>
		</View>
	);
};

export default cadastro;
