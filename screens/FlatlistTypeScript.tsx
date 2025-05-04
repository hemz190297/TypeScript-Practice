import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

interface MyTextInputProps {
  language: string;
  isSelected: boolean;
}

const FlatlistTypeScript = () => {
  const [data, setData] = React.useState<MyTextInputProps[]>([
    {language: 'JavaScript', isSelected: false},
    {language: 'Python', isSelected: false},
    {language: 'Java', isSelected: false},
    {language: 'C++', isSelected: false},
    {language: 'C#', isSelected: false},
    {language: 'PHP', isSelected: false},
    {language: 'Swift', isSelected: false},
    {language: 'Go', isSelected: false},
    {language: 'Ruby', isSelected: false},
    {language: 'Kotlin', isSelected: false},
    {language: 'Dart', isSelected: false},
  ]);

  const onSelect = (index: number) => {
    let temp = data.map((item, i) => {
      if (i === index) {
        return {...item, isSelected: !item.isSelected};
      } else if (item.isSelected) {
        return {...item, isSelected: false};
      }
      return item;
    });
    setData(temp);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: MyTextInputProps;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          borderWidth: 1,
          borderColor: item.isSelected ? 'red' : '#000',
          padding: 20,
          width: '45%',
        }}
        onPress={() => {
          onSelect(index);
        }}>
        <Text>{item.language}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={sel => renderItem(sel)}
        numColumns={2}
      />
    </View>
  );
};

export default FlatlistTypeScript;
