'use client';

export function VatForm16Eul({
  index,
  onAddEul,
}: {
  index: number;
  onAddEul: () => void;
}) {
  return (
    <div className="w-full bg-white aspect-[210/297] mt-[12pt] flex-none">
      <div className="mx-auto h-full px-[3%] py-[2%] text-black">
        {/* 법령 문구 */}
        <ul className="list-none p-0 m-0">
          <li className="text-[8pt] font-normal pl-[17pt] -indent-[9pt]">
            ■ 부가가치세법 시행규칙 [별지 제16호서식(2)]
            <span className="text-blue-600 ml-1">
              &lt;개정 2019. 3. 20.&gt;
            </span>
          </li>
        </ul>

        {/* 제목 */}
        <p className="mt-[6pt] text-center text-[16.5pt] font-normal">
          신용카드매출전표등 수령명세서
          <span className="text-[15.5pt]">(을)</span>
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

        {/* ⑪ 거래명세 합계 제목 */}
        <ol className="list-none m-0 p-0 mt-[6pt] mb-[4pt]">
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

            {Array.from({ length: 26 }).map((_, i) => (
              <tr key={i} className="h-[27pt]">
                <td className="border border-[#7E7E7E] text-center">
                  {15 + index * 26 + i + 1}
                </td>
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
                <td className="border border-[#7E7E7E] p-[1pt]">
                  <input className="w-full h-full bg-transparent outline-none text-right" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            페이지 추가
          </button>
        </div>
      </div>
    </div>
  );
}
