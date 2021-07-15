import briefcase from '../assets/briefcase.svg';

function Logo({ title }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="company-wrapper mb-2">
        <div className="logo text-secondary">
          <svg><use xlinkHref={`${briefcase}#icon`} /></svg>
        </div>
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default Logo;
