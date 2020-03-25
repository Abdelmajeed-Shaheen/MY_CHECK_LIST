import React from "react";
import WatchList from "./todoList/ToDoList";
import DoneTable from "./doneList/DoneTable";
import Add from "./addForm/Add";
import NavBAr from "./navBar/NavBar";
function App() {
  return (
    <>
      <NavBAr />
      <div className="container">
        <Add />
        <div className="row mt-3">
          <div className="col-md-6">
            <WatchList />
          </div>
          <div className="col-md-6">
            <DoneTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
