import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, Platform} from "react-native";
import styles from "./style";
import {Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState('')

    let Touchable = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        // @ts-ignore
        Touchable = TouchableNativeFeedback;
    }

    const onMicrophonePress = () => {
        console.log('Recording Audio')
    }

    const onSendPress = () => {
        console.log(`Sending : ${message}`)
        //send message to backend
        setMessage('')
    }
    const onPress = () => {
        if(!message) onMicrophonePress();
        else onSendPress();
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name={'laugh-beam'} size={22} color={'grey'}/>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={styles.input}
                    multiline={true}
                    placeholder={'Type a message'}
                />
                <Entypo name={'attachment'} size={20} style={styles.icon} color={'grey'}/>
                {!message && <Fontisto name={'camera'} size={20} style={styles.icon} color={'grey'}/>}
            </View>
            <Touchable onPress={onPress}>
                <View style={styles.buttonContainer}>
                        {!message ? <MaterialCommunityIcons name={"microphone"} size={28} color={'white'}/> :
                            <MaterialIcons name={'send'} size={28} color={'white'}/>}
                </View>
            </Touchable>
        </View>
    )
}

export default InputBox