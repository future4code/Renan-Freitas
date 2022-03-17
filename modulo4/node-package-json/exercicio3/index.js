const newTask = process.argv[2]
const taskList = []
const updatedTaskList = [...taskList, newTask]

console.table(updatedTaskList)