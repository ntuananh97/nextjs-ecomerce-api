const validateRequiredInput = (data, arrRequired) => {
  const missingFields = arrRequired.filter(
    (field) => !data[field]?.trim()
  );
  return missingFields;
};


module.exports = {
  validateRequiredInput,
};
