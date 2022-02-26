export const addFavorite = (product) => {
	return {
		type: 'Favoriye_Ekle',
		payload: product,
	};
};
