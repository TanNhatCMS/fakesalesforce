const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const {sign} = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

// Tải cấu hình OpenAPI từ file YAML
const swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname, 'openapi.yaml'), 'utf8'));



// Ví dụ định nghĩa route POST /services/oauth2/token (bạn có thể giữ mã này từ phần trước)
app.use(express.urlencoded({ extended: true }));

// Secret key để ký JWT
const JWT_SECRET = 'your_secret_key';

app.post('/services/oauth2/token', (req, res) => {
    const { grant_type, assertion } = req.body;

    if (!grant_type || !assertion) {
        return res.status(400).json({
            error: 'Thiếu grant_type hoặc assertion',
        });
    }

    const payload = { grant_type, assertion };
    const access_token = sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.json({
        access_token,
        instance_url: 'https://test.salesforce.com',
    });
});
// Cấu hình Swagger UI để phục vụ tài liệu OpenAPI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
