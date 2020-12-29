import React from "react"
import { Title, Text, Button, Chip, Avatar, Badge, Appbar, DataTable, Drawer, FAB, Surface } from "react-native-paper"
import { View, Image } from "react-native"

const ProductView = () => (
	<View>
		<Title style={{ fontSize: 40 }}>Nome do dono</Title>
		<View style={{ flexDirection: "row", marginTop: 10 }}>
			<Chip icon="information" style={{ marginHorizontal: 5 }} onPress={() => console.log("Pressed")}>
				Informações!
			</Chip>
			<Chip icon="information" style={{ marginHorizontal: 5 }} onPress={() => console.log("Pressed")}>
				Esta quadra possuí campeonatos!
			</Chip>
			<Chip icon="information" style={{ marginHorizontal: 5 }} onPress={() => console.log("Pressed")}>
				campeonatos!
			</Chip>
		</View>
		v
		<Drawer.Item style={{ backgroundColor: "#64ffda" }} icon="star" label="Informação!" />
		<Drawer.Item style={{ backgroundColor: "#64ffda" }} label="Mais informação!" />
	</View>
)

export default ProductView
