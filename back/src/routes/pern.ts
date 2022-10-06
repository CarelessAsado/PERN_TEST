import express from "express";
import { BACKEND_ENDPOINTS } from "../constants";
import * as pernControllers from "../controllers/pern";

const router = express.Router();

router.get(BACKEND_ENDPOINTS.PERN_FETCH, pernControllers.initialLoad);
router.get(BACKEND_ENDPOINTS.PERN_NURSES, pernControllers.nurseData);
router.get(BACKEND_ENDPOINTS.PERN_EXERCISE4, pernControllers.exercise4);
router.get(BACKEND_ENDPOINTS.PERN_EXERCISE5, pernControllers.exercise5);
router.get(BACKEND_ENDPOINTS.PERN_EXERCISE6, pernControllers.exercise6);

module.exports = router;
