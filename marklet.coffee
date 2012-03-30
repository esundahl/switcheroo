class ToggleEnvironment


  constructor: ->
    @url        = window.location
    @hostname   = window.location.hostname
    @script     = document.createElement "script"
    @loadjQuery()


  loadjQuery: ->
    if typeof jQuery == "undefined"
      @script.type = "text/javascript";
      @script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
      document.body.appendChild(@script);
    @tryReady()


  tryReady: =>
    if typeof jQuery == "undefined"
      setTimeout(@tryReady, 200)
    else
      @getConfig()
    console.log "Waiting for jQuery"


  getConfig: ->
    jQuery.getJSON '/environments.json', (data) =>
      @toggle data


  toggle: (data) ->
    for i, environment of data[0].environments
      if environment is @hostname
        next = parseInt(i) + 1
        unless next < data[0].environments.length
          next = 0
        window.location.hostname = data[0].environments[next]


toggle = new ToggleEnvironment()