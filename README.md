# Switcheroo

This is a simple javascript <a href="javascript: (function () {var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.github.com/eriksundahl/switcheroo/master/marklet.js');     document.body.appendChild(jsCode);    }());">bookmarklet</a> written in coffeescript that toggles between your different development environments. It works by specifying an environments.json file in the root of your site with the paths to your various dev sites.

    [{
      "environments": [
        "site.dev",
        "site.staging.com",
        "www.site.com"
      ]
    }]

After you have setup your environments.json file drag this <a href="javascript: (function () {var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://raw.github.com/eriksundahl/switcheroo/master/marklet.js');     document.body.appendChild(jsCode);    }());">bookmarklet</a> to your bookmarks bar and use it to toggle between the different sites. Thats it!

Copyright (c) 2012 Erik Sundahl, Kris Luminar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.