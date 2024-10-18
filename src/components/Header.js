import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Header() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    determineGreeting();
  }, []);

  const determineGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 4) {
      setGreeting('Boa noite');
    } else if (hour >= 4 && hour < 12) {
      setGreeting('Bom dia');
    } else {
      setGreeting('Boa tarde');
    }
  };


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6433A2', '#FAABFC']}
        style={styles.headerContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          {/* Logo */}
          <Image
            source={{ uri: 'https://i.ibb.co/84Ydb8b/logo.png' }}
            style={styles.logo}
          />
          {/* User info */}
          <View style={styles.userInfoContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>{greeting}</Text>
              <Text style={styles.userName}>Marília Romeu</Text>
              <Text style={styles.userId}>Y24.36.25.53113</Text>
            </View>
            <View style={styles.profileContainer}>
              <Image
                source={{ uri: 'https://i.ibb.co/jzmy3S8/marilia.png' }}
                style={styles.profileImage}
              />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.curvedBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    paddingBottom: 60,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginRight: 10, 
  },
  greeting: {
    color: 'white',
    fontSize: 10,
  },
  userName: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userId: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  notificationBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#6b32a8',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
  curvedBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
