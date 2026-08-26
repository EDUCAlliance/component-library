import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import RichTableColumn from "./RichTableColumn.vue"

describe("RichTableColumn", () => {
  it("emits the column key and ascending direction when unsorted", async () => {
    const wrapper = mount(RichTableColumn, {
      props: { columnKey: "name", label: "Name", sortable: true },
    })

    await wrapper.get("button").trigger("click")

    expect(wrapper.emitted("sort")).toEqual([["name", "asc"]])
  })

  it("requests descending sorting when currently ascending", async () => {
    const wrapper = mount(RichTableColumn, {
      props: {
        columnKey: "name",
        label: "Name",
        sortable: true,
        sortDirection: "asc",
      },
    })

    await wrapper.get("button").trigger("click")

    expect(wrapper.emitted("sort")).toEqual([["name", "desc"]])
  })

  it("shows arrows for the current sorting state", async () => {
    const wrapper = mount(RichTableColumn, {
      props: { columnKey: "name", label: "Name", sortable: true },
    })

    expect(wrapper.get('[role="columnheader"]').attributes("aria-sort")).toBe("none")
    expect(wrapper.findAll("path")).toHaveLength(2)

    await wrapper.setProps({ sortDirection: "asc" })
    expect(wrapper.get('[role="columnheader"]').attributes("aria-sort")).toBe("ascending")
    expect(wrapper.findAll("path")).toHaveLength(1)
    expect(wrapper.get("path").attributes("d")).toContain("M137.4 470.7")

    await wrapper.setProps({ sortDirection: "desc" })
    expect(wrapper.get('[role="columnheader"]').attributes("aria-sort")).toBe("descending")
    expect(wrapper.findAll("path")).toHaveLength(1)
    expect(wrapper.get("path").attributes("d")).toContain("M137.4 41.4")
  })
})
