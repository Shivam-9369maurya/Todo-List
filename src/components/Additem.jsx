function Additem({ todoname, tododate, onDeleteclick }) {
  return (
    <div className="container items-container">
      <div className="row allrow">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger allbtn"
            onClick={() => onDeleteclick(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Additem;
