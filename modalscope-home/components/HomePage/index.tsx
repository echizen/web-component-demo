import React from 'react';
import { GithubOutlined, ZoomOutOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const HomePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.headerSection}>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/69105798-2070-41ee-9e4c-53711abd6d6a.png"
            className={styles.logoImage}
          />
          <span className={styles.siteTitle}>1odei5cope</span>
        </div>
        <span className={styles.homeLink}>首页</span>
        <span className={styles.modelLibraryLink}>模型库</span>
        <span className={styles.datasetLink}>数据集</span>
        <span className={styles.creationSpaceLink}>创空间</span>
        <span className={styles.aigcZoneLink}>AIGC专区</span>
        <span className={styles.documentationCenterLink}>文档中心</span>
        <span className={styles.datasetLink}>社区</span>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/57660610-d7be-4d6a-a87a-8bcd2e48f21a.png"
          className={styles.profileImage}
        />
        <div className={styles.emptyDiv} />
        <GithubOutlined className={styles.githubIcon} />
        <span className={styles.githubText}>GitHub</span>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/fb77fdd4-0d3e-4ffc-95f4-b7f259252f86.png"
          className={styles.thumbnailImage}
        />
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/d691d03b-ac69-44b6-96f5-6d1d9579cdf0.png"
          className={styles.thumbnailImageAlt}
        />
        <ZoomOutOutlined className={styles.zoomOutIcon} />
        <span className={styles.searchPlaceholder}>搜索您...</span>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/8205c090-a777-4ae2-af34-63012862ea43.png"
          className={styles.thumbnailImageSecondary}
        />
      </div>
    </div>
  );
};

export default HomePage;
