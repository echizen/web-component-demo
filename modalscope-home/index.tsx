import React from 'react';
import FilterAndSortPanel from './components/FilterAndSortPanel';
import HomePage from './components/HomePage';
import ProductGallery from './components/ProductGallery';
import SpaceCreationGuide from './components/SpaceCreationGuide';

import styles from './index.module.less';

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <HomePage />
      <SpaceCreationGuide />
      <FilterAndSortPanel />
      <ProductGallery />
    </div>
  );
};

export default MyPageComponent;
