// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, Platform,Alert} from "react-native";

import {Content, Text, View} from "native-base";
import {Grid, Col, Row} from "react-native-easy-grid";

import styles from "./styles";
import form from "./data.json";
class TabTwo extends Component {
  constructor(props){
    super(props);
    this.state = ({ visible: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]});
  }
  onTextPress(e,id){
    //Alert.alert(id);
    this.state.visible[id] = !this.state.visible[id];
    this.forceUpdate();
  }
  render() {
    const navigation = this.props.navigation;
    const txtComponents = form.map((type)=> <View><Text style ={styles.FAQtitle}  onPress={(e) => this.onTextPress(e, type.id)}>{type.title}</Text>
    {this.state.visible[type.id] && <Text style ={styles.FAQcontent}>{type.content}</Text>}</View>);
    return (
      <Content showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.tabcontainer} >
            <View style={styles.tabform}>
              {txtComponents}
            </View>
          </View>
      </Content>
    );
  }
}

export default TabTwo;
