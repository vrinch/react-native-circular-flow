import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-flow';

const Examples = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>CircularProgress Examples</Text>

        {/* Example 1: Small, Thin Progress Circle with Custom Text */}
        <View style={styles.example}>
          <Text style={styles.title}>Small, Thin Progress Circle with Custom Text</Text>
          <CircularProgress
            size={80}
            strokeWidth={6}
            progress={25}
            duration={500}
            value="Loading..."
            strokeColor="#4CAF50"
            strokeBackgroundColor="#FFFFFF"
            textStyle={{ fontStyle: 'italic' }}
            textColor="#000000"
            showProgress={false}
          />
        </View>

        {/* Example 2: Large, Thick Progress Circle with No Text */}
        <View style={styles.example}>
          <Text style={styles.title}>Large, Thick Progress Circle with No Text</Text>
          <CircularProgress
            size={160}
            strokeWidth={18}
            progress={100}
            duration={3000}
            strokeColor="#2196F3"
            strokeBackgroundColor="#CCCCCC"
            showProgress={false}
          />
        </View>

        {/* Example 3: Medium Progress Circle with Custom Text Style */}
        <View style={styles.example}>
          <Text style={styles.title}>Medium Progress Circle with Custom Text Style</Text>
          <CircularProgress
            size={100}
            strokeWidth={10}
            progress={50}
            duration={1000}
            value="Halfway"
            strokeColor="#FFC107"
            strokeBackgroundColor="#EEEEEE"
            textStyle={{ fontWeight: 'bold', textDecorationLine: 'underline' }}
            fontSize={20}
            textColor="#FF5722"
            showProgress={false}
          />
        </View>

        {/* Example 4: Progress Circle with Custom Font and Accessibility */}
        <View style={styles.example}>
          <Text style={styles.title}>Progress Circle with Custom Font and Accessibility</Text>
          <CircularProgress
            size={120}
            strokeWidth={12}
            progress={60}
            duration={2000}
            value="60%"
            strokeColor="#9C27B0"
            strokeBackgroundColor="#F5F5F5"
            textStyle={{ fontFamily: 'YourCustomFont' }}
            fontSize={22}
            textColor="#3E2723"
            allowFontScaling={true}
            showProgress={true}
          />
        </View>

        {/* Example 5: Minimalistic Progress Circle with Vibrant Colors */}
        <View style={styles.example}>
          <Text style={styles.title}>Minimalistic Progress Circle with Vibrant Colors</Text>
          <CircularProgress
            size={90}
            strokeWidth={8}
            progress={40}
            duration={800}
            strokeColor="#FFEB3B"
            strokeBackgroundColor="#424242"
            showProgress={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  example: {
    marginBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Examples;