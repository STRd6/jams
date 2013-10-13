(function() {
  var Duder, guys, templ;

  templ = require("./duder_template");

  Duder = function(I, self) {
    if (I == null) {
      I = {};
    }
    if (self == null) {
      self = Model(I);
    }
    Object.defaults(I, {
      name: "Duder Jr.",
      hp: 3,
      hpMax: 3
    });
    self.observeAll();
    return self;
  };

  guys = [Duder(), Duder(), Duder()];

  $('body').append(templ(guys[0]));

}).call(this);

//# sourceURL=2013-10-12.coffee