import React from "react";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageApplication = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: applications = [], refetch } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Applicant Name</th>
              <th>Applicant Email</th>
              <th>University Name</th>
              <th>Payment Status</th>
              <th>Application Status</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-[#FFE6D4]" : "bg-[#FFF2EF]"
                }`}
                key={application._id}
              >
                <th>{index + 1}</th>
                <td>{application.userName}</td>
                <td>{application.userEmail}</td>
                <td>{application.universityName}</td>
                <td>
                  <span
                    className={`px-3 py-2.5 rounded text-white  ${
                      application.paymentStatus === "paid"
                        ? "bg-[#386641]"
                        : "bg-[#CF0F0F]"
                    }`}
                  >
                    {application.paymentStatus}
                  </span>
                </td>

                <td>{application.status}</td>
                <td>{application.feedback}</td>
                <td className="space-y-1 grid grid-cols-2">
                  <button className="btn py-5  btn-sm bg-[#132440] text-white">
                    Details
                  </button>
                  <button className="btn py-5 btn-sm bg-[#7B542F] text-white">
                    Feedback
                  </button>
                  <button className="btn py-5 btn-sm bg-[#5B532C] text-white">
                    Status Update
                  </button>
                  <button className="btn py-5 btn-sm bg-[#c70000] text-white">
                    Cancel
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

export default ManageApplication;
