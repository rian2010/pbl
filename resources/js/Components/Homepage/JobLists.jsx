import company from "../../../images/company.png";

const isJobs = (jobs) => {
  // const imageUrl = "/images/company.png";

  return jobs.map((data, i) => {
    return (
      <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-lg p-4" src={company} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.titles}
            <div className="badge badge-secondary">Jobfinder</div>
          </h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{data.category}</div>
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>
    );
  });
};

const noJobs = () => {
  return <div>Saat Ini Belum Ada Lowongan Yang Tersedia</div>;
};

const JobLists = ({ jobs }) => {
  return !jobs ? noJobs() : isJobs(jobs);
};

export default JobLists;
