import express from "express";
import * as adminController from '../controllers/controllerAdmin.js';
import * as classesController from '../controllers/controllerClasses.js';
import * as classesApprovalController from '../controllers/controllerClassesApproval.js';
import * as userController from '../controllers/controllerUser.js';
const router = express.Router();

router.route("/getAllAdmin")
    .get(adminController.getAllAdminDetails);
    
router.route("/updateAdmin/:id")
    .put(adminController.updatedDetails);

router.route("/deleteAdmin/:id")
    .delete(adminController.removeDetails);

router.route("/loginAdmin")
    .post(adminController.authenticateAdmin);

router.route("/addAdmin")
    .post(adminController.post);

router.route("/getAllClasses")
    .get(classesController.getAllClassesDetails);
    
router.route("/updateClasses/:id")
    .put(classesController.updatedDetails);

router.route("/deleteClasses/:id")
    .delete(classesController.removeDetails);

router.route("/loginClasses")
    .post(classesController.authenticateClasses);

router.route("/addClasses")
    .post(classesController.post);

router.route("/getAllClassesApproval")
    .get(classesApprovalController.getAllClassesApprovalDetails);

router.route("/deleteClassesApproval/:id")
    .delete(classesApprovalController.removeDetails);

router.route("/addClassesApproval")
    .post(classesApprovalController.post);

router.route("/getAllUser")
    .get(userController.getAllUserDetails);
    
router.route("/updateUser/:id")
    .put(userController.updatedDetails);

router.route("/deleteUser/:id")
    .delete(userController.removeDetails);

router.route("/loginUser")
    .post(userController.authenticateUser);

router.route("/addUser")
    .post(userController.post);
    
export default router;