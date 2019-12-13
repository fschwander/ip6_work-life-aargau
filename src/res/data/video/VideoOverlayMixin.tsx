import {VideoOverlayInterface} from './VideoOverlayInterface';

export abstract class VideoOverlayMixin {
  abstract initGraph():HTMLDivElement;
  abstract get getData():VideoOverlayInterface;
}
