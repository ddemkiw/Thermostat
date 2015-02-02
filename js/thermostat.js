var Thermostat = function(){
  this.temperature = 20;
  this.savingMode = true;
  this.defaultTempChange = 1; 
  this.minTemp = 10;
  this.powerSaveMax = 25;
  this.regularMax = 32;
  this.lowUsage = 18;
  this.mediumUsage = 25;

};

Thermostat.prototype.up = function() {
  this._increaseTemperature(this.defaultTempChange);
};

Thermostat.prototype.down = function() {
  this._decreaseTemperature(this.defaultTempChange);
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.savingMode = true;
};

Thermostat.prototype.changeSaveMode = function(){
  if ((this.savingMode === false) && (this.temperature > this.powerSaveMax))
  {
    this.temperature = this.powerSaveMax;
  }
  this.savingMode = !this.savingMode;
};

Thermostat.prototype.consoleColor = function() {
  if (this.temperature < this.lowUsage) return 'lowUsage';
  if (this.temperature < this.mediumUsage) return 'mediumUsage';
  return 'highUsage';
};

Thermostat.prototype._increaseTemperature = function(changeTempBy) {
  var currentTemp = this.temperature + changeTempBy;

  if (this.savingMode)
  {
     this.temperature = Math.min(currentTemp,this.powerSaveMax);
  } else
  {
    this.temperature = Math.min(currentTemp,this.regularMax);
  }
};

Thermostat.prototype._decreaseTemperature = function(changeTempBy) {
  var currentTemp = this.temperature - changeTempBy;
  this.temperature = Math.max(currentTemp,this.minTemp);
};



