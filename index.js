const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on('ready', () => {
    rpc.setActivity({
        details: "Your Text Here", // Details of your status here
        state: "Your Text Here 2", // State of your status here
        startTimestamp: new Date(), // Shows the elapsed time
        largeImageKey: "Image", // Image that will be visible to your status
        largeImageText: "Image Text", // Image Text. (when you hover over the image)
        buttons: [{
            label: "Button1", // Enter the name for your Button #1
            url: "Link1" // Insert a url for your Button #1
        }]
        // If you want one more button in your status. Put it like this:
        // Line 16: }, {
        // Line 17: label: "Button2",
        // Line 18: url: "Link2"
        // Line 19: }]
    })
    console.log('\n\n[WARN] This application is a Discord RPC. Any problems please contact the developer.\n\n[!] Application is already running. Do not close this console.')
});

rpc.login({
    clientId: "Application ID Here" // Enter the ID of your created Application here
})
