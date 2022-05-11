import React from 'react';
import TableFilter from '../tableFilter/TableFilter';
import TableSort from '../tableSort/TableSort';
import './TableOptions.css';

const TableOptions = () => {
	return (
		<div className="options-container">
			<TableSort />
			<TableFilter />
		</div>
	);
};

export default TableOptions;
