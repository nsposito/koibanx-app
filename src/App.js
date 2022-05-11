import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from './components/searchbar/Searchbar';
import Table from './components/table/Table';
import { useEffect, useState } from 'react';
import { onFetchCommerceData, onFetchData } from './redux/slices/commerceSlice';
import { Spinner } from 'react-activity';
import 'react-activity/dist/Spinner.css';
import { Grid } from '@mui/material';
import { fetchData } from './api/services';
import TableSort from './components/table/tableSort/TableSort';
import TableFilter from './components/table/tableFilter/TableFilter';
import TableOptions from './components/table/tableOptions/TableOptions';
import PaginationControl from './components/pagination/Pagination';
import { tableHead } from './components/table/constants';

function App() {
	const dispatch = useDispatch();
	const { page, searchValue, status, sortBy, commerceData, loading } = useSelector(
		state => state.commerce
	);

	useEffect(() => {
		dispatch(onFetchCommerceData(page));
	}, [page]);

	useEffect(() => {
		dispatch(onFetchData(page, searchValue, status, sortBy));
	}, [page, searchValue, status, sortBy]);

	return (
		<div className="app-container">
			{loading ? (
				<div className="spinner-container">
					<Spinner />
				</div>
			) : (
				<div className="grid-container">
					<Grid container>
						<Grid item xs={12}>
							<Searchbar />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<Table headers={tableHead} data={commerceData} />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<TableOptions />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<PaginationControl />
						</Grid>
					</Grid>
				</div>
			)}
		</div>
	);
}

export default App;
