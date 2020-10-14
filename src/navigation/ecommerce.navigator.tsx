import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddNewCardScreen } from '../scenes/ecommerce/add-new-card.component';
import { ProductDetails3Screen } from '../scenes/ecommerce/product-details-3.component';
import { PaymentScreen } from '../scenes/ecommerce/payment.component';
import { ProductListScreen } from '../scenes/ecommerce/product-list.component';
import { ShoppingCartScreen } from '../scenes/ecommerce/shopping-cart.component';

const Stack = createStackNavigator();

export const EcommerceNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ProductList' component={ProductListScreen}/>
    <Stack.Screen name='ProductDetails3' component={ProductDetails3Screen}/>
    <Stack.Screen name='ShoppingCart' component={ShoppingCartScreen}/>
    <Stack.Screen name='AddNewCard' component={AddNewCardScreen}/>
    <Stack.Screen name='Payment' component={PaymentScreen}/>
  </Stack.Navigator>
);
