// import React, { Component } from "react"
// import { DefaultTheme, Text, PaperProvider, Colors } from "react-native-paper"
// import RouterProvider from "@react-navigation/native"

// import PaperNav from "./pages/generalComponents/navigation"

// import Agendamentos from "./pages/agendamentos/index"
// import Cadastro from "./pages/cadastro/index"
// import ProductView from "./pages/productExibition"
// import Acc from "./pages/acc/index"

// const theme = {
// 	...DefaultTheme,
// 	roundness: 2,
// 	colors: {
// 		...DefaultTheme.colors,
// 		primary: Colors.blue900,
// 		accent: "#f1c40f",
// 		// background: Colors.blueA100,
// 		surface: Colors.grey100,
// 		text: Colors.grey700,
// 	},
// }

// export default class App extends Component {
// 	// componentDidMount() {
// 	// 	Orientation.getInitialOrientation()
// 	// }

// 	render() {
// 		return (
// 			<Provider theme={theme}>
// 				<RouterProvider>
// 					<Nav
// 						scenes={[
// 							<Agendamentos />,
// 							<ProductView />,
// 							<Cadastro />,
// 						]}
// 					/>
// 				</RouterProvider>
// 			</Provider>
// 		)
// 	}
// }

import React, { useState } from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Button, TextInput } from "react-native-paper"
const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerRight: () => (
						<Button
							onPress={() => alert("This is a button!")}
							title="Info"
							color="#fff"
						/>
					),
				}}
				initialRouteName="Page1"
			>
				<Stack.Screen
					name="home"
					options={{
						title: "Casa",
						headerStyle: { backgroundColor: "green" },
					}}
					props="Gabriel"
				>
					{(props) => <Home {...props} />}
				</Stack.Screen>
				<Stack.Screen
					name="Page1"
					component={Page1}
					initialParams={{ pw: "haha inicio" }}
					options={(routes) => routes.un}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const Home = ({ navigation, route }) => {
	return (
		<View style={{ justifyContent: "center", alignItems: "center" }}>
			<Text>Olá, {route.params.username}! Eu sou a página principal</Text>
			<Button
				onPress={() =>
					navigation.navigate("Page1", { pw: "1234", un: "João" })
				}
			>
				passar parâmetro
			</Button>

			<Button onPress={() => navigation.goBack({ pw: "1010" })}>
				Voltar
			</Button>
		</View>
	)
}

const Page1 = ({ navigation, route }) => {
	const [inptVal, setVal] = useState("neymar")
	return (
		<View>
			<Text>Sou a página 2!</Text>
			<Text>senha: {route.params.pw}</Text>
			<TextInput
				onChangeText={(text) => navigation.setOptions({ title: text })}
			/>
			<Button
				onPress={() => {
					navigation.navigate("home", {
						username: inptVal,
					})
				}}
			>
				Ir pra home, parâmetro: {"<TextInput>"}
			</Button>
		</View>
	)
}

export default App
