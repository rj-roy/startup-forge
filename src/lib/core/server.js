const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    return handleStatusCode(res);
    // return res.json();
};

export const serverMutation = async (path, data, method ) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return handleStatusCode(res);
};

export const handleStatusCode = async (res) => {
    if (res.status === 401) {
        redirect('/unauthorized');
    } else if (res.status === 403) {
        redirect('/unauthorized');
    } else if (!res.ok) {
        throw new Error("Something went wrong! Please try again later.");
    };
    
    const text = await res.text();
    if (!text) {
        return null; 
    }
    
    try {
        return JSON.parse(text);
    } catch (error) {
        console.error('JSON parse error:', error);
        throw new Error("Invalid response from server");
    }
};