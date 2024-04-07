//readPropertiesByKey();
//iterateReadProperies();
//writePropertiesByKey();
readWritePropertyByKey();

/*
 * Read the property value by key name
 */ 
function readPropertiesByKey() {
    var PropertiesReader = require('properties-reader');
    var properties = PropertiesReader('config/database.properties');
    
    console.log(properties.get("database"));
    console.log(properties.get("hostname"));
    console.log(properties.get("username"));
    console.log(properties.get("password"));

}

/*
 * Read the properties values by iterating/loop each key:value pair
 */
function iterateReadProperies() {
    var PropertiesReader = require('properties-reader');
    var properties = PropertiesReader('config/database.properties');
    
    properties.each((key, value) => {
        console.log(key + ":" + value);
    });
    
}

/*
 * Write/overwrite property value based on provided key name
 */
function writePropertiesByKey() {
    var PropertiesReader = require('properties-reader');
    const propertiesPath = "config/database.properties";
    const properties = PropertiesReader(propertiesPath, { 
        writer: { 
            saveSections: true 
        } 
    });

    // "key1" doesn't exist so new key:value pair is created
    properties.set("key1", "value1")

    // "database" exists so existing value is overwritten
    properties.set("database", "postgres")
    properties.save(propertiesPath, function then(err, data) {
        if (err) {
            console.log("error in write a properties file")
    
        }
        console.log("saved data to properties file")
    
    });
    
}

/*
 * Read & write/overwrite property value based on provided key name
 */
function readWritePropertyByKey() {
    var PropertiesReader = require('properties-reader');
    const propertiesPath = "config/database.properties";
    const writer = PropertiesReader(propertiesPath, { 
        writer: { 
            saveSections: true 
        } 
    });
    
    // Read values by key name
    console.log(writer.get("database"));
    console.log(writer.get("hostname"));
    console.log(writer.get("username"));
    console.log(writer.get("password"));
    
    // Read each key/value pair into object writer
    writer.each((key, value) => {
        console.log(key + ":" + value);
    });
    
    // set value based on key name
    writer.set("key1", "value1")
    writer.set("database", "value1")
    
    // save file
    writer.save(propertiesPath, function then(err, data) {
        if (err) {
            console.log("error in write a properties file")
    
        }
        console.log("saved data to properties file")
    
    });
    
}
