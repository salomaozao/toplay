import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import FormInput from "./formInput";
import styles from "../../../styles/styles";

const formFase = (props) => {
	return (
		<View style={[styles.bgPrimary]}>
			<View name="formFase" style={[props.style, styles.mx4]}>
				<FormInput
					title={props.content[0].title}
					placeholder={props.content[0].placeholder}
				/>

				<FormInput
					title={props.content[1].title}
					placeholder={props.content[1].placeholder}
				/>
			</View>
		</View>
	);
};

export default formFase;
