import express from 'express';
import { testPostController } from '../controllers/testController.js';


// Router object
const router = express.Router();

// Routes
router.post('/test-post', testPostController); // Ensure it's a function

// Export
export default router;
