declare module '@blossom-carousel/react' {
  import { ComponentPropsWithoutRef, FC } from 'react';

  interface BlossomCarouselProps extends ComponentPropsWithoutRef<'div'> {
    class?: string;
  }

  export const BlossomCarousel: FC<BlossomCarouselProps>;
}
