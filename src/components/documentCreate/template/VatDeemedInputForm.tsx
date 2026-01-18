'use client';

function CellInput({
  align = 'left',
  numeric = false,
}: {
  align?: 'left' | 'center' | 'right';
  numeric?: boolean;
}) {
  return (
    <input
      className={[
        'w-full h-full bg-transparent outline-none',
        'px-1',
        'text-[7pt] leading-[120%]',
        'focus:border focus:border-gray-400',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        numeric && 'tabular-nums',
      ]
        .filter(Boolean)
        .join(' ')}
      inputMode={numeric ? 'numeric' : undefined}
    />
  );
}

export default function VatForm15({
  imageSource,
}: {
  imageSource?: string | null;
}) {
  const border = 'border border-[#7E7E7E]';

  return (
    <div className="w-full bg-white aspect-[210/297]">
      {/* 내부 여백 + 기본 타이포 (비율 기반) */}
      <div className="w-full h-full p-[3%] text-[clamp(10px,0.8vw,14px)] text-black">
        {/* 상단 문구 */}
        <p className="text-[0.75em]">
          [별지 제15호서식]{' '}
          <span className="text-blue-600">&lt;개정 2024. 3. 22.&gt;</span>
        </p>

        {/* 제목 */}
        <h1 className="text-center font-bold text-[1.6em] my-[1.5%]">
          의제매입세액 공제신고서
        </h1>

        {/* 접수 영역 */}
        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            <tr className="bg-gray-300">
              <td className="border border-gray-500 p-[0.5%] w-[30%]">
                접수번호
              </td>
              <td className="border border-gray-500 p-[0.5%] w-[30%]">
                접수일
              </td>
              <td className="border border-gray-500 p-[0.5%] w-[40%]">
                처리기간 즉시
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-t border-black my-[1.5%]" />

        {/* 1. 신고인 인적사항 */}
        <h2 className="font-bold text-[1em] mb-[0.5%]">1. 신고인 인적사항</h2>

        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            <tr>
              <td className="border border-gray-500 p-[0.8%] w-[25%]">
                ① 상호(법인명)
              </td>
              <td className="border border-gray-500 p-[0.5%] w-[25%]">
                <input className="w-full outline-none bg-transparent" />
              </td>
              <td className="border border-gray-500 p-[0.8%] w-[25%]">
                ② 사업자등록번호
              </td>
              <td className="border border-gray-500 p-[0.5%] w-[25%]">
                <input className="w-full outline-none bg-transparent" />
              </td>
            </tr>

            <tr>
              <td className="border border-gray-500 p-[0.8%]">③ 업태</td>
              <td className="border border-gray-500 p-[0.5%]">
                <input className="w-full outline-none bg-transparent" />
              </td>
              <td className="border border-gray-500 p-[0.8%]">④ 종목</td>
              <td className="border border-gray-500 p-[0.5%]">
                <input className="w-full outline-none bg-transparent" />
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-t border-black my-[1.5%]" />
        {/* 2. 면세농산물등 매입가액 합계 */}
        <h2 className="font-bold text-[1em] mt-[1%] mb-[0.5%]">
          2. 면세농산물등 매입가액 합계
        </h2>

        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            {/* 헤더 */}
            <tr>
              <td
                colSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                구 분
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑤ 매입처 수
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑥ 건 수
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑦ 매입가액
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑧ 공제율
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑨ 의제매입세액
              </td>
            </tr>

            {/* ⑩ 합계 */}
            <tr>
              <td
                colSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                ⑩ 합 계
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>

            {/* 사업자로부터의 매입분 */}
            <tr>
              <td
                rowSpan={2}
                className="border border-gray-500 text-center leading-tight p-[0.6%]"
              >
                사업자로부터의
                <br />매 입 분
              </td>
              <td className="border border-gray-500 p-[0.6%]">⑪ 계 산 서</td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>

            <tr>
              <td className="border border-gray-500 p-[0.6%]">⑫ 신용카드 등</td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>

            {/* 농어민 등으로부터의 매입분 */}
            <tr>
              <td
                colSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                ⑬ 농어민 등으로부터의 매입분
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-t border-black my-[1.5%]" />
        {/* 3. 면세농산물등 의제매입세액 관련 신고내용 */}
        <h2 className="font-bold text-[1em] mt-[1%] mb-[0.5%]">
          3. 면세농산물등 의제매입세액 관련 신고내용
        </h2>

        <hr className="border-t border-black my-[0.8%]" />

        <p className="mt-[0.6%] mb-[0.4%]">
          가. 과세기간 과세표준 및 공제 가능한 금액 등
        </p>

        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            {/* 헤더 1 */}
            <tr>
              <td
                colSpan={3}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                과세표준
              </td>
              <td
                colSpan={2}
                className="border border-gray-500 text-left p-[0.6%]"
              >
                대상액 한도계산
              </td>
              <td
                rowSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                ⑲ 당기 매입액
              </td>
              <td
                rowSpan={2}
                className="border border-gray-500 text-center p-[0.6%] leading-tight"
              >
                ⑳ 공제대상금액
                <br />
                (=⑱과 ⑲ 중 적은 금액)
              </td>
            </tr>

            {/* 헤더 2 */}
            <tr>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑭ 합계
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑮ 예정분
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑯ 확정분
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑰ 한도율
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ⑱ 한도액
              </td>
            </tr>

            {/* 입력 */}
            <tr>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* 나. 과세기간 공제할 세액 */}
        <p className="mt-[1%] mb-[0.4%]">나. 과세기간 공제할 세액</p>

        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            {/* 헤더 1 */}
            <tr>
              <td
                colSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                공제대상세액
              </td>
              <td
                colSpan={3}
                className="border border-gray-500 text-left p-[0.6%]"
              >
                이미 공제받은 세액
              </td>
              <td
                rowSpan={2}
                className="border border-gray-500 text-center p-[0.6%] leading-tight"
              >
                ㉖ 공제(납부)할 세액
                <br />
                (=㉒ - ㉓)
              </td>
            </tr>

            {/* 헤더 2 */}
            <tr>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉑ 공제율
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉒ 공제대상세액
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉓ 합계
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉔ 예정 신고분
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉕ 월별 조기분
              </td>
            </tr>

            {/* 입력 */}
            <tr>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-t border-black my-[1.5%]" />

        {/* 4. 매입시기 집중 제조업 면세농산물등 의제매입세액 관련 신고내용 */}
        <h2 className="font-bold text-[1em] mt-[1%] mb-[0.5%]">
          4. 매입시기 집중 제조업 면세농산물등 의제매입세액 관련 신고내용
        </h2>

        <hr className="border-t border-black my-[0.8%]" />

        <p className="mt-[0.6%] mb-[0.4%]">
          가. 해당 해의 1월 1일부터 12월 31일까지 과세표준 및 제2기 과세기간
          공제 가능한 금액 등
        </p>

        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            {/* 헤더 1 */}
            <tr>
              <td
                colSpan={3}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                과세표준
              </td>
              <td
                colSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                대상액 한도계산
              </td>
              <td
                colSpan={3}
                className="border border-gray-500 text-center p-[0.6%] leading-tight"
              >
                해당 해의 1월 1일부터
                <br />
                12월 31일까지 매입액
              </td>
              <td
                rowSpan={2}
                className="border border-gray-500 text-center p-[0.6%] leading-tight"
              >
                ㉟ 공제대상금액
                <br />
                (=㉛과 ㉜ 중 적은 금액)
              </td>
            </tr>

            {/* 헤더 2 */}
            <tr>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉗ 합계
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉘ 제1기
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉙ 제2기
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉚ 한도율
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉛ 한도액
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉜ 합계
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉝ 제1기
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㉞ 제2기
              </td>
            </tr>

            {/* 입력 */}
            <tr>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* 4. 나. 제2기 과세기간 공제할 세액 */}
        <p className="mt-[1%] mb-[0.4%]">나. 제2기 과세기간 공제할 세액</p>

        <table className="w-full border-collapse text-[0.6em]">
          <tbody>
            {/* 상단 헤더 */}
            <tr>
              <td
                colSpan={2}
                className="border border-gray-500 text-center p-[0.6%]"
              >
                공제대상세액
              </td>
              <td
                colSpan={3}
                className="border border-gray-500 text-left p-[0.6%]"
              >
                이미 공제받은 세액
              </td>
              <td
                rowSpan={2}
                className="border border-gray-500 text-center p-[0.6%] leading-tight"
              >
                ㊴ 공제(납부)할 세액
                <br />
                (=㊱ - ㊲)
              </td>
            </tr>

            {/* 하단 헤더 */}
            <tr>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㊱ 공제율
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㊲ 공제대상세액
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                ㊳ 합계
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                예정 신고분
              </td>
              <td className="border border-gray-500 text-center p-[0.6%]">
                월별 조기분
              </td>
            </tr>

            {/* 입력 행 */}
            <tr>
              <td className="border border-gray-500 p-[0.4%]">
                <input className="w-full text-center bg-transparent outline-none" />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
              <td className="border border-gray-500 p-[0.4%]">
                <input
                  data-numeric
                  className="w-full text-right bg-transparent outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-t border-black my-[1.5%]" />

        <hr className="border-t border-black my-[1.5%]" />

        <h2 className="text-[11pt] font-bold leading-[150%]">
          5. 농어민 등으로부터의 매입분에 대한 명세(합계금액으로 작성함)
        </h2>

        <table className="w-full border-collapse table-fixed mt-1">
          {/* 원본 td width(pt) 기반으로 대략 고정 폭을 주고, 나머지는 테이블이 자동으로 채우게 둡니다 */}
          <colgroup>
            <col className="w-[45px]" />
            {/* 일련번호 */}
            <col className="w-[84px]" />
            {/* 성명 */}
            <col className="w-[105px]" />
            {/* 주민등록번호 */}
            <col className="w-[38px]" />
            {/* 건수 */}
            <col className="w-[83px]" />
            {/* 품명 */}
            <col className="w-[45px]" />
            {/* 수량 */}
            <col className="w-[82px]" />
            {/* 매입가액 */}
            <col />
            {/* 남는 폭 */}
          </colgroup>

          <thead>
            <tr className="h-[16pt]">
              <th
                rowSpan={2}
                className={`${border} align-middle text-center text-[6pt] font-normal`}
              >
                일련
                <br />
                번호
              </th>

              {/* ㊹ colspan=2 */}
              <th
                colSpan={2}
                className={`${border} align-middle text-center text-[6pt] font-normal`}
              >
                ㊹{' '}
                <span className="text-[6pt]">
                  면세농산물등을 공급한 농어민 등
                </span>
              </th>

              <th
                rowSpan={2}
                className={`${border} align-middle text-center text-[6pt] font-normal`}
              >
                ㊺ <span className="text-[6pt]">건수</span>
              </th>
              <th
                rowSpan={2}
                className={`${border} align-middle text-center text-[6pt] font-normal`}
              >
                ㊻ <span className="text-[7pt]">품 명</span>
              </th>
              <th
                rowSpan={2}
                className={`${border} align-middle text-center text-[7pt] font-normal`}
              >
                ㊼ <span className="text-[7pt]">수 량</span>
              </th>
              <th
                rowSpan={2}
                className={`${border} align-middle text-center text-[7pt] font-normal`}
              >
                ㊽ <span className="text-[7pt]">매입가액</span>
              </th>

              {/* 남는 폭(원본 pt 합계가 딱 안 맞는 케이스 대비) */}
              <th
                rowSpan={2}
                className={`${border} align-middle text-center text-[7pt] font-normal`}
              >
                {/* 빈 헤더(레이아웃 채움용) */}
              </th>
            </tr>

            <tr className="h-[15pt]">
              <th
                className={`${border} align-middle text-center text-[7pt] font-normal`}
              >
                성명
              </th>
              <th
                className={`${border} align-middle text-center text-[7pt] font-normal`}
              >
                주민등록번호
              </th>
            </tr>
          </thead>

          <tbody>
            {/* 합계 행 */}
            <tr className="h-[15pt]">
              <td
                colSpan={3}
                className={`${border} align-middle text-center text-[7pt]`}
              >
                합계
              </td>

              <td className={`${border} p-[1pt] align-middle`}>
                <CellInput numeric align="right" />
              </td>
              <td className={`${border} p-[1pt] align-middle`}>
                <CellInput align="left" />
              </td>
              <td className={`${border} p-[1pt] align-middle`}>
                <CellInput numeric align="right" />
              </td>
              <td className={`${border} p-[1pt] align-middle`}>
                <CellInput numeric align="right" />
              </td>
              <td className={`${border} p-[1pt] align-middle`}>
                {/* 남는 폭 */}
              </td>
            </tr>

            {/* 상세 행들 (원본은 1부터 시작) */}
            {Array.from({ length: 3 }, (_, i) => i + 1).map(n => (
              <tr key={n} className="h-[15pt]">
                <td className={`${border} align-middle text-center text-[7pt]`}>
                  {n}
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  <CellInput align="left" />
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  <CellInput align="left" />
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  <CellInput numeric align="right" />
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  <CellInput align="left" />
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  <CellInput numeric align="right" />
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  <CellInput numeric align="right" />
                </td>

                <td className={`${border} p-[1pt] align-middle`}>
                  {/* 남는 폭 */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="border-t border-black my-[1.5%]" />
        {/* (원문) 「부가가치세법 시행령」 … 신고합니다. */}
        <p className="pt-[6pt] pl-[13pt] text-[10pt]">
          「부가가치세법 시행령」 제84조제5항에 따라 의제매입세액을 공제받기
          위해 위와 같이 신고합니다.
        </p>

        {/* (원문) YYYY년 MM월 DD일 (우측 정렬, 입력 폭: 25pt / 15pt / 15pt, 높이 18pt) */}
        <p className="pt-[7pt] text-right text-[7pt]">
          <input className="inline-block align-middle mx-[2pt] w-[25pt] h-[18pt] bg-transparent outline-none border-none text-right tabular-nums" />
          년
          <input className="inline-block align-middle mx-[2pt] w-[15pt] h-[18pt] bg-transparent outline-none border-none text-right tabular-nums" />
          월
          <input className="inline-block align-middle mx-[2pt] w-[15pt] h-[18pt] bg-transparent outline-none border-none text-right tabular-nums" />
          일
        </p>

        {/* (원문) 신고인 + 성명 입력(폭 100pt, 높이 20pt) + (서명 또는 인) */}
        <p className="pt-[2pt] text-right relative text-[10pt]">
          신고인
          <input className="inline-block align-middle bg-transparent outline-none border-none ml-[30pt] mr-[30pt] w-[100pt] h-[20pt]" />
          <span className="relative inline-block text-[8pt] text-[#7E7E7E] cursor-pointer">
            (서명 또는 인)
            {imageSource && (
              <img
                src={imageSource}
                alt="stamp"
                className="absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[48pt]
        h-[48pt]
        pointer-events-none"
              />
            )}
          </span>
        </p>

        {/* (원문) 세 무 서 장   귀하 */}
        <div className="pt-[2pt] pl-[62pt] text-left font-bold text-[13pt]">
          세 무 서 장
          <span className="ml-[30pt] font-normal text-[10pt] relative top-[1pt]">
            귀하
          </span>
        </div>

        {/* (원문) 굵은 HR (2pt) */}
        <hr className="w-full border-t-2 border-black m-0 p-0" />

        {/* (원문) 간격용 빈 줄 */}
        <div className="h-[5pt]" />

        {/* (원문) 첨부서류 표 (1행 3열) */}
        <table className="w-full border-collapse table-fixed">
          <colgroup>
            <col className="w-[50pt]" />
            <col className="w-auto" />
            <col className="w-[47pt]" />
          </colgroup>
          <tbody>
            <tr className="h-[22pt]">
              <td className="border border-[#7E7E7E] border-l-0 align-middle">
                <p className="pt-[6pt] pl-[9pt] text-left text-[8pt]">
                  첨부서류
                </p>
              </td>
              <td className="border border-[#7E7E7E] align-middle">
                <ol>
                  <li>
                    <p className="pt-[6pt] pl-[6pt] text-left text-[8pt] leading-[120%]">
                      제조업을 경영하는 사업자가 농어민으로부터 면세농산물등을
                      직접 공급받는 경우: 첨부서류 없음
                    </p>
                  </li>
                  <li>
                    <p className="pt-[6pt] pl-[6pt] text-left text-[8pt] leading-[120%]">
                      그 밖의 경우: 매입처별 계산서합계표 또는
                      신용카드매출전표등 수령명세서
                    </p>
                  </li>
                </ol>
              </td>
              <td className="border border-[#7E7E7E] border-r-0 align-middle">
                <p className="pt-[6pt] text-center text-[8pt]">수수료없음</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
