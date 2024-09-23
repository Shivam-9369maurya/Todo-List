import Addtodo from "./components/Addtodo";
import Appname from "./components/Appname";
import ADDitems from "./components/ADDitems";
import Welcomemessage from "./components/welcomemessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoitems, settodoitems] = useState([]);
  const handlenewitems = (itemsname, itemsdate) => {
    const newtodoitems = [
      ...todoitems,
      { name: itemsname, duedate: itemsdate },
    ];
    settodoitems(newtodoitems);
  };
  const handledeleteitem = (todoitemsname) => {
    const newtodoitems = todoitems.filter(
      (item) => item.name !== todoitemsname
    );
    settodoitems(newtodoitems);
  };
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo onnewitems={handlenewitems} />
      {todoitems.length === 0 && <Welcomemessage></Welcomemessage>}
      <ADDitems
        todoitems={todoitems}
        onDeleteclick={handledeleteitem}
      ></ADDitems>
    </center>
  );
}

export default App;
