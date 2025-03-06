const webhookUrl = "https://discord.com/api/webhooks/1347191437980078100/A14rJyNd2Dn0KriaLQPnk8ng6R-xdo5Sk2MMk_KVNFBOFRFZYnPAHIbRhr8jAHAD1qyy";

const simplePayload = {
  username: "Visitor Logger", // The name of the webhook bot
  content: "This is a test message from the website!" // The message content
};

fetch(webhookUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(simplePayload)
})
.then(response => {
  if (response.ok) {
    console.log("Test message sent successfully!");
  } else {
    console.error("Failed to send test message.");
  }
})
.catch(error => {
  console.error("Error:", error);
});
