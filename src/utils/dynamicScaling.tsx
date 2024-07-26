import { Dimensions } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 385;
const guidelineBaseHeight = 854;

const scale = (size: Float) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: Float) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: Float, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
