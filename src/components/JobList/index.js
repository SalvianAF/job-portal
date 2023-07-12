import React from "react"
import "./index.css";

const JobList = () => {
    return(
        <div className="mx-4 my-3 px-4 pt-3 job-list">
            <h4 className="list-title">Job List</h4>
            <table class="table">
                <tbody>
                    <tr className="row d-flex justify-content-between">
                        <div className="col-6 row">
                            <th><h5>Data Engineer</h5></th> 
                            <td className="d-flex">Trade Republic - <p>Full time</p></td>
                        </div>
                        <div className="col-6 d-flex align-items-end flex-column">
                            <td className="">Berlin</td>
                            <td className=" ">1 day ago</td>
                        </div>
                        
                    </tr>
                    {/* <tr>
                    <th >2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th>3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
export default JobList