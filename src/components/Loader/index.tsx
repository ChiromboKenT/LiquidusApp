import React from 'react';
import { StyleSheet, View, Modal, Image } from 'react-native';

const Loader = ({ visible } : {visible : boolean}) => {

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Image source={require('@assets/img/loader.gif')} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(3, 43, 53, 0.466)',
  },
  activityIndicatorWrapper: {
    backgroundColor: 'rgba(95, 243, 223, 0.466)',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
