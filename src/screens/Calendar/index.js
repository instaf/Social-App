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

class Calendar extends Component {
  constructor(props) {
    super(props);
    //this.state = {data: data};
    this.state = {
      tableHead: ["ID", "SERVICE", "RATE PER 1000", "MIN ORDER", "MAX ORDER", "DESCRIPTION"],
      //tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      widthArr: [40, 265, 100, 100, 120, 140],
      loading: false,
      tableData: []
    };
  }
  componentDidMount(){
    this._loadData();
  }
  onSubmit(){
    Alert.alert("Select");
  }
  _loadData(){
    const tableData = [];
    loadServiceList.getServiceList().then((responseText) => {
        this.setState({response:responseText});
        for (var i = 0; i < Object.keys(responseText).length; i++){
                const rowData = [];
                rowData.push(responseText[i].service);
                rowData.push(responseText[i].name);
                rowData.push(responseText[i].rate);
                rowData.push(responseText[i].min);
                rowData.push(responseText[i].max);
                rowData.push(responseText[i].category);
                tableData.push(rowData);
        }
        this.setState( {tableData: tableData});
        this.setState({loading: true});

    });

    //this.setState( {tableData: tableData});

  }
  render() {
    const navigation = this.props.navigation;
    const state = this.state;

    if (this.state.loading){
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
                <View style={styles.scontainer}>
                  <ScrollView horizontal={true}>
                    <View>
                      <Table borderStyle={{borderColor: "#C1C0B9"}}>
                        <Row data={state.tableHead} widthArr={state.widthArr} style={styles.headText} textStyle={styles.contentText}/>
                      </Table>
                      <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderColor: "#C1C0B9"}}>
                        {
                          state.tableData.map((rowData, index) => (
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
    else {
        return (
        <Content showsVerticalScrollIndicator={false} style={styles.container}>
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

export default Calendar;
