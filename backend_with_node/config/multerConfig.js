/** @format */

const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    var fileName = Date.now() + ext;
    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

module.exports = upload;
