import {getAllLocations} from '@app/data';
import {addLocationsFromCash} from '@app/redux/features';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const useSavedData = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const locations = await getAllLocations();
    const filteredLocations = locations.map(loc => loc._raw);
    if (locations.length > 0) {
      dispatch(addLocationsFromCash(filteredLocations));
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useSavedData;
