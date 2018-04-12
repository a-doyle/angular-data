myApp.controller('MeetingsController', '$firebaseAuth', '$firebaseArray', ['$scope', function($scope, $firebaseAuth, $firebaseArray) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
        if (authUser) {
           var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
           var meetingsInfo = $firebaseArray(meetingsRef);

           $scope.meetings = meetingsInfo;

           $scope.addMeeting = function() {
               meetingsInfo.$add({
                   name: $scope.meetingname,
                   data: firebase.database.ServerValue.TIMESTAMP
               }).then(function() {
                   $scope.meetingname='';
               })
           } // add meeting

           $scope.deleteMeeting = function(key) {
               meetingsInfo.$remove(key);
           } // deleteMeeting

        } // authUser
    });
}]);