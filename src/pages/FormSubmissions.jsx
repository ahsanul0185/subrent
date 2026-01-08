// import React, { useEffect, useState } from "react";
// import { getAllFormSubmissions } from "../firebase/actions";
// import { Loader, Eye } from "lucide-react";
// import { TfiReload } from "react-icons/tfi";

// const FormSubmissions = () => {
//   const [formSubmissions, setFormSubmissions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedSubmission, setSelectedSubmission] = useState(null);

//   const fetchFormSubmissions = async () => {
//     try {
//       setLoading(true);
//       const data = await getAllFormSubmissions();
//       setFormSubmissions(data);
//     } catch (error) {
//       console.error("Error fetching form submissions:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFormSubmissions();
//   }, []);

//   const formatDate = (timestamp) => {
//     if (!timestamp) return "N/A";
//     const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
//     return date.toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const refresh = () => {
//     fetchFormSubmissions();
//   };

//   if (loading) {
//     return (
//       <div className="h-screen w-full grid place-items-center">
//         <Loader className="animate-spin size-10 text-black" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 w-full overflow-x-auto">
//       {/* Header */}
//       <div className="flex">
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Form Submissions</h1>

//       </div>

// <div className="flex justify-end">
//           <button onClick={refresh} className="p-2 mb-2 bg-gray-100 hover:bg-gray-800 hover:text-white duration-200 cursor-pointer rounded-full">
//           <TfiReload />
//         </button>
// </div>

//       {/* Table */}
//       <div className="bg-white border border-zinc-300">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-zinc-300 bg-zinc-50">
//               <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
//                 Message
//               </th>
//               <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
//                 Submitted On
//               </th>
//               <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {formSubmissions.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="5"
//                   className="px-6 py-12 text-center text-zinc-500"
//                 >
//                   No form submissions found
//                 </td>
//               </tr>
//             ) : (
//               formSubmissions.map((submission) => (
//                 <tr
//                   key={submission.id}
//                   className="border-b border-zinc-300 hover:bg-zinc-50 transition-colors"
//                 >
//                   <td className="px-6 py-4 text-sm text-black font-medium">
//                     {submission.name}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-zinc-700">
//                     {submission.email}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-zinc-800 max-w-md">
//                     <p className="line-clamp-2">{submission.message}</p>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-zinc-700">
//                     {formatDate(submission.createdAt)}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => setSelectedSubmission(submission)}
//                       className="p-2 bg-zinc-200  hover:bg-black hover:text-white hover:border-black transition-colors mx-auto"
//                       title="View full message"
//                     >
//                       <Eye size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Summary */}
//       {formSubmissions.length > 0 && (
//         <div className="mt-4 text-sm text-zinc-600">
//           Total submissions: {formSubmissions.length}
//         </div>
//       )}

//       {/* Modal */}
//       {selectedSubmission && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white w-11/12 max-w-lg p-6 relative border border-zinc-300">
//             <button
//               onClick={() => setSelectedSubmission(null)}
//               className="absolute top-2 right-3 text-zinc-500 hover:text-black transition-colors text-2xl"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-bold text-black mb-4">
//               {selectedSubmission.name}
//             </h2>
//             <p className="text-sm text-zinc-600 mb-3">
//               <strong>Email:</strong> {selectedSubmission.email}
//             </p>
//             <p className="text-sm text-zinc-600 mb-3">
//               <strong>Submitted On:</strong> {formatDate(selectedSubmission.createdAt)}
//             </p>
//             <div className="mb-4">
//               <strong className="text-sm text-zinc-600 block mb-2">Message:</strong>
//               <p className="text-sm text-zinc-800 whitespace-pre-wrap">
//                 {selectedSubmission.message}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FormSubmissions;




import React, { useEffect, useState } from "react";
import { getAllFormSubmissions, deleteFormSubmission } from "../firebase/actions";
import { Loader, Eye, Trash2 } from "lucide-react";
import { TfiReload } from "react-icons/tfi";

const FormSubmissions = () => {
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [submissionToDelete, setSubmissionToDelete] = useState(null);

  const fetchFormSubmissions = async () => {
    try {
      setLoading(true);
      const data = await getAllFormSubmissions();
      setFormSubmissions(data);
    } catch (error) {
      console.error("Error fetching form submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFormSubmissions();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const refresh = () => {
    fetchFormSubmissions();
  };

  const handleDelete = async (id) => {
    const res = await deleteFormSubmission(id);
    if (res.success) {
      setSubmissionToDelete(null);
      await fetchFormSubmissions();
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full grid place-items-center">
        <Loader className="animate-spin size-10 text-black" />
      </div>
    );
  }

  return (
    <div className="p-8 w-full overflow-x-auto">
      {/* Header */}
      <div className="flex">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Form Submissions</h1>
      </div>

      <div className="flex justify-end">
        <button onClick={refresh} className="p-2 mb-2 bg-gray-100 hover:bg-gray-800 hover:text-white duration-200 cursor-pointer rounded-full">
          <TfiReload />
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-zinc-300">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-300 bg-zinc-50">
              <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
                Name
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
                Email
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
                Message
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
                Submitted On
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-black uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {formSubmissions.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-12 text-center text-zinc-500"
                >
                  No form submissions found
                </td>
              </tr>
            ) : (
              formSubmissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="border-b border-zinc-300 hover:bg-zinc-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-black font-medium">
                    {submission.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700">
                    {submission.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-800 max-w-md">
                    <p className="line-clamp-2">{submission.message}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700">
                    {formatDate(submission.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        className="p-2 bg-zinc-200 hover:bg-black hover:text-white hover:border-black transition-colors"
                        title="View full message"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => setSubmissionToDelete(submission)}
                        className="p-2 bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      {formSubmissions.length > 0 && (
        <div className="mt-4 text-sm text-zinc-600">
          Total submissions: {formSubmissions.length}
        </div>
      )}

      {/* View Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-lg p-6 relative border border-zinc-300">
            <button
              onClick={() => setSelectedSubmission(null)}
              className="absolute top-2 right-3 text-zinc-500 hover:text-black transition-colors text-2xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-black mb-4">
              {selectedSubmission.name}
            </h2>
            <p className="text-sm text-zinc-600 mb-3">
              <strong>Email:</strong> {selectedSubmission.email}
            </p>
            <p className="text-sm text-zinc-600 mb-3">
              <strong>Submitted On:</strong> {formatDate(selectedSubmission.createdAt)}
            </p>
            <div className="mb-4">
              <strong className="text-sm text-zinc-600 block mb-2">Message:</strong>
              <p className="text-sm text-zinc-800 whitespace-pre-wrap">
                {selectedSubmission.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {submissionToDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-sm p-6 relative">
            <button
              onClick={() => setSubmissionToDelete(null)}
              className="absolute top-2 right-3 text-zinc-500 hover:text-black transition-colors"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Confirm Deletion
            </h2>

            <p className="text-sm text-zinc-700 mb-4">
              Are you sure you want to delete the submission from <strong>{submissionToDelete.name}</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSubmissionToDelete(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => handleDelete(submissionToDelete.id)}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSubmissions;