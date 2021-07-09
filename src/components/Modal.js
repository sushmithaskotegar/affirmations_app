import React, {useState} from 'react';
import {View, Text, Modal, Button, ActivityIndicator} from 'react-native';

const ModalNew = props => {
  const [count, setcount] = useState(0);
  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      transparent={true}
      hasBackdrop={true}
      visible={props.modalVisible}
      // visible={props.displayModal}
      >
        
      <View
        style={{
          height: 200,
          width: '80%',
          marginTop: 150,
          marginHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ececec',
        }}>
        {props.eventClicked ? null : (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <Text> Do you wanna read some positive affirmations??</Text>
            <View style={{marginLeft:60, width:160}}>
            <Button title="fetch"  onPress={props.affirmationsFetch}>
              {' '}
            </Button>
            </View>
          </View>
        )}

        {props.eventClicked ? (
          <View>
            <Text>
              {props.affirmations ? (
                props.affirmations[`${count}`].text
              ) : (
                <View style={{marginLeft: 30}}>
                  <ActivityIndicator></ActivityIndicator>
                </View>
              )}
            </Text>
           
          </View>
        ) : null}
        {props.eventClicked?
         <View style={{marginLeft:20, width:150}}>
            <Button
              title="next"
              onPress={() => {
                {
                  setcount(count + 1);
                }
              }}></Button>
              </View>:null}
        <View style={{marginTop: 50, marginLeft: 180}}>
          <Button
            onPress={() => {
              props.ButtonClosed();
            }}
            title="close"></Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalNew;
