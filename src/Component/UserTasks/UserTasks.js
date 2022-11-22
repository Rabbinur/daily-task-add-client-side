import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserTasks = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const [date, setDate] = useState();
  console.log("Date", date);
  const handleAddTasks = (event) => {
    event.preventDefault();
    console.log(users);

    //fetching data store to server
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //   toast.success("Task added Successfully", {
          //     position: "top-center",
          //   });
          alert("Task added Successfully"); //alert message
          event.target.reset();
        }
        console.log(data);
      });
  };

  //blur use korle sob ekbare neoa jai
  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...users }; //set users value into newuser
    newUser[field] = value; //newusers vitore feild set kore then value set
    setUsers(newUser);

    console.log(value, field);

    // console.log(event.target);
  };
  return (
    <div>
      <div className=" grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className=" lg:text-left card shadow-2xl bg-base-100 hover:shadow-violet-600">
          <h2 className="text-center text-4xl mt-16 ">Hlw</h2>
          <h3 className="text-center text-4xl mt-6 ">{user?.displayName}</h3>
          <p className="text-center text-3xl mt-6 ">Input Your daily Tasks </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover:shadow-violet-600 py-12">
          <Form onSubmit={handleAddTasks} className="card-body">
            <label className="label" htmlFor="">
              SL No{" "}
            </label>
            <input
              type="SL"
              onChange={handleInputBlur}
              name="SL"
              placeholder="SL No"
              className="input input-bordered"
              required
            />
            <br />
            <label htmlFor="">Current Job list </label>
            <input
              type="job"
              onChange={handleInputBlur}
              name="job"
              placeholder="Current Job list"
              className="input input-bordered"
              required
            />
            <br />
            <label htmlFor="">Status</label>
            <input
              type="status"
              onChange={handleInputBlur}
              name="status"
              placeholder="status"
              className="input input-bordered"
              required
            />
            <br />
            <label htmlFor="">Reason</label>
            <input
              type="reason"
              onChange={handleInputBlur}
              name="reason"
              placeholder="reason"
              className="input input-bordered"
              required
            />
            <br />
            <label htmlFor="">Next Date</label>
            <input
              type="date"
              onChange={handleInputBlur}
              name="nextDate"
              placeholder="nextDate"
              className="input input-bordered"
              required
            />
            <br />
            <label htmlFor="">Thinks To Do</label>
            <input
              type="text "
              onChange={handleInputBlur}
              name="thinks "
              placeholder="thinks "
              className="input input-bordered"
              required
            />
            <br />
            <input
              type="submit"
              value="Add Tasks"
              className="btn btn-primary"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserTasks;
