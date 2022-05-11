import mockData from './MOCK_DATA.json';
import { pagination } from '../utils/helpers/helpers';

export const getCommerceData = page => pagination(page, mockData);

export const fetchData = (page, searchValue, status, sortBy) => {
	let url = `https://api.koibanx.com/stores?page=${page}`;
	let logic = '&q={}';

	if (searchValue !== '')
		logic = `&q={"$or": [{"id": ${searchValue}}, {"comercio": ${searchValue}}, {"cuit": ${searchValue}}]}`;
	if (status !== '') {
		logic = logic.slice(0, -1);
		if (searchValue !== '') logic = logic + ', ';
		logic = logic + `"activo": ${status}}`;
	}

	let sort = '&h={}';

	if (sortBy !== '') sort = `&h={"$orderby": ${sortBy}} `;

	console.log(url + logic + sort);
};
