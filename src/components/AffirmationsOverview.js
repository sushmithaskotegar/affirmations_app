import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Button} from 'react-native';
import ModalNew from './Modal';

const AffirmationsOverview = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [eventClicked, seteventClicked] = useState(false);
  const [affirmations, setaffirmations] = useState('');

  const affirmationsFetch = () => {
    console.log('here');
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(result => setaffirmations(result));
    seteventClicked(true);
  };
  console.log(affirmations, 'affirmations');

  const ButtonClosed = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: '200',
            fontSize: 20,
            fontFamily: 'Cochin',
            textAlign: 'center',
          }}>
          Stay Positive today and forever!
        </Text>

        <ModalNew
          affirmationsFetch={affirmationsFetch}
          affirmations={affirmations}
          modalVisible={modalVisible}
          eventClicked={eventClicked}
          ButtonClosed={ButtonClosed}></ModalNew>

        {/* <ModalNew displayModal={displayModal}
           affirmations={affirmations}
          
          ></ModalNew> */}
        <Text style={{padding: 20}}>
          Affirmations are positive statements that can help you to challenge
          and overcome self-sabotaging and negative thoughts. When you repeat
          them often, and believe in them, you can start to make positive
          changes
        </Text>
        <Text style={{padding: 20}}>
          Click here to fetch an api for affirmations
        </Text>
<View style={{margin:30, width:160}}>
        <Button
          title="FetchButton"
          onPress={() => setModalVisible(!modalVisible)}>
          {' '}
        </Button>
        </View>
        {eventClicked ? (
            <View style={{margin:30, width:160}}>
          <Button
            title="DispalyButton"
            onPress={() => setModalVisible(!modalVisible)}>
            {' '}
          </Button>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
export default AffirmationsOverview;
