import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Create from '@material-ui/icons/Create';
import axios from "axios";


const Reviewlist = () => {

    const navigate = useNavigate();
    const [review, set] = useState([]);
  
    useEffect(() => {
        axios
        .get("http://localhost:3000/")
        .then(({ data }) => {
            set(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <>
            <div className="button">
                <button onClick={()=>{navigate('/new')}}>Create</button>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Date-Time</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map((val,index)=>{
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{val.title}</td>
                                    <td>{val.content}</td>
                                    <td>{val.date}</td>
                                    <td><Create/></td>
                                    <td><DeleteIcon/></td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Reviewlist;