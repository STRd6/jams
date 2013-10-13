(function() {
  var Duder, alive, attack, enemyNames, events, gameTemplate, guys, msg, names, opponents, templates;

  templates = {
    duder: require("./duder_template")
  };

  gameTemplate = require("./game_template");

  names = ["Carmack", "Romero", "Hall"];

  enemyNames = ["Rush", "Bjork", "Pantera"];

  alive = function(o) {
    return o.I.hp > 0;
  };

  msg = function(msg) {
    return events(["" + msg + "\n"].concat(events()));
  };

  attack = function(from, to) {
    var dmg;
    if (from && to) {
      dmg = [0, 1].map(function() {
        return 1..d(6) > 1..d(6);
      }).sum();
      if (dmg > 0) {
        msg("" + (from.name()) + " struck " + (to.name()) + " for " + dmg + "!");
        return to.hp(to.hp() - dmg);
      } else {
        return msg("" + (from.name()) + " missed " + (to.name()));
      }
    }
  };

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
      var activeDuder, opponent, target;
      if (I.enemy) {
        if (activeDuder = guys.filter(function(guy) {
          return guy.active();
        }).first()) {
          activeDuder.active(false);
          attack(activeDuder, self);
          if (opponent = opponents.filter(alive).first()) {
            if (target = guys.filter(alive).rand()) {
              attack(opponent, target);
            }
          }
        }
      } else {
        if (self.hp() > 0) {
          self.activate();
        }
      }
      if (opponents.filter(alive).length === 0) {
        return msg("A winner is you!");
      } else if (guys.filter(alive).length === 0) {
        return msg("You have been defeated!");
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

  events = Observable([]);

  $('body').append(gameTemplate({
    duders: guys,
    opponents: opponents,
    render: function(template, object) {
      return templates[template](object);
    },
    events: events
  }));

  $('body').append($("<style>", {
    text: require('./style')
  }));

}).call(this);

//# sourceURL=2013-10-12.coffee