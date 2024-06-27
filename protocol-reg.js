const path = require('path');
const ProtocolRegistry = require('protocol-registry');
const fs = require('fs');
const crypto = require('crypto');

// Registers the Protocol
ProtocolRegistry.register({
    protocol: 'wsl-sd-imgautoupdater', // sets protocol for your command , testproto://**
    command: `node ${path.join(__dirname, './uriHandler.js')} $_URL_`, // $_URL_ will the replaces by the url used to initiate it
    override: true, // Use this with caution as it will destroy all previous Registrations on this protocol
    terminal: true, // Use this to run your command inside a terminal
    script: false
}).then(async () => {
    console.log('Successfully registered');
});