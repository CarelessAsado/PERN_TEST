import loginAxiosInstance from "./loginAxiosInstance";
import { BACKEND_URL } from "config/constants";
import { IFac, INurse } from "pages/Pern";

export const initialLoad = function () {
  return loginAxiosInstance.get<IFac[]>(BACKEND_URL.PERN_FETCH);
};
export const fetchNurses = function (facid: string) {
  return loginAxiosInstance.get<INurse[]>(
    `${BACKEND_URL.PERN_NURSES}/${facid}`
  );
};

export const exercise4 = function () {
  return loginAxiosInstance.get(BACKEND_URL.PERN_EXERCISE4);
};
export const exercise5 = function () {
  return loginAxiosInstance.get(BACKEND_URL.PERN_EXERCISE5);
};
export const exercise6 = function () {
  return loginAxiosInstance.get(BACKEND_URL.PERN_EXERCISE6);
};
