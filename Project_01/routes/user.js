const express = require("express");
const router = express.Router();
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require('../controllers/control');

// Routes
router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;