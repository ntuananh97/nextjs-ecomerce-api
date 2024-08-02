/* eslint-disable no-async-promise-executor */
const bcrypt = require("bcrypt");
const { CONFIG_MESSAGE_ERRORS } = require("../configs/constants");
const User = require("../models/UserModel");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { email, password, phoneNumber, address, city, role, name, avatar } =
      newUser;

    try {
      const existedUser = await User.findOne({
        email: email,
      });

      // is existed
      if (existedUser !== null) {
        return resolve({
          status: CONFIG_MESSAGE_ERRORS.ALREADY_EXIST.status,
          message: "The email of user is existed",
          typeError: CONFIG_MESSAGE_ERRORS.ALREADY_EXIST.type,
          data: null,
          statusMessage: "Error",
        });
      }

      const hash = bcrypt.hashSync(password, 10);
      const userCreate = {
        email,
        password: hash,
        phoneNumber: phoneNumber,
        address,
        name,
        avatar,
        status: 1,
      };

      if (city) {
        userCreate.city = city;
      }
      if (role) {
        userCreate.role = role;
      }

      const createdUser = await User.create(userCreate);

      if (createdUser) {
        return resolve({
          status: CONFIG_MESSAGE_ERRORS.ACTION_SUCCESS.status,
          message: "Created user success",
          typeError: "",
          data: createdUser,
          statusMessage: "Success",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createUser,
};
