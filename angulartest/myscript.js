/// <reference path="C:\Users\AYODEJI\Documents\Visual Studio 2015\Projects\angulartest\angulartest\Scripts/angular.min.js" />
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDl0ncSWNowvI-Kq0_Unr-gqLW9DadoWJs",
    authDomain: "dbidder-dc2bb.firebaseapp.com",
    databaseURL: "https://dbidder-dc2bb.firebaseio.com",
    projectId: "dbidder-dc2bb",
    storageBucket: "dbidder-dc2bb.appspot.com",
    messagingSenderId: "675679884183"
};
firebase.initializeApp(config);

var app = angular.module("sampleApp", ["firebase"]);

app.controller("ChatCtrl", function ($scope, $firebaseArray) {

    var ref = firebase.database().ref();

    $scope.names = $firebaseArray(ref);

    $scope.add = function () {

        $scope.names.$add({
            FullName: $scope.FullName,
            Email: $scope.Email,
            Number: $scope.Number,
            Amount: $scope.Amount,
            Bidnumber: $scope.BidNumber
        });

        $scope.FullName = "";
        $scope.Email = "";
        $scope.Number = "";
        $scope.Amount = "";
        $scope.BidNumber = "";

        window.alert("Thank You, Your Bid as bin placed");

    };
    

});