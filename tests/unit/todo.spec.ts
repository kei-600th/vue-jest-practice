import { flushPromises, mount } from "@vue/test-utils";
import TodoList from "@/views/TodoList.vue";
import * as api from "@/apis/TodoApi";

describe("TodoList.vue", () => {
  it("should show todo items", async () => {
    //given
    jest.spyOn(api, "getTodoList").mockResolvedValueOnce([
      { id: 1, name: "todo item" },
      { id: 2, name: "todo item2" },
    ]);
    //when
    const wrapper = mount(TodoList);
    await flushPromises();
    //then;
    expect(wrapper.text()).toMatch("todo item");
    expect(wrapper.text()).toMatch("todo item2");
  });
});
