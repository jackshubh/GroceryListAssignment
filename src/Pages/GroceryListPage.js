import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

// import components
import ListItem from '../Components/listItem';
import AddButton from '../Components/addButton';
import ClearAllButton from '../Components/clearAllButton';
import ClearAllModal from '../Components/clearAllModal';
import AddModal from '../Components/addModal';

// import styles
import styles from '../styles/groceryListPageStyles';

function GroceryListPage(props) {
  // state variables
  const [listItems, setListItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  // function to add an item to the list
  const addItemHandler = itemTitle => {
    setListItems(currentItems => [
      ...currentItems,
      {id: new Date().getTime().toString(), value: itemTitle},
    ]);
  };

  // function to remove an item from the list
  const removeItemHandler = itemId => {
    setListItems(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  };

  // function to clear all items from the list
  const clearItemsHandler = () => {
    setListItems(currentItems => []);
    clearAllHandler();
  };

  // function to toggle the confirmation modal
  const clearAllHandler = () => {
    setShowConfirmation(currentShowConfirmation => !currentShowConfirmation);
  };

  // function to toggle the add modal
  const addModalHandler = () => {
    setShowAdd(currentShowAdd => !currentShowAdd);
  };

  return (
    <View style={styles.screen}>
      {/* Confirmation Modal */}
      <ClearAllModal
        visible={showConfirmation}
        onClose={clearAllHandler}
        onClearItems={clearItemsHandler}
      />
      {/* Add Modal */}
      <AddModal
        visible={showAdd}
        onClose={addModalHandler}
        onAddItem={addItemHandler}
      />
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.controls}>
        {/* Add Button */}
        <AddButton onPress={addModalHandler} />
        {/* Clear All Button */}
        {listItems.length > 0 && <ClearAllButton onPress={clearAllHandler} />}
      </View>
      <View style={styles.itemlist}>
        {/* FlatList to display the items in the list */}
        <FlatList
          data={listItems}
          renderItem={itemData => (
            <ListItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeItemHandler}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GroceryListPage;
