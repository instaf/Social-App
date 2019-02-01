// @flow
import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./style";
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});
class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/sidebar-transparent.png")}
          style={styles.background}
        >
          <Content style={styles.drawerContent}>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Channels");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="logo-foursquare" />
              <Text style={styles.linkText}>New Order</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Home");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-keypad-outline" />
              <Text style={styles.linkText}>Mass Order</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Overview");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-aperture-outline" />
              <Text style={styles.linkText}>Orders</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Calendar");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-construct-outline" />
              <Text style={styles.linkText}>Services</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Timeline");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-heart-outline" />
              <Text style={styles.linkText}>FAQ</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Profile");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-alert-outline" />
              <Text style={styles.linkText}> Terms</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Feedback");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-plane" />
              <Text style={styles.linkText}>Tickets</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Settings");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-paper-outline" />
              <Text style={styles.linkText}>Add funds</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Settings");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon name="ios-settings-outline" />
              <Text style={styles.linkText}>Settings</Text>
            </ListItem>
          </Content>
          <View style={styles.logoutContainer}>
            <View style={styles.logoutbtn} foregroundColor={"white"}>
              <Grid>
                <Col>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.dispatch(resetAction);
                    }}
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: "transparent"
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#fff" }}>
                      LOG OUT
                    </Text>
                    <Text note style={{ color: "#fff" }}>
                      {/* Andrey Skumin */}
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    style={{ alignSelf: "flex-end" }}
                    onPress={() => {
                      navigation.navigate("Settings");
                    }}
                  >
                    <Thumbnail
                      source={require("../../../assets/Contacts/sanket.png")}
                      style={styles.profilePic}
                    />
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default SideBar;
