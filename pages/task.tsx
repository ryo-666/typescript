import Link from 'next/link';
import React, {useEffect} from 'react';
import useSWR from 'swr';
import TaskForm from '../components/TaskForm';
import Provider from '../helpers/context/context';
import Task from "../components/Task";

const fetcher = (url) => fetch(url).then((res) => res.json());
const API = `${process.env._RESTAPI_URL}api/list-task/`;


const TaskPage= ({ staticfilterdTasks }) => {
  const { data: tasks, mutate } = useSWR(API, fetcher, {
    initialData: staticfilterdTasks,
  });
  const filteredTasks = tasks?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  useEffect(() => {
    mutate();
  }, []);

  return (
    <>
      <Provider>
      <TaskForm taskCreated={mutate} />
      </Provider>
      <ul>
          {filteredTasks &&
            filteredTasks.map((task) => (
              <Task key={task.id} task={task} taskDeleted={mutate} />
            ))}
        </ul>
      <Link href="/top">
        トップへ戻る
      </Link>
    </>
  )
}


export default TaskPage