"use strict";

var ALEXA = require("alexa-sdk");
var SKILL_NAME = "Cricket Scorer";

// List of cricket Players

var PLAYERS = [

"Virender Sehwag",
"Sachin Tendulkar",
"Saurav Ganguly",
"Virat Kohli",
"MS Dhoni",
"Ricky Ponting"
]


const Alexa = require('alexa-sdk');
const handlers = {
    'LaunchRequest': function () {
        this.emit('GetPlayer');
    },
    'GetPlayerIntent': function () {
        this.emit('GetPlayer');
    }
    },
    'GetPlayer': function () {
        // Get a random splayer from the players list
        const playerArr = PLAYERS;
        const playerIndex = Math.floor(Math.random() * playerArr.length);
        const randomPlayer = playerArr[playerIndex];

        // Create speech output
        const speechOutput =  "Player I choose to give you is " + randomPlayer;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomPlayer);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "I did not get you";
        const reprompt = "I did not get you";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "GoodBye";
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "GoodBye");
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};