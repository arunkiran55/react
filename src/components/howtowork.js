import React from "react";

function Howtowork(){
    const object = [
        {
        "title":"sign up",
        "image":"https://ldafdnfoaijfdoi.com/audhfuiadfn.jpg"
        },
        {
        "title":"Lookup or Add Patient",
        "image":"https://ldafdnfoaijfdoi.com/audhfuiadfn.jpg"
        },
        {
        "title":"Review Recommendations",
        "image":"https://ldafdnfoaijfdoi.com/audhfuiadfn.jpg"
        }
    ];

    const objmap = object.map((item)=>{
            return(
                <div className="card">
                    <div className="d-flex flex-row justify-content-center">
                        <h2>{item.title}</h2>
                        <p>{item.image}</p>
                    </div>
                </div>
            )
        })
    
    return(
        <div>
            <p>How to works</p>
            <div>
                {objmap}
            </div>
        </div> 
    )
}

export default Howtowork;
