import Axios from "axios";
import { useState, useEffect } from "react";




const Comments= () => {
    const [reimbursementForm, setReimbursementForm] = useState([]);




    useEffect(() =>{
    // const getForm = () => {
        Axios.get("http://localhost:3001/form").then((response) => {
          setReimbursementForm(response.data);
        });
    //   };
    });

    return (
<div>
    {reimbursementForm.map((val, key) => {
        return (
          <div className="form">
            <div>
              <h3>Request #: {val.requestno}   </h3>
              <h3>Full Name: {val.fullname}</h3>
              <h3>Reason: {val.reason}</h3>
              <h3>Amount: {val.amount}</h3>
              <h3>Summary: {val.summary}</h3>
              <h3>Comments: {val.comments}</h3>
            </div>
          </div>
          
        );
      })}
</div>
      );





};
export default Comments;