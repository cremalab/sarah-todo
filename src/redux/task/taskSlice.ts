import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Task } from "../../types/Task"
import type { RootState } from "../store"

const tasks: Task[] = []
export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks,
  },
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    editStatus: (state, action: PayloadAction<Task>) => {
      const found = state.tasks.find(
        (task: Task) => task.id === action.payload.id,
      )
      if (found) {
        const index = state.tasks.indexOf(found)
        state.tasks.splice(index, 1, {
          ...found,
          isComplete: !found.isComplete,
        })
      }
    },
    editTask: (state, action) => {
      const found = state.tasks.find(
        (task: Task) => task.id === action.payload.id,
      )
      if (found) {
        const index = state.tasks.indexOf(found)
        state.tasks.splice(index, 1, {
          ...found,
          description: action.payload.text,
        })
      }
    },
    // deleteTask: (state, action: PayloadAction<Task>) => {
    //   const found = state.tasks.find(
    //     (task: Task) => task.id === action.payload.id,
    //   )
    //   if (found ) {

    //     state.tasks.slice(index, action.payload.id)
    //   }
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, editStatus, editTask } = taskSlice.actions

export const selectTasks = (state: RootState) => state.allTasks.tasks

export default taskSlice.reducer
