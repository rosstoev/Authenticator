const API_KEY = "AIzaSyCWmcj4nuDQhh8muiE2vWnrUL8OlDhVFkc";

export async function signup(email, password) {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  if (result.error !== undefined) {
    throw new Error(result.error.message);
  }

  return result;
}

export async function signin(email, password) {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  if (result.error !== undefined) {
    throw new Error(result.error.message);
  }

  return result;
}
