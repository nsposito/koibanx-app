import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSetSortBy } from '../../../redux/slices/commerceSlice';
import './TableSort.css';

const TableSort = () => {
	const dispatch = useDispatch();
	const [sortCommerce, setSortCommerce] = useState(0);
	const [sortCuit, setSortCuit] = useState(0);

	useEffect(() => {
		setSortBy();
	}, [sortCommerce, sortCuit]);

	const setSortBy = () => {
		let sortBy = null;

		if (sortCommerce !== 0) sortBy = { comercio: sortCommerce };
		if (sortCuit !== 0) sortBy = { ...sortBy, cuit: sortCuit };
		if (sortBy === null) {
			dispatch(onSetSortBy(''));
			return;
		}

		dispatch(onSetSortBy(JSON.stringify(sortBy)));
	};

	return (
		<div className="sort-container">
			<Box sx={{ minWidth: '200px' }}>
				<FormControl fullWidth>
					<InputLabel>Ordenar por Comercio</InputLabel>
					<Select
						labelId="orderByCommerce"
						id="orderByCommerce"
						value={sortCommerce}
						label="Sin ordenar"
						onChange={e => setSortCommerce(e.target.value)}
					>
						<MenuItem value={0}>No ordenar</MenuItem>
						<MenuItem value={1}>Ascendente</MenuItem>
						<MenuItem value={-1}>Descente</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ minWidth: '200px', marginLeft: '10px' }}>
				<FormControl fullWidth>
					<InputLabel>Ordenar por CUIT</InputLabel>
					<Select
						labelId="orderByCuit"
						id="orderByCuit"
						value={sortCuit}
						label="Sin ordenar"
						onChange={e => setSortCuit(e.target.value)}
					>
						<MenuItem value={0}>No ordenar</MenuItem>
						<MenuItem value={1}>Ascendente</MenuItem>
						<MenuItem value={-1}>Descente</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};

export default TableSort;
