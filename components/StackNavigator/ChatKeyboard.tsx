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

const ChatKeyboard = () => {
  const colors = useSelector((state: any) => state.colorReducer.colors);
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');

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

  return (
    <View style={{ ...styles.container, backgroundColor: colors.purple_1 }}>
      {keyboardStatus === 'hidden' ? (
        <>
          <TextInput
            style={{ ...styles.input, color: colors.white_1 }}
            placeholder="Enter message…"
            placeholderTextColor={colors.white_1}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="paperclip"
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
  input: {
    width: '92%',
    padding: 10,
    borderRadius: 0,
  },
});

export default ChatKeyboard;
