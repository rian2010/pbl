import JobLists from "@/Components/Homepage/JobLists";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head title={props.title} />
      <Navbar user={props.auth.user} />
      <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-5 p-5">
        <JobLists jobs={props.jobs.data} />
      </div>
      <div className="flex justify-center items-center p-6">
        <Paginator meta={props.jobs.meta} />
      </div>
    </div>
  );
}
