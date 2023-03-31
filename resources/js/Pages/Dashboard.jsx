import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard({ auth, ...props }) {
  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isNotif, setIsNotif] = useState(false);

  const handleSubmit = () => {
    const data = {
      titles,
      description,
      category,
    };
    router.post("/jobs", data);
    setIsNotif(true);
    setTitles("");
    setDescription("");
    setCategory("");
  };

  useEffect(() => {
    if (!props.myJobs) {
      router.get("/jobs");
    }
    return;
  }, []);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="p-6 text-gray-900">
            {isNotif && (
              <div className="alert alert-success shadow-lg m-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{props.flash.message}</span>
                </div>
              </div>
            )}
            <input
              type="text"
              placeholder="Judul"
              className="m-3 input input-bordered w-full "
              onChange={(titles) => setTitles(titles.target.value)}
              value={titles}
            />
            <input
              type="text"
              placeholder="Deskripsi"
              className="m-3 input input-bordered w-full "
              onChange={(description) =>
                setDescription(description.target.value)
              }
              value={description}
            />
            <input
              type="text"
              placeholder="Kategori"
              className="m-3 input input-bordered w-full "
              onChange={(category) => setCategory(category.target.value)}
              value={category}
            />
            <button
              className="btn btn-primary m-3"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="p-4">
          {props.myJobs?.length > 0 ? (
            props.myJobs.map((jobs, i) => {
              return (
                <div
                  key={i}
                  className="card w-full lg:w-96 bg-base-100 shadow-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title">
                      {jobs.titles}
                      <div className="badge badge-secondary">Jobfinder</div>
                    </h2>
                    <p>{jobs.description}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-inline">{jobs.category}</div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 ">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 m-3">
                <div className="alert shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-info flex-shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Anda Belum Memiliki Lowongan</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
