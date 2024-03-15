import { useSelector } from 'react-redux';

const useTheme = () => {
  const themeColors = useSelector(state => state.theme.themeColors);
  return themeColors;
};

export default useTheme;