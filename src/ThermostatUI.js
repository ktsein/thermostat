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
  $("#reset").click(function (){
    thermostat.reset();
    $("#temperature").text(thermostat.temperature + " ˚C");
  });
  $("#powersaverOn").click(function (){
    thermostat.setPowersaverOn();
    $("#temperature").text(thermostat.temperature + " ˚C");
    $("#pwsStatus").text("On");
  });
  $("#powersaverOff").click(function (){
    thermostat.setPowersaverOff();
    $("#temperature").text(thermostat.temperature + " ˚C");
    $("#pwsStatus").text("Off");
  });
});
