import {createSlice} from "@reduxjs/toolkit";
import { Action, UserState} from "../types/interfaces";

const initialUserState: UserState = {
    user: {
        username: "",
        email: "",
    },
    loading_register: false, 
    loading_login: false,
}

const todoSlice = createSlice({
    name: "users",
    initialState: initialUserState,
    reducers: {
        register_request(state) {
            state.loading_register = true;
        }, 

        register_sucess(state) {
            state.loading_register = false;
        },

        register_fail(state, action) {
            state.loading_register = false;
        },
        user_login_request(state, action) {

        },
        user_login_fail(state, action) {

        },
        user_logout(state, action) {

        }
    }
})