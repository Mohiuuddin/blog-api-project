const BASE_URL = "http://localhost:3000";

export const getPosts = ()=>{
return fetch(`${BASE_URL}/posts`).then(res=> res.json());
}

export const getPost = (id)=>{
 return fetch(`${BASE_URL}/posts/${id}`).then(res=> res.json());
}

export const loginUser = (data)=>{
 return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(data),
  }).then(res=> res.json());
}

export const addComment = (data)=>{
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: { 
      "Content-Type" : "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(res=> res.json());
};


export const getComments = (postId) => {
  return fetch(`${BASE_URL}/comments/${postId}`)
    .then(res => res.json());
};

export const registerUser = (data)=>{
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  }).then(res=> res.json());
}


