import express from 'express'
const router = express.Router()
import adminController from '../controllers/AdminController'
import uploadCloud from '../middlewares/uploader'
import middlewareAuth from '../middlewares/auth'


router.post('/register', middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin('admin'), adminController.register)
router.post('/createCustomer',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin('admin'), uploadCloud.single("image"), adminController.createCustomer)
router.post('/createAdmin', middlewareAuth.verifyTokenAdmin, uploadCloud.single("image"), adminController.register)
router.post('/login', adminController.login) //middlewareAuth.verifyTokenAdmin
router.delete('/deleteCustomer?:id',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.deleteCustomer)
router.delete('/deleteAdmin?:id',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.deleteAdmin)
router.delete('/deleteAdmin?:id',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.deleteAdmin)
router.delete('/deletePost?:id',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.deletePost)
router.delete('/deleteCategory?:id', middlewareAuth.verifyToken,middlewareAuth.verifyTokenAdmin("admin"), adminController.deleteCategory)
router.delete('/deleteComment?:id',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.deleteComment)
router.put('/updateStatus',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.updateStatus)
router.put('/updateCategory',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.updateCategory)
router.put('/updateCustomer',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), uploadCloud.single("image"), adminController.updateCustomer)
router.put('/updateAdmin',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), uploadCloud.single("image"), adminController.updateAdmin)
router.get('/getListAdmin',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.getListAdmin)
router.get('/getAllPostByAdmin',middlewareAuth.verifyToken, middlewareAuth.verifyTokenAdmin("admin"), adminController.getAllPostByAdmin)
router.get('/getAllCategoryByAdmin', middlewareAuth.verifyToken,middlewareAuth.verifyTokenAdmin("admin"), adminController.getAllCategoryByAdmin)
router.get('/getDetailAdmin', adminController.detail)
// router.get('/getDataCustomer', middlewareAuth.verifyToken, AdminAuthController.getDataCustomer)

module.exports = router;
