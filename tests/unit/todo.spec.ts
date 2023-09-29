import { mount } from "@vue/test-utils";
import TodoList from "@/views/TodoList.vue";

describe("TodoList.vue", () => {
  it("should show todo items", async () => {
    //when
    const wrapper = mount(TodoList);
    await wrapper.vm.$nextTick();
    //then;
    expect(wrapper.text()).toMatch("todo item");
    expect(wrapper.text()).toMatch("todo item2");
  });
});
