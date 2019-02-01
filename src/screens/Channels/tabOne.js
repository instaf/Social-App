// @flow
import React, {Component} from "react";
import {ActivityIndicator,Platform,TextInput,Picker,Alert,Image} from "react-native";
import {Dropdown} from "react-native-material-dropdown";
import {Content, Text, View,Button} from "native-base";
import {Grid, Col, Row} from "react-native-easy-grid";

import styles from "./styles";
import loadServiceList from "../../modules/services/loadServiceList";
class TabOne extends Component {

  constructor(props){
    super(props);
    var data = [{
      value: "",
    }];
    this.state = ({ quantity: 0.0, charge: "", category: data, service: data, response:[], min: "", max: "", rate: 0.00, loading:false});
  }
  componentDidMount(){
      this._loadData();
  }
  onChanged (text) {
    //Alert.alert( Math.round(this.state.quantity * this.state.rate * 100.0) / 100.0 );
    this.setState({
        quantity: text.replace(/[^0-9]/g, ""),
    });
    var quantity = text.replace(/[^0-9]/g, "");
    this.setState({
        charge: (Math.round(quantity * this.state.rate * 100.0) / 100000.0),
    });
  }
  onCategoryChange(value){
    var catStr = [];
    if (value.length === 0 ) return;
    for (var i = 0; i < Object.keys(this.state.response).length; i++){
        if (value === this.state.response[i].category){
            catStr.push(this.state.response[i].name + " - $" + this.state.response[i].rate);
        }
    }
    var data = catStr.map(function(item){
        return {
            value: item
        };
    });
    this.setState({service:data});
    this.onServiceChange(data[0].value);
  }
  _loadData(){
    var catStr = [];
    var str = "";
    loadServiceList.getServiceList().then((responseText) => {
        this.setState({response:responseText});
        for (var i = 0; i < Object.keys(responseText).length; i++){
            if (str !== responseText[i].category){
                str = responseText[i].category;
                catStr.push(str);
            }
        }
        var data = catStr.map(function(item){
            return {
                value: item
            };
        });
        this.setState({category:data});
        this.onCategoryChange(data[0].value);
        this.setState({loading: true});
    });
  }
  onServiceChange(value){
    if (value.length === 0 ) return;
    for (var i = 0; i < Object.keys(this.state.response).length; i++){
        if (value === (this.state.response[i].name + " - $" + this.state.response[i].rate)){
            this.setState({min: this.state.response[i].min});
            this.setState({max: this.state.response[i].max});
            this.setState({rate: this.state.response[i].rate});
            return;
        }
    }
  }
  onSubmit(){
    this._loadData();
  }
  render() {
    const navigation = this.props.navigation;
    if (this.state.loading){
    return (
      <Content showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.tabcontainer} >
      <View style={styles.tabform}>
          <Text
              style={styles.orderText}
          >
          Category
          </Text>
          <Dropdown
          labelPadding={0}
          labelHeight={5}
          value = {this.state.category[0].value}
          data={this.state.category}
          baseColor="#FFF"
          onChangeText={(value, index, data)=>{this.onCategoryChange(value);}}
         />
          <Text
              style={styles.orderText}
          >
          Service
          </Text>
          <Dropdown
          labelPadding={0}
          labelHeight={5}
          value = {this.state.service[0].value}
          data={this.state.service}
          baseColor="#FFF"
          onChangeText={(value, index, data)=>{this.onServiceChange(value);}}
         />
          <Text
              style={styles.orderText}
          >
          Description
          </Text>
          <Text style={styles.descText}  underlineColorAndroid= "transparent">
          {"0-48 hours start time \n1,000/day speed \nNo Refill/No Refund \n100 Minimum order \n5,000 Maximum order"}
          </Text>
          <Text
              style={styles.orderText}
          >
          Link
          </Text>
          <TextInput style={styles.inputText}  underlineColorAndroid= "transparent">
          {}
          </TextInput>
          <Text
              style={styles.orderText}
          >
          Quantity
          </Text>
          <TextInput style={styles.inputText}  underlineColorAndroid= "transparent" value={this.state.quantity} onChangeText={(quantity) => this.onChanged(quantity)}
          >
          {}
          </TextInput>
          <Text
              style={styles.sorderText}
          >
          Min:{this.state.min} - Max: {this.state.max}
          </Text>
          <Text
              style={styles.orderText}
          >
          Charge
          </Text>
          <Text style={styles.inputText}  underlineColorAndroid= "transparent">
          ${this.state.charge}
          </Text>
          <Button
                  rounded
                  primary
                  block
                  large
                  style={styles.subBtn}
                  onPress={()=>{this.onSubmit();}}
              >
                  <Text
                  style={
                      Platform.OS === "android"
                      ? { fontSize: 16, textAlign: "center" }
                      : { fontSize: 16, fontWeight: "900" }
                  }
                  >
                  Submit
                  </Text>
          </Button>
          </View>
      </View>
  </Content>
    );
    }
    else {
        return   (<Content showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.tabcontainer} >
        <View style={styles.tabform}>
            <ActivityIndicator size="large" color="#0000ff" style = {styles.loadingStyle}/>
        </View>
        </View>
        </Content>
        );
    }
  }
}

export default TabOne;
