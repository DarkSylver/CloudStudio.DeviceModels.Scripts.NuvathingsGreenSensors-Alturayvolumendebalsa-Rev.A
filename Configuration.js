function getConfiguration(config) {
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.

  config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints) {

  var e = endpoints.addEndpoint("1", "Compteur-4#37 lt", endpointType.genericSensor);
  e.variableTypeId = 1371; 
  var e = endpoints.addEndpoint("2", "Compteur-2#37 lt", endpointType.genericSensor);
  e.variableTypeId = 1372; 
  var e = endpoints.addEndpoint("3", "Compteur-3#37 lt", endpointType.genericSensor);
  e.variableTypeId = 1373; 
  var e = endpoints.addEndpoint("4", "PIEZOMETRE#62", endpointType.genericSensor);
  e.variableTypeId = 1374; 
  endpoints.addEndpoint("5", "VSOLAR", endpointType.voltageSensor);
  endpoints.addEndpoint("6", "BATT", endpointType.voltageSensor);
  var e = endpoints.addEndpoint("7", "BATT CH", endpointType.genericSensor);
  e.variableTypeId = 1375; 
  var e = endpoints.addEndpoint("8", "Balsa#72", endpointType.genericSensor);
  e.variableTypeId = 1376; 
}

function validateDeviceAddress(address, result) {
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
}

function updateDeviceUIRules(device, rules) {
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.
}

function updateEndpointUIRules(endpoint, rules) {
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.
  rules.canDelete = true;
}