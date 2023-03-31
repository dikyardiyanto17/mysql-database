const {User, Category, Product, ProductDetail} = require('../models')
class Controller {
  static async registerAdmin(req, res, next) {
    try {
        User
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
        User
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
}

module.exports = Controller;
