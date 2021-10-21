import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MoodScreen from "../screens/MoodScreen";
import DashboardScreen from "../screens/DashboardScreen";
import CareCenterScreen from "../screens/CareCenterScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Mood"
        activeColor="#fff"
        inactiveColor="pink"
        barStyle={{ backgroundColor: "salmon" }}
      >
        <Tab.Screen
          name="Mood"
          component={MoodScreen}
          options={{
            tabBarLabel: "Mood",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="emoticon-happy-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chart-timeline-variant"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CareCenter"
          component={CareCenterScreen}
          options={{
            tabBarLabel: "Care Center",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="heart-half-full"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
