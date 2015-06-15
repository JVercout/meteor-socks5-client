Package.describe({
  name: 'jvercout:socks5',
  version: '0.0.1',
  summary: 'socks5',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('socks5.js');
  api.export(['Agent'], 'server');
});

Npm.depends({
  "socks5-client": "1.1.0",
});