import Axios from "axios";
import { useState, useEffect } from "react";




const AdminComments= () => {
  const [reimbursementForm, setReimbursementForm] = useState([]);
  const [newComments, setNewComments] = useState("");




  useEffect(() =>{
  // const getForm = () => {
      Axios.get("http://localhost:3001/form").then((response) => {
        setReimbursementForm(response.data);
      });
  //   };
  });

  const updateComments = (id) => {
    Axios.put("http://localhost:3001/update", { comments: newComments, id: id }).then(
      (response) => {
        setReimbursementForm(
            reimbursementForm.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  requestno: val.requestno,
                  reason: val.reason,
                  fullname: val.fullname,
                  amount: val.amount,
                  summary: val.summary,
                  comments: newComments,
                }
              : val;
          })
        );
      }
    );
  };


  const deleteForm = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setReimbursementForm(
        reimbursementForm.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  return (
<div>
  {reimbursementForm.map((val, key) => {
      return (
        <div  className="form">
        <div key={val.id}>

        <h3>Request #: {val.id}   </h3>
            <h3>Request #: {val.requestno}   </h3>
            <h3>Full Name: {val.fullname}</h3>
            <h3>Reason: {val.reason}</h3>
            <h3>Amount: {val.amount}</h3>
            <h3>Summary: {val.summary}</h3>
            <h3>Comments: {val.comments}</h3>
          
          <div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => {
                    // THIS IS CHANGE EVENT WHERE YOU CAN INPUT THE CHANGE YOU WANT IN THE COMMENT
                    setNewComments(event.target.value);
                  }}
                />
                {/*THIS BUTTON TRIGGERS THE PUT REQUEST */}
                <button
                  onClick={() => {
                    updateComments(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
                  {/*THIS BUTTON TRIGGERS THE DELETE REQUEST */}
                <button
                  onClick={() => {
                    deleteForm(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
              </div>
        </div>
        
      );
    })}
</div>
    );

};
export default AdminComments;