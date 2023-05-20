import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import MainImageScroll from '@/components/MainImageScroll.tsx';

function MainReal() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // 검색 로직을 구현하세요
    console.log('Search query:', searchQuery);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="search"
        />
        <button type="submit">검색</button>
      </form>
      <div>
        <Link href="/main/adopt">주인을 기다려요</Link>
      </div>
      <MainImageScroll />
      <div>
        <Link href="/main/volunteer">봉사를 기다려요</Link>
      </div>
      <MainImageScroll />
      <div>
        <Link href="/main/rescue">구조를 기다려요</Link>
      </div>
      <MainImageScroll />
      <div>
        <Link href="/main/interest">관심을 기다려요</Link>
      </div>
      <MainImageScroll />
    </div>
  );
}

export default MainReal;
