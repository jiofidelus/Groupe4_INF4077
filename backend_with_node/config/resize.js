/** @format */

const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');

class Resize {
  constructor(folder) {
    this.folder = folder;
  }
  async save(buffer) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize({
        width: 200,
        height: 200,
      })
      .jpeg({
        quality: 50,
      })
      .toFile(filepath);

    return filename;
  }
  static filename() {
    return `${uuidv4()}.jpeg`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`);
  }
}
module.exports = Resize;
