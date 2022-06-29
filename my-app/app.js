import express from 'express';
const PORT = process.env.port || 5000;
import cors from 'cors';
import router from './router/index.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'Test route up and running!',
  });
});

app.use('/projects', router);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
