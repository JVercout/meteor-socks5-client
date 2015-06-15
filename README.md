# Meteor Socks5 Client for HTTP Call. 

Use socks5 through HTTP.call meteor method. Can be use to make HTTP call proxified through Tor.


## Installation
```
meteor add jvercout:socks5
```


## Example
Furnishing Agent Socks5 Class for npmRequestOptions as describe in the official doc: http://docs.meteor.com/#/full/http_call
Largely inspired from: https://github.com/mattcg/socks5-http-client

```
HTTP.call(
  'GET', 
  'http://icanhazip.com', 
  {
    npmRequestOptions: {
      agentClass: Agent,
      agentOptions: {
        socksHost: 'localhost',
        socksPort: 9050
      }
    }
  });
```




## License
The MIT License (MIT)

Copyright (c) <2015> < JVercout >

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
