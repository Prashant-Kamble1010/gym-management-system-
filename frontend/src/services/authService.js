const API_BASE_URL = "http://localhost:8081";

export const registerUser = async (userData) => {
    const response = await fetch(
        "http://localhost:8081/api/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
    );
    const data = await response.text();
    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }
    return data;
};

export const apiFetch = async (url, options = {}) => {

    const token = localStorage.getItem("token");

    return fetch(`${API_BASE_URL}${url}`, {
        ...options,

        headers: {
            ...options.headers,
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
};