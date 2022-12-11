import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableCreate from "../TableCreate/TableCreate";
import UserTasks from "../UserTasks/UserTasks";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
  const tasks = useLoaderData();
  // const [displaytasks, setDisplaytasks] = useState(tasks);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-center text-4xl mb-10">
        Hey User.. !! Add Your Daily Tasks
      </h4>
      <div className="text-center text-lg">
        <a href="/tasks">
          <button className="btn  btn-outline mr-3">Crew</button>
        </a>
        <a href="/tasks">
          {" "}
          <button className="btn  btn-outline btn-primary mr-3">Weero</button>
        </a>
        <a href="/tasks">
          <button className="btn  btn-outline btn-secondary mr-3 ">
            {" "}
            Weepoka
          </button>
        </a>

        <a href="/tasks">
          {" "}
          <button className="btn  btn-outline btn-accent mr-3">BTL</button>
        </a>
        <a href="/tasks">
          {" "}
          <button className="btn  btn-outline btn-ghost mr-3">Circle</button>
        </a>
      </div>
      <div>
        <h2 className="text-center mt-10 text-lg ">
          Here is the All the tasks
        </h2>
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
      di
    </motion.div>
  );
};

export default Home;
