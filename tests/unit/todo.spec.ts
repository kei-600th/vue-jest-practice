import { flushPromises, mount } from "@vue/test-utils";
import TodoList from "@/views/TodoList.vue";
import * as api from "@/apis/TodoApi";
import { RouterLink } from "vue-router";
import router from "@/router";

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
  it("should has link to Detail page", async () => {
    //given
    jest.spyOn(api, "getTodoList").mockResolvedValueOnce([
      { id: 1, name: "todo item" },
      { id: 2, name: "todo item2" },
    ]);
    //when
    const wrapper = mount(TodoList, { global: { plugins: [router] } });
    await flushPromises();
    const link = await wrapper.findAllComponents(RouterLink);
    //then
    expect(link[0].props().to.params.id).toBe(1);
    expect(link[1].props().to.params.id).toBe(2);
  });
});
