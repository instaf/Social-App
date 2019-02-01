const React = require("react-native");
const { Dimensions, Platform } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#333333",
  },
  bgHead: {
    backgroundColor: primary,
    flex: 1
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  channelBtn1: {
    borderWidth: 1,
    borderColor: Platform.OS === "android" ? "#ddd" : "rgba(255,255,255,0.5)"
  },
  na: {},
  channelImg: {
    height: deviceHeight / 4 + 10,
    width: deviceWidth / 2 + 2
  },
  ioschannelImgText: {
    fontSize: 12,
    fontWeight: "900",
    padding: 20,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginTop: deviceHeight / 6 + 10
  },
  achannelImgText: {
    fontSize: 12,
    fontWeight: "900",
    marginLeft: 20,
    marginTop: deviceHeight / 4 - 20
  },
  tabcontainer: {
    flex: 1,
    backgroundColor: "#333333",
    flexDirection: "row",
    alignSelf: "center",
    //width: deviceWidth,
    minHeight: deviceHeight * 0.6,
  },
  tabform: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  descText:{
    padding: 10,
    fontSize: 16,
    fontWeight: "900",
    marginTop: 10,
    color: "f0f",
    borderWidth: 0,
    borderColor: "red",
    //textAlign: "center",
    backgroundColor:"#fff",
    height: 128
  },
  inputText:{
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "900",
    textAlignVertical: "center",
    marginTop: 10,
    color: "f0f",
    borderWidth: 0,
    borderColor: "red",
    //textAlign: "center",
    backgroundColor:"#fff",
    height: 40
  },
  orderText:{
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
  },
  sorderText:{
    fontSize: 15,
    fontWeight: "900",
    marginTop: 5,
  },
  subBtn: {
    marginTop: 17,
    height: 50,
    width:"50%",
    alignSelf: "center"
  },
  FAQtitle:{
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "900",
    textAlignVertical: "center",
    marginTop: 5,
    color: "#F0C727",
    borderWidth: 0,
    borderColor: "red",
    //textAlign: "center",
    backgroundColor:"#464545",
  },
  FAQcontent:{
    padding: 10,
    fontSize: 16,
    fontWeight: "900",
    textAlignVertical: "center",
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#464545",
    //textAlign: "center",
    backgroundColor:"#303030",
  },
  loadingStyle: {
      position: "absolute",
      top: deviceHeight * 0.4,
      left: deviceWidth / 2.15
      //position: "absolute",
      //top: deviceHeight * 0.6,
      //left: deviceWidth * 0.4

  }
};
