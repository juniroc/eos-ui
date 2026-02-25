'use client';

export default function VatForm16({ onAddEul }: { onAddEul: () => void }) {
  return (
    <div
      className="
      w-full
      bg-white
      aspect-[210/297]
      flex-none

      /* print 전용 */
      print:w-[595pt]
      print:h-[842pt]
      print:aspect-auto
      print:overflow-visible
      print:[page-break-after:always]"
    >
      <div className="mx-auto h-full px-[3%] py-[2%] text-black">
        {/* 법령 문구 */}
        <ul className="list-none p-0 m-0">
          <li className="text-[8pt] font-normal pl-[17pt] -indent-[9pt]">
            ■ 부가가치세법 시행규칙 [별지 제16호서식(1)]
            <span className="text-blue-600 ml-1">
              &lt;개정 2019. 3. 20.&gt;
            </span>
          </li>
        </ul>

        {/* 간격 */}
        <div className="h-[6pt]" />

        {/* 제목 */}
        <p className="text-center text-[16.5pt] font-normal">
          신용카드매출전표등 수령명세서
          <span className="text-[15.5pt]">(갑)</span>
        </p>

        {/* 과세기간 */}
        <h1 className="mt-[5pt] text-center text-[11pt] font-bold">
          <input className="inline-block w-[32pt] h-[16pt] mx-[2pt] bg-transparent outline-none text-center" />
          년 제{' '}
          <input className="inline-block w-[20pt] h-[16pt] mx-[2pt] bg-transparent outline-none text-center" />
          기 (
          <input className="inline-block w-[20pt] h-[16pt] mx-[2pt] bg-transparent outline-none text-center" />
          월
          <input className="inline-block w-[20pt] h-[16pt] mx-[2pt] bg-transparent outline-none text-center" />
          일 ~
          <input className="inline-block w-[20pt] h-[16pt] mx-[2pt] bg-transparent outline-none text-center" />
          월
          <input className="inline-block w-[20pt] h-[16pt] mx-[2pt] bg-transparent outline-none text-center" />
          일 )
        </h1>

        {/* 구분선 */}
        <hr className="mt-[11pt] border-t border-black" />

        {/* ① 제출자 인적사항 */}
        <ol className="list-none mt-[4pt] p-0 mb-[4pt]">
          <li className="text-[10pt] font-bold pl-[19pt] -indent-[11pt]">
            1. 제출자 인적사항
          </li>
        </ol>

        <table
          className="w-full border-collapse text-[9pt] mb-[6pt]"
          cellSpacing={0}
        >
          <tbody>
            <tr className="h-[27pt]">
              <td className="w-[113.5pt] border-l border-t border-b border-[#7E7E7E] align-middle">
                <p className="pl-[9pt]">① 상호(법인명)</p>
              </td>
              <td className="border-t border-b border-[#7E7E7E] align-middle p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none" />
              </td>

              <td
                className="w-[113.5pt] border-l border-t border-b border-[#7E7E7E] align-top"
                rowSpan={2}
              >
                <p className="pl-[9pt] pt-[2pt]">② 사업자등록번호</p>
              </td>
              <td
                className="border-t border-b border-r border-[#7E7E7E] align-top p-[1pt]"
                rowSpan={2}
              >
                <input className="w-full h-full bg-transparent outline-none" />
              </td>
            </tr>

            <tr className="h-[27pt]">
              <td className="w-[113.5pt] border-l border-b border-[#7E7E7E] align-middle">
                <p className="pl-[9pt]">③ 성명(대표자)</p>
              </td>
              <td className="border-b border-[#7E7E7E] align-middle p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full border-t border-[#7E7E7E] mb-[6pt]" />

        {/* ② 신용카드 등 매입명세 합계 */}
        <ol className="list-none m-0 p-0 mb-[4pt]">
          <li className="text-[10pt] font-bold pl-[19pt] -indent-[11pt]">
            2. 신용카드 등 매입명세 합계
          </li>
        </ol>

        <table
          className="w-full border-collapse text-[9pt] mb-[6pt]"
          cellSpacing={0}
        >
          <colgroup>
            <col className="w-[170pt]" />
            <col className="w-[113.5pt]" />
            <col className="w-[170pt]" />
            <col className="w-[170pt]" />
          </colgroup>

          <tbody>
            {/* 헤더 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] text-center">구 분</td>
              <td className="border border-[#7E7E7E] text-center">거래건수</td>
              <td className="border border-[#7E7E7E] text-center">공급가액</td>
              <td className="border border-[#7E7E7E] text-center">세 액</td>
            </tr>

            {/* ④ 합계 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] pl-[9pt]">④ 합 계</td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
            </tr>

            {/* ⑤ 현금영수증 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] pl-[9pt]">⑤ 현금영수증</td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
            </tr>

            {/* ⑥ 화물운전자복지카드 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] pl-[9pt]">
                ⑥ 화물운전자복지카드
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
            </tr>

            {/* ⑦ 사업용 신용카드 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] pl-[9pt]">
                ⑦ 사업용 신용카드
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
            </tr>

            {/* ⑧ 그 밖의 신용카드 등 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] pl-[9pt]">
                ⑧ 그 밖의 신용카드 등
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
              <td className="border border-[#7E7E7E] p-[1pt]">
                <input className="w-full h-full bg-transparent outline-none text-right" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="w-full border-t border-[#7E7E7E] mt-[0pt] mb-[6pt]" />
        {/* ③ 신용카드·직불카드·현금영수증 매입명세 */}
        <ol className="list-none m-0 p-0 mb-[4pt]">
          <li className="text-[10pt] font-bold pl-[19pt] -indent-[11pt]">
            3. 그 밖의 신용ㆍ직불카드, 기명식선불카드, 직불전자지급수단 및
            기명식선불전자지급수단 매출전표 수령금액 합계
          </li>
        </ol>

        <table
          className="w-full border-collapse text-[9pt] mb-[6px]"
          cellSpacing={0}
        >
          <colgroup>
            <col className="w-[44pt]" />
            {/* 일련번호 (조정) */}
            <col className="w-[113.5pt]" />
            {/* 카드회원번호 */}
            <col className="w-[170pt]" />
            {/* 공급자 사업자등록번호 */}
            <col className="w-[56pt]" />
            {/* 거래건수 */}
            <col className="w-[113.5pt]" />
            {/* 공급가액 */}
            <col className="w-[113.5pt]" />
            {/* 세액 */}
          </colgroup>

          <tbody>
            {/* 헤더 1행 */}
            <tr className="h-[27pt]">
              <td
                className="border border-[#7E7E7E] text-center align-middle"
                rowSpan={2}
              >
                일련번호
              </td>
              <td
                className="border border-[#7E7E7E] text-center align-middle"
                rowSpan={2}
              >
                ⑨ 카드회원번호
              </td>
              <td
                className="border border-[#7E7E7E] text-center align-middle leading-[11pt]"
                rowSpan={2}
              >
                ⑩ 공급자(가맹점)
                <br />
                사업자등록번호
              </td>

              <td
                className="border border-[#7E7E7E] text-center align-middle"
                colSpan={3}
              >
                ⑪ 그 밖의 신용카드 등 거래명세 합계
              </td>
            </tr>

            {/* 헤더 2행 */}
            <tr className="h-[27pt]">
              <td className="border border-[#7E7E7E] text-center">거래건수</td>
              <td className="border border-[#7E7E7E] text-center">공급가액</td>
              <td className="border border-[#7E7E7E] text-center">세 액</td>
            </tr>

            {/* 데이터 행 (예시 5행) */}
            {Array.from({ length: 15 }).map((_, i) => (
              <tr key={i} className="h-[27pt]">
                <td className="border border-[#7E7E7E] text-center">{i + 1}</td>
                <td className="border border-[#7E7E7E] p-[1pt]">
                  <input className="w-full h-full bg-transparent outline-none" />
                </td>
                <td className="border border-[#7E7E7E] p-[1pt]">
                  <input className="w-full h-full bg-transparent outline-none" />
                </td>
                <td className="border border-[#7E7E7E] p-[1pt]">
                  <input className="w-full h-full bg-transparent outline-none text-right" />
                </td>
                <td className="border border-[#7E7E7E] p-[1pt]">
                  <input className="w-full h-full bg-transparent outline-none text-right" />
                </td>
                <td className="border border-[#7E7E7E] p-[1pt] bg-[#ED8F11] print:bg-white">
                  <input className="w-full h-full bg-transparent outline-none text-right" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-full border-t border-[#7E7E7E] mt-[0pt] mb-[6pt]" />
        <div className="flex">
          {/* (갑) 푸터 문구 */}
          <p className="text-[8pt] leading-[12pt] text-black mt-[6pt]">
            ※ 기재내용이 많은 경우 별지 제16호서식(2)의 신용카드매출전표등
            수령명세서(을)에 이어서 작성합니다.
          </p>

          {/* 버튼 영역 */}
          <div className="mt-[8pt] flex-1 flex justify-end">
            <button
              type="button"
              className="  inline-flex items-center justify-center
      h-[20pt] px-[8pt]
      bg-[#CD8D65]
      text-[#FFFFFF]
      text-[9pt] leading-none
      rounded-[3pt]
      border-none
      focus:outline-none
      cursor-pointer
      print:hidden
    "
              onClick={onAddEul}
            >
              (을)표 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
