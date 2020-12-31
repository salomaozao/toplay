import React from "react"
import { Title, Text, Button, Chip, Avatar, Badge, Appbar, DataTable, Drawer, FAB, Surface } from "react-native-paper"
import { View, Image } from "react-native"
import styles from "../../styles/styles"

const ProductView = () => {
	return (
		<View style={styles.mx2}>
			<Title style={styles.title}>Nome da quadra</Title>
			<Text style={[styles.small, styles.mx4]}>Nome do dono</Text>
			<View style={styles.row}>
				<Chip icon="information" onPress={() => console.log("Pressed")}>
					Informações!
				</Chip>
				<Chip icon="information" onPress={() => console.log("Pressed")}>
					Esta quadra possuí campeonatos!
				</Chip>
				<Chip icon="information" style={{ backgroundColor: "#fe1090" }} onPress={() => console.log("Pressed")}>
					campeonatos!
				</Chip>
			</View>
			<View style={styles.row}>
				<Drawer.Item style={{ backgroundColor: "#64ffda" }} icon="star" label="Informação!" />
				<Drawer.Item style={{ backgroundColor: "#fe1090" }} icon="star" label="Informação!" />
			</View>

			<View style={styles.row}>
				<View style={[{ width: 150 + 16, height: 275 }, styles.border, styles.borderDark]}>
					<Image style={[{ width: 150, height: 150 }, styles.shadow, styles.m2]} source={{ uri: "https://picsum.photos/700" }} />
				</View>
				<View style={[{ width: 150 + 16, height: 275 }, styles.border, styles.borderDark]}>
					<Image style={[{ width: 150, height: 150 }, styles.shadow, styles.m2]} source={{ uri: "https://picsum.photos/700" }} />
				</View>
				<View style={[{ width: 150 + 16, height: 275 }, styles.border, styles.borderDark]}>
					<Image style={[{ width: 150, height: 150 }, styles.shadow, styles.m2]} source={{ uri: "https://picsum.photos/700" }} />
				</View>
				<View style={[{ width: 150 + 16, height: 275 }, styles.border, styles.borderDark]}>
					<Image style={[{ width: 150, height: 150 }, styles.shadow, styles.m2]} source={{ uri: "https://picsum.photos/700" }} />
				</View>
			</View>
		</View>
	)
}
export default ProductView
