export const FRONTEND_URL = process.env.NODE_ENV
  ? "https://amazing-wright-70ac6b.netlify.app"
  : "http://localhost:3000";

class URL_BACK_ENDPOINTS {
  ROOT_PERN = `/api/v1/pern`;
  PERN_FETCH = "/fetch";
  PERN_NURSES = `/nurses/:facid`;
  PERN_EXERCISE4 = `/exercise4`;
  PERN_EXERCISE5 = `/exercise5`;
  PERN_EXERCISE6 = `/exercise6`;
}
export const BACKEND_ENDPOINTS = new URL_BACK_ENDPOINTS();
