import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

PlayersList = new Mongo.Collection('players');
if(Meteor.isClient){
  console.log("Hello client");
  Template.leaderboard.player

  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked a .player element");
      Session.set('selectedPlayer', 'session value test');
    }
  });
}

Template.leaderboard.helpers({
  'player': function(){
    return PlayersList.find();
  }
});
