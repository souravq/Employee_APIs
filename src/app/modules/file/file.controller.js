export const handleFileUpload = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    filename: file.filename,
    size: file.size,
  });
};
