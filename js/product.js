const productCard = document.querySelector(".product");

let API__URL = "https://fakestoreapi.com";

async function fetchData(api) {
  let param = new URLSearchParams(window.location.search);
  let id = param.get("id");

  const data = await fetch(`${api}/products/${id}`);
  data
    .json()
    .then((res) => mapDataProd(res))
    .catch((err) => console.log(err));
}
fetchData(API__URL);

function mapDataProd(produc) {
  productCard.innerHTML = `
          <div class="product__card">
            <div class="product__img">
              <img src=${produc.image} alt="" />
            </div>
            <div class="product__info">
              <h1 class="product__info__title">title:  ${produc.title}</h1>
              <p class="product__info__desc">price:  ${produc.price}</p>
              <p class="product__info__desc">description:  ${produc.description}</p>
              <p class="product__info__desc">category:  ${produc.category}</p>
              <p class="product__info__desc">rate:  ${produc.rating.rate}</p>
              <p class="product__info__desc">count:  ${produc.rating.count}</p>
            </div>
          </div>
  `;
}
