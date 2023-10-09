export async function getTodoList() {
  // await api call
  console.log("api call: getTodoList");
  return [
    { id: 1, name: "todo item", status: true },
    { id: 2, name: "todo item2", status: false },
    { id: 3, name: "clean room", status: false },
  ];
}

export async function updateTodoStatus(id: number, status: boolean) {
  console.log("api call: updateTodoStatus", id, status);
}
