import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
	bgPrimary: { backgroundColor: "gray" /*MUDAR COR*/ },

	p1: { padding: 4 },

	my4: { marginHorizontal: 16 },

	mx4: { marginVertical: 16 },

	borderLight: { borderColor: "gray" /*MUDAR COR*/ },

	borderBottom: { borderBottomWidth: 1 },

	textSecondary: { color: "white" /*MUDAR COR*/ },

	title: { fontSize: 24 },

	small: { fontSize: 8 /*AJUSTAR?*/ },

	textCenter: { textAlign: "center" },

	justContentMiddle: {
		flex: 1,
		justifyContent: "center",
	},

	bottomAbs: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 36,
	},

	w100: {
		width: 100,
	},
});
//A FAZER: w-100   bottom-absolute w-100

//SUBSTITUIDOS: container > my4

export default styles;
