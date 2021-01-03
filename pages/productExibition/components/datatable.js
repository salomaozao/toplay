import React from "react"
import { DataTable, Avatar } from "react-native-paper"

//  COMO VAI PASSAR DADOS??????
const DataTableCustom = () => (
	<DataTable>
		<DataTable.Header>
			<DataTable.Title>Coisas</DataTable.Title>
			<DataTable.Title numeric>?</DataTable.Title>
		</DataTable.Header>

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
	</DataTable>
)

export default DataTableCustom
