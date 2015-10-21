// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "after",
      desc: "Print everything after mask",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          var last, index;
          last = mask.indexOf('last') === 0;
          mask = mask.replace(/^last /, "");
          console.log(mask, last);
          index = (last
            ? index.lastIndexOf
            : input.indexOf)(mask);
          if (index > -1) {
            return input.substr(index + mask.length);
          } else {
            return input;
          }
        };
      }
    });
  };
}).call(this);
