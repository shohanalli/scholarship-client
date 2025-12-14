import React from "react";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDownLong, FaUpLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  /* change  to Moderator */
  const handelStudent = async (id) => {
    try {
      const updateUser = {
        role: "moderator",
      };
      Swal.fire({
        title: "Are you sure?",
        text: "Updated this user role Moderator?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#419528",
        cancelButtonColor: "#c70000",
        confirmButtonText: "Updated",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/users/${id}`, updateUser);
          console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your User been Updated.",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  /* change to Admin */
  const handelModerator = async (id) => {
    try {
      const updateUser = {
        role: "admin",
      };
      Swal.fire({
        title: "Are you sure?",
        text: "Updated this user role Admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#419528",
        cancelButtonColor: "#c70000",
        confirmButtonText: "Updated",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/users/${id}`, updateUser);
          console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your User been Updated.",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  //change to student
  const handelDemotion = async (id) => {
    try {
      const updateUser = {
        role: "student",
      };
      Swal.fire({
        title: "Are you sure?",
        text: "Updated this user role student?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#419528",
        cancelButtonColor: "#c70000",
        confirmButtonText: "Updated",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/users/${id}`, updateUser);
          console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your User been Updated.",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  //handel delete user
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this Review permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c70000",
      cancelButtonColor: "#419528",
      confirmButtonText: "Deleted",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Create At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className={index % 2 === 0 ? "bg-[#DAE4F4]" : "bg-[#EDF2F6]"}
                key={user._id}
              >
                <th className=" text-center">{index + 1}</th>
                <td className=" text-center">{user.displayName}</td>
                <td className=" text-center">{user.email}</td>
                <td className=" text-center">{user.role}</td>
                <td className=" text-center">{user.createAt?.slice(0, 10)}</td>
                <td className="flex justify-center">
                 
                   {/* button for student  */}
                  {user.role === "student" && (
                    <>
                      <button
                        onClick={() => handelStudent(user._id)}
                        className="btn btn-sm  bg-[#36B647] text-white"
                      >
                        <FaUpLong />
                        Moderator
                      </button>
                      <button
                        onClick={() => handelModerator(user._id)}
                        className="btn btn-sm  bg-[#36B647] text-white"
                      >
                        <FaUpLong />
                        Admin
                      </button>
                    </>
                  )}
                  {/* button for moderator*/}
                  {user.role === "moderator" && (
                    <div className="flex gap-1">
                      <button
                        onClick={() => handelDemotion(user._id)}
                        className="btn btn-sm  bg-[#36B647] text-white"
                      >
                        <FaDownLong />
                        Student
                      </button>
                      <button
                        onClick={() => handelModerator(user._id)}
                        className="btn btn-sm  bg-[#36B647] text-white"
                      >
                        <FaUpLong />
                        Admin
                      </button>
                    </div>
                  )}
                  {/* button for moderator*/}
                  {user.role === "admin" && (
                    <div className="flex gap-1">
                      <button
                        onClick={() => handelDemotion(user._id)}
                        className="btn btn-sm  bg-[#36B647] text-white"
                      >
                        <FaDownLong />
                        Student
                      </button>
                      <button
                        onClick={() => handelStudent(user._id)}
                        className="btn btn-sm   bg-[#36B647] text-white"
                      >
                        <FaDownLong />
                        Moderator
                      </button>
                    </div>
                  )}
                  {/* delete the user  */}
                  <button
                    onClick={() => handelDelete(user._id)}
                    className="btn btn-sm bg-[#c70000] text-white"
                  >
                    Delete
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
