import React from "react";

function Search({ term, searchKeyword }) {
	function handleSearch(e) {
		searchKeyword(e.target.value);
	}

	return (
		<>
			<input
				type='text'
				value={term}
				placeholder='Search...'
				onChange={handleSearch}
			></input>
		</>
	);
}

export default Search;
