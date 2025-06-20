import jwt from 'jsonwebtoken'; 

const protect = (req, res, next) => {
  const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    
    if (!process.env.JWT_SECRET) return res.status(500).json({ message: 'Server configuration error' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(401).json({ message: "Authentication failed" });
      }
  }
};

export default protect;