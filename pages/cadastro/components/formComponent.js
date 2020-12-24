import React from "react";
import { View, Text } from "react-native";

import FormInput from "./formInput";
import styles from "../../../styles/styles";

const formFase = (props) => {
	return (
		<View style={[styles.bgPrimary, styles.mx4]}>
			<View name="formFase" style={[props.style, styles.mx4, styles.my2]}>
				<View style={styles.centerX}>
					<Text style={[styles.title, styles.textCenter]}>
						{props.content[0].mainTitle}
					</Text>
					<Text style={[styles.textCenter, styles.mt2]}>
						{props.content[0].desc}
					</Text>
				</View>

				<View style={styles.mt4}>
					<FormInput
						title={props.content[1].title}
						placeholder={props.content[1].placeholder}
					/>
				</View>

				<FormInput
					title={props.content[2].title}
					placeholder={props.content[2].placeholder}
				/>
			</View>
		</View>
	);
};

export default formFase;
