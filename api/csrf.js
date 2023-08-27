const getSourceHostname = (source) => {
  try {
    return new URL(source).hostname;
  } catch (e) {
    return null;
  }
};

module.exports = () => (req, res, next) => {
  const {
    hostname,
    headers: { origin, referer },
  } = req;

  const originOrRefererHeader = origin || referer;

  if (!originOrRefererHeader || hostname === getSourceHostname(originOrRefererHeader)) {
    return next();
  }

  res.status(400).send('Failed CSRF');
};
