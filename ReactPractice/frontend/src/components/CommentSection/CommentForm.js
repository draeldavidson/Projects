//Comment form is just the post request
import { useState } from "react";
import Axios from "axios";


function CommentForm() {

      //THIS SECTION HAS THE STATES FOR THE FORM INPUT 
  const [empid, setEmpid] = useState();
  const [fullname, setFullname] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState();
  const [summary, setSummary] = useState("");

 

const addForm = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/forminfo", {
        empid: empid,
        fullname: fullname,
        reason: reason,
        amount: amount,
        summary: summary,
    }).then(() => {
        setEmpid("");
        setFullname("");
        setReason("");
        setAmount("");
        setSummary("");
      
    })
  };


return(
    <div className="container" id="container1">
    <div className="input-container">
    <form onSubmit={addForm}>

      <label>Employee Id:</label>
      <input
        type="text" name="empid" required
        value={empid}
        onChange={(event) => {
          setEmpid(event.target.value);
        }}
      />
      
      <label>Full Name:</label>
      <input
        type="text" name="fullname" required
        value={fullname}
        onChange={(event) => {
          setFullname(event.target.value);
        }}
      />
      <label>Reason:</label>
      <input
        type="text" name="reason" required
        value={reason}
        onChange={(event) => {
          setReason(event.target.value);
        }}
      />
      <label>Amount:</label>
      <input
        type="number" name="amount" required
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <label>Summary:</label>
      <input
        type="text"  name="summary" required
        value={summary}
        onChange={(event) => {
          setSummary(event.target.value);
        }}
      />
         
 
    <button className="button" type="submit" class="button"> Submit </button>
    </form>
    </div>
    </div>
)




}
export default CommentForm;