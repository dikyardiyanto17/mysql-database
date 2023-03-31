const { User, Category, Product, ProductDetail } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { encodeToken } = require("../helpers/jwt");
class Controller {
  static async registerAdmin(req, res, next) {
    try {
      User;
      const { name, password } = req.body;
      await User.create({
        name,
        password,
        role: "Admin",
      });
      res.status(201).json({ message: "Success Creating Admin" });
    } catch (error) {
      next(error);
    }
  }

  static async registerStaff(req, res, next) {
    try {
      User;
      const { name, password } = req.body;
      await User.create({
        name,
        password,
        role: "Staff",
      });
      res.status(201).json({ message: "Success Creating Staff" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { name, password } = req.body;
      const users = await User.findOne({ where: { name } });
      if (users) {
        if (comparePassword(password, users.password)) {
          const access_token = encodeToken({ id: users.id });
          res
            .status(201)
            .json({ message: "Log In Succes", access_token, role: users.role });
        } else
          throw {
            name: "Invalid email or password",
            message: "Invalid email or password",
          };
      } else
        throw {
          name: "Invalid email or password",
          message: "Invalid email or password",
        };
    } catch (error) {
      next(error);
    }
  }

  static async getProducts (req, res, next){
    try {
      const products = await Product.findAll({include: [{model: Category}, {model: ProductDetail}]})
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  }

  static async getCategories (req, res, next){
    try {
      const categories = await Category.findAll({include: {all: true, nested: true}})
      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  }

  static async currentUser (req, res, next){
    try {
      const user = await User.findByPk(req.user.UserId, {attributes: ['name', 'role']})
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  static async deleteProducts (req, res, next){
    try {
      const {id} = req.params
      const product = await Product.findByPk(id)
      if (product == null) throw {name: "is not exist", message: "Product is not exist"}
      Product.destroy({where: {id: id}})
      res.status(200).json({message: `Success deleting product`})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;
