"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const child_process_1 = require("child_process");
const server_1 = require("../src/modif/server");
const client_1 = require("../src/modif/client");
describe('Server', () => {
    let client;
    let server;
    let child;
    before(() => {
        child = (0, child_process_1.spawn)('node', ['../../src/mod/server.js']);
        // sinon.stub(console, 'log');
        server = new server_1.Server(3000);
        client = new client_1.Client(3000);
    });
    it('should be able to start', () => {
        (0, chai_1.expect)(server).to.be.an.instanceof(server_1.Server);
        (0, chai_1.expect)(server).respondTo('start');
    });
    it('should be able to receive a message', (done) => {
        let output = '';
        child.stdout.on('data', (data) => {
            output += data;
        });
        child.on('close', () => {
            (0, chai_1.expect)(output).to.not.be.null;
            done();
        });
        client.sendMsg('Hello World');
    });
});
