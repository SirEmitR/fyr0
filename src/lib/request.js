export async function request({ endpoint, method = 'GET', body = null }) {
    const url = import.meta.env.VITE_API_URL;
    const requestUrl = `${url}/${endpoint}`;

    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        ...(body && method !== 'GET' ? { body: JSON.stringify(body) } : {})
    };
    await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate a delay
    const res = await fetch(requestUrl, options);
    return await res.json();
}
