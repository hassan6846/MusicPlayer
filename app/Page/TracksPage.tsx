import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Avatar, Text, Icon } from '@rneui/themed'; // Import components from React Native Elements
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy data
const tracks = [
  { id: '1', name: 'Track 1', duration: '3:20', coverUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Track 2', duration: '2:45', coverUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Track 3', duration: '4:10', coverUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'Track 4', duration: '3:50', coverUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '5', name: 'Track 5', duration: '5:00', coverUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
];

const TracksPage = () => {
  // State to track if the heart is filled for each track
  const [likedTracks, setLikedTracks] = useState(
    tracks.map(() => false) // Initialize all hearts as non-filled (false)
  );

  // Function to toggle heart icon
  const toggleHeart = (index) => {
    const updatedLikes = [...likedTracks]; // Create a copy of the current likes array
    updatedLikes[index] = !updatedLikes[index]; // Toggle the heart state
    setLikedTracks(updatedLikes); // Update state with the new values
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.trackContainer}>
            <Avatar source={{ uri: item.coverUrl }} rounded size="medium" />
            <View style={styles.trackInfo}>
              <Text style={styles.trackName}>-{index + 1}{item.name}</Text>
              <Text style={styles.trackDuration}>{item.duration}</Text>
            </View>
            <Icon
              name={likedTracks[index] ? 'heart' : 'hearto'} // Use 'heart' for filled and 'hearto' for non-filled
              type="antdesign"
              color="#ff0000"
              size={24}
              onPress={() => toggleHeart(index)} // Toggle the heart state on press
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,

  },
  trackInfo: {
    flex: 1,
    marginLeft: 15,
  },
  trackName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trackDuration: {
    fontSize: 14,
    color: '#555',
  },
});

export default TracksPage;
