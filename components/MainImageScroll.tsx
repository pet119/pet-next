import Image from 'next/image';

export default function MainImageScroll() {
  return (
    <div style={{ overflowX: 'scroll', display: 'flex' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Image src="/test/cat.jpg" alt="사진1" width={100} height={100} />
        <Image src="/test/cat.jpg" alt="사진2" width={100} height={100} />
        <Image src="/test/cat.jpg" alt="사진3" width={100} height={100} />
      </div>
    </div>
  );
}
