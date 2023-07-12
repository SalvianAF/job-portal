import React, { useEffect, useState } from "react"
import "./index.css";
import axios from "axios";
import moment from "moment/moment";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'react-bootstrap/Spinner';

const JobList = () => {
    const [jobList, setJobList] = useState([])
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchJobsData = async () => {
        await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page}`)
        .then((response) => {
            setJobList(prevJobList => [...prevJobList, ...response.data])
            setPage(page+1);
            console.log(response.data)
            console.log(page)
            if (response.data[response.data.length - 1] == null){
                setHasMore(false)
                // console.log(response.data[response.data.length - 1])
            }
        }).catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        fetchJobsData()
    },[])

    return(
        <div className="mx-4 my-3 px-4 pt-3 job-list">
            {/* {console.log(page)} */}
            <h4 className="list-title">Job List</h4>
            <div className="table">
                <InfiniteScroll dataLength={jobList.length} next={fetchJobsData} hasMore={hasMore}  
                loader={<div className="d-flex justify-content-center"><Spinner animation="border"/></div>} 
                endMessage={<p>No more data to load.</p>}>
                
                    {jobList.map((job) => (
                        job !== null ?
                            <div className="row d-flex justify-content-between">
                                <div className="col-6 row">
                                    <div><h5>{job.title}</h5></div> 
                                    <div className="d-flex">{job.company} - &nbsp;<p>{job.type}</p></div>
                                </div>
                                <div className="col-6 d-flex align-items-end flex-column">
                                    <div className="">{job.location}</div>
                                    <div className=" ">{moment.utc(job.created_at).local().startOf('seconds').fromNow()}</div>
                                </div> 
                            </div>
                        :<></>
                    ))}
                      
                </InfiniteScroll>
            </div>
        </div>
    )
}
export default JobList