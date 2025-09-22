interface FormData {
  businessCertificate: File | null;
  companyName: string;
  businessNumber: string;
  representativeName: string;
  openingDate: string;
  corporateNumber: string;
  businessType: string;
  businessCategory: string;
  businessAddress: string;
  detailedAddress: string;
}

interface BusinessRegistrationFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSave: () => void;
  isComplete: boolean;
}

const businessTypes = [
  '서비스업',
  '제조업',
  '도소매업',
  '건설업',
  '운수업',
  '숙박음식업',
  '부동산업',
  '교육서비스업',
  '보건의료업',
  '기타',
];

export default function BusinessRegistrationForm({
  formData,
  setFormData,
  onSave,
  isComplete,
}: BusinessRegistrationFormProps) {
  const handleInputChange = (field: keyof FormData, value: string | File) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileDelete = () => {
    setFormData({ ...formData, businessCertificate: null });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        사업자등록정보
      </h2>

      <div className="space-y-6">
        {/* 사업자등록증 사본 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            사업자등록증 사본
          </label>
          {formData.businessCertificate ? (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm text-gray-700">
                {formData.businessCertificate.name}
              </span>
              <button
                onClick={handleFileDelete}
                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                파일을 업로드 해주세요
              </p>
              <p className="mt-1" style={{ color: '#434343', fontSize: '12px' }}>
                (JPG, PNG, PDF, XLSX, CSV 파일만 지원됩니다.)
              </p>
            </div>
          )}
        </div>

        {/* 상호명 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            상호명
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={e => handleInputChange('companyName', e.target.value)}
            placeholder="상호명을 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 사업자등록번호 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            사업자등록번호
          </label>
          <input
            type="text"
            value={formData.businessNumber}
            onChange={e => handleInputChange('businessNumber', e.target.value)}
            placeholder="사업자등록번호를 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 대표자명 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            대표자명
          </label>
          <input
            type="text"
            value={formData.representativeName}
            onChange={e =>
              handleInputChange('representativeName', e.target.value)
            }
            placeholder="대표자명을 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 개업일 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            개업일
          </label>
          <input
            type="date"
            value={formData.openingDate}
            onChange={e => handleInputChange('openingDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors text-black"
          />
        </div>

        {/* 법인등록번호 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            법인등록번호
          </label>
          <input
            type="text"
            value={formData.corporateNumber}
            onChange={e => handleInputChange('corporateNumber', e.target.value)}
            placeholder="법인등록번호를 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 업태 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            업태
          </label>
          <select
            value={formData.businessType}
            onChange={e => handleInputChange('businessType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors text-black"
          >
            <option value="" className="text-gray-500">
              업태를 선택해주세요
            </option>
            {businessTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* 종목 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            종목
          </label>
          <input
            type="text"
            value={formData.businessCategory}
            onChange={e =>
              handleInputChange('businessCategory', e.target.value)
            }
            placeholder="종목을 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 사업장 주소 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            사업장 주소
          </label>
          <input
            type="text"
            value={formData.businessAddress}
            onChange={e => handleInputChange('businessAddress', e.target.value)}
            placeholder="상세주소를 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 상세주소 */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            상세주소
          </label>
          <input
            type="text"
            value={formData.detailedAddress}
            onChange={e => handleInputChange('detailedAddress', e.target.value)}
            placeholder="상세주소를 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-colors placeholder-gray-500 text-black"
          />
        </div>

        {/* 저장 버튼 */}
        <div className="pt-4">
          <button
            onClick={onSave}
            disabled={!isComplete}
            className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
              isComplete
                ? 'text-white shadow-sm'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={isComplete ? { backgroundColor: '#2C2C2C' } : {}}
          >
            저장
          </button>
        </div>

        {/* 저장 완료 메시지 */}
        {isComplete && formData.businessCertificate && (
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-green-800">
              사업자등록정보가 저장되었습니다.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
