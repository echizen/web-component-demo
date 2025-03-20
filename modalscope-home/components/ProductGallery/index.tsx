import React from 'react';
import { Tag } from 'antd';

import styles from './index.module.less';

const ProductGallery: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productContainer}>
        <div className={styles.productHeader}>
          <span className={styles.featuredLabel}>精选</span>
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/99faa23c-3342-44c0-8c88-c67151519db5.png"
            className={styles.thumbnailImage}
          />
        </div>
        <div className={styles.productBody}>
          <div className={styles.productRow}>
            <div className={styles.productColumn}>
              <div className={styles.productItem}>
                <img
                  alt=""
                  src="https://weavefox.alipay.com/assets/b42c10e8-0338-4c91-862f-055444eebea3.png"
                  className={styles.modelBattleImage}
                />
                <span className={styles.productName}>
                  推理模型大作战(QwQ-32B vs DeepSeek-R1)
                </span>
                <div className={styles.productDetails}>
                  <div className={styles.productStats}>
                    <img
                      alt=""
                      src="https://weavefox.alipay.com/assets/1185fef4-f78f-40c7-933d-5bdca493c2cf.png"
                      className={styles.statsIcon}
                    />
                    <span className={styles.statsTitle}>为AI成魔</span>
                  </div>
                  <div className={styles.updateInfo}>
                    <span className={styles.updateDate}>2025.03.10更新</span>
                    <div className={styles.viewsWrapper} />
                    <span className={styles.viewCount}>18.9k</span>
                    <div className={styles.likesWrapper} />
                    <img
                      alt=""
                      src="https://weavefox.alipay.com/assets/078c8e6c-d062-4c30-8214-399bf0d6a6a8.png"
                      className={styles.likeIcon}
                    />
                    <span className={styles.likeCount}>74</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productColumn}>
              <div className={styles.commentItem}>
                <img
                  alt=""
                  src="https://weavefox.alipay.com/assets/a74968ef-4ddb-4fd1-bf5c-0f1ae825d7e6.png"
                  className={styles.commentThumbnail}
                />
                <span className={styles.commentTitle}>
                  通义万相Wan2.1视频生成
                </span>
                <div className={styles.commentDetails}>
                  <img
                    alt=""
                    src="https://weavefox.alipay.com/assets/385589f3-258d-460f-9dfc-e3b705ceff27.png"
                    className={styles.commentIcon}
                  />
                  <span className={styles.likeCount}>通义万相</span>
                  <span className={styles.commentUpdate}>2025.02.26更新</span>
                  <div className={styles.commentViews} />
                  <span className={styles.commentViewCount}>210.0k</span>
                  <div className={styles.commentLikes} />
                  <img
                    alt=""
                    src="https://weavefox.alipay.com/assets/4c69b5ea-e1ac-4ebc-a141-20c531572e09.png"
                    className={styles.commentLikeIcon}
                  />
                  <span className={styles.likeCount}>771</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commentReplies}>
            <img
              alt=""
              src="https://weavefox.alipay.com/assets/ab78ea15-33c7-4655-a36d-c85f33109211.png"
              className={styles.commentThumbnail}
            />
            <div className={styles.storySection}>
              <div className={styles.storyItem}>
                <span className={styles.storyTitle}>AI故事随心绘-AnyStory</span>
                <div className={styles.tagSection}>
                  <Tag color="rgb(253,253,253)" className={styles.visionTag}>
                    计算机视觉
                  </Tag>
                  <Tag color="rgb(253,253,253)" className={styles.visionTag}>
                    多模态
                  </Tag>
                  <Tag color="rgb(251,251,251)" className={styles.anyStoryTag}>
                    AnyStory
                  </Tag>
                </div>
                <div className={styles.additionalInfo}>
                  <img
                    alt=""
                    src="https://weavefox.alipay.com/assets/dc7b47b2-943c-4687-83bc-a7cd270a80da.png"
                    className={styles.labImage}
                  />
                  <span className={styles.labName}>通义实验室</span>
                  <span className={styles.dateUpdated}>2025.03.19更新</span>
                </div>
              </div>
              <div className={styles.extraContent} />
              <span className={styles.viewCount2}>· 1.9k</span>
              <div className={styles.separatorDiv} />
              <span className={styles.commentCount}>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
