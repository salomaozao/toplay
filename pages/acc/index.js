import React, { useState } from "react"
import { View, Text, ScrollView, Dimensions } from "react-native"
import { TextInput, Avatar, Button, DataTable } from "react-native-paper"

import InfoInpt from "./components/infoInpt"
import ConfirmDialog from "./components/confirmDialog"
import styles from "../../styles/styles"

const AccPage = () => {
	const [page, setPage] = useState(0)
	const pageMax = 1
	const changePage = (val) => {
		page + val !== pageMax + 1 || page + val !== 0
			? setPage(page + val)
			: {}
	}

	const [showInpts, setShowInpts] = useState(true)
	const [showDialog, setShowDialog] = useState(false)
	return (
		<>
			<ConfirmDialog
				isVisible={showDialog}
				setVisible={setShowDialog}
				action={() => setShowInpts(!showInpts)}
			/>
			<View style={[styles.bgPrimary]}>
				<ScrollView	
					style={{
						height: Dimensions.get("window").height - 90,
					}}
				>
					<View
						style={[styles.centerX, { backgroundColor: "#cccccc" }]}
					>
						<View style={[{ height: 200 }, styles.center]}>
							<Avatar.Text
								size={100}
								label="GS"
								style={styles.bgPrimary}
							/>
							<Text style={styles.textSecondary}>
								Gabriel Salomão
							</Text>
						</View>
					</View>

					<View>
						<Text
							style={[
								styles.textCenter,
								styles.titleSecondary,
								styles.mb2,
								styles.my2,
							]}
						>
							Informações sobre você
						</Text>
						<View
							style={
								page === 0
									? { display: "flex" }
									: { display: "none" }
							}
						>
							<InfoInpt
								isDisabled={showInpts}
								label="Nome completo"
								value="Gabriel Salomão B R Nascimento"
							/>

							<InfoInpt
								isDisabled={showInpts}
								label="Email"
								value="gabrielsilva@exemplo.com"
							/>

							<InfoInpt
								isDisabled={showInpts}
								label="CPF registrado"
								value="XXX. XXX. XXX-XX"
							/>

							<InfoInpt
								isDisabled={showInpts}
								label="Senha"
								value="gabriel1990"
								secured
							/>
						</View>

						<View
							style={
								page === 1
									? { display: "flex" }
									: { display: "none" }
							}
						>
							<InfoInpt
								isDisabled={showInpts}
								label="Número de cartão"
								value="111 111 1111 11"
								secured
								icon={["credit-card", "credit-card-off"]}
							/>

							<InfoInpt
								isDisabled={showInpts}
								label="Preencher"
								value="placeholder"
							/>

							<InfoInpt
								isDisabled={showInpts}
								label="preencher"
								value="placeholder"
							/>

							<InfoInpt
								isDisabled={showInpts}
								label="preencher"
								value="placeholder"
							/>
						</View>
						<View style={{ flex: 1, alignItems: "flex-end" }}>
							<View style={styles.my2}>
								<Button
									style={styles.bgSecondary}
									onPress={() => {
										setShowDialog(true)
									}}
								>
									{showInpts === true
										? "mostrar"
										: "esconder"}
								</Button>
								<View style={styles.row}>
									<Button
										icon="arrow-left"
										disabled={page === 0}
										onPress={() => changePage(-1)}
									/>
									<Text
										style={{
											position: "relative",
											top: 10,
										}}
									>
										{page + 1} de {pageMax + 1}
									</Text>
									<Button
										icon="arrow-right"
										disabled={page === pageMax}
										onPress={() => changePage(+1)}
									/>
								</View>
							</View>
						</View>
						<View>
							<Text
								style={[
									styles.titleSecondary,
									styles.textCenter,
									styles.mt2,
								]}
							>
								O que você já fez:
							</Text>
							<View>
								<DataTable style={styles.my2}>
									<DataTable.Row>
										<DataTable.Cell>
											Quadras alugadas
										</DataTable.Cell>
										<DataTable.Cell numeric>
											6
										</DataTable.Cell>
									</DataTable.Row>

									<DataTable.Row>
										<DataTable.Cell>
											Quadras canceladas
										</DataTable.Cell>
										<DataTable.Cell numeric>
											8.0
										</DataTable.Cell>
									</DataTable.Row>

									<DataTable.Row>
										<DataTable.Cell>
											Dinheiro investido
										</DataTable.Cell>
										<DataTable.Cell numeric>
											R$120,00
										</DataTable.Cell>
									</DataTable.Row>

									<DataTable.Row>
										<DataTable.Cell>
											Dinheiro economizado
										</DataTable.Cell>
										<DataTable.Cell numeric>
											R$25,50
										</DataTable.Cell>
									</DataTable.Row>
								</DataTable>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</>
	)
}

export default AccPage
