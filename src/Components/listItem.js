// Import necessary modules
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Import styles
import styles from '../styles/listItemStyles';

// Define ListItem component
const ListItem = props => {
  // Define state to keep track of whether the item has been striked out or not
  const [strikeState, setStrikeState] = useState(false);

  // Render the component
  return (
    // When user presses and holds the item, call the onDelete function and pass it the item's ID
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.id)}
      // When user presses the item, toggle the strikeState
      onPress={() => setStrikeState(!strikeState)}>
      <View style={styles.listItem}>
        {/* Render the item's text with or without the strikethrough style based on the strikeState */}
        <Text style={strikeState ? styles.strikeItemText : styles.itemText}>
          <Text>{props.title}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Export the ListItem component
export default ListItem;
