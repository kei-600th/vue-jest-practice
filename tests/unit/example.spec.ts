import { mount } from "@vue/test-utils";
import TodoList from "@/views/TodoList.vue";

describe("TodoList.vue", () => {
  it("xxx", () => {
    const wrapper = mount(TodoList);
    expect(wrapper.text()).toMatch("todo item");
    expect(wrapper.text()).toMatch("todo item2");
  });
});
