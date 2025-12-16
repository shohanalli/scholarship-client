import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllReviews = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: reviews = [], refetch} = useQuery({
        queryKey: ['reviews'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/all-reviews');
            return res.data
        }
    })
    // deleted a review 
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
            axiosSecure.delete(`/reviews/${id}`).then((res) => {
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
        <table className="table table-zebra">
          <thead>
            <tr >
              <th>#</th>
              <th>Reviewer Name</th>
              <th>Scholarship Name</th>
              <th>Review Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-[#FFE6D4]" : "bg-[#FFF2EF]"
                }`}
                key={review._id}
              >
                <th>{index + 1}</th>
                <td>{review.userName}</td>
                <td>{review.scholarshipName}</td>

                <td>{review.reviewComment}</td>
                <td className="space-y-1 items-end">
                  <button 
                  onClick={()=>handelDelete(review._id)}
                  className="btn btn-sm bg-[#c70000] text-white">
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

export default AllReviews;