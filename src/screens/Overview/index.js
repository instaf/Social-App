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

class Overview extends Component {
  constructor(props) {
    super(props);
    //this.state = {data: data};
    this.state = {
      tableHead: ["ID", "DATE", "LINK", "CHARGE", "START COUNT", "QUANTITY", "SERVICE", "STATUS", "REMAINS"],
      //tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    };
  }
  onSubmit(){
    Alert.alert("Select");
  }
  onOrderChanged(value){
    // var catStr = [];
    // if (!this.state.response) return;
    // for (var i = 0; i < Object.keys(this.state.response).length; i++){
    //     if (value === this.state.response[i].category){
    //         catStr.push(this.state.response[i].name + " - $" + this.state.response[i].rate);
    //     }
    // }
    // var ndata = catStr.map(function(item){
    //   return {
    //     value: item
    //   };
    // });
     Alert.alert(value);
    // //if(this.state.response) Alert.alert(this.state.response[0]);
    // this.setState({ndata: ndata});
    // this.onServiceChanged(catStr[0]);
  }
  render() {
    const navigation = this.props.navigation;
    let data = [{
        value: "All",
      },
      {
        value: "Pending",
      },
      {
        value: "In progress",
      },
      {
        value: "Completed",
      },
      {
        value: "Partial",
      },
      {
        value: "Processing",
      },
      {
        value: "Canceled",
      }
    ];
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
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
                <Dropdown
                labelHeight={30}
                labelPadding={40}
                //containerStyle = {{backgroundColor:"blue",textColor:"white"}}
                baseColor = "#FFF"
                value = {data[0].value}//this.state.data[0].value}
                //valueExtractor={({value})=> value}
                data={data}
                //data = {this.state.data}
                onChangeText={(value,index,data)=>{this.onOrderChanged(value);}}
                />

                <Header searchBar rounded>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                  </Item>
                  <Button transparent>
                    <Text>Search</Text>
                  </Button>
                </Header>

                <View style={styles.scontainer}>
                  <ScrollView horizontal={true}>
                    <View>
                      <Table borderStyle={{borderColor: "#C1C0B9"}}>
                        <Row data={state.tableHead} widthArr={state.widthArr} style={styles.headText} textStyle={styles.contentText}/>
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

export default Overview;
