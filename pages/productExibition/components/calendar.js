import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import CalendarPicker from "react-native-calendar-picker"

export default class Calendar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedStartDate: null,
		}
		this.onDateChange = this.onDateChange.bind(this)
	}

	onDateChange(date) {
		this.setState({
			selectedStartDate: date,
		})
	}

	isDayValid(day) {
		// return day % 2 === 0 ? "red" : "green"
		// Logo trocar por função exportada
		return true
	}

	render() {
		const { selectedStartDate } = this.state
		const startDate = selectedStartDate ? selectedStartDate.toString() : ""
		return (
			<View>
				<CalendarPicker
					scrollable
					months={[
						"jan",
						"fev",
						"mar",
						"abr",
						"mai",
						"jun",
						"jul",
						"ago",
						"set",
						"out",
						"nov",
						"dez",
					]}
					weekdays={["seg", "ter", "qua", "qui", "sex", "sáb", "dom"]}
					onDateChange={this.onDateChange}
					selectedDayColor={
						this.isDayValid(startDate) ? "green" : "red"
					}
				/>

				<View>
					<Text>SELECTED DATE:{startDate}</Text>
				</View>
			</View>
		)
	}
}
