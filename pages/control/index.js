import React from "react";
import { View, Text, Button } from "react-native";

import FormInput from "../cadastro/components/formComponent";
import styles from "../../styles/styles";

const ControlPage = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			<FormInput
				style={{ borderWidth: 1, borderColor: "gray" }}
				content={[
					{
						mainTitle: "FORMULÁRIO",
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

			<View style={{ flexDirection: "column" }}>
				<Button color="orange" title="botão primário" />
			</View>
		</View>
	);
};

export default ControlPage;
