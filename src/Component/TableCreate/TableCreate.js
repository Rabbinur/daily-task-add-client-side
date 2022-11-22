import React from "react";

const TableCreate = ({ task }) => {
  const { SL, job, status, reason, nextDate, thinks } = task;
  console.log(thinks);
  return (
    <tr>
      <th>{SL}</th>
      <td>{job}</td>
      <td>{status}</td>
      <td>{reason}</td>
      {/* <td></td> */}
      <td>{nextDate}</td>
      <td>{SL}</td>
      <td>{thinks}</td>
    </tr>
  );
};

export default TableCreate;
