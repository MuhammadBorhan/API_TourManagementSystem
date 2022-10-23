const { getTourDetailService } = require("../services/Tour.services");

let count = 0;
exports.viewCount = async (req, res, next) => {
  const { id } = req.params;
  const detail = await getTourDetailService(id);
  count++;
  detail.count = count;
  next();
};