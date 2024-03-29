import { configureStore, createSlice } from '@reduxjs/toolkit';


const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];

const TaskBoxData = {
    tasks: defaultTasks,
    status: 'idle',
    error: null,
  };


const TasksSlice = createSlice({
    name: 'taskbox',
    initialState: TaskBoxData,
    reducers: {
      updateTaskState: (state, action) => {
        const { id, newTaskState } = action.payload;
        const task = state.tasks.findIndex((task) => task.id === id);
        if (task >= 0) {
          state.tasks[task].state = newTaskState;
        }
      },
    },
  });

export const { updateTaskState } = TasksSlice.actions; 

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer
    }
})

export default store;