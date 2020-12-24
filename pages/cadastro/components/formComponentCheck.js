import React from "react";
import { View, Text, TextInput, StyleSheet, CheckBox } from "react-native";
import styles from "../../../styles/styles"

const formCheck = (props) => (
	<View>
		<Text>{props.children}:</Text>
		<CheckBox />
	</View>
);

export default formCheck;
