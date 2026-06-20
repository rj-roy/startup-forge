const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    return handleStatusCode(res);
    // return res.json();
};

export const handleStatusCode = async (res) => {
    if (res.status === 401) {
        redirect('/unauthorized');
    } else if (res.status === 403) {
        redirect('/unauthorized');
    } else if (!res.ok) {
        throw new Error("Something went wrong! Please try again later.");
    };
    return res.json();
};