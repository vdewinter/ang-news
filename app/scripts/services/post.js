'use strict';

app.factory('Post', function($resource) {
    return $resource('https://ang-news-vdw.firebaseIO.com/posts/:id.json');
});