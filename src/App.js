import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CircularProgress } from '@mui/material';

// styles
import "./App.css";
// components
import Card from "./components/Card";
import FilterGroup from "./components/FilterSection"
// utils & static data
import { filteredJobs } from "./utils/service";
// api
import  {fetchJdList}  from "../src/api/client.js"

function App() {
  const [data, setData] = useState([]);

  const [allJobs, setAllJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const filters = useSelector((state) => state.filters);

  const fetchJobList = async () => {
    try {
      const body = JSON.stringify({
        limit: 24,
        offset: offset,
      });
      const result = await fetchJdList(body);

      if (result?.totalCount > 0) {
        setData([...allJobs, result?.jdList]);
      }
      setAllJobs((prevJobs) => [...prevJobs, ...result.jdList]);
      setOffset((prevOffset) => prevOffset + 10);

      if (result?.jdList.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("fetchJobList", error);
    }
  };

  useEffect(() => {
    fetchJobList();
  }, []);

  useEffect(() => {
    setData(filteredJobs(allJobs, filters));
  }, [allJobs, filters]);

  return (
    <div className="App">
     
     <div className="home">Weekday Task</div>

      <FilterGroup />

      <InfiniteScroll
        dataLength={data?.length}
        next={fetchJobList}
        hasMore={hasMore}
        loader={
          <Box display="flex" justifyContent="center" mt={2} minHeight="80px">
            <CircularProgress size={24} style={{ marginRight: '8px', color: 'green' }} />
            Fetching Available jobs...
          </Box>
        }
        endMessage={
          <Box textAlign="center" mt={2}>
            <p>No more jobs to load</p>
          </Box>
        }
        scrollThreshold={0.9}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          {data?.map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={5} lg={4} xl={3}>
              <Card key={job.jdUid} data={job} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default App;
