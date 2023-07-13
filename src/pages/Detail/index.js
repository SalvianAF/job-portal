import React, { useEffect, useState } from "react";
import NavbarJobs from "../../components/NavbarJobs";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Card from "../../components/Card";
import './index.css'

const Detail = (props) => {
    const [detail, setDetail] = useState({})
    let { id } = useParams(); //get id form path

    const fetchDetailJobs = async() => { //get detail data job
        await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
        .then((response) => {;
            setDetail(response.data)
        }).catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        fetchDetailJobs()
    },[])

    return(
        <div>
            <NavbarJobs/>
            <div className="mx-4 my-3">
                <a href="/" className="link"><h6><i className="bi bi-arrow-left icon-back"></i>Back</h6></a>
                <div className="content p-3">
                    <div className="header m-2 pb-3">
                        <p className="m-0">{detail.type}/{detail.location}</p>
                        <h3>{detail.title}</h3>
                    </div>

                    <div className="row my-3">
                        <div className="col-7 overflow-auto">
                            <td dangerouslySetInnerHTML={{__html: detail.description}} />
                        </div>
                        <div className="col-5">
                            <Card header={detail.company} isImg={true} body={[detail.company_logo, detail.company_url]}/>
                            <Card header={"How to Apply"} isImg={false} body={[detail.how_to_apply]} style={"warning"}/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Detail