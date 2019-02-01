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
    //width: deviceWidth ,
    minHeight: deviceHeight * 0.6,
  },
  contentContainer:{
    flex: 1,
    width: deviceWidth * 2,
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
  headText:{
     height: 50,
     backgroundColor: "#537791"
  },
  scontainer: {
    flex: 1,
    //pading: 16,
    //paddingTop: 30,
    backgroundColor: "#fff"
  },
  contentText: {
     textAlign: "center",
     fontWeight: "100"
  },
  dataWrapper:{
    marginTop: -1
  },
  row:{
      height: 40,
      backgroundColor: "#E7E6E1"
  },
};
