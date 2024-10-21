import ProfileDetails from '../ProfileDetails'
import './index.css'

const JobsFilterGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    locations,
    changeEmploymentType,

    changeSalaryRange,
    changeLocation,
  } = props

  const getEmploymentTypeList = () =>
    employmentTypesList.map(employ => (
      <li className="checkbox-list-items" key={employ.employmentTypeId}>
        <input
          type="checkbox"
          className="check-radio"
          id={employ.employmentTypeId}
          value={employ.employmentTypeId}
          onChange={e => changeEmploymentType(e.target.value)}
        />
        <label htmlFor={employ.employmentTypeId} className="check-label">
          {employ.label}
        </label>
      </li>
    ))

  const getLocatinsRangeList = () =>
    locations.map(eachlocation => (
      <li className="checkbox-list-items" key={eachlocation.locationId}>
        <input
          type="checkbox"
          className="check-radio"
          id={eachlocation.locationId}
          value={eachlocation.locationId}
          onChange={e => changeLocation(e.target.value)}
        />
        <label htmlFor={eachlocation.locationId} className="check-label">
          {eachlocation.location}
        </label>
      </li>
    ))

  const getSalaryRangeList = () =>
    salaryRangesList.map(salary => (
      <li className="checkbox-list-items" key={salary.salaryRangeId}>
        <input
          type="radio"
          className="check-radio"
          id={salary.salaryRangeId}
          name="salary"
          onChange={() => changeSalaryRange(salary.salaryRangeId)}
        />
        <label htmlFor={salary.salaryRangeId} className="check-label">
          {salary.label}
        </label>
      </li>
    ))

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="horizontal-line" />
      <div className="salary-container">
        <h1 className="salary-heading">Type of Employment</h1>
        <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
      </div>
      <hr className="horizontal-line" />
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul className="salary-range-container">{getSalaryRangeList()}</ul>
      </div>
      <hr className="horizontal-line" />
      <div className="salary-container">
        <h1 className="salary-heading">Location</h1>
        <ul className="salary-range-container">{getLocatinsRangeList()}</ul>
      </div>
    </div>
  )
}

export default JobsFilterGroup
