const authorize = require('../MMM-Gmail/services/googleApiAuthService');
const {getMails} = require('../MMM-Gmail/services/gmailApiService');
const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node_helper for module: " + this.name);
    },

    socketNotificationReceived: async function(notification, payload) {
        if (notification === 'GET_MAIL') {
            console.log("Get mail notif recieved")

            let auth = await authorize();
            if (payload > 4){
                payload =4;
            }
            let emails = await getMails(auth, payload);

            // console.log("sender 1: "+ emails[0].sender);

            this.sendSocketNotification("MAIL_RESULT", emails);

            console.log("sent result");
            
        }
    }
});
