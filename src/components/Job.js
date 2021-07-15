import arrow from '../assets/right-arrow.svg';

function Job({ title, company, location, time, description, text }) {
  return (
    <div className="job-card">
      <div className="row mb-2 justify-content-between">
        <div className="col-8">
          <h6 className="fw-bold text-blue">{title}</h6>
          <p>{company} &nbsp;&nbsp;<span className="text-secondary">{location}</span></p>
        </div>
        <div className="col-3 text-secondary">
          <p>{time}</p>
        </div>
      </div>
      <div className="row job-description">
        <div className="col-10">
          <p className="job-description text-secondary">{description}<br />{text}</p>
        </div>
        <div className="col-2">
          <button className="btn btn-primary text-white see-more">
            <svg><use xlinkHref={`${arrow}#icon`} /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job;
