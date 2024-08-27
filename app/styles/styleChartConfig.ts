import colors from "./colors";

const chartConfig = {
    backgroundGradientFrom: '#F1F8FF',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#F1F8FF',
    backgroundGradientToOpacity: 1,
    fillShadowGradientFrom: colors.primaryColor,
    fillShadowGradientFromOpacity: 0.6,
    fillShadowGradientFromOffset: 0.3,
    fillShadowGradientTo: '#F1F8FF',
    fillShadowGradientToOpacity: 0.4,
    fillShadowGradientToOffset: 0.86,
    decimalPlaces: 0,
    color: (opacity = 6) => `rgba(14, 12, 94, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(14, 12, 94, ${opacity})`,                
    propsForBackgroundLines: {
        strokeDasharray: '', 
        stroke: 'transparent', 
    },
    propsForDots: {
        r: '5',
        strokeWidth: 4,
        stroke: colors.primaryColor,
        fill: `#D5E8FF`
    }
};

export default chartConfig;