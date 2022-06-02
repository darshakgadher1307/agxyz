import React from "react";
import { Routes, Route } from "react-router-dom";
import Reviewlist from "./Reviewlist";
import Newreview from "./NewReview";

const App = () => {
    return(
        <>  
            <Routes>
                <Route path="/" element={<Reviewlist/>}/>
                <Route path="/new" element={<Newreview/>}/>
            </Routes>
        </>
    );
}

export default App;