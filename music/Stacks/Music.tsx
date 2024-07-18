import { View, Text, FlatList, TouchableOpacity,Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';

const Music = ({ navigation }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(audioFiles)
    const fetchAudioFiles = async () => {
      try {
        const mediaFiles = await MediaLibrary.getAssetsAsync({
          mediaType: ['audio'],
 
          sortBy: ['creationTime'],
        });
        setAudioFiles(mediaFiles.assets);
      } catch (error) {
        console.error('Error fetching audio files:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAudioFiles();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Music</Text>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Player', { music: item })}
          >
            <Text>{item.filename}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Music;
