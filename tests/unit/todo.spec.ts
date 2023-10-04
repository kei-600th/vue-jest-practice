import TodoList from "@/views/TodoList.vue";
import * as api from "@/apis/TodoApi";
import { RouterLink } from "vue-router";
import { mountWithFlushPromise } from "./helper";

function generateTodo(name: string, status?: boolean) {
  return {
    id: Date.now(),
    name: name,
    status: status || false,
  };
}

function mockTodoListApi() {
  const data = [
    generateTodo("todo item"),
    generateTodo("todo item2"),
    generateTodo("clean room"),
  ];
  jest.spyOn(api, "getTodoList").mockResolvedValueOnce(data);
  return data;
}

describe("TodoList.vue", () => {
  it("should show todo items", async () => {
    //given
    mockTodoListApi();
    //when
    const wrapper = await mountWithFlushPromise(TodoList);
    //then;
    expect(wrapper.text()).toMatch("todo item");
    expect(wrapper.text()).toMatch("todo item2");
  });
  it("should has link to Detail page", async () => {
    //given
    const mockData = mockTodoListApi();
    //when
    const wrapper = await mountWithFlushPromise(TodoList);
    const links = await wrapper.findAllComponents(RouterLink);
    //then
    expect(links[0].props().to.params.id).toBe(mockData[0].id);
    expect(links[1].props().to.params.id).toBe(mockData[1].id);
  });
  it("search by todo name", async () => {
    //given
    mockTodoListApi();
    //when
    const wrapper = await mountWithFlushPromise(TodoList);
    await wrapper.find("input").setValue("clean room");
    //then
    expect(wrapper.text()).toMatch("clean room");
    expect(wrapper.text()).not.toMatch("todo item");
  });
  it("update status", async () => {
    //given
    mockTodoListApi();
    // //when
    const wrapper = await mountWithFlushPromise(TodoList);
    // eslint-disable-next-line quotes
    const checkbox = await wrapper.find('input[type="checkbox"]');
    await checkbox.trigger("click");
    // //then
    // expect(wrapper.text()).toMatch("clean room");
    // expect(wrapper.text()).not.toMatch("todo item");
  });
});
