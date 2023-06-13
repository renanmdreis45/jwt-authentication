
export interface UserParams {
    email: string;
    name: string;
    password: string;
}

export async function createUser(params: UserParams): Promise<User> {


}