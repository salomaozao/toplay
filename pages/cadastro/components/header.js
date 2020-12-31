import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles/styles";

const Header = () => (
	<View style={styles.bgPrimary}>
		<View
			style={[
				styles.borderDark,
				styles.borderBottom,
				styles.py2,
				styles.centerX,
				styles.centerY,
				styles.bgLight,
				{ paddingTop: 25, height: 80 },
			]}
		>
			<Text style={[styles.title, styles.bgLight]}>Toplay</Text>
		</View>
	</View>
);

export default Header;
