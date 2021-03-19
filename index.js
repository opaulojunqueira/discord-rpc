const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    console.log('\n\n[WARN] This application is a Discord RPC. Any problems please contact the developer.\n\n[!] Application is already running. Do not close this console.')
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Your Text Here", // Details of your status here
            assets: {
                large_image: "Image", // Image that will be visible to your status
                large_text: "Your Status" // Image Text. (when you hover over the image)
            },
            buttons: [{
                label: "Button1", // Enter the name for your Button #1
                url: "Link1" // Insert a url for your Button #1
            }, {
                label: "Button2", // Enter the name for your Button #2
                url: "Link2" // Insert a url for your Button #2
            }]
        }
    })
})

client.login({ clientId: "Application ID Here" }).catch(console.error); // Enter the ID of your created Application here
