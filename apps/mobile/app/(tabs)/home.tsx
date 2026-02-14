import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [isClockedIn, setIsClockedIn] = useState(false);

  const handleClockIn = () => {
    // TODO: Implement clock in logic
    setIsClockedIn(true);
    console.log('Clocked in');
  };

  const handleClockOut = () => {
    // TODO: Implement clock out logic
    setIsClockedIn(false);
    console.log('Clocked out');
  };

  const handleNFCScan = () => {
    // TODO: Implement NFC scanning
    console.log('NFC scan initiated');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Status: {isClockedIn ? 'Clocked In' : 'Clocked Out'}</Text>

      <View style={styles.buttonContainer}>
        {!isClockedIn ? (
          <TouchableOpacity style={styles.clockInButton} onPress={handleClockIn}>
            <Text style={styles.buttonText}>Clock In</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.clockOutButton} onPress={handleClockOut}>
            <Text style={styles.buttonText}>Clock Out</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.nfcButton} onPress={handleNFCScan}>
          <Text style={styles.buttonText}>Scan NFC Tag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 15,
  },
  clockInButton: {
    backgroundColor: '#34C759',
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockOutButton: {
    backgroundColor: '#FF3B30',
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nfcButton: {
    backgroundColor: '#007AFF',
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
