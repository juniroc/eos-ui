'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

interface PDFEditorProps {
  className?: string;
}

interface TextField {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
}

export default function PDFEditor({ className = '' }: PDFEditorProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [textFields, setTextFields] = useState<TextField[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // PDF 파일 선택 처리
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setTextFields([]); // 새 파일 선택 시 텍스트 필드 초기화
    } else {
      alert('PDF 파일만 선택 가능합니다.');
    }
  };

  // 텍스트 필드 추가
  const addTextField = () => {
    const newField: TextField = {
      id: Date.now().toString(),
      text: '',
      x: 100,
      y: 700,
      fontSize: 12,
      color: '#000000'
    };
    setTextFields([...textFields, newField]);
  };

  // 텍스트 필드 업데이트
  const updateTextField = (id: string, updates: Partial<TextField>) => {
    setTextFields(fields =>
      fields.map(field =>
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  // 텍스트 필드 삭제
  const removeTextField = (id: string) => {
    setTextFields(fields => fields.filter(field => field.id !== id));
  };

  // PDF 편집 및 다운로드
  const handleEditPDF = async () => {
    if (!pdfFile || textFields.length === 0) {
      alert('PDF 파일을 선택하고 텍스트를 추가해주세요.');
      return;
    }

    setIsProcessing(true);
    try {
      // PDF 파일을 ArrayBuffer로 읽기
      const arrayBuffer = await pdfFile.arrayBuffer();
      
      // PDF 문서 로드
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      
      // fontkit 등록 (커스텀 폰트 사용을 위해 필요)
      pdfDoc.registerFontkit(fontkit);
      
      // 첫 번째 페이지 가져오기 (필요에 따라 다른 페이지도 선택 가능)
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      
      // 한글 폰트 로드
      let font;
      try {
        const fontResponse = await fetch('/NotoSansCJKkr-Regular.otf');
        if (!fontResponse.ok) {
          throw new Error(`폰트 로드 실패: ${fontResponse.status}`);
        }
        const fontBytes = await fontResponse.arrayBuffer();
        font = await pdfDoc.embedFont(fontBytes);
        console.log('한글 폰트 로드 성공');
      } catch (fontError) {
        console.error('한글 폰트 로드 실패:', fontError);
        alert('한글 폰트 로드에 실패했습니다. 한글 텍스트 사용 시 오류가 발생할 수 있습니다.');
        throw new Error('한글 폰트가 필요합니다. 영문만 사용해주세요.');
      }
      
      // 각 텍스트 필드를 PDF에 추가
      textFields.forEach(field => {
        // 색상 변환 (hex to rgb)
        const hexColor = field.color.replace('#', '');
        const r = parseInt(hexColor.substr(0, 2), 16) / 255;
        const g = parseInt(hexColor.substr(2, 2), 16) / 255;
        const b = parseInt(hexColor.substr(4, 2), 16) / 255;
        
        firstPage.drawText(field.text, {
          x: field.x,
          y: field.y,
          size: field.fontSize,
          font: font,
          color: rgb(r, g, b),
        });
      });

      // 편집된 PDF 저장
      const pdfBytes = await pdfDoc.save();
      
      // 다운로드
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `edited_${pdfFile.name}`;
      link.click();
      
      URL.revokeObjectURL(url);
      alert('PDF 편집이 완료되었습니다!');
      
    } catch (error) {
      console.error('PDF 편집 중 오류:', error);
      alert('PDF 편집 중 오류가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-6">PDF 편집기</h2>
      
      {/* 파일 선택 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">PDF 파일 선택</label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {pdfFile && (
          <p className="mt-2 text-sm text-green-600">선택된 파일: {pdfFile.name}</p>
        )}
      </div>

      {/* 텍스트 필드 관리 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <label className="block text-sm font-medium">텍스트 필드</label>
          <button
            onClick={addTextField}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            disabled={!pdfFile}
          >
            텍스트 추가
          </button>
        </div>
        
        {textFields.length === 0 ? (
          <p className="text-gray-500 text-sm">추가된 텍스트 필드가 없습니다.</p>
        ) : (
          <div className="space-y-4">
            {textFields.map((field) => (
              <div key={field.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">텍스트</label>
                    <input
                      type="text"
                      value={field.text}
                      onChange={(e) => updateTextField(field.id, { text: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="입력할 텍스트"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">X 좌표</label>
                    <input
                      type="number"
                      value={field.x}
                      onChange={(e) => updateTextField(field.id, { x: Number(e.target.value) })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Y 좌표</label>
                    <input
                      type="number"
                      value={field.y}
                      onChange={(e) => updateTextField(field.id, { y: Number(e.target.value) })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">폰트 크기</label>
                    <input
                      type="number"
                      value={field.fontSize}
                      onChange={(e) => updateTextField(field.id, { fontSize: Number(e.target.value) })}
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                      min="8"
                      max="72"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">색상</label>
                    <input
                      type="color"
                      value={field.color}
                      onChange={(e) => updateTextField(field.id, { color: e.target.value })}
                      className="w-full h-10 border rounded-lg"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => removeTextField(field.id)}
                      className="w-full px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 편집 실행 버튼 */}
      <div className="flex justify-end">
        <button
          onClick={handleEditPDF}
          disabled={!pdfFile || textFields.length === 0 || isProcessing}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isProcessing ? '처리 중...' : 'PDF 편집 및 다운로드'}
        </button>
      </div>

      {/* 사용법 안내 */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">사용법</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>1. PDF 파일을 선택합니다</li>
          <li>2. &quot;텍스트 추가&quot; 버튼으로 텍스트 필드를 추가합니다</li>
          <li>3. 각 필드의 텍스트, 위치(X, Y), 크기, 색상을 설정합니다</li>
          <li>4. &quot;PDF 편집 및 다운로드&quot; 버튼으로 편집된 PDF를 저장합니다</li>
          <li>※ 좌표는 PDF 페이지의 왼쪽 하단이 (0, 0)입니다</li>
          <li>※ 한글 텍스트가 지원됩니다 (Noto Sans Korean 폰트 사용)</li>
        </ul>
      </div>
    </div>
  );
}
