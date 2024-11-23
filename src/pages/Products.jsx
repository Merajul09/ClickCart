import { useEffect, useState } from "react";
import axios from "axios";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { handleWishlist } = useWishlist();
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `https://click-cart-server-pi.vercel.app/all-products?title=${search}&page=${page}&limit=6&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPage(Math.ceil(res.data.totalProducts / 6));
          setLoading(false);
        });
    };
    fetch();
  }, [search, brand, category, sort, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };
  const handleReset = () => {
    setBrand("");
    setCategory("");
    setSearch("");
    setSort("asc");
  };
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="my-3">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-3">
        <div>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            {uniqueCategory.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            name="brand"
            id="brand"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Brand</option>
            {uniqueBrand.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none border-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Product Title"
              aria-label="Enter Product Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="border p-4 rounded-md"
          >
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </div>
      <div>
        {loading || products === null ? (
          <Loader />
        ) : (
          <>
            {products.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center">
                <h1>No Products Found</h1>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {products.map((product) => (
                  <div key={product._id}>
                    <div className="card bg-base-100 shadow-xl">
                      <Link to={`/product/${product._id}`}>
                        <figure>
                          <img
                            className="object-cover"
                            src={product.imageURL}
                            alt={product.title}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{product.title}</h2>
                          <h2 className="card-title">
                            Price: ${product.price}
                          </h2>
                          <p>{product.description}</p>
                        </div>
                      </Link>
                      <div className="flex gap-1 mb-3 justify-evenly">
                        <button className="btn btn-secondary btn-outline">
                          Add to cart
                        </button>
                        <button
                          className="btn btn-primary btn-outline"
                          onClick={() => handleWishlist(product._id)}
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      {/* pagination */}
      <div className="flex items-center justify-center gap-3 my-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          className="btn"
          disabled={page === 1}
        >
          <HiArrowLeft />
        </button>
        <p>
          page {page} of {totalPage}
        </p>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="btn"
          disabled={page === totalPage}
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
