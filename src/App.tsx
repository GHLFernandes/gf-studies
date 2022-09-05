import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import ITask from './types/task';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: inline;
  margin: 20px;
  text-align: initial;
`;

function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selectTask, setSelectTask] = useState<ITask>();

  const handleSubmit = (task:any) => {
    setTasks([...tasks, task])
  }

  const handleTask = (task:ITask) => {
    setSelectTask(task);
    setTasks(tasks => tasks.map( item => ({
      ...item,
      selected: task.id === item.id ? true : false
    })))
  };

  const finishTask = () => {
    if(selectTask){
      setSelectTask(undefined);
      setTasks(tasks => tasks.map(item => {
        if(item.id === selectTask.id){
          return {
            ...item,
            selected: false,
            completed: true
          }
        }
        return item;
      }))
    }
  }

  return (
    <StyledApp>
      <Form onSubmit={handleSubmit}/>
      <List tasks={tasks} selected={selectTask} onClick={handleTask}/>
      <Timer selected={selectTask} finishTask={finishTask}/>
    </StyledApp>
  );
}

export default App;
