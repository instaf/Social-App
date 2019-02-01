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
import form from "./data.json";
const headerLogo = require("../../../assets/header-logo.png");

class Timeline extends Component {
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
                    {txtComponents}
                </View>
            </View>
        </Content>
      </Container>
    );
  }
}

export default Timeline;
