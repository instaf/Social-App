import {Alert} from "react-native";
var CONFIG = require("../config");
var loadServiceList = {
    http(url, dictParam) {
		return fetch(url + "?" + this.serialize(dictParam), {
            method: "POST"
		})
        .then((response) => response.json())
        .then((responseText) => {
            return responseText;
        })
        .catch((error) => {
            return error;
        });
	},
	serialize(obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
	},
	url(path) {
		return CONFIG.ROOT_URL + path;
    },
    getServiceList(){
        return this.http(this.url(CONFIG.V_PATH) ,{key:"bda4cce7ddebac745c18b2e40d5d3739",action:"services"});
    }
};

module.exports = loadServiceList;
