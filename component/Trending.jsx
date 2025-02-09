import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";
import { useVideoPlayer, VideoView } from "expo-video";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
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
  const player = useVideoPlayer(item.video); // Video player initialize karna
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      style={{ marginRight: 20 }}
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <VideoView 
          player={player} 
          style={{
            width: 208,
            height: 288,
            borderRadius: 35,
            marginTop: 12,
            backgroundColor: "#FFFEFE",
          }} 
          nativeControls
        />
      ) : (
        <TouchableOpacity
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.7}
          onPress={() => {
            setPlay(true);
            player.play(); // Video play karna
          }}
        >
          <ImageBackground
            style={{
              width: 208,
              height: 288,
              borderRadius: 52,
              marginTop: 20,
              overflow: "hidden",
            }}
            source={{ uri: item.thumbnail }}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={{ width: 48, height: 48, position: "absolute" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

// const TrendingItem = ({ activeItem, item }) => {
//   const [play, setPlay] = useState(false);
//   console.log("activeItem=>", activeItem.$id);
//   console.log("item.$id=>", item.$id);


//   return (
//     <Animatable.View
//       style={{ marginRight: 20 }}
//       animation={activeItem === item.$id ? zoomIn : zoomOut}
//       duration={500}
//     >
//       {play ? (
//         // <Video
//         //   source={{ uri: item.video }}
//         //   className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
//         //   style={{
//         //     width: 208,
//         //     height: 288,
//         //     borderRadius: 35,
//         //     marginTop: 12,
//         //     backgroundColor: "#FFFEFE",
//         //   }}
//         //   resizeMode={ResizeMode.CONTAIN}
//         //   useNativeControls
//         //   shouldPlay
//         //   onPlaybackStatusUpdate={(status) => {
//         //     if(status.didJustFinish){
//         //       setPlay(false)
//         //     }
//         //   }}
//         // />
//         <VideoView player={{ uri:item.video }}/>
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
//             style={{
//               width: 208,
//               height: 288,
//               borderRadius: 52,
//               marginTop: 20,
//               marginBlock: 20,
//               overflow: "hidden",
//             }}
//             source={{
//               uri: item.thumbnail,
//             }}
//             resizeMode="cover"
//           />
//           <Image
//             source={icons.play}
//             style={{ width: 48, height: 48, position: "absolute" }}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       )}
//     </Animatable.View>
//   );
// };

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[1]);
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      // onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
      horizontal
    />
  );
};

export default Trending;
