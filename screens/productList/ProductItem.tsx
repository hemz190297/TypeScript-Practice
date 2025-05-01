import {View, Text, Image} from 'react-native';
import React from 'react';

interface dataProductProp {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductItem = ({item}: {item: dataProductProp}) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
      }}>
      <Image source={{uri: item.image}} style={{width: 60, height: 60}} />
      <View style={{flexDirection: 'column'}}>
        <Text style={{marginLeft: 10}}>
          {item.title.length > 40 ? item.title.substring(0, 30) : item.title}
        </Text>
        <Text style={{marginLeft: 10}}>
          {item.description.length > 40
            ? item.description.substring(0, 30)
            : item.description}
        </Text>
        <Text style={{marginLeft: 10}}>{item.price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
