const axios = require("axios");
const boom = require("@hapi/boom");

const getApiData = async (url) => {
  const response = await axios.get(url);

  if (!response.data) {
    throw boom.internal("Error");
  }
  return response;
};

module.exports = {
  getApiData,
};
