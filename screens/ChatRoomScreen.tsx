import React from "react";
import {FlatList, StyleSheet, ImageBackground, Text, View} from "react-native";
import {useRoute} from '@react-navigation/native'
import ChatMessage from "../components/ChatMessage";
import chatRoomData from '../data/Chats'

const ChatRoomScreen = () => {

    const route = useRoute();
    //console.log(route)

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri : 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'}}>
                <FlatList
                    data={chatRoomData.messages}
                    renderItem={({item, index}) => {
                        return (
                            <ChatMessage message={item}/>
                        )
                    }}
                    inverted
                />
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    image : {
        width : '100%',
        height : '100%',
    }
})

export default ChatRoomScreen