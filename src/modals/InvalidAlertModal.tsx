import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {palette} from '../utils/helpers/theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InvalidAlertModal = ({navigation, route}: any) => {
  const {alertText} = route.params;
  return (
    <Modal transparent={true} visible={true} animationType="fade">
      <View style={style.mainContainer}>
        <View style={style.container}>
          <Text style={style.headerText}>OOPS!</Text>
          <Text style={style.paraText}>{alertText}</Text>
          <TouchableOpacity
            style={style.btnContainer}
            onPress={() => navigation.pop()}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InvalidAlertModal;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: palette.white,
    width: wp(75),
    borderRadius: wp(1),
    overflow: 'hidden',
    marginTop: -hp(15),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2.5),
  },
  headerText: {
    color: palette.red500,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  paraText: {
    color: palette.dimGray,
    marginTop: hp(3),
    marginRight: hp(4),
  },
  btnContainer: {
    backgroundColor: palette.primary,
    paddingVertical: wp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: wp(1),
    marginTop: hp(3),
    marginLeft: hp(22),
  },
});
