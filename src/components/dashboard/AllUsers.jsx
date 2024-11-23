import { Table } from "flowbite-react";
import Loader from "../Loader";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

const AllUsers = () => {
  const { allUserData } = useUser();
  const { loading } = useAuth();
  console.log(allUserData);
  return (
    <div className="overflow-x-auto">
      <h1 className="text-center font-semibold text-2xl mb-3">Users List</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {allUserData.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <h1>No Users Found</h1>
            </div>
          ) : (
            <>
              <Table>
                <Table.Head>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Email</Table.HeadCell>
                  <Table.HeadCell>Role</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                {allUserData.map((list, idx) => (
                  <Table.Body className="divide-y" key={idx}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {list.name}
                      </Table.Cell>
                      <Table.Cell>{list.email}</Table.Cell>
                      <Table.Cell>{list.role}</Table.Cell>
                      <Table.Cell>{list.status}</Table.Cell>
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

export default AllUsers;
