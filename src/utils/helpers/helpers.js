const rowsPerPage = 10;

export const pagination = (page, data) => {
	let start = 0;
	let end = rowsPerPage;
	page = page - 1;

	if (page > 0) {
		const multiple = page * rowsPerPage;
		start = start + multiple;
		end = end + multiple;
	}

	const response = {
		data: data.slice(start, end),
		page: page,
		pages: data.length / rowsPerPage,
		rowsPerPage: rowsPerPage,
		total: data.length,
	};

	return response;
};
