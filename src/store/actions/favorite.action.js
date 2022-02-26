export const addFavorite = (product) => {
	return {
		type: 'Favoriye_Ekle',
		payload: product,
	};
};

export const removeFavorite = (productId) => {
	return {
		type: 'Favoriden_Çıkart',
		payload: { productId },
	};
};
