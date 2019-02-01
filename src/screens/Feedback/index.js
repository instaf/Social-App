// @flow
import React, {Component} from "react";
import {ActivityIndicator,Platform,TextInput,Picker,Alert,Image, ScrollView} from "react-native";
import {Dropdown} from "react-native-material-dropdown";
import { Table, Row, Rows } from "react-native-table-component";
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
    View,
    Item,
    Input
  } from "native-base";
import styles from "./styles";
import loadServiceList from "../../modules/services/loadServiceList";

const headerLogo = require("../../../assets/header-logo.png");

class Feedback extends Component {
  constructor(props) {
    super(props);
    //this.state = {data: data};
    this.state = {
      tableHead: ["ID", "SUBJECT", "STATUS", "LAST UPDATE"],
      //tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      widthArr: [120, 120, 120, 120]
    };
  }
  onSubmit(){
    Alert.alert("Select");
  }
  render() {
    const navigation = this.props.navigation;
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 6; i += 1) {
      const rowData = [];
      for (let j = 0; j < 4; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
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
                {/* <Dropdown
                labelHeight={30}
                labelPadding={40}
                //containerStyle = {{backgroundColor:"blue",textColor:"white"}}
                baseColor = "#FFF"
                value = {data[0].value}//this.state.data[0].value}
                //valueExtractor={({value})=> value}
                data={data}
                //data = {this.state.data}
                onChangeText={(value,index,data)=>{this.onOrderChanged(value);}}
                /> */}
                <Text style={styles.orderText}>
                    Message
                </Text>
                <TextInput style={styles.inputText}  underlineColorAndroid= "transparent" >
                    {}
                </TextInput>

                <View style={styles.scontainer}>
                  <ScrollView horizontal={true}>
                    <View>
                      <Table borderStyle={{borderColor: "#C1C0B9"}}>
                        <Row data={state.tableHead}  widthArr={state.widthArr} style={styles.headText} textStyle={styles.contentText}/>
                      </Table>
                      <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderColor: "#C1C0B9"}}>
                        {
                          tableData.map((rowData, index) => (
                            <Row
                              key={index}
                              data={rowData}
                              widthArr={state.widthArr}
                              style={[styles.row, index % 2 && {backgroundColor: "#F7F6E7"}]}
                              textStyle={styles.text}
                            />
                          ))
                        }
                        </Table>
                      </ScrollView>
                    </View>
                  </ScrollView>
                </View>

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

export default Feedback;
