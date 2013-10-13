(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "jams\n====\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nentryPoint: \"2013-10-12\"\nremoteDependencies: [\n  \"//code.jquery.com/jquery-1.10.1.min.js\"\n  \"http://strd6.github.io/tempest/javascripts/envweb.js\"\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\ndependencies: \n  runtime: \"STRd6/runtime:v0.1.1\"\n",
      "type": "blob"
    },
    "2013-10-12.coffee.md": {
      "path": "2013-10-12.coffee.md",
      "mode": "100644",
      "content": "Simple Tactics\n==============\n\nMove duders around and have them hit one another.\n\nDuder\n-----\n\n    templates =\n      duder: require \"./duder_template\"\n\n    gameTemplate = require \"./game_template\"\n\n    names = [\n      \"Carmack\"\n      \"Romero\"\n      \"Hall\"\n    ]\n\n    enemyNames = [\n      \"Rush\"\n      \"Bjork\"\n      \"Pantera\"\n    ]\n\n    alive = (o) ->\n      o.I.hp > 0\n\n    msg = (msg) ->\n      events([\"#{msg}\\n\"].concat events())\n\n    attack = (from, to) ->\n      if from and to\n        dmg = [0..1].map ->\n          1.d(6) > 1.d(6)\n        .sum()\n\n        if dmg > 0\n          msg \"#{from.name()} struck #{to.name()} for #{dmg}!\"\n\n          to.hp(to.hp() - dmg)\n        else\n          msg \"#{from.name()} missed #{to.name()}\"\n\n\n    Duder = (I={}, self=Model(I)) ->\n      Object.defaults I,\n        active: false\n        enemy: false\n        index: 0\n        hp: 3\n        hpMax: 3\n        \n      I.name ?= names[I.index]\n\n      self.observeAll()\n\n      self.click = ->\n        if I.enemy\n          if activeDuder = guys.filter (guy) ->\n            guy.active()\n          .first()\n            activeDuder.active(false)\n\n            attack(activeDuder, self)\n\n            if opponent = opponents.filter(alive).first()\n              if target = guys.filter(alive).rand()\n                attack(opponent, target)\n\n        else\n          if self.hp() > 0\n            self.activate()\n            \n        if opponents.filter(alive).length is 0\n          msg \"A winner is you!\"\n        else if guys.filter(alive).length is 0\n          msg \"You have been defeated!\"\n\n      self.activate = ->\n        guys.invoke \"active\", false\n        self.active(true)\n\n      return self\n\n    opponents = [0..2].map (i) ->\n      Duder\n        name: enemyNames[i]\n        enemy: true\n\n    guys = []\n\n    guys = [0..2].map (i) ->\n      Duder\n        index: i\n\n    events = Observable []\n\n    $('body').append gameTemplate\n      duders: guys\n      opponents: opponents\n      render: (template, object) ->\n        templates[template](object)\n      events: events\n\n    $('body').append $ \"<style>\",\n      text: require('./style')\n",
      "type": "blob"
    },
    "duder_template.haml": {
      "path": "duder_template.haml",
      "mode": "100644",
      "content": ".duder\n  %h2= @name\n  %p\n    = @hp\n    = \"/\"\n    = @hpMax\n\n  %p\n    Active: \n    = @active\n\n  - on \"click\", @click\n",
      "type": "blob"
    },
    "style.styl": {
      "path": "style.styl",
      "mode": "100644",
      "content": ".duder\n  border: 1px solid black\n  border-radius: 4px\n  box-sizing: border-box\n  display: inline-block\n  margin: 1em\n  padding: 4px\n  width: 120px\n  height: 150px\n\n  h2\n    margin: 0\n\n  p\n    text-align: right\n",
      "type": "blob"
    },
    "game_template.haml": {
      "path": "game_template.haml",
      "mode": "100644",
      "content": "- game = this\n\n.team\n  - each @duders, (duder) ->\n    = game.render \"duder\", duder\n\n.opponents\n  - each @opponents, (duder) ->\n    = game.render \"duder\", duder\n\n%pre.events\n  - each @events, (event) ->\n    = event\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"2013-10-12\",\"remoteDependencies\":[\"//code.jquery.com/jquery-1.10.1.min.js\",\"http://strd6.github.io/tempest/javascripts/envweb.js\",\"http://strd6.github.io/require/v0.2.2.js\"],\"dependencies\":{\"runtime\":\"STRd6/runtime:v0.1.1\"}};",
      "type": "blob"
    },
    "2013-10-12": {
      "path": "2013-10-12",
      "content": "(function() {\n  var Duder, alive, attack, enemyNames, events, gameTemplate, guys, msg, names, opponents, templates;\n\n  templates = {\n    duder: require(\"./duder_template\")\n  };\n\n  gameTemplate = require(\"./game_template\");\n\n  names = [\"Carmack\", \"Romero\", \"Hall\"];\n\n  enemyNames = [\"Rush\", \"Bjork\", \"Pantera\"];\n\n  alive = function(o) {\n    return o.I.hp > 0;\n  };\n\n  msg = function(msg) {\n    return events([\"\" + msg + \"\\n\"].concat(events()));\n  };\n\n  attack = function(from, to) {\n    var dmg;\n    if (from && to) {\n      dmg = [0, 1].map(function() {\n        return 1..d(6) > 1..d(6);\n      }).sum();\n      if (dmg > 0) {\n        msg(\"\" + (from.name()) + \" struck \" + (to.name()) + \" for \" + dmg + \"!\");\n        return to.hp(to.hp() - dmg);\n      } else {\n        return msg(\"\" + (from.name()) + \" missed \" + (to.name()));\n      }\n    }\n  };\n\n  Duder = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = Model(I);\n    }\n    Object.defaults(I, {\n      active: false,\n      enemy: false,\n      index: 0,\n      hp: 3,\n      hpMax: 3\n    });\n    if (I.name == null) {\n      I.name = names[I.index];\n    }\n    self.observeAll();\n    self.click = function() {\n      var activeDuder, opponent, target;\n      if (I.enemy) {\n        if (activeDuder = guys.filter(function(guy) {\n          return guy.active();\n        }).first()) {\n          activeDuder.active(false);\n          attack(activeDuder, self);\n          if (opponent = opponents.filter(alive).first()) {\n            if (target = guys.filter(alive).rand()) {\n              attack(opponent, target);\n            }\n          }\n        }\n      } else {\n        if (self.hp() > 0) {\n          self.activate();\n        }\n      }\n      if (opponents.filter(alive).length === 0) {\n        return msg(\"A winner is you!\");\n      } else if (guys.filter(alive).length === 0) {\n        return msg(\"You have been defeated!\");\n      }\n    };\n    self.activate = function() {\n      guys.invoke(\"active\", false);\n      return self.active(true);\n    };\n    return self;\n  };\n\n  opponents = [0, 1, 2].map(function(i) {\n    return Duder({\n      name: enemyNames[i],\n      enemy: true\n    });\n  });\n\n  guys = [];\n\n  guys = [0, 1, 2].map(function(i) {\n    return Duder({\n      index: i\n    });\n  });\n\n  events = Observable([]);\n\n  $('body').append(gameTemplate({\n    duders: guys,\n    opponents: opponents,\n    render: function(template, object) {\n      return templates[template](object);\n    },\n    events: events\n  }));\n\n  $('body').append($(\"<style>\", {\n    text: require('./style')\n  }));\n\n}).call(this);\n\n//# sourceURL=2013-10-12.coffee",
      "type": "blob"
    },
    "duder_template": {
      "path": "duder_template",
      "content": "module.exports = (function(data) {\n  return (function() {\n    var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;\n    _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;\n    __push(document.createDocumentFragment());\n    __element = document.createElement(\"div\");\n    __push(__element);\n    __attribute(__element, \"class\", \"duder\");\n    __element = document.createElement(\"h2\");\n    __push(__element);\n    __element = document.createTextNode('');\n    __text(__element, this.name);\n    __push(__element);\n    __pop();\n    __pop();\n    __element = document.createElement(\"p\");\n    __push(__element);\n    __element = document.createTextNode('');\n    __text(__element, this.hp);\n    __push(__element);\n    __pop();\n    __element = document.createTextNode('');\n    __text(__element, \"/\");\n    __push(__element);\n    __pop();\n    __element = document.createTextNode('');\n    __text(__element, this.hpMax);\n    __push(__element);\n    __pop();\n    __pop();\n    __element = document.createElement(\"p\");\n    __push(__element);\n    __element = document.createTextNode('');\n    __text(__element, \"Active: \\n\");\n    __push(__element);\n    __pop();\n    __element = document.createTextNode('');\n    __text(__element, this.active);\n    __push(__element);\n    __pop();\n    __pop();\n    __on(\"click\", this.click);\n    __pop();\n    return __pop();\n  }).call(data);\n});\n;",
      "type": "blob"
    },
    "style": {
      "path": "style",
      "content": "module.exports = \".duder {\\n  border: 1px solid black;\\n  border-radius: 4px;\\n  display: inline-block;\\n  margin: 1em;\\n  padding: 4px;\\n  width: 120px;\\n  height: 150px;\\n  -ms-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n.duder h2 {\\n  margin: 0;\\n}\\n\\n.duder p {\\n  text-align: right;\\n}\";",
      "type": "blob"
    },
    "game_template": {
      "path": "game_template",
      "content": "module.exports = (function(data) {\n  return (function() {\n    var game, __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;\n    _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;\n    __push(document.createDocumentFragment());\n    game = this;\n    __element = document.createElement(\"div\");\n    __push(__element);\n    __attribute(__element, \"class\", \"team\");\n    __each(this.duders, function(duder) {\n      __element = document.createTextNode('');\n      __text(__element, game.render(\"duder\", duder));\n      __push(__element);\n      return __pop();\n    });\n    __pop();\n    __element = document.createElement(\"div\");\n    __push(__element);\n    __attribute(__element, \"class\", \"opponents\");\n    __each(this.opponents, function(duder) {\n      __element = document.createTextNode('');\n      __text(__element, game.render(\"duder\", duder));\n      __push(__element);\n      return __pop();\n    });\n    __pop();\n    __element = document.createElement(\"pre\");\n    __push(__element);\n    __attribute(__element, \"class\", \"events\");\n    __each(this.events, function(event) {\n      __element = document.createTextNode('');\n      __text(__element, event);\n      __push(__element);\n      return __pop();\n    });\n    __pop();\n    return __pop();\n  }).call(data);\n});\n;",
      "type": "blob"
    }
  },
  "entryPoint": "2013-10-12",
  "dependencies": {
    "runtime": [
      {
        "version": "0.1.1",
        "source": {
          "LICENSE": {
            "path": "LICENSE",
            "mode": "100644",
            "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
            "type": "blob"
          },
          "README.md": {
            "path": "README.md",
            "mode": "100644",
            "content": "runtime\n=======\n",
            "type": "blob"
          },
          "runtime.coffee.md": {
            "path": "runtime.coffee.md",
            "mode": "100644",
            "content": "The runtime holds utilities to assist with an apps running environment.\n\nIt should me moved into it's own component one day.\n\n    Runtime = (pkg) ->\n\nHold on to a reference to our root node.\n\n      root = null\n\nReturns the node that is the parent of the script element that contains the code\nthat calls this function. If `document.write` has been called before this then the\nresults may not be accurate. Therefore be sure to call currentNode before\nwriting anything to the document.\n\n      currentNode = ->\n        target = document.documentElement\n\n        while (target.childNodes.length and target.lastChild.nodeType == 1)\n          target = target.lastChild\n\n        return target.parentNode\n\nDisplay a promo in the console linking back to the creator of this app.\n\n      promo = ->\n        console.log(\"%c You should meet my creator #{pkg.progenitor.url}\", \"\"\"\n          background: #000;\n          color: white;\n          font-size: 2em;\n          line-height: 2em;\n          padding: 10px 100px;\n          margin-bottom: 1em;\n          text-shadow:\n            0 0 0.05em #fff,\n            0 0 0.1em #fff,\n            0 0 0.15em #fff,\n            0 0 0.2em #ff00de,\n            0 0 0.35em #ff00de,\n            0 0 0.4em #ff00de,\n            0 0 0.5em #ff00de,\n            0 0 0.75em #ff00de;'\n        \"\"\")\n\nCall on start to boot up the runtime, get the root node, add styles, display a\npromo.\n\n      boot: ->\n        root = currentNode()\n\n        promo()\n\n        return root\n\nApply the stylesheet to the root node.\n\n      applyStyleSheet: (style) ->\n        styleNode = document.createElement(\"style\")\n        styleNode.innerHTML = style\n\n        root.appendChild(styleNode)\n\nExport\n\n    module.exports = Runtime\n",
            "type": "blob"
          },
          "pixie.cson": {
            "path": "pixie.cson",
            "mode": "100644",
            "content": "version: \"0.1.1\"\nentryPoint: \"runtime\"\nremoteDependencies: [\n  \"http://strd6.github.io/require/v0.2.0.js\"\n]\n",
            "type": "blob"
          },
          "test/runtime.coffee": {
            "path": "test/runtime.coffee",
            "mode": "100644",
            "content": "Runtime = require \"../runtime\"\n\ndescribe \"Runtime\", ->\n  it \"should be created from a package and provide a boot method\", ->\n    assert Runtime(PACKAGE).boot\n",
            "type": "blob"
          }
        },
        "distribution": {
          "runtime": {
            "path": "runtime",
            "content": "(function() {\n  var Runtime;\n\n  Runtime = function(pkg) {\n    var currentNode, promo, root;\n    root = null;\n    currentNode = function() {\n      var target;\n      target = document.documentElement;\n      while (target.childNodes.length && target.lastChild.nodeType === 1) {\n        target = target.lastChild;\n      }\n      return target.parentNode;\n    };\n    promo = function() {\n      return console.log(\"%c You should meet my creator \" + pkg.progenitor.url, \"background: #000;\\ncolor: white;\\nfont-size: 2em;\\nline-height: 2em;\\npadding: 10px 100px;\\nmargin-bottom: 1em;\\ntext-shadow:\\n  0 0 0.05em #fff,\\n  0 0 0.1em #fff,\\n  0 0 0.15em #fff,\\n  0 0 0.2em #ff00de,\\n  0 0 0.35em #ff00de,\\n  0 0 0.4em #ff00de,\\n  0 0 0.5em #ff00de,\\n  0 0 0.75em #ff00de;'\");\n    };\n    return {\n      boot: function() {\n        root = currentNode();\n        promo();\n        return root;\n      },\n      applyStyleSheet: function(style) {\n        var styleNode;\n        styleNode = document.createElement(\"style\");\n        styleNode.innerHTML = style;\n        return root.appendChild(styleNode);\n      }\n    };\n  };\n\n  module.exports = Runtime;\n\n}).call(this);\n",
            "type": "blob"
          },
          "pixie": {
            "path": "pixie",
            "content": "module.exports = {\"version\":\"0.1.1\",\"entryPoint\":\"runtime\",\"remoteDependencies\":[\"http://strd6.github.io/require/v0.2.0.js\"]};",
            "type": "blob"
          },
          "test/runtime": {
            "path": "test/runtime",
            "content": "(function() {\n  var Runtime;\n\n  Runtime = require(\"../runtime\");\n\n  describe(\"Runtime\", function() {\n    return it(\"should be created from a package and provide a boot method\", function() {\n      return assert(Runtime(PACKAGE).boot);\n    });\n  });\n\n}).call(this);\n",
            "type": "blob"
          }
        },
        "entryPoint": "runtime",
        "dependencies": {},
        "remoteDependencies": [
          "http://strd6.github.io/require/v0.2.0.js"
        ],
        "repository": {
          "id": 13202878,
          "name": "runtime",
          "full_name": "STRd6/runtime",
          "owner": {
            "login": "STRd6",
            "id": 18894,
            "avatar_url": "https://0.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png",
            "gravatar_id": "33117162fff8a9cf50544a604f60c045",
            "url": "https://api.github.com/users/STRd6",
            "html_url": "https://github.com/STRd6",
            "followers_url": "https://api.github.com/users/STRd6/followers",
            "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
            "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
            "organizations_url": "https://api.github.com/users/STRd6/orgs",
            "repos_url": "https://api.github.com/users/STRd6/repos",
            "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
            "received_events_url": "https://api.github.com/users/STRd6/received_events",
            "type": "User"
          },
          "private": false,
          "html_url": "https://github.com/STRd6/runtime",
          "description": "",
          "fork": false,
          "url": "https://api.github.com/repos/STRd6/runtime",
          "forks_url": "https://api.github.com/repos/STRd6/runtime/forks",
          "keys_url": "https://api.github.com/repos/STRd6/runtime/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/STRd6/runtime/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/STRd6/runtime/teams",
          "hooks_url": "https://api.github.com/repos/STRd6/runtime/hooks",
          "issue_events_url": "https://api.github.com/repos/STRd6/runtime/issues/events{/number}",
          "events_url": "https://api.github.com/repos/STRd6/runtime/events",
          "assignees_url": "https://api.github.com/repos/STRd6/runtime/assignees{/user}",
          "branches_url": "https://api.github.com/repos/STRd6/runtime/branches{/branch}",
          "tags_url": "https://api.github.com/repos/STRd6/runtime/tags",
          "blobs_url": "https://api.github.com/repos/STRd6/runtime/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/STRd6/runtime/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/STRd6/runtime/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/STRd6/runtime/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/STRd6/runtime/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/STRd6/runtime/languages",
          "stargazers_url": "https://api.github.com/repos/STRd6/runtime/stargazers",
          "contributors_url": "https://api.github.com/repos/STRd6/runtime/contributors",
          "subscribers_url": "https://api.github.com/repos/STRd6/runtime/subscribers",
          "subscription_url": "https://api.github.com/repos/STRd6/runtime/subscription",
          "commits_url": "https://api.github.com/repos/STRd6/runtime/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/STRd6/runtime/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/STRd6/runtime/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/STRd6/runtime/issues/comments/{number}",
          "contents_url": "https://api.github.com/repos/STRd6/runtime/contents/{+path}",
          "compare_url": "https://api.github.com/repos/STRd6/runtime/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/STRd6/runtime/merges",
          "archive_url": "https://api.github.com/repos/STRd6/runtime/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/STRd6/runtime/downloads",
          "issues_url": "https://api.github.com/repos/STRd6/runtime/issues{/number}",
          "pulls_url": "https://api.github.com/repos/STRd6/runtime/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/STRd6/runtime/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/STRd6/runtime/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/STRd6/runtime/labels{/name}",
          "created_at": "2013-09-30T00:44:37Z",
          "updated_at": "2013-09-30T00:44:37Z",
          "pushed_at": "2013-09-30T00:44:37Z",
          "git_url": "git://github.com/STRd6/runtime.git",
          "ssh_url": "git@github.com:STRd6/runtime.git",
          "clone_url": "https://github.com/STRd6/runtime.git",
          "svn_url": "https://github.com/STRd6/runtime",
          "homepage": null,
          "size": 0,
          "watchers_count": 0,
          "language": null,
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "forks_count": 0,
          "mirror_url": null,
          "open_issues_count": 0,
          "forks": 0,
          "open_issues": 0,
          "watchers": 0,
          "master_branch": "master",
          "default_branch": "master",
          "permissions": {
            "admin": true,
            "push": true,
            "pull": true
          },
          "network_count": 0,
          "branch": "v0.1.1",
          "defaultBranch": "master",
          "includedModules": [
            "Bindable"
          ]
        },
        "progenitor": {
          "url": "http://strd6.github.io/editor/"
        },
        "name": "runtime"
      }
    ]
  },
  "remoteDependencies": [
    "//code.jquery.com/jquery-1.10.1.min.js",
    "http://strd6.github.io/tempest/javascripts/envweb.js",
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "repository": {
    "id": 13532958,
    "name": "jams",
    "full_name": "STRd6/jams",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/jams",
    "description": "",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/jams",
    "forks_url": "https://api.github.com/repos/STRd6/jams/forks",
    "keys_url": "https://api.github.com/repos/STRd6/jams/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/jams/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/jams/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/jams/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/jams/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/jams/events",
    "assignees_url": "https://api.github.com/repos/STRd6/jams/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/jams/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/jams/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/jams/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/jams/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/jams/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/jams/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/jams/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/jams/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/jams/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/jams/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/jams/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/jams/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/jams/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/jams/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/jams/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/jams/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/jams/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/jams/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/jams/merges",
    "archive_url": "https://api.github.com/repos/STRd6/jams/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/jams/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/jams/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/jams/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/jams/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/jams/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/jams/labels{/name}",
    "created_at": "2013-10-13T03:12:18Z",
    "updated_at": "2013-10-13T03:12:18Z",
    "pushed_at": "2013-10-13T03:12:18Z",
    "git_url": "git://github.com/STRd6/jams.git",
    "ssh_url": "git@github.com:STRd6/jams.git",
    "clone_url": "https://github.com/STRd6/jams.git",
    "svn_url": "https://github.com/STRd6/jams",
    "homepage": null,
    "size": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "master_branch": "master",
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "branch": "master",
    "defaultBranch": "master",
    "includedModules": [
      "Bindable"
    ]
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  }
});