const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chatController");

const router = express.Router();

router.route("/").post(protect, accessChat).get(protect, fetchChats);
// router.route("/rename").put(protect, rename);
// router.route("/groupremove").put(protect, groupRemove);
// router.route("/groupadd").put(protect, groupAdd);
module.exports = router;
