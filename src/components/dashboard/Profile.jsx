import useUser from "../../hooks/useUser";

const Profile = () => {
  const user = useUser();
  const role = user.role;
  console.log(role);
  return (
    <div className="flex justify-center items-center h-[80vh] w-[50vw]">
      <div className="bg-white shadow-lg rounded-2xl w-full">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={
                user?.photoURL ||
                "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full">
            {user?.role}
          </p>
          <p className="mt-1 p-1 px-2 text-sm bg-gray-200 rounded-full">
            <span className="text-gray-600">Status:</span>{" "}
            <span className="text-pink-500">{user?.status}</span>
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?._id}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">{user?.name}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
                  Update Profile
                </button>
                <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
