
$.githubUser = function(username, callback) {
   $.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
$.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
     
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing            
    
        var list = $('<dl/>');
        target.append(list);
        $(repos).each(function() {
 
                list.append('<dt><a href="'+ this.html_url +'">' + this.name + '</a>'+ this.description + '<button class="newIssue" type="button">new Issue</button></dt>');
            
        });      
      });
      

};

$(document).ready(function(){
  
    $('.submit').on("click",function(){
      var userInput=$('.userInput').val();
      $("#container").loadRepositories(userInput);
    });

});
