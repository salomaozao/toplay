import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../../styles/styles";

const inputs = (props) => (
	<View>
		<Text>{props.title}:</Text>
		<View
			style={[
				styles.borderBottom,
				styles.borderDark,
				styles.mx4,
				styles.my2,
				styles.p1,
			]}
		>
			<TextInput placeholder={props.placeholder} />
		</View>
	</View>
);

export default inputs;
