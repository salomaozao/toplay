import React from "react"
import {
	Title,
	Text,
	Button,
	Chip,
	Avatar,
	Badge,
	Appbar,
	DataTable,
	Drawer,
	FAB,
	Surface,
} from "react-native-paper"
import { View, Image, Dimensions, ScrollView } from "react-native"
import styles from "../../styles/styles"
import Carousel from "./components/carousel"

const ImgCustom = () => {
	const imgWidth = Dimensions.get("window").width
	return (
		<Image
			style={[
				{
					width: imgWidth / 3,
					height: imgWidth / 4,
				},
				styles.shadow,
			]}
			source={{ uri: "https://picsum.photos/700" }}
		/>
	)
}
const ImgShow = () => {
	return (
		<View
			style={[styles.row, styles.m4, { justifyContent: "space-between" }]}
		>
			<ImgCustom />
			<ImgCustom />
		</View>
	)
}

const ProductView = () => {
	return (
		<ScrollView>
			<View style={styles.mx2}>
				<Title style={styles.title}>Nome da quadra</Title>
				<Text style={[styles.small, styles.mx4]}>Nome do dono</Text>
				<View style={styles.row}>
					<Chip
						icon="information"
						onPress={() => console.log("Pressed")}
					>
						Informações!
					</Chip>
					<Chip
						icon="information"
						onPress={() => console.log("Pressed")}
					>
						Esta quadra possuí campeonatos!
					</Chip>
					<Chip
						icon="information"
						style={{ backgroundColor: "#fe1090" }}
						onPress={() => console.log("Pressed")}
					>
						campeonatos!
					</Chip>
				</View>
				<View style={styles.row}>
					<Drawer.Item
						style={{ backgroundColor: "#64ffda" }}
						icon="star"
						label="Informação!"
					/>
					<Drawer.Item
						style={{ backgroundColor: "#fe1090" }}
						icon="star"
						label="Informação!"
					/>
				</View>
			</View>
			<View>
				<Carousel />
			</View>
		</ScrollView>
	)
}
export default ProductView
