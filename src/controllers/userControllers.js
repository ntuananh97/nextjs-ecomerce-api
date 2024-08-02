const { CONFIG_MESSAGE_ERRORS } = require("../configs/constants");
const { validateRequiredInput } = require("../utils");
const UserService = require("../services/UserService");
const {
  isValidMail,
  isValidPassword,
  isValidPhoneNumber,
} = require("../utils/regex");

const createUser = async (req, res) => {
  // validate
  try {
    const { email, password, phoneNumber } = req.body;
    const requiredFields = validateRequiredInput(req.body, [
      "email",
      "password",
      "name",
    ]);

    if (requiredFields.length > 0) {
      return res.status(CONFIG_MESSAGE_ERRORS.INVALID.status).json({
        status: "Error",
        typeError: CONFIG_MESSAGE_ERRORS.INVALID.type,
        message: `The field [${requiredFields[0]}] is required`,
      });
    }

    if (!isValidMail(email)) {
      return res.status(CONFIG_MESSAGE_ERRORS.INVALID.status).json({
        status: "INVALID",
        typeError: CONFIG_MESSAGE_ERRORS.INVALID.type,
        message: "The field must a email",
      });
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return res.status(CONFIG_MESSAGE_ERRORS.INVALID.status).json({
        status: "INVALID",
        typeError: CONFIG_MESSAGE_ERRORS.INVALID.type,
        message:
          "Phone number must not contain letters and must be at least 9 numbers",
      });
    }

    if (!isValidPassword(password)) {
      return res.status(CONFIG_MESSAGE_ERRORS.INVALID.status).json({
        status: "Error",
        typeError: CONFIG_MESSAGE_ERRORS.INVALID.type,
        message:
          'The password must be at least 6 characters long and include uppercase letters, lowercase letters, numbers, and special characters."',
      });
    }

    const response = await UserService.createUser(req.body);
    const { data, status, typeError, message, statusMessage } = response;
    return res.status(status).json({
      typeError,
      data,
      message,
      status: statusMessage,
    });
  } catch {
    return res.status(CONFIG_MESSAGE_ERRORS.INTERNAL_ERROR.status).json({
      message: "Internal Server Error",
      data: null,
      status: "Error",
      typeError: CONFIG_MESSAGE_ERRORS.INTERNAL_ERROR.type,
    });
  }
};

module.exports = {
  createUser,
};
