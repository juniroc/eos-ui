'use client';

import { useEffect, useState } from 'react';

interface FormData {
  companyName: string;
  businessNumber: string;
  businessCategory: string; // 법인/개인 구분
  corporateNumber: string;
  representativeName: string;
  establishmentDate: string;
  address: string;
  businessType: string; // 업태
  businessCategory2: string; // 종목
  taxOffice: string;
  settlementMonth?: string;
  settlementDay?: string;
}

export default function BusinessInfoPage() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessNumber: '',
    businessCategory: '',
    corporateNumber: '',
    representativeName: '',
    establishmentDate: '',
    address: '',
    businessType: '',
    businessCategory2: '',
    taxOffice: '',
    settlementMonth: '',
    settlementDay: '',
  });

  const [loading, setLoading] = useState(false);

  // ✅ 로그인 시 발급받은 토큰으로 교체
  const accessToken = 'YOUR_ACCESS_TOKEN';

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /** 초기 데이터 불러오기 */
  const fetchBusinessInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://eos-ui.vercel.app/api/business-info', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) throw new Error('데이터 불러오기 실패');
      const data = await res.json();

      setFormData((prev) => ({
        ...prev,
        ...data, // API에서 내려준 데이터로 덮어쓰기
      }));
    } catch (err) {
      console.error(err);
      alert('사업자 정보를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 사업자등록증 파일 업로드 → AI 추출 API */
  const handleFileUpload = async (file: File) => {
    try {
      setLoading(true);
      const body = new FormData();
      body.append('file', file);

      const res = await fetch(
        'https://eos-ui.vercel.app/api/ai/extract-business-info',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body,
        }
      );

      if (!res.ok) throw new Error('파일 업로드 실패');
      const data = await res.json();

      setFormData((prev) => ({
        ...prev,
        ...data.extracted, // 추출된 값 반영
      }));
    } catch (err) {
      console.error(err);
      alert('파일 업로드 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 저장 API 호출 */
  const handleSave = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://eos-ui.vercel.app/api/business-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('저장 실패');
      const result = await res.json();

      if (result.success) {
        alert('저장되었습니다!');
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('저장 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ 페이지 진입 시 기존 데이터 불러오기
  useEffect(() => {
    fetchBusinessInfo();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">사업자 정보</h2>
          <p className="text-[#767676]">
            파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            style={{
              width: 'auto',
              minWidth: '79px',
              height: '28px',
              gap: '8px',
              opacity: 1,
              paddingTop: 'var(--Space-200, 8px)',
              paddingRight: 'var(--Space-300, 12px)',
              paddingBottom: 'var(--Space-200, 8px)',
              paddingLeft: 'var(--Space-300, 12px)',
              background: 'var(--Background-Neutral-Tertiary, #F3F3F3)',
              color: '#1E1E1E',
              fontSize: '12px',
              lineHeight: '12px'
            }}
            onClick={() => document.getElementById('fileUpload')?.click()}
            disabled={loading}
          >
            파일 업로드
          </button>
          <button
            style={{
              width: 'auto',
              minWidth: loading ? '66px' : '79px',
              height: '28px',
              gap: '8px',
              opacity: 1,
              paddingTop: 'var(--Space-200, 8px)',
              paddingRight: 'var(--Space-300, 12px)',
              paddingBottom: 'var(--Space-200, 8px)',
              paddingLeft: 'var(--Space-300, 12px)',
              background: loading ? '#E6E6E6' : 'var(--Background-Neutral-Tertiary, #F3F3F3)',
              color: '#1E1E1E',
              fontSize: '12px',
              lineHeight: '12px'
            }}
            onClick={handleSave}
            disabled={loading}
          >
            저장하기
          </button>
        </div>
      </div>

      {/* 파일 업로드 박스 */}
      <div 
        className="rounded-lg text-center mb-6"
        style={{
          width: '1168px',
          height: '120px',
          minWidth: '400px',
          gap: '12px',
          opacity: 1,
          padding: 'var(--Space-600, 24px)',
          background: 'var(--Background-Default-Default, #FFFFFF)',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: 'var(--Border-Default-Default, #D9D9D9)'
        }}
        data-dasharray="8, 4"
      >
        <input
          type="file"
          accept=".jpg,.png,.pdf,.doc,.docx"
          className="hidden"
          id="fileUpload"
          onChange={(e) =>
            e.target.files && handleFileUpload(e.target.files[0])
          }
        />
        <label htmlFor="fileUpload" className="cursor-pointer block">
          {loading ? (
            <div className="text-gray-500">처리 중...</div>
          ) : (
            <>
              <div className="text-[#303030]">
                파일을 선택하거나 드래그하여 업로드하세요
              </div>
              <div className="text-sm text-[#767676] mt-2">
                (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
              </div>
            </>
          )}
        </label>
      </div>

      {/* 입력 테이블 */}
      <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
        <tbody>
          <tr>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">회사명</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
              />
            </td>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">대표자명</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.representativeName}
                onChange={(e) =>
                  handleChange('representativeName', e.target.value)
                }
              />
            </td>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">개업일자</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                type="date"
                className="w-full px-2 py-1"
                value={formData.establishmentDate}
                onChange={(e) =>
                  handleChange('establishmentDate', e.target.value)
                }
              />
            </td>
          </tr>

          <tr>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">법인/개인 구분</td>
            <td className="p-3 border border-[#D9D9D9]">
              <select
                className="w-full px-2 py-1"
                value={formData.businessCategory}
                onChange={(e) =>
                  handleChange('businessCategory', e.target.value)
                }
              >
                <option value="">선택하기</option>
                <option value="corporate">법인</option>
                <option value="personal">개인</option>
              </select>
            </td>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">사업자등록번호</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.businessNumber}
                onChange={(e) =>
                  handleChange('businessNumber', e.target.value)
                }
              />
            </td>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">법인등록번호</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.corporateNumber}
                onChange={(e) =>
                  handleChange('corporateNumber', e.target.value)
                }
              />
            </td>
          </tr>

          <tr>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">업태</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.businessType}
                onChange={(e) => handleChange('businessType', e.target.value)}
              />
            </td>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">종목</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.businessCategory2}
                onChange={(e) =>
                  handleChange('businessCategory2', e.target.value)
                }
              />
            </td>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">관할세무서</td>
            <td className="p-3 border border-[#D9D9D9]">
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.taxOffice}
                onChange={(e) => handleChange('taxOffice', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">사업장주소</td>
            <td className="p-3 border border-[#D9D9D9]" colSpan={5}>
              <input
                className="w-full px-2 py-1"
                placeholder="입력하기"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}
