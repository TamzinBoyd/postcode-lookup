export const addressSearch = (postcode) => {
	return fetch(`http://localhost:8080/api?postcode=${postcode.toUpperCase()}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			if (data.length > 0) {
				return data;
			} else {
				throw new Error("No results found");
			}
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
			throw error; // rethrow error to propagate it to the caller
		});
};