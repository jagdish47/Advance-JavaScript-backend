const info = (req, res) => {
  return res.send({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

module.exports = { info };
