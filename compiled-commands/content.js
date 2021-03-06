// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, cat){
    return repo.commands.push({
      name: "content",
      desc: "Prints content, content lines, content created date, content modified date, content size",
      input: 'line',
      output: 'lines',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: cat.compile
    });
  };
}).call(this);
