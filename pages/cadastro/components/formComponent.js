import React from "react";
import { View, Text } from "react-native";

import FormInput from "./formInput";
import FormCheck from "./formComponentCheck";
import styles from "../../../styles/styles";

const formFase = (props) => {
	if (props.type === "input") {
		return (
			<View style={styles.mx4}>
				<View name="formFase" style={[, styles.mx4, styles.my2]}>
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
	} else if (props.type === "check") {
		return (
			<View style={[styles.centerX, styles.mx4]}>
				<Text style={[styles.title, styles.my2]}>
					{props.content.title}
				</Text>
				<Text>{props.content.text}</Text>
				<View style={styles.mt4}>
					<FormCheck></FormCheck>
				</View>
			</View>
		);
	}
};

export default formFase;
