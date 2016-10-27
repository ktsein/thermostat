$(document).ready(function(){

  var thermostat = new Thermostat();
  $("#down").click(function (){
    thermostat.down();
    $("#temperature").text(thermostat.temperature + " ˚C");
  });

  $("#up").click(function (){
    thermostat.up();
    $("#temperature").text(thermostat.temperature + " ˚C");
  });

});
