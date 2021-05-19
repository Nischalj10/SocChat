import React from "react";
import {Image, Text, View} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./style";
import moment from 'moment'

export type ChatListItemProps = {
    chatRoom : ChatRoom;
}

const ChatListItem = (props : ChatListItemProps) => {
    const {chatRoom} = props;

    const user = chatRoom.users[1];

    return (
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
    )
}

export default ChatListItem