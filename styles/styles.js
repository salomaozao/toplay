import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	bgPrimary: { backgroundColor: "#c3e3e2" /*MUDAR COR*/ },

	bgSecondary: { backgroundColor: "#ab7d8b" /*MUDAR COR*/ },

	bgLight: { backgroundColor: "white" /*MUDAR COR*/ },

	p1: { padding: 4 },

	py2: { paddingTop: 20 },

	m2: { margin: 8 },

	m4: { margin: 16 },

	mx2: { marginHorizontal: 8 },

	mx4: { marginHorizontal: 16 },

	mr2: { marginRight: 8 },
	mr4: { marginRight: 16 },

	ml2: { marginLeft: 8 },
	ml2: { marginLeft: 8 },

	my2: { marginVertical: 8 },

	my4: { marginVertical: 16 },

	mt2: { marginTop: 8 },

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

	round: { borderRadius: 10 },
	roundSm: { borderRadius: 5 },

	textPrimary: { color: "black", fontWeight: "bold" /*MUDAR COR*/ },

	textSecondary: { color: "#666464", fontWeight: "bold" /*MUDAR COR*/ },

	title: { fontSize: 36, fontWeight: "bold" },

	titleSecondary: { fontSize: 24 },

	small: { fontSize: 16 /*AJUSTAR?*/ },

	textCenter: { textAlign: "center" },

	centerX: { justifyContent: "center" },

	centerY: { alignItems: "center" },

	bottomAbs: { flex: 1 },

	w100: { width: 100 },

	col: { flexDirection: "column" },

	row: { flexDirection: "row" },

	box: {
		height: 200,
		width: 300,
		padding: 5,
	},
})

export default styles
