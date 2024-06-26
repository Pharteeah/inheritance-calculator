import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useFocusEffect(
    React.useCallback(() => {
      // Reset animation values
      fadeAnim.setValue(0);
      slideAnim.setValue(-100);

      // Start animations
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start();
    }, [fadeAnim, slideAnim])
  );

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.intro, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        Welcome to the Islamic Inheritance Calculator
      </Animated.Text>
      <Animated.Text style={[styles.description, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        Click on "Calculate Shares" to determine the inheritance shares of each heir.
        Access "Islamic Rules" to understand the principles of Islamic inheritance.
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculate')}>
          <Text style={styles.buttonText}>Calculate Shares</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rules')}>
          <Text style={styles.buttonText}>Access Islamic Rules</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  intro: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#4a4a4a',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#6200EE',
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
