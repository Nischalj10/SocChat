import React from "react";
import {Image,Platform, Text, View, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./style";
import moment from 'moment'
import {useNavigation} from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom : ChatRoom;
}

const ChatListItem = (props : ChatListItemProps) => {

    let Touchable = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }

    const navigation = useNavigation();

    const {chatRoom} = props;

    const user = chatRoom.users[1];

    const onClick = () => {
        //console.warn(`Clicked on ${user.name}`)
        navigation.navigate('ChatRoom', {
            id : chatRoom.id,
            name : user.name,
            imageUri : user.imageUri,
        })
    }

    return (
        <Touchable onPress={onClick}>
        <View>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri : user.imageUri}} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name} </Text>
                        <Text ellipsizeMode={"tail"} style={styles.lastMessage} numberOfLines={1}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>

                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YY")}
                </Text>
                {/*<Text style={styles.time}>YESTERDAY</Text>*/}
            </View>
            <View style={styles.border}>
                {null}
            </View>
        </View>
        </Touchable>
    )
}

export default ChatListItem