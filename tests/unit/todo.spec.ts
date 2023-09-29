import TodoList from "@/views/TodoList.vue";
import * as api from "@/apis/TodoApi";
import { RouterLink } from "vue-router";
import { mountWithFlushPromise } from "./helper";

function mockTodoListApi() {
  jest.spyOn(api, "getTodoList").mockResolvedValueOnce([
    { id: 1, name: "todo item" },
    { id: 2, name: "todo item2" },
    { id: 3, name: "clean room" },
  ]);
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
    mockTodoListApi();
    //when
    const wrapper = await mountWithFlushPromise(TodoList);
    const links = await wrapper.findAllComponents(RouterLink);
    //then
    expect(links[0].props().to.params.id).toBe(1);
    expect(links[1].props().to.params.id).toBe(2);
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
