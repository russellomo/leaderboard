import { Meteor } from 'meteor/meteor';
PlayersList = new Mongo.Collection('players');
Meteor.startup(() => {
  // code to run on server at startup
});


if(Meteor.isServer){
  console.log("Hello server");
}

