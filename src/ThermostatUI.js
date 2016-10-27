$(document).ready(function(){

  var thermostat = new Thermostat();
  updateTemperature();
  $("#down").click(function (){
    thermostat.down();
    updateTemperature();
  });

  $("#up").click(function (){
    thermostat.up();
    updateTemperature();
  });
  $("#reset").click(function (){
    thermostat.reset();
    updateTemperature();
  });
  $("#powersaverOn").click(function (){
    thermostat.setPowersaverOn();
    updateTemperature();
    $("#pwsStatus").text("On");
  });
  $("#powersaverOff").click(function (){
    thermostat.setPowersaverOff();
    updateTemperature();
    $("#pwsStatus").text("Off");
  });
  function updateTemperature(){
    $("#temperature").text(thermostat.temperature + " ˚C");
    $("#temperature").attr('class', thermostat.usage());
  }
});
