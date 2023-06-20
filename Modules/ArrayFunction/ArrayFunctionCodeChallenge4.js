/**Write a function that takes an array of objects representing tasks and returns
 *  true if all the tasks are marked as complete, otherwise returns false. */

const tasks = [
    {
      id: 1,
      title: "Write a blog post",
      status: "Complete",
    },
    {
      id: 2,
      title: "Make a cup of coffee",
      status: "Complete",
    },
    {
      id: 3,
      title: "Go for a walk",
      status: "Complete",
    },
    {
      id: 4,
      title: "Do the dishes",
      status: "Complete",
    },
    {
      id: 5,
      title: "Take out the trash",
      status: "Complete",
    },
  ];

  let taskStatus = tasks.find((checkStatus)=>checkStatus.status==="Complete");

  if(taskStatus)
  {
    console.log(true);
  }
  else
  {
    console.log(false);
  }

  