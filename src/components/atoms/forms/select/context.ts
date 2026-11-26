import type { InjectionKey, Ref } from "vue"

export interface SelectClearContext {
  clearable: Ref<boolean>
  onClear: () => void
}

export const selectClearContextKey: InjectionKey<SelectClearContext> = Symbol("SelectClearContext")
