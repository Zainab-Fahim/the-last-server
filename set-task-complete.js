const axios = require('axios');
exports.handler = async(context, event, callback) => {
  let receipent_contact=event.receipent_contact;
  let response='';
  //update the status
  try {
    let userList = await axios.get(`https://fahim20210482.wixsite.com/my-site/_functions/userlist`);
    userList=userList.data.items
    console.log("USER LIST IS:",userList);
    for (let i = 0; i < userList.length; i++) {
      console.log("Current Number in loop is: ",userList[i].phoneNumber);
      if (userList[i].phoneNumber==receipent_contact){
        let toUpdate={"phoneNumber":`${userList[i].phoneNumber}`, "title":`${userList[i].title}`, "status":"done", "_id":`${userList[i]._id}`};
        const updateStatus = await axios.put(`https://fahim20210482.wixsite.com/my-site/_functions/updateStatus/${userList[i]._id}`,toUpdate)
        response=`Your task completion is recorded.\n\nHere is the list of those yet to complete:`;
      }
    }
  } catch (error) {
    console.error(error);
  }

  //provide an updated status of the task
 let notDone=[]
  try {
    let updatedUserList = await axios.get(`https://fahim20210482.wixsite.com/my-site/_functions/userlist`);
    updatedUserList=updatedUserList.data.items
    console.log("UPDATED USER LIST IS:",updatedUserList);
    for (let j = 0; j < updatedUserList.length; j++){
      if(updatedUserList[j].status.toLowerCase()!="done"){
        notDone.push({"name":updatedUserList[j].title, "contact":updatedUserList[j].phoneNumber});
      }
    }
  } catch (error) {
    console.error(error);
  }

  //get list of persons not completed the task
  for (let i = 0; i < notDone.length; i++){
    response+=`\n${notDone[i].name}`
  }

  //send the updated status
  const twilioClient = context.getTwilioClient();
  const from = event.From || 'whatsapp:+14155238886';
  const to = event.To || `${receipent_contact}`;
  const body = event.Body || `${response}`;
  twilioClient.messages
    .create({ body, to, from })
    .then((message) => {
      console.log('SMS successfully sent');
      console.log(message.sid);
      return callback(null, `Success! Message SID: ${message.sid}`);
    })
    .catch((error) => {
      console.error(error);
      return callback(error);
    });

  //alert the last person
    if (notDone.length==1){
        const twilioClient = context.getTwilioClient();
        const from = event.From || 'whatsapp:+14155238886';
        const to = event.To || `${notDone[0].contact}`;
        const body = event.Body || `Hey ${notDone[0].name}! Please note that you are the last to complete the task`;
        twilioClient.messages
          .create({ body, to, from })
          .then((message) => {
            console.log('SMS successfully sent');
            console.log(message.sid);
            return callback(null, `Success! Message SID: ${message.sid}`);
          })
          .catch((error) => {
            console.error(error);
            return callback(error);
          });  
    }
};
