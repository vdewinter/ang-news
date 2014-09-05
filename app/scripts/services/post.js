'use strict';

app.factory('Post', function($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'posts');
    // posts is reference to firebase service, which retruns an angularFire obj
    var posts = $firebase(ref).$asArray();

    var Post = {
        all: posts,
        create: function(post) {
            return posts.$add(post);
        },
        find: function(postId){
            return $firebase(ref.child(postId)).$asObject();
        },
        delete: function(post) {
            return posts.$remove(post);
        }
    };

    return Post;
});