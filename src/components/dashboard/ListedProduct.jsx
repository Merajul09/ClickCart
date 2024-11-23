import { Table } from "flowbite-react";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import axios from "axios";

const ListedProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useUser();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchListedProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://click-cart-server-pi.vercel.app/listed-products/${userData.email}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userData.email && token) {
      fetchListedProduct();
    }
  }, [userData.email, token]);
  return (
    <div className="overflow-x-auto">
      <h1 className="text-center font-semibold text-2xl mb-3">
        My Listed Products
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {products.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <h1>No Products Found</h1>
            </div>
          ) : (
            <>
              <Table>
                <Table.Head>
                  <Table.HeadCell>Product image</Table.HeadCell>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Edit</Table.HeadCell>
                </Table.Head>
                {products.map((list, idx) => (
                  <Table.Body className="divide-y" key={idx}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img src={list.imageURL} className="w-6 h-6" />
                      </Table.Cell>
                      <Table.Cell>{list.title}</Table.Cell>
                      <Table.Cell>{list.category}</Table.Cell>
                      <Table.Cell>{list.price}</Table.Cell>
                      <Table.Cell>
                        <button className="btn btn-secondary btn-outline btn-sm dark:text-cyan-500">
                          Delete
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ListedProduct;
