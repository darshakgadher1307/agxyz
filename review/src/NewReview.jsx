import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Newreview = () => {

    const [review, set] = useState({
        title: "",
        content: "",
    });

    const navigate = useNavigate();

    const ipEvent = (e) =>{
        const {name,value} = e.target;

        set((prev) =>{
            return{
                ...prev,
                [name]: value,
            }
        });

        console.log(review);

    }

    const onsubmit = (obj) => {
        axios.post(
            'http://localhost:3000/new/create', 
            obj)
            .then(res => {
                if (res.status === 200)
                  alert('Student successfully created')
                else
                  Promise.reject()
              })
              .catch(err => alert('Something went wrong'))
    }

    const resetData = () => {
        set({
            title: "",
            content: "",
        })
    }

    return(
        <>
        <h1>Create Review</h1>
        <div className="createDiv">
            <form action="/create" method="POST" className="create">

                <input 
                type='text'  
                name = "title"
                value={review.title} 
                placeholder="Title"
                onChange={ipEvent}
                />

                <textarea 
                rows='3'
                name="content"
                value={review.content} 
                placeholder="Content"
                onChange={ipEvent}
                />


                <div className="button">
                    <button type="submit" onSubmit={onsubmit}>Save</button>
                    <button type="button" onClick={resetData}>Reset</button>
                    <button type="button" onClick={()=>{navigate('/')}}>Cancel</button>
                </div>
                

            </form>
        </div>
        </>
    );
}

export default Newreview;