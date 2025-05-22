<template>
  <table :class="['w-full border-separate border-spacing-0', colorBorderClass]">
    <thead>
      <tr>
        <th
          v-for="(col, idx) in columns"
          :key="idx"
          class="border-b px-4 py-2 text-left font-semibold"
        >
          <slot :name="`header-${col.key}`">{{ col.label }}</slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIdx) in rows" :key="rowIdx" class="border-b last:border-b-0">
        <td v-for="(col, colIdx) in columns" :key="colIdx" class="px-4 py-2">
          <slot :name="`cell-${col.key}`" :row="row">{{ row[col.key] }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    columns: Array<{ key: string; label: string }>
    rows: Array<Record<string, unknown>>
    color?: "yellow" | "pink" | "green" | "orange" | "violet"
  }>(),
  {
    color: "yellow",
  },
)

const colorBorderClass = computed(() => {
  switch (props.color) {
    case "yellow":
      return "border-y-2 border-yellow-primary"
    case "pink":
      return "border-y-2 border-pink-primary"
    case "green":
      return "border-y-2 border-green-primary"
    case "orange":
      return "border-y-2 border-orange-primary"
    case "violet":
      return "border-y-2 border-violet-primary"
    default:
      return "border-y-2 border-yellow-primary"
  }
})
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
}
thead th {
  background: white;
  font-weight: 600;
  border-bottom: 1px solid #e5e5e5;
}
tbody td {
  background: white;
  border-bottom: 1px solid #e5e5e5;
}
tbody tr:last-child td {
  border-bottom: none;
}
</style>
