import React, { useContext } from 'react';
import Cookies from 'universal-cookie/es6';
import { Context } from '../helpers/context/context';

const cookie = new Cookies();

const TaskForm = ({taskCreated}) => {
  const { selectedTask, setSelectedTask } = useContext(Context);

  const create = async (e) => {
      e.preventDefault();
      await fetch(`${process.env.RESTAPI_URL}api/tasks/`, {
          method: "POST",
          body: JSON.stringify({ title: selectedTask.title }),
          headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${cookie.get("access_token")}`,
          },
      }).then((res) => {
          if (res.status === 401) {
              alert("error");
          }
      });
      setSelectedTask({ id: 0, title: "" });
      taskCreated();
    };

    const update = async (e) => {
        e.preventdefault();
        await fetch(`${process.env.RESTAPI_URL}api/tasks/${selectedTask.id}/`, {
            method: "PUT",
            body: JSON.stringify({ title: setSelectedTask.title }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${cookie.get("access_token")}`,
            },
        }).then((res)=> {
            if (res.status === 401) {
                alert("error");
            }
        });
        setSelectedTask({ id: 0, title: "" });
        taskCreated();
    };


  return (
      <>
        <form onSubmit={selectedTask.id === 0 ? create : update}>
            <input 
                type="text"
                value={selectedTask.title}
                onChange={(e) => {
                    setSelectedTask({ ...selectedTask, title: e.target.value})
                }}
            />
            <button type="button">
                {selectedTask.id === 0 ? "create" : "update"}
            </button>
        </form>
      </>
  )
}


export default TaskForm