const BASE_URL = "http://localhost:3000";
const getToken = () => localStorage.getItem("token");

// export const getAllPosts = ()=>{
//   const token = localStorage.getItem("token");
//   return fetch(`${BASE_URL}/posts/`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(res => res.json());
// };

export const getAllPosts = () => {
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/posts/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

export const createPost = (data)=>{
 return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),

  }).then(res=>res.json());

}

export const getPostById = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`)
    .then(res => res.json());
};

export const updatePost = (id, data)=>{
 return fetch(`${BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  }).then(res => res.json());

}

export const deletePost = (id)=>{
 return fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}


