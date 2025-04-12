import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  progress: number; // 0 to 100
  duration?: number;
  value?: string;
  strokeColor?: string;
  strokeBackgroundColor?: string;
  textStyle?: TextStyle;
  fontSize?: number;
  fontFamily?: string;
  textColor?: string;
  allowFontScaling?: boolean;
  showProgress?: boolean;
}

const DEFAULT_SIZE = 100;
const DEFAULT_STROKE_WIDTH = 10;
const DEFAULT_STROKE_COLOR = '#DA1830';
const DEFAULT_STROKE_BG_COLOR = '#E0E0E0';
const DEFAULT_TEXT_COLOR = '#333333';
const DEFAULT_DURATION = 1000;
const DEFAULT_FONT_FAMILY = 'System';

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  progress = 0,
  duration = DEFAULT_DURATION,
  value,
  strokeColor = DEFAULT_STROKE_COLOR,
  strokeBackgroundColor = DEFAULT_STROKE_BG_COLOR,
  textStyle,
  fontSize,
  fontFamily = DEFAULT_FONT_FAMILY,
  textColor = DEFAULT_TEXT_COLOR,
  allowFontScaling = false,
  showProgress = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const svgSize = size;

  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration });
  }, [progress, duration]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = interpolate(
      animatedProgress.value,
      [0, 100],
      [circumference, 0],
    );
    return { strokeDashoffset };
  });

  return (
    <View style={[styles.container, { width: svgSize, height: svgSize }]}>      
      <Svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>        
        <Circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke={strokeBackgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {progress > 0 && (
          <AnimatedCircle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            animatedProps={animatedProps}
            rotation="-90"
            originX={svgSize / 2}
            originY={svgSize / 2}
          />
        )}
      </Svg>
      <Text
        style={[
          styles.text,
          {
            fontSize: fontSize || size * 0.22,
            color: textColor,
            fontFamily,
          },
          textStyle,
        ]}
        allowFontScaling={allowFontScaling}
      >
        {value !== undefined ? value : showProgress ? `${Math.round(progress)}%` : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        position: 'absolute'
    },
});

export default CircularProgress;