import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function RootHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Stack>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


