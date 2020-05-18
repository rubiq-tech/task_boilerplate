import express from 'express';
const app = express();

const PORT = 6000;

app.get('/', (req, res) => {
  res.send('Woosh ✈️')
});

app.listen(PORT, () => console.log(`Rubiq flight app listening at http://localhost:${PORT}`));
