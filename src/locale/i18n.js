/**
 * @format
 * @flow
 */
import i18n from 'i18n-js';

import en from './en.json';
import my from './my.json';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = {en, my};

export default i18n;
