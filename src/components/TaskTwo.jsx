import React from "react";
import TableAccordion from "./Accordion";
import "../styles/task-2.css";
import fetchData from "../assets/data";

function TaskTwo() {
  const tableData = fetchData();

  return (
    <div className="task2">
      <div className="table-container">
        {tableData.map((data) => (
          <TableAccordion key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default TaskTwo;
