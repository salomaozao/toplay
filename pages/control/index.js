import React from "react"
import { View, TouchableHighlight, Image } from "react-native"
import { Text, Button, Card } from "react-native-paper"

import Navigation from "../generalComponents/navigation"
import SearchBar from "../generalComponents/searchBar"
import CardCustom from "../mainPage/components/card"

// import { View, Text, Button, TouchableHighlight } from "react-native";

import FormInput from "../cadastro/components/formComponent"
import styles from "../../styles/styles"

const ShowColors = (props) => (
	<View>
		<View
			style={[
				{
					height: 100,
					width: 100,
					backgroundColor: props.bg,
					borderRadius: 5,
				},
				styles.centerY,
				styles.centerX,
			]}
		>
			<Text>{props.children !== undefined ? props.children : ""}</Text>
		</View>
	</View>
)

const BoxBttn = (props) => (
	<View>
		<TouchableHighlight style={[styles.centerX, styles.bgPrimary, styles.roundSm, { width: 100 }]} underlayColor="gray" onPress={() => alert("Pressed!")}>
			<Text>{props.children}</Text>
		</TouchableHighlight>
	</View>
)

const Box = () => (
	<View style={[styles.box, styles.round, styles.bgLight, styles.p1, styles.mx4, styles.my2, styles.col, styles.centerX, { height: 300, width: 100 }]}>
		<ShowColors bg="#d3d3d3">Imagem</ShowColors>
		<View style={styles.my4}>
			<Text>Texto abaixo da imagem</Text>
		</View>
		<BoxBttn>Botão</BoxBttn>
	</View>
)

const ControlPage = () => {
	return (
		<View>
			<View>
				<View>
					<View>
						<View style={{ margin: 25 }}>
							<Text> NAVIGATION: </Text>
							<Navigation></Navigation>
						</View>

						<View style={{ margin: 25 }}>
							<SearchBar></SearchBar>
						</View>

						<View style={{ margin: 25 }}>
							<CardCustom></CardCustom>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.row}>
				<FormInput
					type="input"
					content={[
						{
							mainTitle: "Formulário",
							desc: "Geralmente utilizado em fases, tamanho e cores customisáveis",
						},

						{
							title: "Título",
							placeholder: "Placeholder customisável",
						},
						{
							title: "Título",
							placeholder: "Placeholder customisável",
						},
					]}
				></FormInput>

				<View>
					<FormInput
						type="check"
						content={{
							title: "Formulário check",
							text: "Este texto pode ser do tamanho que quiser",
						}}
					/>
				</View>
				<View style={[styles.my2, styles.mx4, { flexDirection: "column" }]}>
					<Text style={styles.title}>Botões</Text>
					<Text>Os tamanhos não são uniformes.</Text>
					<View style={styles.my2}>
						<Button color="#8abfd1" title="botão primário" />
					</View>
					<View style={styles.my2}>
						<Button color="#8fcf99" title="botão secundário" />
					</View>

					<View style={styles.my2}>
						<Button title="botão desativado " disabled />
					</View>
				</View>
			</View>
			<View style={styles.row}>
				<View style={[styles.mx4, styles.col]}>
					<Text style={styles.title}>Fontes</Text>
					<View style={styles.row}>
						<View style={styles.mx4}>
							<Text style={styles.title}>Fonte 1</Text>
							<Text>Fonte 1</Text>
						</View>
						<View style={styles.mx4}>
							<Text style={styles.title}>Fonte 2</Text>
							<Text>Fonte 2</Text>
						</View>
						<View style={styles.mx4}>
							<Text style={styles.title}>Fonte 3</Text>
							<Text>Fonte 3</Text>
						</View>
					</View>
				</View>

				<View style={styles.mx4}>
					<Text style={styles.title}>Cores:</Text>
					<View style={styles.row}>
						<View style={[styles.col, styles.mx4]}>
							<Text>Primária: </Text>
							<ShowColors bg="#b9e3a1" />
						</View>

						<View style={[styles.col, styles.mx4]}>
							<Text>Secundária: </Text>
							<ShowColors bg="#dce3f2" />
						</View>

						<View style={[styles.col, styles.mx4]}>
							<Text>Terceária: </Text>
							<ShowColors bg="#e2e67e" />
						</View>
					</View>
				</View>

				<View style={styles.mx4}>
					<Text style={styles.title}>Caixa de item</Text>
					<Box></Box>
				</View>
			</View>
			<View style={styles.row}>
				<View>
					<Text style={styles.title}>Barra de busca</Text>
				</View>
			</View>
			<View>
				<Image
					source={{
						uri: "https://reactnative.dev/img/tiny_logo.png",
					}}
				/>
			</View>
			<Card>
				<Card.Cover url={"https://picsum.photos/700"}></Card.Cover>
				<Card.Actions>
					<Button>Cancel</Button>
					<Button>Ok</Button>
				</Card.Actions>
			</Card>
		</View>
	)
}

export default ControlPage
