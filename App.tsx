import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useEffect} from "react";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {withAuthenticator} from 'aws-amplify-react-native'
import {Auth, API, graphqlOperation} from 'aws-amplify'
import {getUser} from "./src/graphql/queries";
import {createUser} from "./src/graphql/mutations";

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
      return randomImages[Math.floor(Math.random() * randomImages.length)]
  }

  //run this script only on the first run
  useEffect(() => {
    const fetchUser = async () => {
      //get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache : true});
      //console.log(userInfo)

      if(userInfo) {
        //get the user from backend with the userId from auth
        const userData = await API.graphql(
            graphqlOperation(
                getUser,
                {id : userInfo.attributes.sub}
            )
        )

        if(userData.data.getUser) {
          //console.log("USER IS ALREADY REGISTERED")
          return;
        }

        const newUser = {
          id : userInfo.attributes.sub,
          name : userInfo.username,
          imageUri : getRandomImage(),
          status : 'Hey There! I\'m using Whatsapp '
        }

      console.log(userInfo)

        //if there is no user with the same id in our backend, then create one

        await API.graphql(graphqlOperation(
            createUser,
            {input : newUser}
        ))

      }
    }

    fetchUser();

  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)
