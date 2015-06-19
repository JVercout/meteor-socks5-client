Package.describe({
  name: 'jvercout:socks5',
  version: '0.0.1',
  summary: 'socks5',
  git: 'https://github.com/JVercout/meteor-socks5-client',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/server/socks5.js', 'server');
  api.export(['Agent'], 'server');
});

Npm.depends({
  "socks5-client": "1.1.0",
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.14.0');
  api.use('jvercout:socks5');
  api.addFiles('tests/server/socks5.js', 'server');
});