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
      "content": "version: \"0.1.0\"\nentryPoint: \"2013-10-12\"\nremoteDependencies: [\n  \"//code.jquery.com/jquery-1.10.1.min.js\"\n  \"http://strd6.github.io/tempest/javascripts/envweb.js\"\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
      "type": "blob"
    },
    "2013-10-12.coffee.md": {
      "path": "2013-10-12.coffee.md",
      "mode": "100644",
      "content": "Simple Tactics\n==============\n\nMove duders around and have them hit one another.\n\nDuder\n-----\n\n    templ = require \"./duder_template\"\n\n    Duder = (I={}, self=Model(I)) ->\n      Object.defaults I,\n        name: \"Duder Jr.\"\n        hp: 3\n        hpMax: 3\n\n      self.observeAll()\n\n      return self\n\n    guys = [\n      Duder()\n      Duder()\n      Duder()\n    ]\n\n    $('body').append templ(guys[0])\n",
      "type": "blob"
    },
    "duder_template.haml": {
      "path": "duder_template.haml",
      "mode": "100644",
      "content": "%h2= @name\n%p\n  = @hp\n  = \"/\"\n  = @hpMax\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"2013-10-12\",\"remoteDependencies\":[\"//code.jquery.com/jquery-1.10.1.min.js\",\"http://strd6.github.io/tempest/javascripts/envweb.js\",\"http://strd6.github.io/require/v0.2.2.js\"]};",
      "type": "blob"
    },
    "2013-10-12": {
      "path": "2013-10-12",
      "content": "(function() {\n  var Duder, guys, templ;\n\n  templ = require(\"./duder_template\");\n\n  Duder = function(I, self) {\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = Model(I);\n    }\n    Object.defaults(I, {\n      name: \"Duder Jr.\",\n      hp: 3,\n      hpMax: 3\n    });\n    self.observeAll();\n    return self;\n  };\n\n  guys = [Duder(), Duder(), Duder()];\n\n  $('body').append(templ(guys[0]));\n\n}).call(this);\n\n//# sourceURL=2013-10-12.coffee",
      "type": "blob"
    },
    "duder_template": {
      "path": "duder_template",
      "content": "module.exports = (function(data) {\n  return (function() {\n    var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;\n    _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;\n    __push(document.createDocumentFragment());\n    __element = document.createElement(\"h2\");\n    __push(__element);\n    __element = document.createTextNode('');\n    __text(__element, this.name);\n    __push(__element);\n    __pop();\n    __pop();\n    __element = document.createElement(\"p\");\n    __push(__element);\n    __element = document.createTextNode('');\n    __text(__element, this.hp);\n    __push(__element);\n    __pop();\n    __element = document.createTextNode('');\n    __text(__element, \"/\");\n    __push(__element);\n    __pop();\n    __element = document.createTextNode('');\n    __text(__element, this.hpMax);\n    __push(__element);\n    __pop();\n    __pop();\n    return __pop();\n  }).call(data);\n});\n;",
      "type": "blob"
    }
  },
  "entryPoint": "2013-10-12",
  "dependencies": {},
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