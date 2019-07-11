import { SoulModule } from './module';

/**
 * Excel 表格
 */
export declare class Excel extends SoulModule {
  /**
   * 表格的尺寸
   * @default 'default'
   * @type string
   */
  size: 'medium' | 'small' | 'mini';
}
