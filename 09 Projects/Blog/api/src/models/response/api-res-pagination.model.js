
class APIResponsePagination {
  hasNext;
  next;
  hasPrevious;
  previous;
  size;
  total;
  skip;
  limit;

  static fromMongoPagedResult(mongoPageResult) {
    const apiPagination = new APIResponsePagination();

    apiPagination.size = mongoPageResult.results && mongoPageResult.results.length;
    apiPagination.limit = mongoPageResult.limit;

    if (mongoPageResult.total !== undefined) apiPagination.total = mongoPageResult.total;
    if (mongoPageResult.skip !== undefined) apiPagination.skip = mongoPageResult.skip;
    if (mongoPageResult.hasNext !== undefined) apiPagination.hasNext = mongoPageResult.hasNext;
    if (mongoPageResult.hasPrevious !== undefined) apiPagination.hasPrevious = mongoPageResult.hasPrevious;
    if (mongoPageResult.next !== undefined) apiPagination.next = mongoPageResult.next;
    if (mongoPageResult.previous !== undefined) apiPagination.previous = mongoPageResult.previous;

    return apiPagination;
  }

}

module.exports = APIResponsePagination;
