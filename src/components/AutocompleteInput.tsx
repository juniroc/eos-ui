'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface AutocompleteInputProps<T> {
  value: string;
  onChange: (value: string) => void;
  items: T[];
  getItemId: (item: T) => string;
  getItemLabel: (item: T) => string;
  placeholder?: string;
  className?: string;
}

function AutocompleteInput<T>({
  value,
  onChange,
  items,
  getItemId,
  getItemLabel,
  placeholder = '입력하기',
  className = ''
}: AutocompleteInputProps<T>) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // value가 변경되면 해당하는 항목 이름을 찾아서 inputValue에 설정
  useEffect(() => {
    const item = items.find(i => getItemId(i) === value);
    setInputValue(item ? getItemLabel(item) : '');
  }, [value, items, getItemId, getItemLabel]);

  // input 변경 시 필터링 (드롭다운은 자동으로 열지 않음)
  useEffect(() => {
    if (inputValue.trim()) {
      const filtered = items.filter(item =>
        getItemLabel(item).toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
      // isTyping이 true일 때만 드롭다운 열기
      if (isTyping) {
        setIsOpen(filtered.length > 0);
      }
    } else {
      setFilteredItems([]);
      setIsOpen(false);
    }
  }, [inputValue, items, getItemLabel, isTyping]);

  // 드롭다운 위치 계산
  useEffect(() => {
    if (isOpen && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: Math.max(rect.width, 200)
      });
    }
  }, [isOpen]);

  // 스크롤 시 드롭다운 위치 업데이트
  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: Math.max(rect.width, 200)
        });
      }
    };

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // containerRef와 dropdownRef 둘 다 체크
      if (
        containerRef.current && 
        !containerRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsTyping(true); // 타이핑 시작
    
    // 입력값이 비어있으면 선택된 항목도 초기화
    if (!newValue.trim()) {
      onChange('');
      setIsTyping(false);
    }
  };

  const handleSelectItem = (item: T) => {
    setInputValue(getItemLabel(item));
    onChange(getItemId(item));
    setIsOpen(false);
    setIsTyping(false); // 선택 완료 후 타이핑 상태 해제
  };

  const handleInputFocus = () => {
    // 포커스 시에도 타이핑 모드 활성화
    setIsTyping(true);
    if (inputValue.trim() && filteredItems.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    // blur 시 타이핑 상태 해제
    setTimeout(() => {
      setIsTyping(false);
    }, 200);
  };

  const renderDropdown = () => {
    if (!isOpen || filteredItems.length === 0) return null;

    return createPortal(
      <div 
        ref={dropdownRef}
        style={{
          position: 'absolute',
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          width: `${dropdownPosition.width}px`,
          zIndex: 9999
        }}
        className="mt-1 bg-white border border-[#D9D9D9] shadow-lg max-h-[200px] overflow-y-auto"
      >
        {filteredItems.map((item, index) => (
          <div
            key={`${getItemId(item)}-${index}`}
            className="px-2 py-2 cursor-pointer hover:bg-[#F5F5F5] font-medium text-[12px] leading-[100%] text-[#757575]"
            onMouseDown={(e) => {
              e.preventDefault();
              handleSelectItem(item);
            }}
          >
            {getItemLabel(item)}
          </div>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <div ref={containerRef} className="relative w-full h-4 flex items-center">
      <input
        ref={inputRef}
        type="text"
        className={`w-full h-4 font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none ${className}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {renderDropdown()}
    </div>
  );
}

export default AutocompleteInput;

