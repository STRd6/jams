(function() {
  var Duder, enemyNames, gameTemplate, guys, names, opponents, templates;

  templates = {
    duder: require("./duder_template")
  };

  gameTemplate = require("./game_template");

  names = ["Carmack", "Romero", "Hall"];

  enemyNames = ["Rush", "Bjork", "Pantera"];

  Duder = function(I, self) {
    if (I == null) {
      I = {};
    }
    if (self == null) {
      self = Model(I);
    }
    Object.defaults(I, {
      index: 0,
      hp: 3,
      hpMax: 3
    });
    if (I.name == null) {
      I.name = names[I.index];
    }
    self.observeAll();
    self.click = function() {
      return console.log(self);
    };
    return self;
  };

  opponents = [0, 1, 2].map(function(i) {
    return Duder({
      name: enemyNames[i]
    });
  });

  guys = [];

  guys = [0, 1, 2].map(function(i) {
    return Duder({
      index: i
    });
  });

  $('body').append(gameTemplate({
    duders: guys,
    opponents: opponents,
    render: function(template, object) {
      return templates[template](object);
    }
  }));

  $('body').append($("<style>", {
    text: require('./style')
  }));

}).call(this);

//# sourceURL=2013-10-12.coffee