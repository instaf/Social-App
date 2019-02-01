// @flow
var Color = require("color");
import React, { Component } from "react";
import { Image, Switch, TouchableOpacity, Platform, Alert } from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Thumbnail,
  Item,
  Input,
  View,
  Left,
  Right,
  Body
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");
const primary = require("../../theme/variables/commonColor").brandPrimary;
const light = Color(primary).alpha(0.3);

type Props = {
  navigation: () => void
};
class Settings extends Component {
  state: {
    monSwitch: true,
    tueSwitch: false,
    wedSwitch: false,
    thuSwitch: false,
    friSwitch: false,
    satSwitch: false,
    sunSwitch: false,
    Username: "",
    email: "",
    password: "",
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      monSwitch: true,
      tueSwitch: false,
      wedSwitch: false,
      thuSwitch: false,
      friSwitch: false,
      satSwitch: false,
      sunSwitch: false,
      Username: "",
      email: "",
      password: "",
      offset: {
        x: 0,
        y: 0
      }
    };
  }
  onSubmit(){
    Alert.alert("Select");
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right />
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.signupHeader}>SETTINGS</Text>
            <View style={styles.profileButtons}>
              <Button transparent style={styles.roundedButton}>
                <Icon
                  name="cloud-upload"
                  style={
                    Platform.OS === "android"
                      ? { color: "#FFF", width: 23 }
                      : { color: "#FFF", width: 22 }
                  }
                />
              </Button>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Thumbnail
                  source={require("../../../assets/Contacts/sanket.png")}
                  style={styles.profilePic}
                />
              </TouchableOpacity>
              <Button transparent style={styles.roundedButton}>
                <Icon
                  name="cloud-download"
                  style={
                    Platform.OS === "android"
                      ? { color: "#FFF", width: 23 }
                      : { lineHeight: 0, color: "#FFF", width: 22 }
                  }
                />
              </Button>
            </View>
          </View>

          <View style={styles.bg}>
            <View style={styles.signupContainer}>
              <Item rounded style={styles.inputGrp}>
                <Icon name="ios-person-outline" />
                <Input
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  style={styles.input}
                />
              </Item>
              <Item rounded style={styles.inputGrp}>
                <Icon name="ios-mail-open-outline" />
                <Input
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  style={styles.input}
                />
              </Item>
              <Item rounded style={styles.inputGrp}>
                <Icon name="ios-unlock-outline" />
                <Input
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  secureTextEntry
                  style={styles.input}
                />
              </Item>
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
      </Container>
    );
  }
}

export default Settings;
