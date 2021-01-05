import React, { useState } from "react"
import { DataTable, Avatar } from "react-native-paper"
import { Text, View } from "react-native"
import styles from "../../../styles/styles"

//  COMO VAI PASSAR DADOS??????
const DataTableCustom = () => {
	const [page, setPage] = useState(0)
	return (
		<DataTable>
			<View
				style={page === 0 ? { display: "flex" } : { display: "none" }}
			>
				<DataTable.Row>
					<DataTable.Cell>Banheiro</DataTable.Cell>
					<DataTable.Cell numeric>
						<Avatar.Icon size={24} icon="check" />
					</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>Chuveiro</DataTable.Cell>
					<DataTable.Cell numeric>
						<Avatar.Icon size={24} icon="close" />
					</DataTable.Cell>
				</DataTable.Row>
			</View>

			<View
				style={page === 1 ? { display: "flex" } : { display: "none" }}
			>
				<DataTable.Row>
					<DataTable.Cell>Churrasqueira</DataTable.Cell>
					<DataTable.Cell numeric>
						<Avatar.Icon size={24} icon="close" />
					</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>Lanches</DataTable.Cell>
					<DataTable.Cell numeric>
						<Avatar.Icon size={24} icon="close" />
					</DataTable.Cell>
				</DataTable.Row>
			</View>

			<View
				style={page === 2 ? { display: "flex" } : { display: "none" }}
			>
				<DataTable.Row>
					<DataTable.Cell>Número de campos</DataTable.Cell>
					<DataTable.Cell numeric>
						<Text>2</Text>
					</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>Coletes</DataTable.Cell>
					<DataTable.Cell numeric>
						<Avatar.Icon size={24} icon="close" />
					</DataTable.Cell>
				</DataTable.Row>
			</View>

			<DataTable.Pagination
				page={page}
				numberOfPages={3}
				onPageChange={(page) => {
					setPage(page)
				}}
				label={page + 1 + " de 3"}
			/>
		</DataTable>
	)
}
export default DataTableCustom
