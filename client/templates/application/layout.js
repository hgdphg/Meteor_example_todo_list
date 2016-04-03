//Test Session

Template.layout.helpers({
  pageTitle: function() {

    /*
    if(Session.get('pageTitle'))
      return Session.get('pageTitle');
    else
      return 'Meteor example';*/

    return Session.get('pageTitle')?Session.get('pageTitle'):'Meteor example';
  }
});

/* //test autorun function
Tracker.autorun(function() {
  alert(Session.get('message'));
});*/
