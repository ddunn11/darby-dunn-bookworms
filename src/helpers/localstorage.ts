export const getTokenFromLocalStorage = (): string => {
  return localStorage.getItem("bookworm-token") || "";
};

export const getUserIDFromLocalStorage = (): string => {
  return localStorage.getItem("bookworm-userID") || "";
};

export const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem("bookworm-token", token);
};

export const setUserIDInLocalStorage = (userID: string) => {
  localStorage.setItem("bookworm-userID", userID);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("bookworm-token");
};

export const removeUserFromInLocalStorage = () => {
  localStorage.removeItem("bookworm-userID");
};
