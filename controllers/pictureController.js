const jimp = require("jimp");
const promisify = require("es6-promisify");

exports.getPictureBuffer = async (req, res, next) => {
  const height = Number(req.params.height) || 250;
  const width = Number(req.params.width) || jimp.AUTO;
  const pic = await jimp.read(`${__dirname}/../pics/orange.png`);
  await pic.resize(height, width);
  const getBuffer = promisify(pic.getBuffer, pic);
  const buffer = await getBuffer(jimp.MIME_PNG);
  res.send(buffer);
};
