/** @format */

const delayResponse = (response) => {
  setTimeout(() => {
    response();
  }, 1000);
};

module.exports = { delayResponse };
