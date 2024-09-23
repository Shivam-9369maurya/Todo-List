import { useState } from "react";

function Addtodo({ onnewitems }) {
  const [todoname, settodoname] = useState("");
  const [duedate, setduedate] = useState("");

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };

  const handledatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleaddbuttonclicked = (event) => {
    onnewitems(todoname, duedate);
    settodoname("");
    setduedate("");
  };

  return (
    <div className="container text-center">
      <div className="row allrow">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoname}
            onChange={handlenamechange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={duedate} onChange={handledatechange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success allbtn"
            onClick={handleaddbuttonclicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
