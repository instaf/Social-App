// @flow
import React, {Component} from "react";
import {ActivityIndicator,Platform,TextInput,Picker,Alert,Image} from "react-native";
import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Tabs,
    Tab,
    Text,
    TabHeading,
    View
  } from "native-base";
import styles from "./styles";
import loadServiceList from "../../modules/services/loadServiceList";
const headerLogo = require("../../../assets/header-logo.png");

class Home extends Component {
  constructor(props) {
    super(props);
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
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right />
        </Header>
        <Content showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.tabcontainer} >
            <View style={styles.tabform}>
                <Text
                    numberOfLines={2}
                    style={styles.orderText}
                >
                One order per line in format
                </Text>

                <TextInput style={styles.inputText} placeholder = {"service_id | link | quantity"} underlineColorAndroid= "transparent">
                {}
                </TextInput>
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

export default Home;
