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
      active: false,
      enemy: false,
      index: 0,
      hp: 3,
      hpMax: 3
    });
    if (I.name == null) {
      I.name = names[I.index];
    }
    self.observeAll();
    self.click = function() {
      var activeDuder;
      if (I.enemy) {
        if (activeDuder = guys.filter(function(guy) {
          return guy.active();
        }).first()) {
          activeDuder.active(false);
          return self.hp(self.hp() - 1);
        }
      } else {
        return self.activate();
      }
    };
    self.activate = function() {
      guys.invoke("active", false);
      return self.active(true);
    };
    return self;
  };

  opponents = [0, 1, 2].map(function(i) {
    return Duder({
      name: enemyNames[i],
      enemy: true
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