export interface NavigationItem {
  path: string;
  label: string;
  title?: string;
  displayed: boolean;
}

export const HOME: NavigationItem = {
  path: '',
  label: '',
  displayed: true,
};

export const ARTICLE_BITLY: NavigationItem = {
  path: 'article/:bitlyId',
  label: '',
  displayed: true,
};

export const NEWS: NavigationItem = {
  path: 'news',
  label: 'Actualités',
  title: 'Dernières actualités',
  displayed: true,
};

export const UPDATES: NavigationItem = {
  path: 'updates',
  label: 'Mises à jour',
  title: 'Dernières nouveautés',
  displayed: true,
};

export const WIKI: NavigationItem = {
  path: 'wiki',
  label: 'Wiki',
  displayed: false,
};

export const CALCULATOR: NavigationItem = {
  path: 'calculator',
  label: 'Calculateur',
  displayed: false,
};

export const APP_NAVIGATION: NavigationItem[] = [
  HOME,
  NEWS,
  UPDATES,
  WIKI,
  CALCULATOR,
];
