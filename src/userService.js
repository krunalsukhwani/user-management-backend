var userModel = require('./userModel');
var key = 'mystudentsaretalented';
var encryptor = require('simple-encryptor')(key);

module.exports.saveUserInfoService = (userDetails) => {
    return new Promise(function saveUserInfoFun(resolve, reject){
        var userModelData = new userModel();
        userModelData.username = userDetails.username;
        userModelData.email = userDetails.email;
        //Code to encrypt password
        var encryptedPassword = encryptor.encrypt(userDetails.password);
        userModelData.password = encryptedPassword;

        userModelData.save(function resultHandle(error, result){
            if(error){
                reject(false);
            }else{
                resolve(true);
            }
        });
    });
}