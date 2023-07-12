import React from "react";
import NavbarJobs from "../../components/NavbarJobs";
import Filter from "../../components/Filter";
import JobList from "../../components/JobList";

const Home = (props) => {
    return(
        <div>
            <NavbarJobs/>
            <Filter/>
            <JobList/>
        </div>
    )
}
export default Home;