# How to Implement Google Form Webhook Script

This guide will walk you through how to set up a Google Apps Script to send Google Form responses to a webhook.

## Steps:

### 1. Open the Script Editor
1. Open your Google Form.
2. Click on the three vertical dots (options) in the upper-right corner.
3. Select **Script editor**. This will open the Google Apps Script editor in a new tab.

### 2. Create the Script
1. In the Script editor, delete any default code.
2. Paste the Gist code.
3. Replace `"YOUR-WEBHOOK-URL"` with the actual URL of the webhook where you want to send the form data.

### 3. Save the Script
1. Click **File** -> **Save**.
2. Name your project (e.g., "Google Form Webhook").

### 4. Add a Trigger
To ensure the script runs every time a form is submitted, you'll need to set up a trigger.

1. In the Apps Script editor, click the clock icon (Triggers) on the left-hand side.
2. Click **Add Trigger** in the bottom right corner.
3. Set the following options:
   - **Choose which function to run:** `onFormSubmit`
   - **Choose which deployment should run:** `Head`
   - **Select event source:** `From form`
   - **Select event type:** `On form submit`
4. Click **Save**.

### 5. Authorize the Script
The first time the trigger runs, you'll need to authorize the script to access your Google Form and send data.

1. A pop-up will ask for authorization when you save the trigger. Click **Review permissions**.
2. Select your Google account.
3. Click **Allow** to grant the required permissions.

### 6. Test the Integration
1. Submit a test response through your Google Form.
2. Check the webhook URL or your logging system to see if the data has been successfully sent.

### 7. Debugging (Optional)
- To view logs for debugging, open the **Executions** section in the Apps Script editor.
- You can also use `Logger.log()` to output data in the execution logs.

Your Google Form is now integrated with the webhook! Every form submission will trigger the script and send the data to the specified URL.
