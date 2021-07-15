import Logo from './components/Logo';
import Job from './components/Job';

import { companies, jobs } from './data.js';

import './App.scss';
import arrow from './assets/right-arrow2.svg';

function App() {
  return (
    <main>
      <div className="cover-image">
        <div className="container">
          <div className="row">
            <div className="col-md cover-text text-white">
              <h1>Juniors make IT work.</h1>
              <p>Hire and invest in highly skilled juniors now.</p>
              <button className="btn btn-lg btn-primary shadow-sm">Post Offer Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container second">
        <div className="row mb-3">
          <div className="col">
            <h1 className="fw-bold">Newest Job Offers</h1>
          </div>
          <div className="col">
            <p className="text-end text-blue">
              <b>View all job offers</b>&nbsp;
              <span className="more-jobs-arrow">
                <svg><use xlinkHref={`${arrow}#icon`} /></svg>
              </span>
            </p>
          </div>
        </div>
        <div className="row jobs mb-5">
          {jobs.map(job => <div className="col-md-4 job-card-wrapper"><Job {...job} /></div>)}
        </div>
        <h1 className="fw-bold mb-3">Featured Companies</h1>
        <div className="row">
          {companies.map(company => <div className="col-md"><Logo title={company} /></div>)}
        </div>
      </div>
    </main>
  );
}

export default App;
