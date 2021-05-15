
class APIResponseMeta {
  code;
  message;

  constructor(_code, _message) {
    this.code = _code;
    this.message = _message;
  }
}

module.exports = APIResponseMeta;
