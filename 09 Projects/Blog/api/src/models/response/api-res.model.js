const APIResponseMeta = require('./api-res-meta.model');
const APIResponsePagination = require('./api-res-pagination.model');

class APIResponse {
  meta;
  pagination;
  response;

  static fromObjectResult(document) {
    try {
      const meta = new APIResponseMeta(200);
      const response = document;

      return new APIResponse(response, meta);
    } catch (error) {
      throw error;
    }
  }

  static fromObjectCreated(object) {
    try {
      const meta = new APIResponseMeta(200, 'Created');
      const response = object;

      return new APIResponse(response, meta);
    } catch (error) {
      throw error;
    }
  }

  static fromMongoPagedResult(mongoPagedResult, raw = false) {
    const pagination = APIResponsePagination.fromMongoPagedResult(mongoPagedResult);
    const meta = new APIResponseMeta(200);

    let response = undefined;

    if (mongoPagedResult.results) response = mongoPagedResult.results;
    else {
      meta.message = 'No results found';
      response = [];
    }

    if (raw) return ({ response, pagination, meta });
    return new APIResponse(response, meta, pagination);
  }

  static fromSingleResult(result, extraMeta) {
    let meta = new APIResponseMeta(200);
    let response = undefined;

    if (result !== undefined) response = result;
    else {
      meta.message = 'No results found';
      response = {};
    }

    if (extraMeta) meta = { ...meta, ...extraMeta };

    return new APIResponse(response, meta);
  }

  static fromCustomResponse(res, data = {}, status = 200) {
    return res.status(status).json(data);
  }

  static withMeta(meta) {
    return new APIResponse(undefined, meta);
  }

  constructor(
    _response,
    _meta,
    _pagination
  ) {
    if (_response) this.response = _response;
    if (_meta) this.meta = _meta;
    if (_pagination) this.pagination = _pagination;
  }

}

module.exports = APIResponse;
