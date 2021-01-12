import React, { useState } from "react"
import { View } from "react-native"
import {
	Colors,
	Text,
	Title,
	Menu,
	IconButton,
	Divider,
} from "react-native-paper"
import styles from "../../../styles/styles"

const Apointments = ({ quadraName, date, passed }) => {
	const color = passed ? Colors.red500 : Colors.green500

    const [menuVisible, setMenuVisible] = useState(false)
    
	return (
		<View
			style={[
				styles.border,
				styles.borderDark,
				{
					marginVertical: 5,
					height: 50,
					justifyContent: "center",
				},
			]}
		>
			<View
				style={[
					styles.mx2,
					{
						flexDirection: "row",
						justifyContent: "space-between",
					},
				]}
			>
				<View>
					<Title>{quadraName}</Title>
				</View>

				<View style={styles.row}>
					<View style={[styles.col]}>
						<Text style={{ textAlign: "center", color: color }}>
							Data
						</Text>
						<Text
							style={{
								textAlign: "center",
								color: color,
							}}
						>
							{date}
						</Text>
					</View>
					<Menu
						visible={menuVisible}
						onDismiss={() => setMenuVisible(false)}
						statusBarHeight={70}
						anchor={
							<IconButton
								icon={
									menuVisible
										? "arrow-up-drop-circle"
										: "arrow-down-drop-circle"
								}
								size={20}
								onPress={() => setMenuVisible(true)}
							/>
						}
					>
						<Menu.Item
							titleStyle={{ textAlign: "right" }}
							onPress={() => console.log("Clicou em visitar")}
							title="Visitar"
						/>
						<Menu.Item
							titleStyle={{ textAlign: "right" }}
							onPress={() => console.log("Clicou em excluir")}
							title="Excluir"
						/>
						<Menu.Item
							titleStyle={{ textAlign: "right" }}
							onPress={() => console.log("Clicou em remarcar")}
							title="Remarcar"
						/>
					</Menu>
				</View>
			</View>
		</View>
	)
}
export default Apointments
{
	/*  */
}
