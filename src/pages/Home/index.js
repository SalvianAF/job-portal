import React, {useState, useEffect} from "react";
import NavbarJobs from "../../components/NavbarJobs";
import './index.css'
import axios from "axios";
import moment from "moment/moment";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'react-bootstrap/Spinner';
import { Button, Form } from "react-bootstrap";
import  { Link, NavLink } from 'react-router-dom'


const Home = (props) => {
    const [jobList, setJobList] = useState([])
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [isFullTime, setIsFullTime] = useState(false)
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchJobsData = async () => { //get job list
        await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&full_time=${isFullTime}&page=${page}`)
        .then((response) => {
            setJobList(prevJobList => [...prevJobList, ...response.data])
            setPage(page+1);
            if (response.data[response.data.length - 1] == null || response.data.length < 10){
                setHasMore(false)
            }
        }).catch(err => {
            setHasMore(false)
            console.error(err);
        });
    }

    const filterJobs = () =>{ //reset
        setPage(1);
        setJobList([])
    }

    useEffect(() => {  //get data when page is changing
        fetchJobsData()
    },[page])
    

    return(
        <div>
            <NavbarJobs/>

            {/* Filter */}
            <Form className="row mx-2 mt-4">
                <Form.Group className="col-4">
                    <Form.Label><h6 className="m-0">Job Description</h6></Form.Label>
                    <Form.Control type="text" placeholder="Filter by title, benefits, companies, expertise" value={description} 
                    onChange={(e) => {setDescription(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="col-4">
                    <Form.Label><h6 className="m-0">Location</h6></Form.Label>
                    <Form.Control type="text" placeholder="Filter by city, state, zip code, or country" value={location} 
                    onChange={(e) => {setLocation(e.target.value)}} />
                </Form.Group>
                <Form.Group className="col-2 checkbox" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Full Time Only" style={{fontWeight:600}} checked={isFullTime} onChange={() => setIsFullTime(!isFullTime)}/>
                </Form.Group>
                <Button variant="outline-primary" className="col-2 btn-search" onClick={() => filterJobs()}>
                    Search
                </Button>
            </Form>

            {/* Job List*/}
            <div className="mx-4 my-3 px-4 pt-3 content">
            <h3 className="list-title">Job List</h3>
            <div className="table">
                <InfiniteScroll dataLength={jobList.length} next={fetchJobsData} hasMore={hasMore}  
                loader={<div className="d-flex justify-content-center"><Spinner animation="border"/></div>} 
                endMessage={<p>No more data to load.</p>}>
                
                    {jobList.map((job) => (
                        job !== null ?
                            <div className="row d-flex justify-content-between">
                                <div className="col-6 row">
                                    <a href={"/"+job.id} className="link"><h5>{job.title}</h5></a> 
                                    <div className="d-flex">{job.company}
                                        {job.type === "Full Time"?
                                            <>- &nbsp; <p className="success-bold">{job.type}</p></>    
                                        : <></>
                                        }
                                        
                                     </div>
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
        </div>
    )
}
export default Home;