import {
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  RefreshControl
} from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
//utils
import { MusicCover } from "../utils/Constants";
import { Avatar, Text} from "@rneui/themed";
import { getHeight } from "../utils/GetDimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';

const Music = ({ navigation }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  //module...
  const fetchAudioFiles = async () => {
    try {
      const mediaFiles = await MediaLibrary.getAssetsAsync({
        mediaType: ["audio"],

        sortBy: ["creationTime"],
      });
      setAudioFiles(mediaFiles.assets);
      setIsRefreshing(false); // Ensure to set refreshing state to false after data is fetched

    } catch (error) {
      setIsRefreshing(false); // Ensure to set refreshing state to false after data is fetched

      console.error("Error fetching audio files:", error);
    } finally {

      setLoading(false);
    }
  };
  //on page mount
  useEffect(() => {
    console.log(audioFiles);


    fetchAudioFiles();
  }, []);
 //refresh event
 const onRefresh = () => {
  setIsRefreshing(true); // Set refreshing state to true on pull-down refresh
  fetchAudioFiles(); // Fetch data again
};
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff",paddingHorizontal:10 }}>
      <FlatList
        style={{ marginTop: getHeight / 15}}
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgba(59, 59, 59, 0.082)" : "white",
                borderRadius:5,
              },
              Styles.MusicCard,
            ]}
            onPress={() => navigation.navigate("Player", { music: item })}
          >
            <View style={{flexDirection:"row"}}>
            <Avatar avatarStyle={{borderRadius:5}} containerStyle={{borderRadius:5}} size={50} source={{ uri: MusicCover }} />


            <View style={{ marginLeft: 20 }}>
              <Text  style={{ fontSize: 15, fontWeight: "bold" }}>
                {item.filename}
              </Text>
              <View style={{ flexDirection: "row", columnGap: 3 }}>
                <Text style={{ fontSize: 14, color: "gray" }}>
                  {item.duration >= 60
                    ? `${Number((item.duration / 60).toFixed(2))} minutes`
                    : `${Number(item.duration.toFixed(2))} sec`}
                </Text>
                <Text style={{ fontSize: 14, color: "gray" }}>
                  {" "}
                  {"\u2022"} {item.creationTime}
                </Text>
              </View>
            </View>
            </View>
            <AntDesign name="hearto" size={20} color="gray" />

          </Pressable>
        )}

        refreshControl={
          <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}

        />
        }
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  MusicCard: {
    display: "flex",
    flexDirection: "row",
    padding:4,
    justifyContent:"space-between",
    marginBottom: 10,
  },
});
export default Music;
