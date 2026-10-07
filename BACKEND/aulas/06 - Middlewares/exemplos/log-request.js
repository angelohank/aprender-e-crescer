function logRequest(req, res, next) {
  const { method, originalUrl, ip } = req;
  console.log(
    `[${new Date().toISOString()}] ${method} ${originalUrl} - IP: ${ip}]`,
  );
  next();
}

export default logRequest;
