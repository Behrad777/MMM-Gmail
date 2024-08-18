Module.register("MMM-Gmail", {
  defaults: {
      updateInterval: 60000, // 1 min
      headerTitle: "GMAIL",
  },

  start: function() {
      this.emails = []; // Initial message
      this.getData(); // Fetch initial data
      this.scheduleUpdate(); // Schedule updates
  },

  getData: function() {
      this.sendSocketNotification('GET_MAIL', {}); // Request data from node_helper
  },


  getHeader(){
    return this.config.headerTitle;

  },

  getStyles: function(){
    return ['MMM-Gmail.css'];
  },


  scheduleUpdate: function() {
      const self = this;
      setInterval(function() {
          self.getData(); // Request data periodically
      }, this.config.updateInterval);
  },

  socketNotificationReceived: function(notification, payload) {

      if (notification === 'MAIL_RESULT') {
          this.emails = payload;
          this.updateDom(); // Refresh the display with the new message
      }
  },
  

  getDom: function() {
      // Create the table elements
        var emailTable = document.createElement("table");
        emailTable.className = 'email-table';

        var tableBody = document.createElement("tbody");

        this.emails.forEach(email => {
          var row = document.createElement("tr");

          let sender = email.sender;
          let subject = email.subject;
          let time = email.receivedTime;

          const data = [sender, subject, time];
          
          data.forEach(item => {
            var cell = document.createElement("td");
            cell.textContent = item;
            row.appendChild(cell);
          });

          tableBody.appendChild(row);
        });

        emailTable.appendChild(tableBody);


      return emailTable;
  }
  
});
