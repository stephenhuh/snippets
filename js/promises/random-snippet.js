function alertCancelledEvent(event) {

  var usersRelation = event.relation("attendingUsers")
  var eventHost = event.get('userHosting')
  var eventName = event.get("title")
  var hostUsername = eventHost.get('username')
  var alertString = hostUsername + " cancelled their event: " + eventName


  // send push notification to channel 
  Parse.Push.send({
    where: pushQuery,
    data: {
      alert: alertString,
      badge: "Increment",
      category: "4"
      }
    }, {
      success: function() {
        console.log('Successful event cancel push to: ' + user)
      },
      error: function(error) {
        console.log('EVENT CANCEL PUSH ERROR:' + error);
      }
    });

    // create notifications for all attendees 
  return eventHost.fetch().then(function(eventHost){

    var query = usersRelation.query()
    var pushQuery = new Parse.Query(Parse.Installation)
    pushQuery.equalTo("user", hostUsername);

    query.find().then((user) => {
      user.forEach(
        createCancelNotification(user, host, event, type, alertString)
      )
      console.log("########### FINISHED CREATING CANCEL NOTIFICATIONS #######")
    })
    return "finished";
  })

}


