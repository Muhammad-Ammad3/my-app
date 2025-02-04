import React, { useCallback, useRef, useState } from 'react';
import { FlatList, Text, View, ViewToken } from 'react-native';

const MyComponent = () => {
  const [items, setItems] = useState([...Array(20).keys()]);
  
  // Use useRef to persist the function reference
  const onViewableItemsChangedRef = useRef<(info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void>();

  onViewableItemsChangedRef.current = (info) => {
    console.log('Viewable items:', info.viewableItems);
  };

  // Pass a stable callback to FlatList
  const viewabilityConfigCallbackPairs = useRef([{ 
    viewabilityConfig: { itemVisiblePercentThreshold: 50 },
    onViewableItemsChanged: (info) => onViewableItemsChangedRef.current?.(info) 
  }]);

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => <View style={{ padding: 20, backgroundColor: '#ddd', marginBottom: 10 }}><Text>{item}</Text></View>}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
    />
  );
};

export default MyComponent;
