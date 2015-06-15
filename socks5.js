var http = Npm.require('http'),
    inherits = Npm.require('util').inherits,
    socksClient = Npm.require('socks5-client');


Agent = function ( options ) {
    http.Agent.call(this, options);    
    this.socksHost = options.socksHost || 'localhost';
    this.socksPort = options.socksPort || 9050;

    this.createConnection = socksClient.createConnection;
}

inherits(Agent, http.Agent);