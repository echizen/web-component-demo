import React from 'react';
import { MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './index.module.less';

const SpaceCreationGuide: React.FC = () => {
  const onCreateBtnClick = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.spaceContainer}>
        <div className={styles.headerSection}>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/73c13dd8-1b4f-4707-9e08-23bd8d6f0683.png"
            className={styles.headerImage}
          />
          <span className={styles.headerTitle}>创空间</span>
        </div>
        <div className={styles.contentWrapper}>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/df7e1bb8-9dad-4de4-a40a-2110835ec7d0.png"
            className={styles.stepOneImage}
          />
          <div className={styles.stepOneDetails}>
            <span className={styles.stepOneTitle}>创建空间</span>
            <span className={styles.stepOneDescription}>
              输入基础信息快速完成空间创建
            </span>
          </div>
          <MinusOutlined className={styles.minusIcon} />
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/39c002dd-5faa-42c6-a348-b554cb7425a0.png"
            className={styles.stepTwoImage}
          />
          <div className={styles.stepTwoDetails}>
            <span className={styles.stepOneTitle}>搭建应用</span>
            <span className={styles.stepOneDescription}>
              基于平台模型与可视化SDK几行...
            </span>
          </div>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/df520a9c-b8ac-493e-8a6a-26e91942c7b8.png"
            className={styles.stepThreeImage}
          />
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/16cc4d99-c29f-4586-93ba-bd6c86524d6d.png"
            className={styles.stepFourImage}
          />
          <div className={styles.stepTwoDetails}>
            <span className={styles.stepOneTitle}>发布空间</span>
            <span className={styles.stepOneDescription}>
              平台环境支持一键发布
            </span>
          </div>
          <span className={styles.arrowIndicator}>→</span>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/0cd5bf7a-48c5-45d9-86e4-6d958a766bf8.png"
            className={styles.stepFourImage2}
          />
          <div className={styles.stepTwoDetails}>
            <span className={styles.stepOneTitle}>分享创意</span>
            <span className={styles.stepOneDescription}>
              将您的创空间分享给您的朋友吧
            </span>
          </div>
          <Button onClick={onCreateBtnClick} className={styles.createButton}>
            我要创建
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpaceCreationGuide;
