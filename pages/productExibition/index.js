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
		<View style={{ flexDirection: "row" }}>
			<Drawer.Item style={{ backgroundColor: "#64ffda" }} icon="star" label="Informação!" />
			<Drawer.Item style={{ backgroundColor: "#64ffda" }} label="Mais informação!" />
			<Drawer.Item style={{ backgroundColor: "#64ffda" }} icon="star" label="Informação!" />
		</View>

		<View>
			<Surface>
				<Image uri={"https://picsum.photos/700"} />
			</Surface>
		</View>
        {/* <Appbar></Appbar> */}
	</View>
)

export default ProductView
