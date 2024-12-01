import { Router } from "express";
import MockControllers from "../controllers/mocks.controllers.js";
const router= Router();
const mockControllers= new MockControllers();

router.get("/mockingpets", mockControllers.pets);
router.get("/mockingusers", mockControllers.users);
router.post("/generateData", mockControllers.register);
router.get("/generateData", mockControllers.getAll);

export default router;
