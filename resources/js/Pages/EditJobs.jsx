import Navbar from "@/Components/Navbar";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function EditJobs(props) {
  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const data = {
      id: props.myJobs.id,
      titles,
      description,
      category,
      image,
    };
    router.post("/jobs/update", data);
    setTitles("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Head title={props.title} />
      <Navbar user={props.auth.user} />
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <input
            type="text"
            placeholder="Judul"
            className="m-3 input input-bordered w-full"
            onChange={(titles) => setTitles(titles.target.value)}
            defaultValue={props.myJobs.titles}
          />
          <input
            type="text"
            placeholder="Deskripsi"
            className="m-3 input input-bordered w-full"
            onChange={(description) => setDescription(description.target.value)}
            defaultValue={props.myJobs.description}
          />
          <input
            type="text"
            placeholder="Kategori"
            className="m-3 input input-bordered w-full"
            onChange={(category) => setCategory(category.target.value)}
            defaultValue={props.myJobs.category}
          />
          <input
            type="file"
            className="file-input w-full max-w-xs m-3"
            onChange={(image) => setImage(image.target.value)}
          />
          <button
            className="btn btn-primary m-3"
            onClick={() => handleSubmit()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
