import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import ChatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
          data={ChatRooms}
          renderItem={({item, index}) => <ChatListItem chatRoom={item}/>}
          keyExtractor={(item) => item.id}
      />
        <NewMessageButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
