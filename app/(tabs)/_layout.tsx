import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Layout = () => {
  return (
   <Tabs 
    screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#6088C4",
        tabBarInactiveTintColor: "black",
        headerShown: false,
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name="home-analytics" size={26} color={focused ? color : "black"}/>)
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
            title: "Budget",
            tabBarIcon: ({ focused, color }) => (<Octicons name="checklist" size={24} color={focused ? color : "black"} />)
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
            title: "History",
            tabBarIcon: ({ focused, color }) => (<MaterialIcons name="history" size={24} color={focused ? color : "black"} />)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
            title: "Profile",
            tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name="face-man-profile" size={24} color={focused ? color : "black"}/>)
        }}
      />
    </Tabs> 
  )
}

export default Layout

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF", 
    height: 56, 
    padding: 4,
    gap: 4,
  },
})
