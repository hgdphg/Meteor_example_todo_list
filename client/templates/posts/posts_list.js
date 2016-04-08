Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {title: 1}});
  }
});
