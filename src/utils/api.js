const baseUrl = "http://localhost:3001";

// GET /items - Fetch all clothing items
export const getItems = () => {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

// POST /items - Add a new clothing item
export const addItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

// DELETE /items/:id - Delete a clothing item
export const deleteItem = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};
