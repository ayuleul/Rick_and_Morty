declare type RootStackParamList = {
  Location: undefined;
  Character: {locationName: string};
};

declare type NavProps = NativeStackScreenProps<
  RootStackParamList,
  'Location',
  'Character'
>;
