1. adım npm i bootstrap-icons
2. adım app.css dosyasına @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
3. adım Navbar Component açtık
4. adım Iconları Navbar componente tanımladık.
5. Products Linki için ProductPageComponent açtık
6. index.js dosyasına Route tanımlaması yaptık
	<Route path="products" element={<Products />} />
7. App.js dosyasına <Navbar /> ekledik.
8. Products.js dosyasında geliştirmeler yapıyoruz.
9. favorite.action.js dosyasını açtık
10. favorite.reducer.js dosyasını açtık
11. favorite reducer mystore tanıtılmalıdır. myStore dosyasın içerisinde ekleme işlemi yaptık.
12. Ürünler sayfasında kalp butonuna basıldığında action çalıştırmak için dispatch edeceğiz ki reducer üzerinden favorites state güncellensin
//  const dispatch = useDispatch();

13. Favorilerin state değişikliğini göre bilmek için redux devtools indirmemiz lazım. Böyle redux üzerindeki state takip edebiliyoruz. 

   13.1 npm i @redux-devtools/extension
   13.2 mystore.js dosyasına gideriz. buraya devtools import edebiliyoruz
   13.3 devtools çalışması için composeWithDevTools  fonksiyonunu çağırırız.

14. favori eklenince ürünler sayfasındaki favorileri dinlemeyiyiz.
15. navbarda ise favori eklenince favori adet sayısını güncellemeliyiz.
16. favori state dinlemek için useSelector kullanıyoruz.
17. favorilerin dolu kalp boş kap olmasını kontrol ettik. 
    // aşağıdaki kod ile ürün id ile favoriye atılan ürün idnin eşleşip eşleşmemesi durumuna göre kalp gösterdik.
                    {favorites.find((x) => x.id == item.id) == undefined ? (
								<i class="bi bi-heart"></i>
							) : (
								<i class="bi bi-heart-fill"></i>
							)}

18. action'a gittik removeFavorite adında bir action yazdık
19. favorite reducer Favoriden_Çıkart için else if ekledik.
