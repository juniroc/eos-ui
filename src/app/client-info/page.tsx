'use client';

export default function ClientInfoPage() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">거래처정보</h2>
            <p className="text-[#767676]">
              거래처정보 관련 정보를 관리하세요.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">거래처정보</h2>
        </div>
      </div>
    </div>
  );
}
