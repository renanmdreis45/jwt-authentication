export interface Action {
    type?: string,
    payload?: string,
}

export interface UserState {
    user: {
        username: string,
        email: string,
    },
    loading_register: boolean,
    loading_login: boolean,
}