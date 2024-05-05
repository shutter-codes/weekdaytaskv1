// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, setFilters } from './redux/actions';
import JobCard from './components/JobCard';
import FilterSection from './components/FilterSection';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { jobs, filters, loading, hasMore } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasMore && !loading) {
        dispatch(fetchJobs());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, hasMore, loading]);

  const handleFilterChange = (filterName, filterValue) => {
    dispatch(setFilters({ ...filters, [filterName]: filterValue }));
  };

  const filteredJobs = jobs.filter((job) => {
    return Object.keys(filters).every((filterName) => {
      const filterValue = filters[filterName];
      if (!filterValue) return true;

      const jobValue = job[filterName];
      if (!jobValue) return false;

      if (Array.isArray(filterValue)) {
        return filterValue.includes(jobValue);
      } else {
        return filterValue === jobValue;
      }
    });
  });

  return (
    <div className="App">
      <FilterSection filters={filters} onFilterChange={handleFilterChange} />
      <div className="job-cards">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default App;