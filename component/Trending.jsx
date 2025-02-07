// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
// } from "react-native";
// import React, { useRef, useState } from "react";
// import * as Animatable from "react-native-animatable";
// import { icons } from "../constants";
// import { ResizeMode, Video } from "expo-av";

// const zoomIn = {
//   0: {
//     scale: 0.9,
//   },
//   1: {
//     scale: 1.1,
//   },
// };
// const zoomOut = {
//   0: {
//     scale: 1,
//   },
//   1: {
//     scale: 0.9,
//   },
// };

// const TrendingItem = ({ activeItem, item }) => {
//   const [play, setPlay] = useState(false);

//   return (
//     <Animatable.View
//       className="mr-5"
//       animation={activeItem === item.$id ? zoomIn : zoomOut}
//       duration={500}
//     >
//       {play ? (
//         <Video
//           source={{ uri: item.video }}
//           style={{
//             width: 208,
//             height: 288,
//             borderRadius: 35,
//             marginTop: 12,
//           }}
//           resizeMode="contain"
//           useNativeControls
//           shouldPlay
//           onPlaybackStatusUpdate={(status) => {
//             if(status.didJustFinish){
//               setPlay(false)
//             }
//           }}

//         />
//       ) : (
//         <TouchableOpacity
//           style={{
//             position: "relative",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           activeOpacity={0.7}
//           onPress={() => setPlay(true)}
//         >
//           <ImageBackground
//             source={{
//               uri: item.thumbnail,
//             }}
//             style={{
//               width: 208,
//               height: 288,
//               borderRadius: 35,
//               marginTop: 20,
//               marginBottom: 20,
//               overflow: "hidden",
//             }}
//             className="shadow-lg shadow-black/40"
//             resizeMode="cover"
//           />

//           <Image
//             source={icons.play}
//             style={{ width: 48, height: 48, position: "absolute" }}
//             className="w-12 h-12 absolute"
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       )}

//     </Animatable.View>
//   );
// };

// const Trending = ({ posts }) => {
//   const [activeItem, setActiveItem] = useState(posts[0]);
//   const onViewableItemsChangedRef = useRef(({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setActiveItem(viewableItems[0].key);
//     }
//   });

//   const viewabilityConfigCallbackPairs = useRef([
//     {
//       viewabilityConfig: { itemVisiblePercentThreshold: 70 },
//       onViewableItemsChanged: (info) => onViewableItemsChangedRef.current(info),
//     },
//   ]);

//   return (
//     <FlatList
//       data={posts}
//       keyExtractor={(item) => item.$id}
//       renderItem={({ item }) => (
//         <TrendingItem activeItem={activeItem} item={item} />
//       )}
//       viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
//       contentOffset={{ x: 170 }}
//       horizontal
//     />
//   );
// };

// export default Trending;

import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};
const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  console.log("activeItem=>", activeItem);
  console.log("activeItem$id=>", activeItem.$id);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="shadow-lg shadow-black/40"
            style={{
              width: 208,
              height: 288,
              borderRadius: 35,
              marginTop: 20,
              marginBlock: 20,
              overflow: "hidden",
            }}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="absolute"
            resizeMode="contain"
            style={{ width: 48, height: 48 }}
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[1]);
  const viewableItemsChanged = ({ viewableItems }) => {
    if(viewableItems.length > 0){
      setActiveItem(viewableItems[0].key)
    }
  }
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={(item) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset={{x: 170}}
      onViewableItemsChanged={viewableItemsChanged}
      horizontal
    />
  );
};

export default Trending;
