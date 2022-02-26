import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/actions/favorite.action';

function Products() {
	const products = [
		{
			id: '1', // küsüratlarını aldık,
			name: 'Ürün 1',
			price: 10,
		},
		{
			id: '2', // küsüratlarını aldık,
			name: 'Ürün 2',
			price: 20,
		},
		{
			id: '3', // küsüratlarını aldık,
			name: 'Ürün 3',
			price: 40,
		},
		{
			id: '4', // küsüratlarını aldık,
			name: 'Ürün 4',
			price: 22,
		},
		{
			id: '5', // küsüratlarını aldık,
			name: 'Ürün 5',
			price: 24,
		},
		{
			id: '6', // küsüratlarını aldık,
			name: 'Ürün 6',
			price: 94,
		},
		{
			id: '7', // küsüratlarını aldık,
			name: 'Ürün 7',
			price: 12,
		},
		{
			id: '8', // küsüratlarını aldık,
			name: 'Ürün 8',
			price: 35,
		},
		{
			id: '9', // küsüratlarını aldık,
			name: 'Ürün 9',
			price: 45,
		},
		{
			id: '10', // küsüratlarını aldık,
			name: 'Ürün 10',
			price: 32,
		},
		{
			id: '11', // küsüratlarını aldık,
			name: 'Ürün 11',
			price: 23,
		},
		{
			id: '12', // küsüratlarını aldık,
			name: 'Ürün 12',
			price: 92,
		},
	];

	const dispatch = useDispatch(); // actionları çalıştırmamızı sağlar
	const favorites = useSelector((store) => store.favoriteState.favorites);
	console.log('favorites', favorites);

	const addToFavorite = (item) => {
		console.log('eklenecek', item);
		// dispacth de bu action çağar ve içerisine item gönder

		// buradan gelen item.id favori listesinde var mı ?  varsa favoriye eklenmiştir yoksa favoriden kaldırılmış yada favoriye hiç eklenmemiştir.

		const exist = favorites.find((x) => x.id == item.id);

		if (exist) {
			// favorinin içinde ürün varsa
			dispatch(removeFavorite(item.id));
		} else {
			dispatch(addFavorite(item)); // favoriye ekle
		}
	};

	// fragment da stil tanımlanamaz
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				margin: '2em',
				flexWrap: 'wrap',
			}}
		>
			{products.map((item) => {
				return (
					<div
						style={{
							padding: '2em',
							margin: '2em',
							border: '1px solid gray',
							borderRadius: '3px',
							position: 'relative',
						}}
					>
						<div
							onClick={() => addToFavorite(item)}
							style={{
								position: 'absolute',
								right: '10px',
								top: '10px',
								cursor: 'pointer',
							}}
						>
							{favorites.find((x) => x.id == item.id) == undefined ? (
								<i class="bi bi-heart"></i>
							) : (
								<i class="bi bi-heart-fill"></i>
							)}
						</div>
						<div>{item.name}</div>
						<div>Fiyat : {item.price} ₺</div>
					</div>
				);
			})}
		</div>
	);
}

export default Products;
