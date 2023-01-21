import {changeTheme} from '@app/redux/features';
import {RootState} from '@app/redux/store';
import {ThemeNames} from '@app/themes';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Pressable, Text, OcticonsIcons} from '../atoms';

interface IHeader {
  title?: string;
}

const Header: React.FC<IHeader> = ({title}) => {
  const theme = useSelector((state: RootState) => state.theme.selected);
  let isLight = theme.id === 'light';

  const dispatch = useDispatch();

  function handleChangeTheme() {
    let selectedThemeName: ThemeNames = 'light';
    if (isLight) {
      selectedThemeName = 'dark';
    }
    dispatch(changeTheme(selectedThemeName));
  }

  return (
    <Box
      backgroundColor="$background"
      paddingHorizontal="xl"
      height={40}
      flexDirection="row"
      justifyContent="space-between"
      alignItems={'center'}>
      <Box />
      <Text variant="header1" color="$onBackground">
        {title}
      </Text>
      <Pressable onPress={handleChangeTheme}>
        <OcticonsIcons
          name={isLight ? 'sun' : 'moon'}
          color="$primary"
          size={24}
        />
      </Pressable>
    </Box>
  );
};

export default Header;
