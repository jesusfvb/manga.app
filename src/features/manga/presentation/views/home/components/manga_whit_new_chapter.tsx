import { useState, useRef } from 'react';
import { ViewToken, View, Image, Text, FlatList } from 'react-native';
import { Images } from '../../../../../../assets';
import { Button } from 'react-native-paper';

type MangaWhitNewChaptersProp = {};

const MangaWhitNewChapters = (props: MangaWhitNewChaptersProp) => {
  const [itemVisible, setItemVisible] = useState<string>('');

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken<{
        name: string;
      }>[];
    }) => {
      if (viewableItems.length > 0) {
        // Aquí puedes decidir cuál ocupa más espacio
        const mostVisible = viewableItems.reduce((prev: any, curr: any) =>
          curr.isViewable && curr.itemVisiblePercent > prev.itemVisiblePercent
            ? curr
            : prev,
        );
        setItemVisible(mostVisible.item.name);
      }
    },
  );

  const newsRenderItem = () => (
    <View className="h-[156] w-[326] mx-2  rounded-xl overflow-hidden bg-black relative">
      <Image
        className="h-[300] w-full"
        resizeMode="cover"
        source={Images.placeholder}
      />
      <Button
        mode="contained"
        style={{ borderRadius: 16 }}
        contentStyle={{
          backgroundColor: '#F97316',
          borderRadius: 16,
        }}
        className="absolute bottom-3 right-3 "
      >
        <Text>Leer ahora</Text>
      </Button>
    </View>
  );
  return (
    <View className="items-start mx-3">
      <Button
        icon={'chevron-right'}
        contentStyle={{ flexDirection: 'row-reverse' }}
        labelStyle={{ marginLeft: 0 }}
      >
        ✨ Nuevos capítulos
      </Button>
      <View className="w-full h-[156] ">
        <FlatList
          horizontal
          data={[
            { name: 'Item 1' },
            { name: 'Item 2' },
            { name: 'Item 3' },
            { name: 'Item 4' },
          ]}
          renderItem={data => newsRenderItem()}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      </View>
      <Text className="text-2xl font-bold">
        {itemVisible.toLocaleUpperCase()}
      </Text>
      <Text className="text-lg">10 capítulos</Text>
    </View>
  );
};

export default MangaWhitNewChapters;
