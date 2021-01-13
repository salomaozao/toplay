import * as React from "react"
import "react-native-gesture-handler"
import {
	DefaultTheme,
	Text,
	Provider as PaperProvider,
	Colors,
	Button,
	BottomNavigation,
} from "react-native-paper"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//pages
import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc/index"

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.blue900,
		accent: "#f1c40f",
		// background: Colors.blueA100,
		surface: Colors.grey100,
		text: Colors.grey700,
	},
}

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<PaperProvider theme={theme}>
				<Stack.Navigator>
					<Stack.Screen name="acc" component={Acc} />
				</Stack.Navigator>
				<Button>a</Button>
			</PaperProvider>
		</NavigationContainer>
	)
}

export default App
