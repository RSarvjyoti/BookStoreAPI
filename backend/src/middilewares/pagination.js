const paginate = (model) => {
    return async (req, res, next) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;
  
      try {
        const data = await model.findAndCountAll({
          limit,
          offset,
          where: req.filter,
          order: req.sort
        });
        const totalPages = Math.ceil(data.count / limit);
        res.paginatedResults = {
          results: data.rows,
          totalPages,
          currentPage: page
        };
        next();
      } catch (error) {
        res.status(500).send('Server Error');
      }
    };
  };
  
  module.exports = paginate;
  