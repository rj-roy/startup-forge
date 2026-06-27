import { serverMutation } from "../core/server"

export const createSubscription = async(path, data, method)=>{
    const res = serverMutation(path, data, method);
    return res;
};