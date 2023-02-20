import React, {useState} from 'react';
import {View, Text, TextInput, Button, Modal, Alert} from 'react-native';

// import styles
import styles from '../styles/addModalStyles';

const AddModal = props => {
  // Define state variables to hold the entered item and quantity
  const [enteredItem, setEnteredItem] = useState('');
  const [quantityChoice, setQuantityChoice] = useState('');

  // Handler function to update entered item state variable
  const addFieldHandler = enteredText => {
    setEnteredItem(enteredText);
  };

  // Handler function to add item and quantity to list
  const itemAddHandler = () => {
    // Check that both the entered item and quantity are non-empty
    if (enteredItem.length !== 0 && quantityChoice.length !== 0) {
      // Call the onAddItem function passed in as a prop with the concatenated item and quantity
      props.onAddItem(enteredItem + ': ' + quantityChoice);
      // Clear the entered item and quantity state variables
      setEnteredItem('');
      setQuantityChoice('');
    } else {
      // Alert the user if either the item or quantity is empty
      Alert.alert('Please enter an item and quantity');
    }
  };

  // Handler function to update quantity choice state variable
  const quantityChoiceHandler = currentChoice => {
    setQuantityChoice(currentChoice);
  };

  return (
    // Use a modal to display the add item form
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>
            Add new items to your shopping list
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Item</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            width="100%"
            placeholder="Enter item"
            style={styles.input}
            onChangeText={addFieldHandler}
            value={enteredItem}
            onSubmitEditing={() => {
              itemAddHandler();
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Amount</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TextInput
            width="100%"
            placeholder="Enter quantity"
            style={styles.input}
            onChangeText={quantityChoiceHandler}
            value={quantityChoice}
            onSubmitEditing={() => {
              itemAddHandler();
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Add items to list. Close when finished</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="grey"
              style={styles.button}
              title="CLOSE"
              onPress={props.onClose}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="green"
              style={styles.button}
              title="ADD"
              onPress={itemAddHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;
