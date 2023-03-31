import {
  FetchingProducts,
  FetchingCurrentUserRole
} from "./actionType";
const baseUrl = "http://localhost:3000";

export const fetchProducts = (payload) => {
  return { type: FetchingProducts, payload };
};

export const fetchRole = (payload) => {
  return { type: FetchingCurrentUserRole, payload };
};

export const getProducts = () => {
  return async (dispatch) => {
    await fetch(baseUrl + "/products", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token
      },
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchProducts(data)))
      .catch((error) => console.log(error));
  };
};

export const login = (formLogin) => {
  return (dispatch,) => {
    return fetch(baseUrl + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          return resp.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .then((data) => {
        dispatch(fetchRole(data.role));
        localStorage.setItem("access_token", data.access_token);
        return data;
      });
  };
};

export const register = (formRegister) => {
  return (dispatch) => {
    return fetch(baseUrl + "/registeradmin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formRegister),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        return resp.json().then((error) => {
          throw new Error(error.message);
        });
      }
    });
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    fetch(baseUrl + "/user", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token
      },
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchRole(data.role)))
      .catch((error) => console.log(error));
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    return fetch(baseUrl + "/products/" + id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  };
};