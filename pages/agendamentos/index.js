import React from "react"
import { View, Dimensions, ScrollView } from "react-native"
import { Text, Title } from "react-native-paper"
import styles from "../../styles/styles"

import Apointments from "./components/apointment"

const Agendamentos = () => {
	const apointmentArr = [
		{ name: "Quadra São João", date: "13/2", passed: true },
		{ name: "Quadra São José", date: "23/2", passed: false },
		{ name: "Quadra São Carlos", date: "13/2", passed: true },
	]

	const apointmentsComponentsArr = []

	for (let data of apointmentArr) {
		apointmentArr.push(<Apointments {...data} />)
	}
	return (
		<>
			<ScrollView
				style={[
					styles.bgDark,
					{ minHeight: Dimensions.get("window").height },
				]}
			>
				<Text style={[styles.title, styles.textCenter]}>
					Agendamentos
				</Text>
				{apointmentArr}
			</ScrollView>
		</>
	)
}

export default Agendamentos
