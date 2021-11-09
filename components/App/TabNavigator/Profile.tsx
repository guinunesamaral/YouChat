import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const user = useSelector((state: any) => state.userReducer);
  const colors = useSelector((state: any) => state.colorReducer);
  const [photo, setPhoto] = useState('https://reactjs.org/logo-og.png');
  const [renderNameInput, setRenderNameInput] = useState(false);
  const [renderEmailInput, setRenderEmailInput] = useState(false);

  const pickGalleryPhoto = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      res => {
        if (res.assets && res.assets[0].uri) {
          setPhoto(res.assets[0].uri);
        }
      },
    );
  };

  const takePhoto = async () => {
    launchCamera(
      {
        mediaType: 'photo',
      },
      res => {
        if (res.assets && res.assets[0].uri) {
          setPhoto(res.assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.profile}>
      <View style={styles.photo}>
        <Image
          style={styles.userPhoto}
          source={{
            uri: photo,
          }}
        />
        <TouchableOpacity style={styles.galleryIcon} onPress={pickGalleryPhoto}>
          <MaterialCommunityIcons
            name="image"
            color={colors.purple_1}
            size={38}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraIcon} onPress={takePhoto}>
          <MaterialCommunityIcons
            name="camera"
            color={colors.purple_1}
            size={38}
          />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        {renderNameInput ? (
          <TextInput
            style={{ ...styles.input, borderColor: colors.purple_1 }}
            placeholder="Name"
            placeholderTextColor={colors.purple_2}
          />
        ) : (
          <View style={{ ...styles.infoBox, borderColor: colors.purple_1 }}>
            <View style={styles.infoBoxText}>
              <MaterialCommunityIcons
                name="clipboard-account"
                color={colors.purple_1}
                size={25}
              />
              <Text style={{ ...styles.text, color: colors.purple_1 }}>
                {user.name}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setRenderNameInput(!renderNameInput)}>
              <MaterialCommunityIcons
                name="pencil"
                color={colors.purple_1}
                size={25}
              />
            </TouchableOpacity>
          </View>
        )}
        {renderEmailInput ? (
          <TextInput
            style={{ ...styles.input, borderColor: colors.purple_1 }}
            placeholder="Email"
            placeholderTextColor={colors.purple_2}
          />
        ) : (
          <View style={{ ...styles.infoBox, borderColor: colors.purple_1 }}>
            <View style={styles.infoBoxText}>
              <MaterialCommunityIcons
                name="at"
                color={colors.purple_1}
                size={25}
              />
              <Text style={{ ...styles.text, color: colors.purple_1 }}>
                {user.email}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setRenderEmailInput(!renderEmailInput)}>
              <MaterialCommunityIcons
                name="pencil"
                color={colors.purple_1}
                size={25}
              />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
      {renderNameInput || renderEmailInput ? (
        <Button
          title="Finish edition"
          color={colors.purple_2}
          onPress={() => {
            setRenderNameInput(false);
            setRenderEmailInput(false);
          }}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    paddingTop: 20,
  },
  photo: {
    position: 'relative',
    marginBottom: 30,
  },
  userPhoto: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  galleryIcon: {
    position: 'absolute',
    left: 0,
    bottom: -7,
  },
  cameraIcon: {
    position: 'absolute',
    right: 0,
    bottom: -7,
  },
  container: {
    width: '90%',
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 7,
    marginBottom: 15,
    borderWidth: 1,
  },
  infoBoxText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    marginLeft: 4,
  },
  editIcon: {
    alignSelf: 'flex-end',
  },
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    marginVertical: 12,
    borderWidth: 1,
  },
});

export default Profile;
