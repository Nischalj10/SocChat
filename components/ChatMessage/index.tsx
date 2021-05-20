import React from "react";
import {Text, View} from "react-native";
import styles from "./style";
import {Message} from "../../types";
import moment from "moment";



export type ChatMessageProps = {
    message : Message
}

const ChatMessage = (props : ChatMessageProps) => {
    const {message} = props;

    const isMyMessage = () => {
        return message.user.id === 'u1'
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor : isMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft : isMyMessage() ? 50 : 0,
                    marginRight : isMyMessage() ? 0 : 50,
                    borderBottomRightRadius : isMyMessage() ? 0 : 10,
                    borderTopLeftRadius : isMyMessage() ? 10 : 0,
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name} </Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.date}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage