import {useContext} from 'react';
import {AuthContext} from '../context/context';
import en from '../helpers/locale/en';
import mm from '../helpers/locale/mm';

export const useLocale = () => {
  const {lang} = useContext(AuthContext);
  if (lang === 'en') {
    return en;
  } else {
    return mm;
  }
};
