const CONFIG_PERMISSIONS = {
  ADMIN: "ADMIN.GRANTED",
  BASIC: "BASIC.PUBLIC",
  DASHBOARD: "DASHBOARD",
  MANAGE_PRODUCT: {
    PRODUCT: {
      CREATE: "MANAGE_PRODUCT.PRODUCT.CREATE",
      VIEW: "MANAGE_PRODUCT.PRODUCT.VIEW",
      UPDATE: "MANAGE_PRODUCT.PRODUCT.UPDATE",
      DELETE: "MANAGE_PRODUCT.PRODUCT.DELETE",
    },
    PRODUCT_TYPE: {
      CREATE: "MANAGE_PRODUCT.PRODUCT_TYPE.CREATE",
      UPDATE: "MANAGE_PRODUCT.PRODUCT_TYPE.UPDATE",
      DELETE: "MANAGE_PRODUCT.PRODUCT_TYPE.DELETE",
    },
    COMMENT: {
      UPDATE: "MANAGE_PRODUCT.COMMENT.UPDATE",
      DELETE: "MANAGE_PRODUCT.COMMENT.DELETE",
    },
  },
  SYSTEM: {
    USER: {
      VIEW: "SYSTEM.USER.VIEW",
      CREATE: "SYSTEM.USER.CREATE",
      UPDATE: "SYSTEM.USER.UPDATE",
      DELETE: "SYSTEM.USER.DELETE",
    },
    ROLE: {
      VIEW: "SYSTEM.ROLE.VIEW",
      CREATE: "SYSTEM.ROLE.CREATE",
      UPDATE: "SYSTEM.ROLE.UPDATE",
      DELETE: "SYSTEM.ROLE.DELETE",
    },
  },
  MANAGE_ORDER: {
    REVIEW: {
      UPDATE: "MANAGE_ORDER.REVIEW.UPDATE",
      DELETE: "MANAGE_ORDER.REVIEW.DELETE",
    },
    ORDER: {
      VIEW: "MANAGE_ORDER.ORDER.VIEW",
      UPDATE: "MANAGE_ORDER.ORDER.UPDATE",
      DELETE: "MANAGE_ORDER.ORDER.DELETE",
    },
  },
  SETTING: {
    PAYMENT_TYPE: {
      CREATE: "SETTING.PAYMENT_TYPE.CREATE",
      UPDATE: "SETTING.PAYMENT_TYPE.UPDATE",
      DELETE: "SETTING.PAYMENT_TYPE.DELETE",
    },
    DELIVERY_TYPE: {
      CREATE: "SETTING.DELIVERY_TYPE.CREATE",
      UPDATE: "SETTING.DELIVERY_TYPE.UPDATE",
      DELETE: "SETTING.DELIVERY_TYPE.DELETE",
    },
    CITY: {
      CREATE: "CITY.CREATE",
      UPDATE: "CITY.UPDATE",
      DELETE: "CITY.DELETE",
    },
  },
};

const CONFIG_MESSAGE_ERRORS = {
    INVALID: {
      type: "INVALID",
      status: 400,
    },
    ALREADY_EXIST: {
      type: "ALREADY_EXIST",
      status: 409,
    },
    GET_SUCCESS: {
      type: "SUCCESS",
      status: 200,
    },
    ACTION_SUCCESS: {
      type: "SUCCESS",
      status: 201,
    },
    UNAUTHORIZED: {
      type: "UNAUTHORIZED",
      status: 401,
    },
    INTERNAL_ERROR: {
      type: "INTERNAL_SERVER_ERROR",
      status: 500,
    },
  };
  

module.exports = {
  CONFIG_PERMISSIONS,
  CONFIG_MESSAGE_ERRORS
};
