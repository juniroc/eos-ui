import React, { useState } from 'react';
import { ModalProps } from '@/types/props';
import ModalContainer from '@/components/modal/ModalContainer';
import { printElement } from '@/utils/printUtils';
import PreviewWrapper from '@/components/documentCreate/template/PreviewWrapper';
import Form15 from '@/components/documentCreate/template/Form15/Form15';
import Form16 from './template/Form16/Form16';
import Form16_2 from './template/Form16_2/Form16_2';
import Form19 from './template/Form19/Form19';
import Form19_2 from './template/Form19_2/Form19_2';
import Form19_3 from './template/Form19_3/Form19_3';
import Form20 from './template/Form20/Form20';
import Form21_1 from './template/Form21_1/Form21_1';
import Form21_2 from './template/Form21_2/Form21_2';
import Form25 from './template/Form25/Form25';
import Form27 from './template/Form27/Form27';
import Form28 from './template/Form28/Form28';
import Form32 from './template/Form32/Form32';
import Form33 from './template/Form33/Form33';
import Form38 from './template/Form38/Form38';
import Form38_2 from './template/Form38_2/Form38_2';
import Form39 from './template/Form39/Form39';
import Form39_2 from './template/Form39_2/Form39_2';
import Form40 from './template/Form40/Form40';
import Form40_2 from './template/Form40_2/Form40_2';
import Form41 from './template/Form41/Form41';
import Form41_2 from './template/Form41_2/Form41_2';
import Form42 from './template/Form42/Form42';
import Form47 from './template/Form47/Form47';
import Form47_2 from './template/Form47_2/Form47_2';
import FormJoteuk69 from './template/FormJoteuk69/FormJoteuk69';
import FormJoteuk69_2 from './template/FormJoteuk69_2/FormJoteuk69_2';
import FormJoteuk69_2_1 from './template/FormJoteuk69_2_1/FormJoteuk69_2_1';
import FormJoteuk69_2_2 from './template/FormJoteuk69_2_2/FormJoteuk69_2_2';

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
                  <Form16 />
                  <Form16_2 />
                  <Form19 />
                  <Form19_2 />
                  <Form19_3 />
                  <Form20 />
                  <Form21_1 />
                  <Form21_2 />
                  <Form25 />
                  <Form27 />
                  <Form28 />
                  <Form32 />
                  <Form33 />
                  <Form38 />
                  <Form38_2 />
                  <Form39 />
                  <Form39_2 />
                  <Form40 />
                  <Form40_2 />
                  <Form41 />
                  <Form41_2 />
                  <Form42 />
                  <Form47 />
                  <Form47_2 />
                  <FormJoteuk69 />
                  <FormJoteuk69_2 />
                  <FormJoteuk69_2_1 />
                  <FormJoteuk69_2_2 />
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
