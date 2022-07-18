export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    
    return res.json().then((data) => {
        console.log("inApi", data);
        throw new Error(data.message);
    });
};

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then(checkResponse)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({email, password})
    })
    .then(checkResponse)
};

export const getContent = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(checkResponse)
}