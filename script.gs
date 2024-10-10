function onFormSubmit(e) {
  // Ensure event object and response are valid before proceeding
  if (!e || !e.response) {
    return;
  }

  // Extract form responses and metadata
  const formResponses = e.response.getItemResponses(); // Get the user's responses
  const formTitle = e.source.getTitle(); // Title of the form
  const formTimestamp = e.source.getTimestamp(); // Timestamp of form submission

  // Map responses to a simplified format of question-answer pairs
  const responses = formResponses.map(itemResponse => {
    return {
      question: itemResponse.getItem().getTitle(), // Get question text
      answer: itemResponse.getResponse() // Get user's answer
    };
  });

  // Construct the payload to be sent to the webhook
  const payload = {
    title: formTitle,       // Title of the form
    createdAt: formTimestamp, // Timestamp of form submission
    responses               // List of question-answer pairs
  };

  Logger.log(payload); // Log the payload for debugging purposes

  const webhookUrl = "YOUR-WEBHOOK-URL"; // Webhook URL for sending form data
  
  // Send form data via a POST request to the API
  UrlFetchApp.fetch(webhookUrl, {
    method: "POST", // Set request method to POST
    contentType: "application/json", // Set the content type to JSON
    payload: JSON.stringify(payload) // Convert the payload to JSON string format
  });
}
