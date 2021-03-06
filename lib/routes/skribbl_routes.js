'use strict';

var superagent = require('superagent');
var token      = require('../token.js');

module.exports = {
  createSkribbl:   createSkribbl,
  getSkribblTree:  getSkribblTree,
  getSkribblTrace: getSkribblTrace
};

// Create Skribbl
function createSkribbl(rootURI, skribblDataObj, token, callback) {
  superagent.post(rootURI + '/api/skribbl')
    .set('eat', token)
    .send(skribblDataObj)
    .end(function(err, res) {
      if (err) return callback(err, null);
      callback(null, res.body);
    });
}

// Get Tree Below Specific Skribbl
function getSkribblTree(rootURI, skribblID, callback) {
  superagent.get(rootURI + '/api/skribbl/' + skribblID)
    .end(function(err, res) {
      if (err) return callback(err, null);
      callback(null, res.body);
    });
}

// Get Trace of Skribbl Back to Story
function getSkribblTrace(rootURI, skribblID, callback) {
  superagent.get(rootURI + '/api/skribbl/trace/' + skribblID)
    .end(function(err, res) {
      if (err) return callback(err, null);
      callback(null, res.body);
    });
}
