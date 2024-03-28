import React from "react";
import Tasklist from "./Tasklist";
import * as TaskStories from "./Task.stories";


export default {
    component : Tasklist,
    title: "TaskList",
    decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
    tag: ["autodocs"]
} 

export const Default = {
    args : {
        loading:false,
        tasks:[
            { ...TaskStories.Default.args.task, id:'1', title:"Task 1"},
            {...TaskStories.Default.args.task, id:'2', title:"Task 2"},
            {...TaskStories.Default.args.task, id:'3', title:"Task 3"},
            {...TaskStories.Default.args.task, id:'4', title:"Task 4"},
            {...TaskStories.Default.args.task, id:'5', title:"Task 5"},
            {...TaskStories.Default.args.task, id:'6', title:"Task 6"}
        ]
    }
}


export const withPinnedTasks = {
    args:{
        tasks:[
            ...Default.args.tasks.slice(0,3),
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
        ]
    }
}

export const loading = {
    args: {
      tasks: [],
      loading: true,
    },
  };

  export const Empty = {
    args: {
      // Shaping the stories through args composition.
      // Inherited data coming from the Loading story.
      ...loading.args,
      loading: false,
    },
  };



