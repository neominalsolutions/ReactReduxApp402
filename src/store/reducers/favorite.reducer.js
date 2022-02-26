export const FavoriteState = {
	favorites: [], // favorilerin başlangıç değeri
};

// bu recuder arkadaş dışarıdan bir action dinleyecek  action ismi özel
// reducer functionslarda ilk değer state ikinci değer action temsil eder.
// actiondan sadece iki tipde değer göndeririz. 1 değer type ikici değer payload:
// payload actiondan gönderilen veriyi temsil eder. type ise actionnın tipini temsil eder.
export const FavoriteReducer = (state = FavoriteState, action) => {
	console.log('favoriler', state.favorites);

	if (action.type == 'Favoriye_Ekle') {
		return {
			...state,
			// statedeki favorites üzerine action.payload dan gelen değeri ekle.
			favorites: [action.payload, ...state.favorites],
		};
	}

	// eğer if'e girmezse state değiştirme olan state döndür.
	return state;
};
