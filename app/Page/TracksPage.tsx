import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Avatar, Text, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy data
const tracks = [
  { id: '1', name: 'Track 1', duration: '3:20', coverUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Track 2', duration: '2:45', coverUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Track 3', duration: '4:10', coverUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'Track 4', duration: '3:50', coverUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '5', name: 'Track 5', duration: '5:00', coverUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
];

const TracksPage = () => {
  const [likedTracks, setLikedTracks] = useState(tracks.map(() => false));


  const toggleHeart = (index) => {
    const updatedLikes = [...likedTracks];
    updatedLikes[index] = !updatedLikes[index];
    setLikedTracks(updatedLikes);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Album Header */}
      <View style={styles.albumHeader}>
        <Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/men/8.jpg' }}
          avatarStyle={{ borderRadius: 5 }}
          containerStyle={styles.albumCover}
        />
        <View style={styles.albumInfo}>
          <Text style={styles.albumTitle}>Greatest Hits</Text>
          <Text style={styles.artistName}>Artist Name</Text>
          <Text style={styles.totalSongs}>{tracks.length} Songs</Text>
        </View>
      </View>

      {/* Track List */}
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.trackContainer}>
            <Avatar source={{ uri: item.coverUrl }} avatarStyle={{ borderRadius: 5 }} size={60} />
            <View style={styles.trackInfo}>
              <Text style={styles.trackName}>{item.name}</Text>
              <Text style={styles.trackDuration}>{item.duration}</Text>
            </View>
            <Icon

              containerStyle={{ padding: 10, borderRadius: 50 }}
              name={likedTracks[index] ? 'heart' : 'hearto'} // Use 'heart' for filled and 'hearto' for non-filled
              type="antdesign"
              color="#d3d3d3"
              size={24}
              onPress={() => toggleHeart(index)}
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
    backgroundColor: '#fff',
  },
  albumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  albumCover: {
    width: 150,
    height: 150,
    marginRight: 15,
  },
  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistName: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  totalSongs: {
    fontSize: 16,
    color: '#777',
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 15,

  },
  trackInfo: {
    flex: 1,
    marginLeft: 15,
  },
  trackName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  trackDuration: {
    fontSize: 14,
    color: '#777',
  },
});

export default TracksPage;
