const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  console.log("hashPassword");
  const hashedPassword = await argon2.hash(req.body.password, {
    type: argon2.argon2id,
    timeCost: 2,
    memoryCost: 2 ** 16,
    parallelism: 1,
  });
  console.log(hashedPassword, "text hashed");
  req.body.hashedPassword = hashedPassword;

  delete req.body.password;
  next();
};

module.exports = {
  hashPassword,
};
