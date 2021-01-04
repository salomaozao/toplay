import React, { Component } from "react"
import { View } from "react-native"
import { Text, Icon, Button } from "react-native-paper"
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
					nextComponent={
						<Button
							icon="arrow-right"
							style={{ position: "relative", top: 10, left: 30 }}
						/>
					}
					previousComponent={
						<Button
							icon="arrow-left"
							style={{ position: "relative", top: 10, right: 20 }}
						/>
					}
					previousTitle="<"
					onDateChange={this.onDateChange}
					selectedDayColor={
						this.isDayValid(startDate) ? "green" : "red"
					}
				/>
				{/* <Text>SELECTED DATE:{startDate}</Text> */}
			</View>
		)
	}
}
