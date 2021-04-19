const {
    createUser,
    getUserByUserId,
    updateUsers,
    getUsers, 
    deleteUser, 
    login
} = require("../../controller/auth/auth"); 
const router = require("express").Router();
const {validateToken} = require("../../auth/auth_validate");

router.post("/", createUser);
router.get("/",validateToken,getUsers);
router.get("/:id",validateToken,getUserByUserId);
router.post("/updateUser",validateToken,updateUsers);
router.delete("/",validateToken,deleteUser);
router.post("/login",login);
module.exports = router;
