import TodoList from "@/views/TodoList.vue";
import * as api from "@/apis/TodoApi";
import { RouterLink } from "vue-router";
import { mountWithFlushPromise } from "./helper";

function mockTodoListApi() {
  jest.spyOn(api, "getTodoList").mockResolvedValueOnce([
    { id: 1, name: "todo item" },
    { id: 2, name: "todo item2" },
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
});
