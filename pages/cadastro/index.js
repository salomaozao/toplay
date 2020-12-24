import React, { useState } from "react";
import { View, Button, Dimensions, StatusBar, Platform } from "react-native";

import Header from "./components/header";
import FormComponent from "./components/formComponent";
import styles from "../../styles/styles";

const cadastro = (props) => {
	const [showingComp, setShowingComp] = useState([true, false, false, false]);

	const changeForm = (num) => {
		let arr = [false, false, false, false];
		arr[num] = true;
		setShowingComp(arr);
	};

	const nextForm = () => {
		changeForm(showingComp.indexOf(true) + 1);
	};

	const finishForm = () => {
		location.reload();
	};

	const updateForm = () => {
		if (showingComp.indexOf(true) === showingComp.length - 1) {
			finishForm();
		} else {
			nextForm();
		}
	};

	var height =
		Dimensions.get("window").height +
		(Platform.OS === "android" && Platform.Version > 26
			? +StatusBar.currentHeight
			: 0);

	return (
		<View
			style={[
				styles.bgPrimary,
				{
					height: height,
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "stretch",
				},
			]}
		>
			<View style={styles.bgPrimary}>
				<Header />
				<View style={[styles.my2]}>
					{/*todo: update colours and how they are defined*/}
					<FormComponent
						style={{
							display: showingComp[0] ? "flex" : "none",
						}}
						content={[
							{
								mainTitle: "Texto demonstrativo, 10 palavras",
								desc:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus. ",
							},
							{
								title: "Nome",
								placeholder: "EXEMPLO DE NOME",
							},
							{
								title: "email",
								placeholder: "EXEMPLO DE RG",
							},
						]}
					></FormComponent>
					<FormComponent
						style={{
							display: showingComp[1] ? "flex" : "none",
						}}
						content={[
							{
								mainTitle: "Texto demonstrativo, 20 palavras",
								desc:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare volutpat velit nec laoreet. Morbi mattis scelerisque augue. Nullam imperdiet. ",
							},
							{
								title: "Senha",
								placeholder: "EXEMPLO DE NOME",
							},
							{
								title: "Verificar",
								placeholder: "EXEMPLO DE RG",
							},
						]}
					></FormComponent>
					<FormComponent
						style={{
							display: showingComp[2] ? "flex" : "none",
						}}
						content={[
							{
								mainTitle: "Bem vindo!",
								desc: "Frases pequenas!",
							},
							{
								title: "CPF",
								placeholder: "EXEMPLO DE NOME",
							},
							{
								title: "SLA",
								placeholder: "EXEMPLO DE RG",
							},
						]}
					></FormComponent>
					<FormComponent
						style={{
							display: showingComp[3] ? "flex" : "none",
						}}
						content={[
							{
								mainTitle: "Bem vindo!",
								desc: "Bora pro play?",
							},
							{
								title: "hihi",
								placeholder: "EXEMPLO DE NOME",
							},
							{
								title: "huhu",
								placeholder: "EXEMPLO DE RG",
							},
						]}
					></FormComponent>
				</View>
			</View>
			<Button onPress={updateForm} title={"Próximo"}></Button>
		</View>
	);
};

export default cadastro;
