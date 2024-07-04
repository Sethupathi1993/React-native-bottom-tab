import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import Contact from './Screen/Contact';
import About from './Screen/About';


const Tab =createBottomTabNavigator ();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator options={{ 
        
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({
            focused,
            color,
            size
        })=> <Text style ={{backgroundColor:focused?'red':'white',paddingHorizontal:15, paddingVertical:10, borderRadius:5,color:focused?'white':'black', overflow:'hidden',}}>H</Text>
      }}/>
      <Tab.Screen name="Setting" component={Setting}  options={{
        tabBarIcon:({
            focused,
            color,
            size
        })=> <Text style ={{backgroundColor:focused?'red':'white',paddingHorizontal:15, paddingVertical:10, borderRadius:5,color:focused?'white':'black', overflow:'hidden',}}>S</Text>
      }}/>
      <Tab.Screen name="Contact" component={Contact} options={{
        tabBarIcon:({
            focused,
            color,
            size
        })=> <Text style ={{backgroundColor:focused?'#7a6432':'white',paddingHorizontal:15, paddingVertical:10, borderRadius:5,color:focused?'white':'black', overflow:'hidden',}}>C</Text>
      }} />
      <Tab.Screen name="About" component={About} options={{
        tabBarIcon:({
            focused,
            color,
            size
            }
        )=> <Text style ={{backgroundColor:focused?'#8f272c':'white',paddingHorizontal:15, paddingVertical:10, borderRadius:5,color:focused?'white':'black', overflow:'hidden',}}> A</Text>
      }} />

    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigation








