import express from 'express';
import 'dotenv/config';
import routes from '../src/routes/routes.js'

const PORT = process.env.PORT || 8000
const app = express();



app.use(express.json());
app.use('/api/v1' , routes);


app.listen( PORT , () => {
  console.log(`Server is running on port ${PORT}`);
})