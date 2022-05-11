import { createSlice } from '@reduxjs/toolkit';
import { fetchData, getCommerceData } from '../../api/services';

export const commerceSlice = createSlice({
	name: 'commerce',
	initialState: {
		commerceData: [],
		loading: true,
		page: 1,
		totalPages: 1,
		searchValue: '',
		status: '',
		sortBy: '',
	},
	reducers: {
		onSetCommerceData: (state, action) => {
			state.commerceData = action.payload;
		},
		onSetLoading: (state, action) => {
			state.loading = action.payload;
		},
		onSetPage: (state, action) => {
			state.page = action.payload;
		},
		onSetTotalPages: (state, action) => {
			state.totalPages = action.payload;
		},
		onSetSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		onSetStatus: (state, action) => {
			state.status = action.payload;
		},
		onSetSortBy: (state, action) => {
			state.sortBy = action.payload;
		},
	},
});

export const {
	onSetCommerceData,
	onSetLoading,
	onSetPage,
	onSetTotalPages,
	onSetSearchValue,
	onSetStatus,
	onSetSortBy,
} = commerceSlice.actions;

export default commerceSlice.reducer;

export const onFetchCommerceData = page => async dispatch => {
	dispatch(onSetLoading(true));
	const response = await getCommerceData(page);

	if (response?.data) {
		dispatch(onSetCommerceData(response.data));
		dispatch(onSetTotalPages(response.pages));
		dispatch(onSetLoading(false));
	}
};

export const onFetchData = (page, searchValue, status, sortBy) => async dispatch => {
	await fetchData(page, searchValue, status, sortBy);
};
