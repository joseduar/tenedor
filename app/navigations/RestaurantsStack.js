import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants/Restaurants";
import AddRestaurant from "../screens/Restaurants/AddRestaurant";
import Restaurant from "../screens/Restaurants/Restaurant";
import AddReviewRestaurant from "../screens/Restaurants/AddReviewRestaurant";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Servicios" }}
      />
      <Stack.Screen
        name="add-restaurants"
        component={AddRestaurant}
        options={{ title: "Añadir un nuevo Servicio" }}
      />
      <Stack.Screen
        name="restaurant"
        component={Restaurant}
        //options={{ title: "Añadir un nuevo Servicio" }}
      />
      <Stack.Screen
        name="add-review-restaurant"
        component={AddReviewRestaurant}
        options={{ title: "Nuevo comentario" }}
      />
    </Stack.Navigator>
  );
}
