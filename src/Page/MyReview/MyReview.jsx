import React, { useRef, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Rating } from "primereact/rating";

const MyReview = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const reviewModalRef = useRef(null);
  const { handleSubmit, register, reset } = useForm();
  //handel star valu for review
  const [ratingValue, setRatingValue] = useState(null);
  const [reviewApplication, setReviewApplication] = useState(null);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["myReview", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/reviews?email=${user?.email}`);
      return result.data;
    },
  });
  console.log(reviews);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this product permanently",
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
  // edit your review handel button
  
  const handelReviewFrom = async (data) => {
    try {
      const updateReview = {
        reviewComment: data.reviewText,
        rating: ratingValue,
      };

 await axiosSecure.patch(`/reviews/${reviewApplication._id}`, updateReview);

        Swal.fire({
          title: "Success!",
          text: "Your review has been updated",
          icon: "success",
        });
        reviewModalRef.current.close();
        reset();
        setRatingValue(null);
        setReviewApplication(null);
        refetch();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Scholarship Name</th>
              <th> University Name</th>
              <th>Review Comment</th>
              <th>Review Date</th>
              <th> Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr
                className={index % 2 === 0 ? "bg-[#e9e0ee]" : "bg-[#E8EAEE]"}
                key={review._id}
              >
                <th>{index + 1}</th>
                <td>{review.scholarshipName}</td>
                <td>{review.scholarshipName}</td>
                <td>{review.reviewComment}</td>
                <td>{review.reviewDate}</td>
                <td>{review.rating}</td>
                <td className="space-y-1">
                  <button
                    onClick={() => {
                      setReviewApplication(review);
                      setRatingValue(review.rating);
                      reviewModalRef.current.showModal();
                    }}
                    className="btn btn-sm bg-[#135A1F] text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handelDelete(review._id)}
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
      {/* modal section for editing */}
      <dialog
        ref={reviewModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box text-center p-3">
          <h3 className="font-bold text-2xl text-center">Change Your Review</h3>
          <form method="dialog">
            <button className="btn btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(handelReviewFrom)}
            className="py-5"
          >
            <div>
              <div className="card flex justify-center items-center">
                <label className="block text-lg font-bold">Change Rating</label>
                <Rating
                  value={ratingValue}
                  onChange={(e) => setRatingValue(e.value)}
                  required
                />
              </div>
            </div>
            <div className="py-3">
              <label className="text-left text-secondary text-base font-bold">
                Edit your Review
              </label>
              {/* get review text value */}
              <textarea
                className="textarea w-full md:w-[80%] textarea-secondary outline-none  "
                rows="4"
                defaultValue={reviewApplication?.reviewComment || ""}
                required
                {...register("reviewText", { required: true })}
              ></textarea>
            </div>
            <button className="btn bg-secondary text-white">
              Update Review
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyReview;
