const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Member = require("../models/member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/information", async (req, res, next) => {
  const {} = req.body.objectID;
  console.log(objectID);
});

module.exports = router;
