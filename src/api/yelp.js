import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer IVFcsJZiA85lFI4e8A9OG9QXYA92A9spwktWHxiPtV4oJd87Xb_zH5hs77IAGeT5JpAytUMX6UlwEEw5cjsBQzZPjExtQsUSB71RirKunOsivtPQp2xZ9yU8FX6fYHYx',
    },
});
