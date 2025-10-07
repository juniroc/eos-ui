'use client';

import PDFEditor from '@/components/PDFEditor';

export default function PDFEditorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PDF 편집기</h1>
          <p className="text-gray-600">
            PDF 파일에 텍스트를 추가하고 편집할 수 있습니다.
          </p>
        </div>
        
        <div className="space-y-8">
          <PDFEditor />
        </div>
      </div>
    </div>
  );
}
