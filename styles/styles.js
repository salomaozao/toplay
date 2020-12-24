import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
	bgPrimary: { backgroundColor: "#d3d3d3" /*MUDAR COR*/ },

	bgLight: { backgroundColor: "white" /*MUDAR COR*/ },

	p1: { padding: 4 },

	py2: { paddingTop: 20 },

	mx4: { marginHorizontal: 16 },

	my2: { marginVertical: 8 },

	my4: { marginVertical: 16 },

	mt2 : { marginTop: 8 },

	mt4: { marginTop: 16 },

	mb4: { marginBottom: 16 },

	borderLight: { borderColor: "gray" /*MUDAR COR*/ },

	borderDark: { borderColor: "black" /*MUDAR COR*/ },

	border: { borderWidth: 1 },

	borderBottom: { borderBottomWidth: 1 },

	BorderHorizontal: {
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 0,
		borderTopWidth: 0,
	},

	borderVertical: {
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 1,
		borderTopWidth: 1,
	},

	textSecondary: { color: "white" /*MUDAR COR*/ },

	title: { fontSize: 24, fontWeight: "800" },

	small: { fontSize: 8 /*AJUSTAR?*/ },

	textCenter: { textAlign: "center" },

	centerX: { alignItems: "center" },

	centerY: { justifyContent: "center" },

	bottomAbs: {
		flex: 1,
	},

	w100: {
		width: 100,
	},
});
//A FAZER: w-100   bottom-absolute w-100

//SUBSTITUIDOS: container > my4

export default styles;
