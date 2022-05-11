import React from 'react';
import { useSelector } from 'react-redux';
import './Table.css';

const Table = ({ headers, data }) => {
	return (
		<div className="table-container">
			<table className="table">
				<thead>
					<tr>
						{headers.map(item => (
							<th key={item}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{data.map(item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.comercio}</td>
							<td>{item.cuit}</td>
							<td>{item.concepto1}</td>
							<td>{item.concepto2}</td>
							<td>{item.concepto3}</td>
							<td>{item.concepto4}</td>
							<td>{item.concepto5}</td>
							<td>{item.concepto6}</td>
							<td>{item.balance}</td>
							<td>{item.activo === 1 ? 'Activo' : 'Inactivo'}</td>
							<td>{item.ultimaVenta}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
