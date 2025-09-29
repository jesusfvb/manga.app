import { View } from 'react-native';
import { Images } from '../../../../assets';
import IconButton from './icon_button';

export default function AppBar() {
  return (
    <View className="bg-[#EA580C] flex-row justify-between pt-safe pb-2">
      <IconButton icon={Images.iconChopper} />
      <IconButton icon="bell" />
    </View>
  );
}
