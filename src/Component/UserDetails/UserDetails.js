import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import TableCreate from "../TableCreate/TableCreate";
import { motion } from "framer-motion";
const UserDetails = () => {
  const [date, setDate] = useState();

  console.log("Date", date);
  const tasks = useLoaderData();
  const { user } = useContext(AuthContext);
  const showDate = new Date();
  const displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();
  const dt = showDate.toDateString();
  const displayTime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    ":" +
    showDate.getSeconds();
  return (
    <motion.div animate={{ x: [0, 100, 0] }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-blue-400">
        {" "}
        <div className="flex content-center justify-center">
          <img src={user?.photoURL} className="rounded" alt="" />
        </div>
        <motion.div animate={{ x: [0, 100, 0] }}>
          <h2 className="text-4xl mt-4"> Name: {user?.displayName}</h2>
          <h2 className="text-3xl mt-4">UID: {user?.uid}</h2>
          <p className="text-2xl mt-3">
            Today date is: <span className="font-bold"> {dt}</span>
          </p>
          <p className="text-2xl mt-3">
            Today time is: <span className="font-bold">{displayTime}</span>
          </p>
          {/* <p>
            <input
              className="text-3xl"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </p> */}
        </motion.div>
      </div>
      <div>
        <h2 className="text-center text-4xl mt-4">Total works status</h2>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Current JOb List</th>
              <th>Status</th>
              <th>Reason</th>
              {/* <th></th> */}
              <th>Next Date</th>
              <th>SL No</th>
              <th>Things to do</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TableCreate key={task._id} task={task}></TableCreate>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>SL No</th>
              <th>Current JOb List</th>
              <th>Status</th>
              <th>Reason</th>
              {/* <th></th> */}
              <th>Next Date</th>
              <th>SL No</th>
              <th>Things to do</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </motion.div>
  );
};

export default UserDetails;
