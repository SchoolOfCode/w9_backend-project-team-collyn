import express from 'express';
const PORT = process.env.port || 5000;
import cors from 'cors';
import router from './router/index.js';

// midleware to parse json ✅
// import router to anime ✅
// route /anime ✅
const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.static('public'));

// test route
app.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'Test route up and running!',
  });
});

app.use('/projects', router);

// app.get('/', function (req, res) {
//   res.sendFile(html);
// });

// app.listen(PORT, function () {
//   console.log(`Server is running on port ${PORT}`);
// });
// UNCOMMENT TO START THE APP, NO NEED FOR TESTING

export default app;
