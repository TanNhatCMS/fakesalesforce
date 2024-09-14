const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../api/swagger.json');
const DefaultController = require('./controllers/DefaultController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Route xử lý yêu cầu lấy token
app.post('/services/oauth2/token', DefaultController.servicesOauth2TokenPOST);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
