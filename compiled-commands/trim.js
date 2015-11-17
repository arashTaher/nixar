// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "trim",
      desc: "Remove spaces from start and end of line. But if you profide the substring it will remove it from start and end of line",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          var re;
          mask = (mask != null ? mask : "") === "" ? "\\s+" : mask;
          re = new RegExp("^" + mask + "|" + mask + "$", "g");
          return String(input).replace(re, '');
        };
      }
    });
  };
}).call(this);
