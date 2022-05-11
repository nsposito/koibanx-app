import { Button, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSetSearchValue } from '../../redux/slices/commerceSlice';
import './Searchbar.css';

const Searchbar = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = e => {
		e.preventDefault();
		dispatch(onSetSearchValue(searchValue));
		setSearchValue('');
	};

	return (
		<div className="searchBar-container">
			<TextField
				fullWidth
				id="searchBar"
				placeholder="Buscar"
				margin="none"
				size="small"
				sx={{ width: '500px', display: 'flex' }}
				value={searchValue}
				onChange={text => {
					setSearchValue(text.target.value);
				}}
			/>
			<Button variant="contained" onClick={handleSearch} sx={{ marginLeft: '10px' }}>
				Buscar
			</Button>
		</div>
	);
};

export default Searchbar;
