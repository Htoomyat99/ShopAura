import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../helpers/theme/color';

const LoadingModal = () => {
  return (
    <Modal transparent={true} visible={true} animationType="fade">
      <View style={style.mainContainer}>
        <View style={style.container}>
          <View>
            <ActivityIndicator size={'large'} color={palette.primary} />
          </View>
          <Text style={style.loadingText}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    // width: wp(25),
    borderRadius: hp(0.8),
    marginTop: -hp(15),
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1.8),
    paddingHorizontal: hp(4),
  },
  loadingText: {
    color: palette.primary,
    marginTop: hp(2),
    fontSize: hp(1.8),
  },
});
