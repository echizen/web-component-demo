import React, { useState } from 'react';
import { Button, Input, Tag } from 'antd';
import { ZoomOutOutlined, CaretDownFilled } from '@ant-design/icons';

import styles from './index.module.less';

const FilterAndSortPanel: React.FC = () => {
  const [inputPlaceholderValue, setInputPlaceholderValue] = useState('');

  const onAllItemsClick = () => {};

  const onNlpTitleClick = () => {};

  const onGpuDeploySpaceClick = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.optionsContainer}>
            <Button onClick={onAllItemsClick} className={styles.allButton}>
              全部
            </Button>
            <span className={styles.programmaticCreation}>编程式创建</span>
            <span className={styles.interactiveCreation}>交互式创建</span>
          </div>
          <div className={styles.optionsContainer}>
            <Input
              disabled
              placeholder="请输入内容（共4043个）"
              prefix={<ZoomOutOutlined className={styles.iconZoomOut} />}
              value={inputPlaceholderValue}
              onChange={e => {
                setInputPlaceholderValue(e.target.value);
              }}
              className={styles.searchInput}
            />
            <span className={styles.programmaticCreation}>综合排序化</span>
          </div>
        </div>
        <div className={styles.tagSection}>
          <div className={styles.optionsContainer}>
            <span className={styles.fieldLabel}>领域:</span>
            <Tag color="rgb(244,247,251)" className={styles.multiModalTag}>
              多模态
            </Tag>
            <Tag color="rgb(244,247,251)" className={styles.multiModalTag}>
              计算机视觉
            </Tag>
            <Button
              size="small"
              onClick={onNlpTitleClick}
              className={styles.naturalLanguageProcessingButton}
            >
              自然语言处理
            </Button>
            <Tag color="rgb(244,247,251)" className={styles.multiModalTag}>
              语音
            </Tag>
            <Tag color="rgb(244,247,251)" className={styles.autoMLTag}>
              AutoML
            </Tag>
          </div>
          <div className={styles.optionsContainer}>
            <span className={styles.fieldLabel}>场景：</span>
            <Tag color="rgb(244,247,251)" className={styles.careerTag}>
              职场
            </Tag>
            <Tag color="rgb(243,245,249)" className={styles.educationTag}>
              教育
            </Tag>
            <Tag color="rgb(244,247,251)" className={styles.marketingTag}>
              营销
            </Tag>
            <Tag color="rgb(244,247,251)" className={styles.marketingTag}>
              生活
            </Tag>
            <Tag color="rgb(244,247,251)" className={styles.marketingTag}>
              情感
            </Tag>
            <Tag
              color="rgb(244,247,251)"
              icon={<CaretDownFilled className={styles.iconDropdown} />}
              className={styles.marketingTag}
            >
              更多
            </Tag>
          </div>
          <Button
            shape="round"
            onClick={onGpuDeploySpaceClick}
            className={styles.gpuDeployButton}
          >
            <div className={styles.buttonContent}>
              <img
                alt=""
                src="https://weavefox.alipay.com/assets/3812eb39-b1a4-43d3-96ad-49f149cc2a7e.png"
                className={styles.gpuImage}
              />
              <span className={styles.buttonText}>
                <span className={styles.gpuLabel}>GPU</span>
                <span className={styles.deploymentSpace}>部署创空间</span>
              </span>
              <img
                alt=""
                src="https://weavefox.alipay.com/assets/a1d8573b-90da-4a6e-9e97-515caa43b167.png"
                className={styles.spaceImage}
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSortPanel;
