// In $lib/slices/mappers.ts or similar
import { context } from 'three/tsl';
import ContentIndexMapper from './ContentIndex/mapper';

export const mappers = {
  content_index: ContentIndexMapper,
};
