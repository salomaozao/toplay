import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Cadastro from "./pages/cadastro/index";
import CtrlPage from "./pages/control/index";

export default function App() {
	const theme = {
		...DefaultTheme,
		roundness: 2,
		colors: {
			...DefaultTheme.colors,
			primary: "#3498db",
			accent: "#f1c40f",
		},
	};

	return (
		<PaperProvider theme={theme}>
			<Cadastro></Cadastro>
		</PaperProvider>
	);
}
