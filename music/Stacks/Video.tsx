import { View, Text, Pressable, FlatList, StyleSheet, RefreshControl, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as VideoThumbnails from 'expo-video-thumbnails';

import {Avatar} from "@rneui/themed"
import { getHeight } from '../utils/GetDimensions';
const Video = ({ navigation }) => {
  const [videoFiles, setVideoFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to generate video thumbnail
  const generateThumbnail = async (uri) => {
    try {
      const { uri: thumbnailUri } = await VideoThumbnails.getThumbnailAsync(uri, {
      });
      return thumbnailUri;
    } catch (e) {
      console.warn(e);
      return null;
    }
  };

  // Function to fetch video files
  const fetchVideoFiles = async () => {
    try {
      const mediaFiles = await MediaLibrary.getAssetsAsync({
        mediaType: ['video'],
        sortBy: ['creationTime'],
      });

      // Generate thumbnails for each video
      const videosWithThumbnails = await Promise.all(
        mediaFiles.assets.map(async (video) => {
          const thumbnailUri = await generateThumbnail(video.uri);
          return { ...video, thumbnailUri };
        })
      );

      setVideoFiles(videosWithThumbnails);
      setIsRefreshing(false);
    } catch (error) {
      console.error('Error fetching video files:', error);
      setIsRefreshing(false);
    } finally {
      setLoading(false);
    }
  };

  // Refresh event handler
  const onRefresh = () => {
    setIsRefreshing(true);
    fetchVideoFiles();
  };

  // Request permissions and fetch video files on component mount
  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
      }
    };

    getPermissions().then(() => fetchVideoFiles());
    console.log(videoFiles)
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: getHeight / 30}}
        data={videoFiles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',
                borderRadius: 5,
                margin: 10,
                padding: 8,
                flexDirection: 'row',
                alignItems: 'center',
              },
            ]}
            onPress={() => navigation.navigate('Player', { videoUri: item.uri })}
          >
            {item.thumbnailUri ? (
              <Avatar source={{ uri: item.thumbnailUri }} avatarStyle={{borderRadius:5}} containerStyle={styles.thumbnail} />
            ) : (
              <Text>No Thumbnail</Text>
            )}
            <View>
            <Text  style={{ fontSize: 15, color:'gray',marginBottom:10}}>
              {item.filename.length > 30 ? `${item.filename.substring(0, 20)}...` : item.filename}
            
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
          </Pressable>
        )}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
paddingHorizontal:5,
    backgroundColor: '#fff',
  
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  filename: {
    fontSize: 16,
  },
});

export default Video;
