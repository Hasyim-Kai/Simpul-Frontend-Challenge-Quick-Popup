import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReducerAction } from "react"
import { RootState } from "./store"

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        isInboxPopupOpen: false,
        isTaskPopupOpen: false,
        isLoading: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        openInboxPopup(state) {
            state.isInboxPopupOpen = true
            state.isTaskPopupOpen = false
        },
        openTaskPopup(state) {
            state.isInboxPopupOpen = false
            state.isTaskPopupOpen = true
        },
        closePopup(state) {
            state.isInboxPopupOpen = false
            state.isTaskPopupOpen = false
        },
        toggleLoading(state) {
            state.isLoading = !state.isLoading
        },
        toggleError(state, action: any) {
            state.isError = !state.isError
            state.errorMessage = action.payload
        },
    },
})

export const { openInboxPopup, openTaskPopup, closePopup, toggleLoading, toggleError } = globalSlice.actions
export const selectGlobalState = (state: RootState) => state.globalState  // SELECTOR
export default globalSlice.reducer