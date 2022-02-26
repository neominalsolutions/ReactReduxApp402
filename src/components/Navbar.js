import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
	const favorites = useSelector((store) => store.favoriteState.favorites);

	return (
		<div>
			<Link to="">Anasayfa</Link>
			{'  '}
			<Link to="products">Ürünlerimiz</Link>
			{'  '}
			<Link to="todos">Yapılacaklar</Link>

			<span style={{ marginLeft: '20px' }}>
				<i>
					<i class="bi bi-heart-fill"></i> {favorites.length}
				</i>
			</span>
		</div>
	);
}

export default Navbar;
