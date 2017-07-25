'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var STORE = exports.STORE = 'store';
var SERVER_ERROR = exports.SERVER_ERROR = 'serverError';
var SUBMIT_SUCCESS = exports.SUBMIT_SUCCESS = 'isSubmitSuccess';
var RESULT = exports.RESULT = 'serverResponse';
var DO_SUBMIT = exports.DO_SUBMIT = 'REDUX_DISPATCH';
var SUBMIT_FAILED = exports.SUBMIT_FAILED = 'SAGA_FAILED';
var SUBMIT_SUCCEED = exports.SUBMIT_SUCCEED = 'SAGA_SUCCEED';
var SUBMIT_ACKED = exports.SUBMIT_ACKED = 'REDUX_ACKNOWLEDGE';
var HOC_CLEAR = exports.HOC_CLEAR = 'REDUX_CLEAN_UP';

var SEPARATOR = exports.SEPARATOR = '__';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiU1RPUkUiLCJTRVJWRVJfRVJST1IiLCJTVUJNSVRfU1VDQ0VTUyIsIlJFU1VMVCIsIkRPX1NVQk1JVCIsIlNVQk1JVF9GQUlMRUQiLCJTVUJNSVRfU1VDQ0VFRCIsIlNVQk1JVF9BQ0tFRCIsIkhPQ19DTEVBUiIsIlNFUEFSQVRPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSx3QkFBUSxPQUFkO0FBQ0EsSUFBTUMsc0NBQWUsYUFBckI7QUFDQSxJQUFNQywwQ0FBaUIsaUJBQXZCO0FBQ0EsSUFBTUMsMEJBQVMsZ0JBQWY7QUFDQSxJQUFNQyxnQ0FBWSxnQkFBbEI7QUFDQSxJQUFNQyx3Q0FBZ0IsYUFBdEI7QUFDQSxJQUFNQywwQ0FBaUIsY0FBdkI7QUFDQSxJQUFNQyxzQ0FBZSxtQkFBckI7QUFDQSxJQUFNQyxnQ0FBWSxnQkFBbEI7O0FBRUEsSUFBTUMsZ0NBQVksSUFBbEIiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNUT1JFID0gJ3N0b3JlJztcbmV4cG9ydCBjb25zdCBTRVJWRVJfRVJST1IgPSAnc2VydmVyRXJyb3InO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9TVUNDRVNTID0gJ2lzU3VibWl0U3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTVUxUID0gJ3NlcnZlclJlc3BvbnNlJztcbmV4cG9ydCBjb25zdCBET19TVUJNSVQgPSAnUkVEVVhfRElTUEFUQ0gnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9GQUlMRUQgPSAnU0FHQV9GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9TVUNDRUVEID0gJ1NBR0FfU1VDQ0VFRCc7XG5leHBvcnQgY29uc3QgU1VCTUlUX0FDS0VEID0gJ1JFRFVYX0FDS05PV0xFREdFJztcbmV4cG9ydCBjb25zdCBIT0NfQ0xFQVIgPSAnUkVEVVhfQ0xFQU5fVVAnO1xuXG5leHBvcnQgY29uc3QgU0VQQVJBVE9SID0gJ19fJztcbiJdfQ==