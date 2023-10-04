import TodoList from "@/views/TodoList.vue";
import * as api from "@/apis/TodoApi";
import { RouterLink } from "vue-router";
import { mountWithFlushPromise } from "./helper";

function mockTodoListApi() {
  const value = [
    { id: Date.now(), name: "todo item" },
    { id: Date.now(), name: "todo item2" },
    { id: Date.now(), name: "clean room" },
  ];
  jest.spyOn(api, "getTodoList").mockResolvedValueOnce(value);
  return value;
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
});
