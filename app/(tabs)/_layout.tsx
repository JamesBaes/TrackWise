import React from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Layout = () => {
  return (
   <Tabs 
    screenOptions={{
        tabBarStyle: {backgroundColor: "#000", height: 60, paddingBottom: 10},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: "#8e8e8e",
        headerShown: false
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title: "Home",
            tabBarIcon: ({color, focused}) => (<MaterialCommunityIcons name="home-analytics" size={24} color="black" />)
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
            title: "Budget",
            tabBarIcon: ({color, focused}) => (<Octicons name="checklist" size={24} color="black" />)
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
            title: "History",
            tabBarIcon: ({color, focused}) => (<MaterialIcons name="history" size={24} color="black" />)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
            title: "Profile",
            tabBarIcon: ({color, focused}) => (<MaterialCommunityIcons name="face-man-profile" size={24} color="black" />)
        }}
      />
    </Tabs> 
  )
}

export default Layout
