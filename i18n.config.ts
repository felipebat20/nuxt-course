import pt_br from './lang/pt-BR';
import en from './lang/en';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt-BR',
  messages: {
    en,
    'pt-BR': pt_br,
  },
}));
