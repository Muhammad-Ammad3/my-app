import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { useVideoPlayer, VideoView } from "expo-video";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  const player = useVideoPlayer(video);
    
  React.useEffect(() => {
      if (play) {
        player.play();
      }
    }, [play]);

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 56,
      }}
    >
      <View style={{ flexDirection: "row", gap: 12, alignItems: "flex-start" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
            gap: 8,
          }}
        >
          <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#FF9C01",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              style={{ borderRadius: 8, width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>

      {play ? (
         <VideoView
                  player={player}
                  style={{
                    width: "auto",
                    height: 240,
                    borderRadius: 12,
                    marginTop: 12,
                  }}
                  nativeControls
                />
      ) : (
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setPlay(true)}
          style={{
            width: "100%",
            height: 240,
            borderRadius: 12,
            marginTop: 12,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: thumbnail }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 12,
              marginTop: 12,
            }}
            resizeMode="cover"
          />
          <Image source={icons.play} resizeMode="contain"
          style={{width: 48, height: 48, position: "absolute"}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
