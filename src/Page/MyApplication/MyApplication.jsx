import React, { useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import UseAxiosSecure from '../../Hooks/UseAxios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';

const MyApplication = () => {
    const {user} = useAuth();
    const modalRef = useRef(null)
     const [modalApplication, setModalApplication] = useState({});
    const axiosSecure = UseAxiosSecure();
    const {data: applications = [], refetch} = useQuery({
        queryKey: ['myScholar', user?.email],
        queryFn: async () =>{
            const result = await axiosSecure.get(`/applications?email=${user?.email}`);
            return result.data
        }
    });
console.log(applications)
// application details api for modal
const handelModal = async(id)=>{
  const res = await axiosSecure.get(`/applications/${id}`);
  setModalApplication(res.data)
}
console.log(modalApplication)


//payment application scholar with my application page
const handelPayment = async (application) => {
  const paymentInfo = {
    userEmail: application.userEmail,
    applicationId: application.applicationId,
    scholarshipId: application.scholarshipId,
    scholarshipName: application.scholarshipName,
    applicationFees: application.applicationFees,
    universityName: application.universityName,
    status: application.status
  };

  Swal.fire({
  title: "Are you sure?",
  text: `Your Application Fees $ ${application.applicationFees}`,
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#419528",
  cancelButtonColor: "#C43D5A",
  confirmButtonText: "Process To pay"
}).then(async(result) => {
  if (result.isConfirmed) {
      const res = await axiosSecure.post('/create-checkout-section', paymentInfo);
        window.location.assign(res.data.url);
    Swal.fire({
      title: "Process!",
      icon: "success"
    });
  }
})
}
//delete application data
const handelDelete =(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "Delete this product permanently",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#419528",
  cancelButtonColor: "#C43D5A",
  confirmButtonText: "Deleted"
}).then(async(result) => {
  if (result.isConfirmed) {
   axiosSecure.delete(`/application/${id}`)
   .then((res)=>{
    if(res.data.deletedCount){
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    refetch();
    }
   })
  }
})
}





    return (
        <div>
<div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr className='text-center'>
        <th>#</th>
        <th>University Name</th>
        <th>University Address</th>
        <th>Feedback</th>
        <th>Status</th>
        <th>Fees</th>
        <th>Subject</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {applications.map((application, index) =>
      <tr className={index % 2 === 0 ? "bg-[#E5D8EC]" : "bg-[#E8EAEE]"} key={application._id} >
        <th>{index +1}</th>
        <td>{application.universityName}</td>
        <td>{application.universityAddress}</td>
        <td>feedback</td>
        <td>{application.status}</td>
        <td>${application.applicationFees}</td>
        <td>{application.subjectCategory}</td>
        <td className='space-x-1.5 space-y-1.5'>
          {
          application.status === "pending" && application.paymentStatus === "unpaid" ?
        <button onClick={() => handelPayment(application)} className='btn bg-[#135A1F] btn-sm  text-white'>Pay</button> :
        <button className='btn btn-sm cursor-not-allowed text-white bg-secondary/20'>paid</button>
        }
        {
          application.status === "pending" ? <button className='btn btn-sm bg-[#F5BB1F] text-white'>Edit</button> : <button className='btn btn-sm cursor-not-allowed text-white bg-secondary/20'>Edit</button>
        }
        {
         application.status === "pending" ?  <button onClick={()=> handelDelete(application._id)} className='btn btn-sm bg-[#c70000] text-white'>Delete</button> : <button className='btn btn-sm cursor-not-allowed text-white bg-secondary/20'>Delete</button>
        }
         
          <button onClick={ async()=>{
          await handelModal(application._id);
          modalRef.current.showModal();
          }
          } className='btn btn-sm bg-primary-content text-white'>Details</button>
          <button className='btn btn-sm bg-secondary/80 text-white'>Add Review</button>
        </td>
      </tr>
  )}

    </tbody>
  </table>
</div>



{/* modal for application details */}
<dialog ref={modalRef} className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>



</div>
    );
};

export default MyApplication;