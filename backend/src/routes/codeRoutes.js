import express from "express"
import { executeCode } from "../controllers/codeController.js"
import { protectRoute } from "../middleware/protectRoutes.js"

const router = express.Router()

router.post("/run", protectRoute, executeCode)

export default router
