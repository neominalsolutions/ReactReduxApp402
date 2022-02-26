import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<Link to="">Anasayfa</Link>
			{'  '}
			<Link to="products">Ürünlerimiz</Link>
			{'  '}
			<Link to="todos">Yapılacaklar</Link>

			<span style={{ marginLeft: '20px' }}>
				<i>
					<i class="bi bi-heart-fill"></i> 3
				</i>
			</span>
		</div>
	);
}

export default Navbar;
