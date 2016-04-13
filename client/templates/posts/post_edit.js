Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    Meteor.call('postCheckUrl', postProperties, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
      if (result.postExists) {
        alert('Have exist posts on <'+ postProperties.url +'> ....\nPage redirect to post lists, no change');
        Router.go('postPage', {_id: currentPostId});
      }
      else {
        Posts.update(currentPostId, {$set: postProperties}, function(error) {
          if (error) {
            // display the error to the user
            alert(error.reason);
          } else {
            Router.go('postPage', {_id: currentPostId});
          }
        });
      }
    });


  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});
