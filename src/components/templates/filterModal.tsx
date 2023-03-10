import {windowWidth} from '@app/helpers';
import {ICharacterFilter} from '@character';
import React, {useCallback} from 'react';
import {Box, Modal, Pressable} from '../atoms';
import {Button} from '../molecules';
import {ButtonGroup} from '../organisms';

interface IFilterModal {
  modalVisible: boolean;
  setModalVisible: (item: boolean) => void;
  filterValue: Omit<ICharacterFilter, 'page'>;
  setFilterValue: React.Dispatch<
    React.SetStateAction<Omit<ICharacterFilter, 'page'>>
  >;
  handleClearFilter: () => void;
  handleApplyFilter: () => void;
}

const FilterModal: React.FC<IFilterModal> = ({
  modalVisible,
  setModalVisible,
  filterValue,
  setFilterValue,
  handleClearFilter,
  handleApplyFilter,
}) => {
  const handleClose = useCallback(() => {
    setModalVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnPress = useCallback((id: string, value: string) => {
    setFilterValue((preState: Omit<ICharacterFilter, 'page'>) => {
      return {
        ...preState,
        [id]: value,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Box
        bg="$transparentBackground"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <Pressable
          testID="foreground"
          position="absolute"
          bottom={0}
          top={0}
          left={0}
          right={0}
          onPress={handleClose}
        />
        <Box
          width={windowWidth * 0.8}
          m="lg"
          padding="xl"
          bg="white"
          borderRadius="sm">
          <ButtonGroup
            title="Gender"
            buttons={['Male', 'Female']}
            selected={filterValue.gender}
            id="gender"
            handleOnPress={handleOnPress}
          />
          <ButtonGroup
            title="Status"
            buttons={['unknown', 'Alive', 'Dead']}
            selected={filterValue.status}
            id="status"
            handleOnPress={handleOnPress}
          />
          <ButtonGroup
            title="Species"
            buttons={['Human', 'Alien']}
            selected={filterValue.species}
            id="species"
            handleOnPress={handleOnPress}
          />
          <Box flexDirection="row" justifyContent="space-around" mt="lg">
            <Button
              title="Clear"
              handleOnPress={handleClearFilter}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{width: 80}}
            />
            <Button
              title="Apply"
              handleOnPress={handleApplyFilter}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{width: 80}}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default FilterModal;
