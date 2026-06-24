'use server'
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const authHeader = async ()=>{
    const token = await getUserToken();
    const header = token ? {
        authorization: `Bearer ${token}`,
    } : {};
    return header;
};
export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    return handleStatusCode(res);
};

export const protectedFetch = async (path) =>{
    const res = await fetch(`${baseUrl}${path}`,{
        headers: await authHeader(),
    });
    return handleStatusCode(res);
};

export const serverMutation = async (path, data, method) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ... await authHeader(),
        },
        body: JSON.stringify(data),
    });
    return handleStatusCode(res);
};

export const serverDelete = async (path) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'DELETE',
    });
    return handleStatusCode(res);
};

export const handleStatusCode = async (res) => {
    if (!res.ok) {
        throw new Error("Something went wrong! Please try again later.");
    };

    const text = await res.text();
    if (!text) {
        return null;
    };

    try {
        return JSON.parse(text);
    } catch (error) {
        console.error('JSON parse error');
        throw new Error("Invalid response from server");
    };
};