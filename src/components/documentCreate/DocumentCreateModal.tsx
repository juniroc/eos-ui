import React, { useState } from 'react';
import { ModalProps } from '@/types/props';
import ModalContainer from '@/components/modal/ModalContainer';
import { printElement } from '@/utils/printUtils';
import PreviewWrapper from '@/components/documentCreate/template/PreviewWrapper';
import Form15 from '@/components/documentCreate/template/Form15/Form15';

function DocumentCreateModal({ isOpen, onClose }: ModalProps) {
  const [scale, setScale] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stampImage, setStampImage] = useState<string | null>(null);

  const handleSelectStamp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setStampImage(url);
  };


  if (!isOpen) return null;
  return (
    <ModalContainer isOpen={isOpen}>
      <div className="flex flex-col items-center w-[1240px] bg-white">
        <div className="w-[100%] h-[40px] flex justify-between p-3">
          <span>부가세 서류생성 내용입력</span>
          <button onClick={onClose}>X</button>
        </div>
        <div className="h-[760px] flex justify-start">
          <div className="w-[936px] h-[100%] flex justify-start p-3">
            <div className="w-[264px] h-[100%] flex justify-center items-center ml-4">
              왼쪽 영역
            </div>
            <div className="w-[624px] h-[100%] flex flex-col justify-start">
              <div className="w-[100%] h-[28px] flex justify-center items-center mb-3 flex-none">
                <button onClick={() => setScale(scale + 0.2)}>+</button>
                <button onClick={() => setScale(scale - 0.2)}>-</button>
                <button
                  onClick={() =>
                    printElement({
                      selector: '#print-document',
                      title: '부가세_서류_출력',
                    })
                  }
                >
                  출력
                </button>
                <label className="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer">
                  도장 이미지 선택
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleSelectStamp}
                  />
                </label>
              </div>
              <div
                id={'print-document'}
                className="border-box border border-gray-800 overflow-scroll flex flex-col gap-[12pt]
                print:border-none print:overflow-visible"
              >
                <PreviewWrapper>
                  <Form15 />
                </PreviewWrapper>
              </div>
            </div>
          </div>
          <div className="w-[304] h-[100%] flex justify-center items-center">
            AI 영역
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default DocumentCreateModal;
