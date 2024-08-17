const {google} = require('googleapis');
const moment = require('moment');

async function getMails(auth, maxResults = 3) {
    const gmail = google.gmail({version: 'v1', auth});
    
    // Fetch the emails
    const res = await gmail.users.messages.list({
        userId: 'me',
        maxResults: maxResults,
    });
    
    if (!res.data.messages || res.data.messages.length === 0) {
        console.log('No messages found.');
        return [];
    }

    const emails = [];
    
    // Process each email
    for (const message of res.data.messages) {
        const messageId = message.id;
        //console.log("Message ID: " + messageId);

        // Fetch the email content
        const messageContent = await gmail.users.messages.get({
            userId: 'me',
            id: messageId,
        });

        const headers = messageContent.data.payload.headers;
        const fromHeader = headers.find(header => header.name === 'From');
        let sender = fromHeader ? fromHeader.value : 'Unknown sender';
        //removes the gmail tag from the sender
        sender = sender.replace(/<[^>]*>/, '').trim();

        //finding the subject
        const subjectHeader = headers.find(header => header.name === 'Subject');
        let subject = subjectHeader ? subjectHeader.value : 'No subject';

        //finding the date
        const dateHeader = headers.find(header => header.name === 'Date');
        let receivedTime = dateHeader ? dateHeader.value : 'No date';
        receivedTime = convertTime(receivedTime);

        // Extract body content
        const payload = messageContent.data.payload;
        let mailBody = '';

        if (payload.parts) {
            for (const part of payload.parts) {
                if (part.mimeType === 'text/plain' && part.body.data) {
                    mailBody = Buffer.from(part.body.data, 'base64').toString('utf-8');
                    break;
                }
            }
        } else if (payload.body && payload.mimeType === 'text/plain') {
            const bodyData = payload.body.data;
            mailBody = Buffer.from(bodyData, 'base64').toString('utf-8');
        }

        // Shorten infromation to fit the containers

        if(mailBody.length > 40){
            mailBody= (mailBody.slice(0, 40)).replace(/\r?\n|\r/g, ' ') + "...";

        }
        if(subject.length > 40){
            subject= (subject.slice(0, 40)).replace(/\r?\n|\r/g, ' ') + "...";

        }

        emails.push({
            sender,
            subject,
            mailBody,
            receivedTime
        });
    }

    return emails;
}

function convertTime(time){
    const date = moment(time, 'ddd, DD MMM YYYY HH:mm:ss ZZ');

    // Convert to 12-hour format

    const twelveHourFormat = date.isSame(moment(), 'day')
  ? date.format('h:mm A') // Format as 'h:mm A' if it's today
  : date.format('MMMM D - h:mm A'); // Format as 'MMMM D - h:mm A' otherwise

    return twelveHourFormat;
}


module.exports = {
    getMails: getMails,
}
