import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const ChatKeyboard = ({ chatId }: { chatId: string }) => {
  const user = useSelector((state: any) => state.userReducer);
  const colors = useSelector((state: any) => state.colorReducer);
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');
  const [text, setText] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const sendMessage = async () => {
    console.log(user.id, chatId);

    await fetch('http://localhost:9000/message', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        image: null,
        dispatchTimestamp: new Date(),
        author_id: user.id,
        chat_id: chatId,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => {
        throw err;
      });
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.purple_1 }}>
      {keyboardStatus === 'hidden' ? (
        <>
          <TextInput
            style={{ ...styles.input, color: colors.white_1 }}
            placeholder="Enter message…"
            onChangeText={t => setText(t)}
            placeholderTextColor={colors.white_1}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.addImage}>
            <MaterialCommunityIcons
              name="paperclip"
              color={colors.white_1}
              size={26}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={sendMessage}>
            <MaterialCommunityIcons
              name="send"
              color={colors.white_1}
              size={26}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* <MaterialCommunityIcons
            name="arrow-left"
            color={colors.white_1}
            size={26}
          /> */}
          <TextInput
            style={{ ...styles.input, color: colors.white_1 }}
            placeholder="Enter message…"
            onChangeText={t => setText(t)}
            placeholderTextColor={colors.white_1}
            onSubmitEditing={Keyboard.dismiss}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },
  addImage: {
    marginRight: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    paddingLeft: 20,
    borderRadius: 0,
  },
});

export default ChatKeyboard;
