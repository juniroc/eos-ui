import React from "react";

const textInput = "w-full h-[24px] bg-transparent outline-none text-[12px] px-1";
const numberInput = "w-full h-[24px] bg-transparent outline-none text-[12px] px-1 text-right";

export default function Page1() {
    return (
        <div className="w-[1024px] mx-auto border border-black bg-white p-6 font-sans text-[13px] leading-[1.4]">

            {/* 헤더 */}
            <div className="flex justify-between text-[12px] mb-2">
                <div>[별지 제15호서식] &lt;개정 2025. 7. 4.&gt;</div>
                <div>(앞쪽)</div>
            </div>

            {/* 제목 */}
            <div className="text-center mb-2">
                <h1 className="text-2xl font-bold">의제매입세액 공제신고서</h1>
            </div>
            <div className="text-[12px] mb-4">※ 뒷쪽의 작성방법을 읽고 작성하시기 바랍니다.</div>

            {/* 접수 정보 */}
            <table className="w-full border border-black border-collapse text-[12px] mb-6">
                <tbody>
                <tr>
                    <td className="border border-black px-2 py-1">접수번호</td>
                    <td className="border border-black px-2 py-1">
                        <input type="text" className={textInput} />
                    </td>
                    <td className="border border-black px-2 py-1">접수일</td>
                    <td className="border border-black px-2 py-1">
                        <input type="text" className={textInput} />
                    </td>
                    <td className="border border-black px-2 py-1">처리기간 즉시</td>
                </tr>
                </tbody>
            </table>

            {/* 1. 신고인 인적사항 */}
            <div className="font-bold mb-1">1. 신고인 인적사항</div>

            <table className="w-full border border-black border-collapse text-[12px] mb-6">
                <tbody>
                <tr>
                    <td className="border border-black bg-gray-100 px-2 py-1">① 상호(법인명)</td>
                    <td className="border border-black px-2 py-1">
                        <input type="text" className={textInput} />
                    </td>

                    <td className="border border-black bg-gray-100 px-2 py-1">② 사업자등록번호</td>
                    <td className="border border-black px-2 py-1">
                        {/* 사업자등록번호 = text input */}
                        <input type="text" className={textInput} />
                    </td>
                </tr>

                <tr>
                    <td className="border border-black bg-gray-100 px-2 py-1">③ 업태</td>
                    <td className="border border-black px-2 py-1">
                        <input type="text" className={textInput} />
                    </td>

                    <td className="border border-black bg-gray-100 px-2 py-1">④ 종목</td>
                    <td className="border border-black px-2 py-1">
                        <input type="text" className={textInput} />
                    </td>
                </tr>
                </tbody>
            </table>

            {/* 2. 면세농산물등 매입가액 합계 */}
            <div className="font-bold mb-1">2. 면세농산물등 매입가액 합계</div>

            <table className="w-full border border-black border-collapse text-[12px] mb-6">
                <thead>
                <tr>
                    <th className="border border-black bg-gray-100 px-2 py-1">구분</th>
                    <th className="border border-black bg-gray-100 px-2 py-1">⑤ 매입처 수</th>
                    <th className="border border-black bg-gray-100 px-2 py-1">⑥ 건수</th>
                    <th className="border border-black bg-gray-100 px-2 py-1">⑦ 매입가액</th>
                    <th className="border border-black bg-gray-100 px-2 py-1">⑧ 공제율</th>
                    <th className="border border-black bg-gray-100 px-2 py-1">⑨ 의제매입세액</th>
                </tr>
                </thead>
                <tbody>

                {/* 합계 */}
                <tr>
                    <td className="border border-black bg-gray-100 px-2 py-1">① 합계</td>
                    <td className="border border-black px-2 py-1">
                        <input type="number" className={numberInput} />
                    </td>
                    <td className="border border-black px-2 py-1">
                        <input type="number" className={numberInput} />
                    </td>
                    <td className="border border-black px-2 py-1">
                        <input type="number" className={numberInput} />
                    </td>
                    <td className="border border-black px-2 py-1">
                        <input type="number" className={numberInput} />
                    </td>
                    <td className="border border-black px-2 py-1">
                        <input type="number" className={numberInput} />
                    </td>
                </tr>

                {/* 사업자로부터의 매입분 */}
                <tr>
                    <td className="border border-black bg-gray-100 px-2 py-1">
                        사업자로부터의 매입분
                    </td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                </tr>

                {/* 농어민으로부터의 매입분 */}
                <tr>
                    <td className="border border-black bg-gray-100 px-2 py-1">
                        농어민 등으로부터의 매입분
                    </td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                    <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
                </tr>

                </tbody>
            </table>

            {/* ============================
          여기가 Page1 중간까지임
          ============================ */}
    {/* 3. 면세농산물등 의제매입세액 관련 신고내용 */}
    <div className="font-bold mb-1">3. 면세농산물등 의제매입세액 관련 신고내용</div>

    {/* 3-가. 과세기간 과세표준 및 공제 가능한 금액 등 */}
    <div className="mb-1">가. 과세기간 과세표준 및 공제 가능한 금액 등</div>

    <table className="w-full border border-black border-collapse text-[12px] mb-6">
        <thead>
        <tr>
            <th className="border border-black bg-gray-100 px-2 py-1">과세표준</th>
            <th className="border border-black bg-gray-100 px-2 py-1">대상액 한도계산</th>
            <th className="border border-black bg-gray-100 px-2 py-1">⑬ 당기 매입액</th>
            <th className="border border-black bg-gray-100 px-2 py-1">
                ⑳ 공제대상금액(⑬과 ⑲ 중 적은 금액)
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            {/* ⑩ */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>

            {/* 한도계산 ⑪ 예정분 / ⑫ 확정분 / ⑲ 한도액 */}
            <td className="border border-black px-2 py-1">
                <div className="flex gap-1">
                    <input type="number" placeholder="⑪ 예정분" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="⑫ 확정분" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="⑲ 한도액" className={numberInput + " w-1/3"} />
                </div>
            </td>

            {/* ⑬ 당기 매입액 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>

            {/* ⑳ 공제대상금액 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>
        </tr>
        </tbody>
    </table>

    {/* 3-나. 과세기간 공제할 세액 */}
    <div className="mb-1">나. 과세기간 공제할 세액</div>

    <table className="w-full border border-black border-collapse text-[12px] mb-6">
        <thead>
        <tr>
            <th className="border border-black bg-gray-100 px-2 py-1">공제대상세액</th>
            <th className="border border-black bg-gray-100 px-2 py-1">이미 공제받은 세액</th>
            <th className="border border-black bg-gray-100 px-2 py-1">
                ⑲ 공제(납부)할 세액(=②-③)
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            {/* 공제대상세액 = ⑯ 공제율 / ⑰ 공제대상세액 / ⑱ 합계 */}
            <td className="border border-black px-2 py-1">
                <div className="flex gap-1">
                    <input type="number" placeholder="⑯ 공제율" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="⑰ 공제대상" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="⑱ 합계" className={numberInput + " w-1/3"} />
                </div>
            </td>

            {/* 이미 공제받은 세액 */}
            <td className="border border-black px-2 py-1">
                <div className="flex justify-between gap-1">
                    <input type="number" placeholder="예정분" className={numberInput + " w-1/2"} />
                    <input type="number" placeholder="조기환급" className={numberInput + " w-1/2"} />
                </div>
            </td>

            {/* 공제(납부)할 세액 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>
        </tr>
        </tbody>
    </table>

    {/* -------------------------------------------------------------- */}
    {/* 4. 제조업 면세농산물등 의제매입세액 신고내용 */}
    {/* -------------------------------------------------------------- */}

    <div className="font-bold mb-1">
        4. 매입세기한 제조업 면세농산물등 의제매입세액 관련 신고내용
    </div>

    <div className="mb-1">
        가. 해당 해의 1월 1일부터 12월 31일까지 과세표준 및 공제 가능한 금액 등
    </div>

    <table className="w-full border border-black border-collapse text-[12px] mb-6">
        <thead>
        <tr>
            <th className="border border-black bg-gray-100 px-2 py-1">과세표준</th>
            <th className="border border-black bg-gray-100 px-2 py-1">대상액 한도계산</th>
            <th className="border border-black bg-gray-100 px-2 py-1">
                해당 해의 1월1일~12월31일까지 매입액
            </th>
            <th className="border border-black bg-gray-100 px-2 py-1">
                ③ 공제대상금액
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            {/* 과세표준 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>

            {/* 대상액 한도계산 */}
            <td className="border border-black px-2 py-1">
                <div className="flex gap-1">
                    <input type="number" placeholder="1기" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="2기" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="한도액" className={numberInput + " w-1/3"} />
                </div>
            </td>

            {/* 매입액 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>

            {/* 공제대상금액 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>
        </tr>
        </tbody>
    </table>

    {/* 4-나 */}
    <div className="mb-1">나. 제2기 과세기간 공제할 세액</div>

    <table className="w-full border border-black border-collapse text-[12px] mb-6">
        <thead>
        <tr>
            <th className="border border-black bg-gray-100 px-2 py-1">공제대상세액</th>
            <th className="border border-black bg-gray-100 px-2 py-1">이미 공제받은 세액</th>
            <th className="border border-black bg-gray-100 px-2 py-1">③ 공제(납부)할 세액</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            {/* 공제대상세액 */}
            <td className="border border-black px-2 py-1">
                <div className="flex gap-1">
                    <input type="number" placeholder="공제율" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="대상세액" className={numberInput + " w-1/3"} />
                    <input type="number" placeholder="합계" className={numberInput + " w-1/3"} />
                </div>
            </td>

            {/* 이미 공제받은 */}
            <td className="border border-black px-2 py-1">
                <div className="flex gap-1">
                    <input type="number" placeholder="1기" className={numberInput + " w-1/2"} />
                    <input type="number" placeholder="2기" className={numberInput + " w-1/2"} />
                </div>
            </td>

            {/* 공제(납부)할 세액 */}
            <td className="border border-black px-2 py-1">
                <input type="number" className={numberInput} />
            </td>
        </tr>
        </tbody>
    </table>

    {/* -------------------------------------------------------------- */}
    {/* 5. 농어민 등으로부터의 매입분 명세 */}
    {/* -------------------------------------------------------------- */}

    <div className="font-bold mb-1">
        5. 농어민 등으로부터의 매입분에 대한 명세(합계금액으로 작성)
    </div>

    <table className="w-full border border-black border-collapse text-[12px] mb-8">
        <thead>
        <tr>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[8%]">입력번호</th>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[20%]">
                성명
            </th>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[22%]">
                주민등록번호
            </th>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[8%]">
                건수
            </th>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[18%]">
                품명
            </th>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[10%]">
                수량
            </th>
            <th className="border border-black bg-gray-100 px-2 py-1 w-[14%]">
                매입가액
            </th>
        </tr>
        </thead>

        <tbody>
        {/* 합계 */}
        <tr>
            <td className="border border-black px-2 py-1 font-bold">합계</td>
            <td className="border border-black px-2 py-1"><input type="text" className={textInput} /></td>
            <td className="border border-black px-2 py-1"><input type="text" className={textInput} /></td>
            <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
            <td className="border border-black px-2 py-1"><input type="text" className={textInput} /></td>
            <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
            <td className="border border-black px-2 py-1"><input type="number" className={numberInput} /></td>
        </tr>

        {/* 입력번호 1~5 */}
        {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i}>
                <td className="border border-black px-2 py-1 text-center">{i}</td>
                <td className="border border-black px-2 py-1">
                    <input type="text" className={textInput} />
                </td>
                <td className="border border-black px-2 py-1">
                    <input type="text" className={textInput} />
                </td>
                <td className="border border-black px-2 py-1">
                    <input type="number" className={numberInput} />
                </td>
                <td className="border border-black px-2 py-1">
                    <input type="text" className={textInput} />
                </td>
                <td className="border border-black px-2 py-1">
                    <input type="number" className={numberInput} />
                </td>
                <td className="border border-black px-2 py-1">
                    <input type="number" className={numberInput} />
                </td>
            </tr>
        ))}
        </tbody>
    </table>

    {/* -------------------------------------------------------------- */}
    {/* 신고문 + 제출 */}
    {/* -------------------------------------------------------------- */}

    <div className="mb-4 text-[12px] leading-relaxed">
        「부가가치세법 시행령」 제84조제5항에 따라 의제매입세액을 공제받기 위해 위와 같이 신고합니다.
    </div>

    <div className="flex justify-end gap-4 mb-6 text-[12px]">
        <div className="text-right">
            <div className="mb-1">
                <input
                    type="text"
                    placeholder="년 월 일"
                    className={textInput + " w-[140px] text-center"}
                />
            </div>
            <div>신고인 (서명 또는 인)</div>
        </div>
    </div>

    <div className="text-left mb-8 text-[12px]">
        <strong>세무서장 귀하</strong>
    </div>

    {/* -------------------------------------------------------------- */}
    {/* 하단 참고문구 */}
    {/* -------------------------------------------------------------- */}

    <div className="border-t border-black pt-2 text-[11px] leading-snug">
        <p>1. 제조업자가 농어민으로부터 면세농산물 등을 공급받은 경우 첨부서류는 필요 없습니다.</p>
        <p>2. 그 외의 경우 매입처별세금계산서합계표 또는 신용카드매출전표등 수령명세서를 첨부합니다.</p>
    </div>

</div>

)
}
