import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSetStatus } from '../../../redux/slices/commerceSlice';

const TableFilter = () => {
	const dispatch = useDispatch();
	const [filterByStatus, setFilterByStatus] = useState(0);

	useEffect(() => {
		setFilter();
	}, [filterByStatus]);

	const setFilter = () => {
		if (filterByStatus === 0) {
			dispatch(onSetStatus(''));
			return;
		}

		dispatch(onSetStatus(filterByStatus));
	};

	return (
		<Box sx={{ minWidth: '200px', marginLeft: '10px' }}>
			<FormControl fullWidth>
				<InputLabel>Filtrar por Activo</InputLabel>
				<Select
					labelId="orderByCommerce"
					id="orderByCommerce"
					value={filterByStatus}
					label="Sin ordenar"
					onChange={e => setFilterByStatus(e.target.value)}
				>
					<MenuItem value={0}>No filtrar</MenuItem>
					<MenuItem value={1}>Activos</MenuItem>
					<MenuItem value={-1}>Inactivos</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default TableFilter;
