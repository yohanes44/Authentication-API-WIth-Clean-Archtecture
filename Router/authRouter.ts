import express from "express";

const router = express.Router();

router.post("/login");
router.post("/register");
router.get("/logout");
router.get("/refreshToken");


export = router; 