import Task from "./Task";

function TaskList(props) {
  const active = props.tasks.filter((task) => task.visable);
  active.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  const done = props.tasks.filter((task) => task.done);
  done.sort((a, b) => b.data_finish - a.data_finish);

  const tasksActive = active.map((task) => (
    <Task
      key={task.id}
      data={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const tasksDone = done.map((task) => (
    <Task
      key={task.id}
      data={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <div>
      <div>
        <h2>Zadania do zrobienia</h2>
        {tasksActive.length > 0 ? tasksActive : <p>Nie masz żdanych zadań</p>}
      </div>
      <div>
        <h2>Zadania zrobione ({tasksDone.length})</h2>
        {tasksDone}
      </div>
    </div>
  );
}
export default TaskList;
