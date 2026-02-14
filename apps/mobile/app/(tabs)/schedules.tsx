import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SchedulesScreen() {
  // Mock schedule data
  const schedules = [
    { day: 'Monday', start: '09:00', end: '17:00' },
    { day: 'Tuesday', start: '09:00', end: '17:00' },
    { day: 'Wednesday', start: '09:00', end: '17:00' },
    { day: 'Thursday', start: '09:00', end: '17:00' },
    { day: 'Friday', start: '09:00', end: '17:00' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Schedule</Text>
      {schedules.map((schedule, index) => (
        <View key={index} style={styles.scheduleCard}>
          <Text style={styles.day}>{schedule.day}</Text>
          <Text style={styles.time}>
            {schedule.start} - {schedule.end}
          </Text>
        </View>
      ))}
    </ScrollView>
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
    marginTop: 20,
    marginBottom: 20,
  },
  scheduleCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  day: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: '#666',
  },
});
