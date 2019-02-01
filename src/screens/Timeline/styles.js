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
    //justifyContent: "center",
    //alignItems: "center",
  },
  orderText:{
    fontSize: 20,
    fontWeight: "900",
    marginTop: 50,
  },
  subBtn: {
    marginTop: 17,
    height: 50,
    width:"50%",
    alignSelf: "center"
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
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  inputText:{
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 30,
    color: "f0f",
    borderWidth: 0,
    borderColor: "red",
    textAlignVertical: "top",
    backgroundColor:"#fff",
    height: 240
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
  }
};
