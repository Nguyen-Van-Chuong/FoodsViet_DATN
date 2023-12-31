import Categories from '../models/Category'
import BaseController from './Controller'

class CategoryController extends BaseController {
    constructor(model) {
        super(model)
        this.model = model
    }
    get_all_categories = async (req, res) => {
        try {
            const data = await this.model.find();
            if (!data) {
                return res.status(400).json({
                    message: "Có lỗi xảy ra",
                });
            }
            return res.status(200).json(data);
        } catch (error) {
            console.log('err', error);
            return res.status(500).json({
                message: "Lỗi Server",
            });
        }
    };
    create = async (req, res) => {
        const id_customer = req.customer.id;
        const isAdmin = req.customer.admin;
        const { title, ...data } = req.body;
        try {
            const modelCategory = {
                ...data,
                title,
                id_customer,
                authorType: isAdmin ? 'admin' : 'customer'
            };
            const hasCategory = await this.model.findOne({ title });
            if (hasCategory) return res.status(401).json({
                message: "Đã tồn tại loại này",
            });
            const dataCategory = await this.model(modelCategory).save();
            if (dataCategory) {
                return res.status(200).json({
                    message: "Thêm thành công",
                });
            } else {
                return res.status(401).json({
                    message: "Thêm thất bại",
                });
            }
        } catch (error) {
            console.log('err', error);
            return res.status(500).json({
                message: "Có lỗi xảy ra",
                error: error._message,
            });
        }
    }
}

const categoryController = new CategoryController(Categories)

module.exports = categoryController