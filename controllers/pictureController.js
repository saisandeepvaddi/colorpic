const jimp = require("jimp");
const promisify = require("es6-promisify");
const tinycolor = require("tinycolor2");

const getResizedPicture = async (height, width) => {
  const pic = await jimp.read(`${__dirname}/../pics/transparent.png`);
  return await pic.resize(height, width);
};

const getPicBuffer = async pic => {
  const getBuffer = promisify(pic.getBuffer, pic);
  const buffer = await getBuffer(jimp.MIME_PNG);
  return buffer;
};

const getValidatedColor = color => {
  const coloredPic = tinycolor(color);
  if (coloredPic.isValid()) {
    return coloredPic;
  }
  return tinycolor("#d1d1d1");
};

exports.getDefaultPicture = async (req, res, next) => {
  const height = Number(req.params.height) || 250;
  const width = Number(req.params.width) || height;
  const pic = await getResizedPicture(height, width);
  const buffer = await getPicBuffer(pic);
  res.type("png").send(buffer);
};

exports.getColorPicture = async (req, res, next) => {
  const height = Number(req.params.height) || 250;
  const width = Number(req.params.width) || height;
  const userColor = req.params.color;

  const pic = await getResizedPicture(height, width);
  const addColor = promisify(pic.color, pic);
  const color = getValidatedColor(userColor);
  await addColor([{ apply: "mix", params: [color, 100] }]);
  const buffer = await getPicBuffer(pic);

  res.type("png").send(buffer);
};
