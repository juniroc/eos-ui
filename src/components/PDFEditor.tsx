'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  isEditing?: boolean;
}

interface PDFPageInfo {
  width: number;
  height: number;
  scale: number;
}

interface FocusPosition {
  id: string;
  name: string;
  x: number;
  y: number;
  description?: string;
}

export default function PDFEditor({ className = '' }: PDFEditorProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [textFields, setTextFields] = useState<TextField[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const [isAddingText, setIsAddingText] = useState(false);
  const [pageInfo, setPageInfo] = useState<PDFPageInfo | null>(null);
  const [editingFieldId, setEditingFieldId] = useState<string | null>(null);
  const [focusPosition, setFocusPosition] = useState<{ x: number; y: number } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 미리 정의된 포커스 위치들
  const predefinedPositions: FocusPosition[] = [
    { id: 'top-left', name: '좌상단', x: 50, y: 750, description: '문서 좌상단 영역' },
    { id: 'top-center', name: '상단 중앙', x: 300, y: 750, description: '문서 상단 중앙 영역' },
    { id: 'top-right', name: '우상단', x: 550, y: 750, description: '문서 우상단 영역' },
    { id: 'center', name: '중앙', x: 300, y: 400, description: '문서 중앙 영역' },
    { id: 'bottom-left', name: '좌하단', x: 50, y: 100, description: '문서 좌하단 영역' },
    { id: 'bottom-center', name: '하단 중앙', x: 300, y: 100, description: '문서 하단 중앙 영역' },
    { id: 'bottom-right', name: '우하단', x: 550, y: 100, description: '문서 우하단 영역' },
    { id: 'signature', name: '서명란', x: 450, y: 150, description: '서명 위치' },
    { id: 'date', name: '날짜란', x: 500, y: 200, description: '날짜 입력 위치' },
  ];

  // PDF 페이지 정보 가져오기
  const getPDFPageInfo = useCallback(async (file: File): Promise<PDFPageInfo | null> => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      
      return {
        width,
        height,
        scale: 1 // 기본 스케일, 실제 렌더링 시 조정
      };
    } catch (error) {
      console.error('PDF 페이지 정보 로드 실패:', error);
      return null;
    }
  }, []);

  // 미리보기 캔버스에 텍스트 필드 오버레이 그리기
  const drawTextFieldOverlay = useCallback(() => {
    const canvas = canvasRef.current;
    const container = previewContainerRef.current;
    
    if (!canvas || !container || !pageInfo) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 크기를 컨테이너에 맞춤
    const containerRect = container.getBoundingClientRect();
    canvas.width = containerRect.width;
    canvas.height = containerRect.height;
    
    // 스케일 계산 (PDF 좌표계를 캔버스 좌표계로 변환)
    const scaleX = canvas.width / pageInfo.width;
    const scaleY = canvas.height / pageInfo.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 포커스 위치 표시
    if (focusPosition) {
      const focusX = focusPosition.x * scaleX;
      const focusY = canvas.height - (focusPosition.y * scaleY);
      
      // 포커스 원 그리기
      ctx.strokeStyle = '#EF4444';
      ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(focusX, focusY, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      // 포커스 중심점
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(focusX, focusY, 3, 0, 2 * Math.PI);
      ctx.fill();
    }

    // 각 텍스트 필드를 캔버스에 그리기
    textFields.forEach(field => {
      const canvasX = field.x * scaleX;
      const canvasY = canvas.height - (field.y * scaleY); // PDF는 하단이 0, 캔버스는 상단이 0

      // 텍스트 영역 표시 (점선 박스)
      ctx.strokeStyle = field.isEditing ? '#3B82F6' : '#9CA3AF';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      const textWidth = ctx.measureText(field.text || 'Click to edit').width;
      const padding = 8;
      
      ctx.strokeRect(
        canvasX - padding,
        canvasY - field.fontSize - padding,
        Math.max(textWidth + padding * 2, 100),
        field.fontSize + padding * 2
      );

      // 텍스트 그리기
      ctx.font = `${field.fontSize}px Arial`;
      ctx.fillStyle = field.color;
      ctx.setLineDash([]);
      ctx.fillText(field.text || 'Click to edit', canvasX, canvasY);

      // 편집 중인 필드에 커서 표시
      if (field.isEditing) {
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(canvasX + textWidth, canvasY - field.fontSize);
        ctx.lineTo(canvasX + textWidth, canvasY);
        ctx.stroke();
      }
    });
  }, [textFields, pageInfo, focusPosition]);

  // 캔버스 클릭 이벤트 처리
  const handleCanvasClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const container = previewContainerRef.current;
    
    if (!canvas || !container || !pageInfo) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // 캔버스 좌표를 PDF 좌표로 변환
    const scaleX = pageInfo.width / canvas.width;
    const scaleY = pageInfo.height / canvas.height;
    
    const pdfX = clickX * scaleX;
    const pdfY = pageInfo.height - (clickY * scaleY); // 좌표계 변환

    // 기존 텍스트 필드 클릭 확인
    let clickedField = null;
    for (const field of textFields) {
      const fieldLeft = field.x - 8;
      const fieldRight = field.x + 100; // 최소 너비
      const fieldTop = field.y - 8;
      const fieldBottom = field.y + field.fontSize + 8;

      if (pdfX >= fieldLeft && pdfX <= fieldRight && pdfY >= fieldTop && pdfY <= fieldBottom) {
        clickedField = field;
        break;
      }
    }

    if (clickedField) {
      // 기존 필드 편집 모드
      setEditingFieldId(clickedField.id);
      setTextFields(fields =>
        fields.map(field => ({
          ...field,
          isEditing: field.id === clickedField.id
        }))
      );
    } else if (isAddingText) {
      // 새 텍스트 필드 추가
      const newField: TextField = {
        id: Date.now().toString(),
        text: '',
        x: pdfX,
        y: pdfY,
        fontSize: 12,
        color: '#000000',
        isEditing: true
      };
      
      setTextFields(prev => [...prev, newField]);
      setEditingFieldId(newField.id);
      setIsAddingText(false);
    }
  }, [textFields, pageInfo, isAddingText]);

  // 텍스트 필드 업데이트
  const updateTextField = (id: string, updates: Partial<TextField>) => {
    setTextFields(fields =>
      fields.map(field =>
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  // 편집 모드 종료
  const finishEditing = () => {
    setEditingFieldId(null);
    setTextFields(fields =>
      fields.map(field => ({ ...field, isEditing: false }))
    );
  };

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (editingFieldId) {
        const field = textFields.find(f => f.id === editingFieldId);
        if (!field) return;

        if (event.key === 'Enter' || event.key === 'Escape') {
          finishEditing();
        } else if (event.key === 'Backspace') {
          updateTextField(editingFieldId, { 
            text: field.text.slice(0, -1) 
          });
        } else if (event.key.length === 1) {
          updateTextField(editingFieldId, { 
            text: field.text + event.key 
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editingFieldId, textFields]);

  // 텍스트 필드 변경 시 오버레이 다시 그리기
  useEffect(() => {
    drawTextFieldOverlay();
  }, [drawTextFieldOverlay]);

  // 미리보기 생성 (버튼 클릭 트리거)
  const generatePreview = useCallback(async () => {
    if (!pdfFile) {
      alert('PDF 파일을 먼저 선택해주세요.');
      return;
    }

    setIsGeneratingPreview(true);
    try {
      // PDF 파일을 ArrayBuffer로 읽기
      const arrayBuffer = await pdfFile.arrayBuffer();
      
      // PDF 문서 로드
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      
      // fontkit 등록 (커스텀 폰트 사용을 위해 필요)
      pdfDoc.registerFontkit(fontkit);
      
      // 첫 번째 페이지 가져오기
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      
      // 텍스트 필드가 있을 때만 폰트 로드
      if (textFields.length > 0) {
        // 한글 폰트 로드
        let font;
        try {
          const fontResponse = await fetch('/NotoSansCJKkr-Regular.otf');
          if (!fontResponse.ok) {
            throw new Error(`폰트 로드 실패: ${fontResponse.status}`);
          }
          const fontBytes = await fontResponse.arrayBuffer();
          font = await pdfDoc.embedFont(fontBytes);
        } catch (fontError) {
          console.warn('한글 폰트 로드 실패, 기본 폰트 사용:', fontError);
          font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        }
        
        // 각 텍스트 필드를 PDF에 추가
        textFields.forEach(field => {
          if (field.text.trim()) { // 빈 텍스트는 건너뛰기
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
          }
        });
      }

      // 미리보기 PDF 생성
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      
      // 새 미리보기 URL 생성
      const url = URL.createObjectURL(blob);
      
      // 이전 URL 정리 후 새 URL 설정
      setPreviewUrl(prevUrl => {
        if (prevUrl) {
          URL.revokeObjectURL(prevUrl);
        }
        return url;
      });
      
    } catch (error) {
      console.error('미리보기 생성 중 오류:', error);
      alert('미리보기 생성 중 오류가 발생했습니다.');
    } finally {
      setIsGeneratingPreview(false);
    }
  }, [pdfFile, textFields]);

  // PDF 파일 선택 처리
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setTextFields([]); // 새 파일 선택 시 텍스트 필드 초기화
      
      // PDF 페이지 정보 로드
      const info = await getPDFPageInfo(file);
      setPageInfo(info);
      
      // 파일 업로드 시 원본 PDF 미리보기 자동 생성
      try {
        setIsGeneratingPreview(true);
        
        // 이전 미리보기 URL 정리
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
        }
        
        // 원본 PDF를 미리보기로 표시
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        
      } catch (error) {
        console.error('초기 미리보기 생성 중 오류:', error);
      } finally {
        setIsGeneratingPreview(false);
      }
    } else {
      alert('PDF 파일만 선택 가능합니다.');
    }
  };

  // 컴포넌트 언마운트 시 URL 정리
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

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

  // 텍스트 필드 삭제
  const removeTextField = (id: string) => {
    setTextFields(fields => fields.filter(field => field.id !== id));
  };

  // 특정 위치로 포커싱
  const focusToPosition = (position: FocusPosition) => {
    setFocusPosition({ x: position.x, y: position.y });
    
    // 3초 후 포커스 표시 제거
    setTimeout(() => {
      setFocusPosition(null);
    }, 3000);
  };

  // 텍스트 필드로 포커싱
  const focusToTextField = (field: TextField) => {
    setFocusPosition({ x: field.x, y: field.y });
    
    // 해당 필드를 편집 모드로 설정
    setEditingFieldId(field.id);
    setTextFields(fields =>
      fields.map(f => ({
        ...f,
        isEditing: f.id === field.id
      }))
    );
    
    // 3초 후 포커스 표시 제거 (편집 모드는 유지)
    setTimeout(() => {
      setFocusPosition(null);
    }, 3000);
  };

  // PDF 편집 및 다운로드
  const handleEditPDF = async () => {
    if (!pdfFile || textFields.length === 0) {
      alert('PDF 파일을 선택하고 텍스트를 추가해주세요.');
      return;
    }

    setIsProcessing(true);
    try {
      // 현재 미리보기와 같은 방식으로 PDF 생성
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      pdfDoc.registerFontkit(fontkit);
      
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
      } catch (fontError) {
        console.error('한글 폰트 로드 실패:', fontError);
        alert('한글 폰트 로드에 실패했습니다. 한글 텍스트 사용 시 오류가 발생할 수 있습니다.');
        throw new Error('한글 폰트가 필요합니다. 영문만 사용해주세요.');
      }
      
      // 각 텍스트 필드를 PDF에 추가
      textFields.forEach(field => {
        if (field.text.trim()) {
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
        }
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
    <div className={`${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 편집 패널 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
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

          {/* 포커스 위치 버튼들 */}
          {pdfFile && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">빠른 포커스</h3>
              
              {/* 미리 정의된 위치 */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-600 mb-2">일반 위치</h4>
                <div className="grid grid-cols-3 gap-2">
                  {predefinedPositions.slice(0, 7).map((position) => (
                    <button
                      key={position.id}
                      onClick={() => focusToPosition(position)}
                      className="px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                      title={position.description}
                    >
                      {position.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 특수 위치 */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-600 mb-2">특수 위치</h4>
                <div className="flex gap-2">
                  {predefinedPositions.slice(7).map((position) => (
                    <button
                      key={position.id}
                      onClick={() => focusToPosition(position)}
                      className="px-3 py-2 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                      title={position.description}
                    >
                      {position.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 텍스트 필드로 포커스 */}
              {textFields.length > 0 && (
                <div>
                  <h4 className="text-xs font-medium text-gray-600 mb-2">텍스트 필드로 이동</h4>
                  <div className="flex flex-wrap gap-2">
                    {textFields.map((field, index) => (
                      <button
                        key={field.id}
                        onClick={() => focusToTextField(field)}
                        className="px-3 py-2 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                        title={`${field.text || '빈 텍스트'} (${field.x}, ${field.y})`}
                      >
                        필드 {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 텍스트 추가 모드 토글 */}
          {pdfFile && (
            <div className="mb-6">
              <button
                onClick={() => setIsAddingText(!isAddingText)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  isAddingText 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAddingText ? '텍스트 추가 모드 (클릭하여 추가)' : '텍스트 추가 모드 시작'}
              </button>
              {isAddingText && (
                <p className="mt-2 text-sm text-blue-600">
                  PDF 미리보기에서 텍스트를 추가할 위치를 클릭하세요
                </p>
              )}
            </div>
          )}

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
              <div className="space-y-2 max-h-60 overflow-y-auto">
                <h3 className="text-sm font-medium mb-3">텍스트 필드 ({textFields.length}개)</h3>
                {textFields.map((field) => (
                  <div key={field.id} className={`p-3 border rounded-lg ${
                    field.isEditing ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={field.text}
                          onChange={(e) => updateTextField(field.id, { text: e.target.value })}
                          className="w-full px-2 py-1 text-sm border rounded"
                          placeholder="텍스트 입력"
                        />
                        <div className="flex gap-2 mt-2">
                          <input
                            type="number"
                            value={field.fontSize}
                            onChange={(e) => updateTextField(field.id, { fontSize: Number(e.target.value) })}
                            className="w-16 px-2 py-1 text-xs border rounded"
                            min="8"
                            max="72"
                          />
                          <input
                            type="color"
                            value={field.color}
                            onChange={(e) => updateTextField(field.id, { color: e.target.value })}
                            className="w-8 h-6 border rounded"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeTextField(field.id)}
                        className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 미리보기 및 편집 실행 버튼 */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={generatePreview}
              disabled={!pdfFile || isGeneratingPreview}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isGeneratingPreview ? '생성 중...' : '미리보기 생성'}
            </button>
            <button
              onClick={handleEditPDF}
              disabled={!pdfFile || textFields.length === 0 || isProcessing}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isProcessing ? '처리 중...' : 'PDF 편집 및 다운로드'}
            </button>
          </div>

          {/* 사용법 안내 */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">사용법</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>1. PDF 파일을 선택합니다</li>
              <li>2. &quot;빠른 포커스&quot; 버튼으로 원하는 위치를 확인합니다</li>
              <li>3. &quot;텍스트 추가 모드&quot;를 활성화합니다</li>
              <li>4. PDF 미리보기에서 텍스트를 추가할 위치를 클릭합니다</li>
              <li>5. 키보드로 텍스트를 입력하고 Enter로 완료합니다</li>
              <li>6. &quot;텍스트 필드로 이동&quot; 버튼으로 기존 필드를 빠르게 편집합니다</li>
              <li>7. 편집이 완료되면 &quot;PDF 편집 및 다운로드&quot;를 클릭합니다</li>
            </ul>
          </div>
        </div>

        {/* 미리보기 패널 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">PDF 미리보기</h2>
            <div className="flex items-center gap-4">
              {focusPosition && (
                <div className="text-sm text-red-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  포커스 위치 표시 중
                </div>
              )}
              {editingFieldId && (
                <div className="text-sm text-blue-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  텍스트 편집 중 (Enter로 완료)
                </div>
              )}
              {isGeneratingPreview && (
                <div className="text-sm text-blue-600 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  생성 중...
                </div>
              )}
            </div>
          </div>
          
          {previewUrl ? (
            <div 
              ref={previewContainerRef}
              className="relative border rounded-lg overflow-hidden"
              style={{ height: '600px' }}
            >
              <iframe
                src={previewUrl}
                className="w-full h-full absolute inset-0"
                title="PDF 미리보기"
              />
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="absolute inset-0 z-10"
                style={{ 
                  pointerEvents: isAddingText || editingFieldId ? 'auto' : 'none',
                  cursor: isAddingText ? 'crosshair' : 'pointer'
                }}
              />
            </div>
          ) : pdfFile ? (
            <div className="border rounded-lg h-[600px] flex items-center justify-center bg-gray-50">
              <div className="text-center text-gray-500">
                <div className="mb-2 text-4xl">📄</div>
                <div>&quot;미리보기 생성&quot; 버튼을 눌러</div>
                <div>편집 결과를 확인해보세요</div>
              </div>
            </div>
          ) : (
            <div className="border rounded-lg h-[600px] flex items-center justify-center bg-gray-50">
              <div className="text-center text-gray-500">
                <div className="mb-2 text-4xl">📄</div>
                <div>PDF 파일을 선택하면</div>
                <div>여기에 미리보기가 표시됩니다</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
