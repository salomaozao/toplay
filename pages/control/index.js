import React from "react";
import { View, Text, Button } from "react-native";

import FormInput from "../cadastro/components/formComponent";
import styles from "../../styles/styles";

const ShowColors = (props) => (
	<View>
		<Text style={styles.title}></Text>
		<View
			style={{
				height: 100,
				width: 100,
				backgroundColor: props.bg,
				borderRadius: 5,
			}}
		></View>
	</View>
);

const ControlPage = () => {
	return (
		<View>
			<View style={styles.row}>
				<FormInput
					type="input"
					content={[
						{
							mainTitle: "Formulário",
							desc:
								"Geralmente utilizado em fases, tamanho e cores customisáveis",
						},

						{
							title: "Título",
							placeholder: "Placeholder customisável",
						},
						{
							title: "Título",
							placeholder: "Placeholder customisável",
						},
					]}
				></FormInput>

				<View>
					<FormInput
						type="check"
						content={{
							title: "Formulário check",
							text: "Este texto pode ser do tamanho que quiser",
						}}
					/>
				</View>
				<View
					style={[
						styles.my2,
						styles.mx4,
						{ flexDirection: "column" },
					]}
				>
					<Text style={styles.title}>Botões</Text>
					<Text>Os tamanhos não são uniformes.</Text>
					<View style={styles.my2}>
						<Button color="#8abfd1" title="botão primário" />
					</View>
					<View style={styles.my2}>
						<Button color="#8fcf99" title="botão secundário" />
					</View>

					<View style={styles.my2}>
						<Button title="botão desativado " disabled />
					</View>
				</View>
			</View>
			<View style={styles.row}>
				<View style={[styles.mx4, styles.col]}>
					<Text style={styles.title}>Fontes</Text>
					<View style={styles.row}>
						<View style={styles.mx4}>
							<Text style={styles.title}>Fonte 1</Text>
							<Text>Fonte 1</Text>
						</View>
						<View style={styles.mx4}>
							<Text style={styles.title}>Fonte 2</Text>
							<Text>Fonte 2</Text>
						</View>
						<View style={styles.mx4}>
							<Text style={styles.title}>Fonte 3</Text>
							<Text>Fonte 3</Text>
						</View>
					</View>
				</View>

				<View style={styles.mx4}>
					<Text style={styles.title}>Cores:</Text>
					<View style={styles.row}>
						<View style={[styles.col, styles.mx4]}>
							<Text>Primária: </Text>
							<ShowColors bg="#b9e3a1" />
						</View>

						<View style={[styles.col, styles.mx4]}>
							<Text>Secundária: </Text>
							<ShowColors bg="#dce3f2" />
						</View>

						<View style={[styles.col, styles.mx4]}>
							<Text>Terceária: </Text>
							<ShowColors bg="#e2e67e" />
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ControlPage;
