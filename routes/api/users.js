const express = require('express');
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user"); 
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.signupSchema), ctrl.signup);

router.get("/verify/:verificationToken", ctrl.verifyEmail)

router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;