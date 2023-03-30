import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth, ...promps }) {
  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    const data = {
      titles,
      description,
      category,
    };
    router.post("/jobs", data);
  };
  console.log("promps last :", promps)

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
            <input
              type="text"
              placeholder="Judul"
              className="m-3 input input-bordered w-full "
              onChange={(titles) => setTitles(titles.target.value)}
            />
            <input
              type="text"
              placeholder="Deskripsi"
              className="m-3 input input-bordered w-full "
              onChange={(description) =>
                setDescription(description.target.value)
              }
            />
            <input
              type="text"
              placeholder="Kategori"
              className="m-3 input input-bordered w-full "
              onChange={(category) => setCategory(category.target.value)}
            />
            <button
              className="btn btn-primary m-3"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
