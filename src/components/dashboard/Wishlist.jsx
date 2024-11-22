import { Table } from "flowbite-react";
import Loader from "../Loader";
import useWishlist from "../../hooks/useWishlist";

const Wishlist = () => {
  const { wishlists, loading } = useWishlist();
  return (
    <div className="overflow-x-auto">
      <h1 className="text-center font-semibold text-2xl mb-3">My Wishlist</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {wishlists.length === 0 ? (
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
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                {wishlists.map((list, idx) => (
                  <Table.Body className="divide-y" key={idx}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img src={list.imageURL} className="w-6 h-6" />
                      </Table.Cell>
                      <Table.Cell>{list.title}</Table.Cell>
                      <Table.Cell>{list.category}</Table.Cell>
                      <Table.Cell>{list.price}</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Delete
                        </a>
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

export default Wishlist;
