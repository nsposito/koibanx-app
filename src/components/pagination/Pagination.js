import { Pagination } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSetPage } from '../../redux/slices/commerceSlice';
import './Pagination.css';

const PaginationControl = () => {
	const dispatch = useDispatch();
	const { page, totalPages } = useSelector(state => state.commerce);

	const onHandleNewPage = (event, value) => {
		dispatch(onSetPage(value));
	};

	return (
		<Pagination
			className="pagination"
			color="primary"
			count={totalPages}
			defaultPage={page}
			onChange={onHandleNewPage}
		/>
	);
};

export default PaginationControl;
