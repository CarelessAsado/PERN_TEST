class URL_FRONT_ENDPOINTS {
  PERN = "/";
}
export const FRONTEND_ENDPOINTS = new URL_FRONT_ENDPOINTS();

class URL_BACK_ENDPOINTS {
  ROOT_PERN = `/pern`;
  PERN_FETCH = `${this.ROOT_PERN}/fetch`;
  PERN_NURSES = `${this.ROOT_PERN}/nurses`;
  PERN_EXERCISE4 = `${this.ROOT_PERN}/exercise4`;
  PERN_EXERCISE5 = `${this.ROOT_PERN}/exercise5`;
  PERN_EXERCISE6 = `${this.ROOT_PERN}/exercise6`;
}
export const BACKEND_URL = new URL_BACK_ENDPOINTS();

export const BACKEND_ROOT =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : "https://typescript-backend-reactnode.herokuapp.com/api/v1";
