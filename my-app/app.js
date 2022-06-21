import express from 'express';
const app = express();
const PORT = process.env.port || 3000;
import cors from 'cors';

// midleware to parse json ✅
// import router to anime ✅
// route /anime ✅

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

// app.use('/anime', routerAnime);

// app.get('/', function (req, res) {
//   res.sendFile(html);
// });

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
  
});