import { Resource } from 'i18next';
import languages from '../languages';
import sidebar from './sidebar.json';
import footer from './footer.json';
import wallet from './wallet.json';
import staking from './staking.json';
import dashboard from './dashboard.json';

interface IResource {
  [key: string]: Resource;
}

const mergeResource: IResource = {
  sidebar,
  footer,
  wallet,
  staking,
  dashboard,
};

export const langs = Object.keys(languages);

const resources: Resource = {};

Object.keys(languages).map(lang => {
  Object.keys(mergeResource).map(fileName => {
    resources[lang] = {
      translation: {
        ...(resources[lang]?.translation as object),
        [fileName]: mergeResource[fileName][lang],
      },
    };
  });
});

export default resources;
