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