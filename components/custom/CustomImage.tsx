import Image from 'next/image';

const CustomImage = ({ src, alt, ...props }: any) => (
  <Image src={src} alt={alt ?? 'Image'} {...props} />
);

export default CustomImage;
