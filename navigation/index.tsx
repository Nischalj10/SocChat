/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, Image, Text, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Octicons, Ionicons, FontAwesome, MaterialIcons} from "@expo/vector-icons";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import ContactsScreen from "../screens/ContactsScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : Colors.light.tint,
            shadowOpacity : 0,
            elevation : 0,
        },
        headerTitleAlign : 'left',
        headerTintColor : Colors.light.background,
    }}>
      <Stack.Screen
          name="Root"
          component={MainTabNavigator}
          options={{
              title : 'WhatsApp',
              headerRight : () => {
                  return (
                      <View style={{flexDirection : 'row', width : 60, justifyContent : 'space-between', marginRight : 10, alignItems : 'center'}}>
                          <Octicons name={"search"} size={22} color={"white"}/>
                          <MaterialCommunityIcons name={"dots-vertical"} size={22} color={"white"}/>
                      </View>
                  )
              }
          }}
      />

      <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={({route}) => ({
              headerTitle : () => {
                  return (
                      <View style={styles.container}>
                          <Text style={styles.name}>  {route.params.name}</Text>
                      </View>
                  )
              },
              headerBackImage : () => {
                  return (
                      <View style={styles.container}>
                          <Ionicons name={'arrow-back'} size={24} color={'white'}/>
                          <Image source={{uri : route.params.imageUri}} style={styles.image}/>
                      </View>
                  )
              },
              headerRight : () => {
                  return (
                      <View style={styles.container2}>
                          <FontAwesome name={"video-camera"} style={styles.icon1} color={'white'} size={20}/>
                          <MaterialIcons name={"call"} size={22} style={styles.icon2} color={'white'}/>
                          <MaterialCommunityIcons name={"dots-vertical"} style={styles.icon3} size={22} color={'white'}/>
                      </View>
                  )
              }
          })} />
        <Stack.Screen
            name="Contacts"
            component={ContactsScreen}
        />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    image : {
        width : 40,
        height : 40,
        borderRadius : 20,
        marginLeft : 4,
    },
    name : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18,
        marginLeft : 10,
    },
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    container2 : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-end',
    },
    icon1 : {
        marginHorizontal : 18,
    },
    icon2 : {
        marginHorizontal : 7,
    },
    icon3 : {
        marginHorizontal : 10,
    }
})