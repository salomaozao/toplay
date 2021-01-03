import React from "react"
import {
	Title,
	Text,
	Button,
	Chip,
	Avatar, //sí
	Badge, // no
	Appbar, // no fundo
	Drawer,
	FAB, //no
} from "react-native-paper"
import { View, Image, Dimensions, ScrollView } from "react-native"
import styles from "../../styles/styles"
import Carousel from "./components/carousel"
import Calendar from "./components/calendar"
import Datatable from "./components/datatable"

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
				<View style={[styles.row, styles.mx4]}>
					<Avatar.Image
						size={24}
						source={{ uri: "https://picsum.photos/700" }}
						style={styles.mr2}
					/>
					<Text style={[styles.small]}>Nome do dono</Text>
				</View>
				<View style={[styles.row, styles.ml2]}>
					<Chip
						icon="information"
						onPress={() => console.log("Pressed")}
					>
						Informações!
					</Chip>
				</View>
				<View style={styles.row}>
					<Drawer.Item
						style={{ backgroundColor: "#fe1090" }}
						icon="star"
						label="Informação!"
					/>
				</View>
			</View>
			<View style={styles.col}>
				<Carousel />
				<Datatable />
				<View>
					{/* <Calendar /> */}
					<View style={[{ alignSelf: "flex-end" }, styles.mx4]}>
						<Title style={styles.title}>
							R$18,00<Text style={styles.small}>por hora</Text>
						</Title>
						<Button contentStyle={styles.bgPrimary}>alugar</Button>
					</View>
				</View>
				{/* <Appbar */}
				<Button contentStyle={styles.bgPrimary}>alugar</Button>
				<Button contentStyle={styles.bgPrimary}>alugar</Button>
				<Button contentStyle={styles.bgPrimary}>alugar</Button>
			</View>
		</ScrollView>
	)
}
export default ProductView
