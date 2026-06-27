'use server'
import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const authHeader = async () => {
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

export const protectedFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`, {
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
        headers: {
            'Content-Type': 'application/json',
            ... await authHeader(),
        },
    });
    return handleStatusCode(res);
};

export const handleStatusCode = async (res) => {
    if (res.status === 401) {
        redirect('/unauthorized');
        return;
    } else if (res.status === 404) {
        redirect('/not-found');
        return;
    } else if (res.status === 403) {
        redirect('/forbidden');
        return;
    };
    
    const text = await res.text();

    if (!res.ok) {
        let errorMessage = "Something went wrong! Please try again later.";
        try {
            errorMessage = JSON.parse(text).message || errorMessage;
        } catch {
            // 
        }
        throw new Error(errorMessage);
    };

    if (!text) {
        return null;
    };

    try {
        return JSON.parse(text);
    } catch {
        throw new Error("Invalid response from server");
    };
};