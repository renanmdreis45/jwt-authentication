import {Router} from "express";

const router = Router();

router.post('/users', userController.store);
