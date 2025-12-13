import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxios/UseAxiosSecure';

const ManageScholarships = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: scholarships = [], refetch} = useQuery({
        queryKey: ['scholarships'],
        queryFn: async()=>{
            const result = await axiosSecure.get('/scholarships');
            return result.data;
        }
        
    });
    console.log(scholarships)
    return (
        <div>
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Country</th>
              <th>SubjectCategory</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship, index) => (
              <tr
                className={index % 2 === 0 ? "bg-[#DAE4F4]" : "bg-[#EDF2F6]"}
                key={scholarship._id}
              >
                <th>{index + 1}</th>
                <td>{scholarship.ScholarshipName}</td>
                <td>{scholarship.UniversityName}</td>
                <td>{scholarship.Country}</td>
                <td>{scholarship.SubjectCategory}</td>
                <td className="space-y-1">
                  <button
                    onClick={() => {
                    //   setscholarshipApplication(scholarship);
                    //   setRatingValue(scholarship.rating);
                    //   scholarshipModalRef.current.showModal();
                    }}
                    className="btn btn-sm bg-[#135A1F] text-white"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={() => handelDelete(scholarship._id)}
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

export default ManageScholarships;