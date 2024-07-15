const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Online Bookstore API',
      version: '1.0.0',
      description: 'API documentation for the Online Bookstore',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 9080}`,
      },
    ],
  },
  apis: ['./routes/* index.js'], 
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
