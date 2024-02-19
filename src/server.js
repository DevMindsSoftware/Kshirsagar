const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB (make sure you have MongoDB installed locally or use a cloud service)
mongoose.connect('mongodb://localhost:27017/visitorCountDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const visitorCountSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const VisitorCount = mongoose.model('VisitorCount', visitorCountSchema);

app.get('/api/visitorCount', async (req, res) => {
  // Retrieve the current visitor count
  const countData = await VisitorCount.findOne();
  res.json({ count: countData ? countData.count : 0 });
});

app.get('*', (req, res) => {
  // Increment the visitor count on every request
  VisitorCount.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true }).exec();
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
