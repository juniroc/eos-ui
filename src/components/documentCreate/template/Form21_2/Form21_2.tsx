'use client';
import './form21_2.css';
import NumericInput from '@/components/documentCreate/template/Form21_2/NumericInput';

export default function Form21_2() {
  return (
    <div className="form21_2">
      <table style={{ borderCollapse: 'collapse', marginLeft: '5.329pt', width: '624pt' }} cellSpacing="0">
        <tr style={{ height: '116pt' }}>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E', textAlign: 'center', verticalAlign: 'middle' }}>
            <p className="s2" style={{ textIndent: '0pt', lineHeight: '200%', textAlign: 'center', margin: '0', padding: '0' }}>
              신고인
              <br  />
              제출서류
            </p>
          </td>
          <td style={{ width: '398pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left', position: 'relative' }}>
              <span >
                1. 매출처별 세금계산서합계표
              </span>
              <span style={{ position: 'absolute', left: '189pt', top: '0' }}>
                2. 매입처별 세금계산서합계표
              </span>
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left', position: 'relative' }}>
              <span >
                3. 매입자발행 세금계산서합계표
              </span>
              <span style={{ position: 'absolute', left: '189pt', top: '0' }}>
                4. 영세율 첨부서류
              </span>
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              5. 대손세액 공제(변제)신고서와 대손사실 또는 변제사실을 증명하는 서류
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left', position: 'relative' }}>
              <span >
                6. 공제받지 못할 매입세액 명세서
              </span>
              <span style={{ position: 'absolute', left: '189pt', top: '0' }}>
                7. 매출처별 계산서합계표
              </span>
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left', position: 'relative' }}>
              <span >
                8. 매입처별 계산서합계표
              </span>
              <span style={{ position: 'absolute', left: '189pt', top: '0' }}>
                9. 신용카드매출전표등 수령명세서
              </span>
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              10. 전자화폐결제명세서(전산작성분 첨부 가능)
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left', letterSpacing: '-0.5pt', whiteSpace: 'nowrap' }}>
              11. 부동산임대공급가액명세서 및 임대계약서 사본(사업장을 임대한 후 임대차계약을 갱신한 경우에만 첨부합니다)
            </p>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              12. 건물관리명세서(주거용 건물관리의 경우는 제외합니다)
            </p>
            <ol id="l1">
              <li data-list-text="13.">
                <p className="s2" style={{ paddingLeft: '18pt', textIndent: '-13pt', lineHeight: '10pt', textAlign: 'left' }}>
                  현금매출명세서
                </p>
              </li>
              <li data-list-text="14.">
                <p className="s2" style={{ paddingLeft: '18pt', textIndent: '-13pt', lineHeight: '10pt', textAlign: 'left', letterSpacing: '-0.5pt', whiteSpace: 'nowrap' }}>
                  사업장별 부가가치세 과세표준 및 납부세액(환급세액) 신고명세서(주사업장 총괄납부를 하는 경우만 첨부합니다)
                </p>
              </li>
              <li data-list-text="15.">
                <p className="s2" style={{ paddingLeft: '12pt', textIndent: '-7pt', lineHeight: '92%', textAlign: 'left' }}>
                  사업자 단위 과세의 사업장별 부가가치세 과세표준 및 납부세액(환급세액) 신고명세서(사업자 단위 과세자인 경우만 첨부합니다)
                </p>
              </li>
              <li data-list-text="16.">
                <p className="s2" style={{ paddingLeft: '18pt', textIndent: '-13pt', lineHeight: '9pt', textAlign: 'left', position: 'relative' }}>
                  <span >
                    건물 등 감가상각자산 취득명세서
                  </span>
                  <span style={{ position: 'absolute', left: '189pt', top: '0' }}>
                    17. 의제매입세액 공제신고서
                  </span>
                </p>
              </li>
            </ol>
            <p className="s2" style={{ paddingLeft: '4pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              18. 그 밖에 필요한 증명서류
            </p>
          </td>
          <td style={{ width: '33pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', textAlign: 'center', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s2" style={{ textIndent: '0pt', lineHeight: '200%', textAlign: 'center', margin: '0', padding: '0' }}>
              수수료 없음
            </p>
          </td>
        </tr>
        <tr style={{ height: '21pt' }}>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s2" style={{ textIndent: '0pt', lineHeight: '200%', textAlign: 'center', letterSpacing: '-0.5pt' }}>
              담당 공무원 확인사항
            </p>
          </td>
          <td style={{ width: '398pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s2" style={{ paddingTop: '5pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>
              사업자등록증(사업을 폐업하고 확정신고하는 사업자의 경우에는 해당 서류를 제출하게 하고 이를 확인)
            </p>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <div style={{ width: '624pt', marginLeft: '5.329pt', backgroundColor: '#c0c0c0', padding: '0', boxSizing: 'border-box' }}>
        <div style={{ width: '624pt', height: '1pt', borderTop: '1pt solid #7E7E7E', margin: '0 0 3pt 0' }}>
        </div>
        <p style={{ textIndent: '0pt', lineHeight: '200%', textAlign: 'center', margin: '0', padding: '0', fontWeight: 'bold', fontSize: '11pt', fontFamily: '돋움체, monospace', color: 'black' }}>
          행정정보 공동이용 동의서
        </p>
        <div style={{ width: '624pt', height: '1pt', borderTop: '1pt solid #7E7E7E', margin: '3pt 0 0 0' }}>
        </div>
      </div>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
      </p>
      <p style={{ paddingTop: '1pt', paddingLeft: '11pt', textIndent: '0pt', textAlign: 'left', fontSize: '9pt', lineHeight: '200%', fontFamily: '돋움체, monospace', marginBottom: '20pt' }}>
        본인은 이 건 업무처리와 관련하여 담당 공무원이 「전자정부법」 제36조제1항에 따른 행정정보의 공동이용을 통하여 위의 담당 공무원 확인 사항을 확인하는 것에 동의합니다. 동의하지 않는 경우에는 신고인이 직접 관련 서류를 제출해야 합니다.
      </p>
      <p className="s3" style={{ paddingTop: '1pt', paddingLeft: '0', paddingRight: '15pt', textIndent: '0pt', display: 'flex', alignItems: 'center', marginBottom: '5pt', position: 'relative' }}>
        <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          신고인
        </span>
        <span style={{ flex: '1' }}>
        </span>
        <input style={{ width: '120pt', height: '20pt', border: 'none', outline: 'none', padding: '0', fontSize: '10pt', fontFamily: 'Arial, sans-serif', background: 'transparent', boxSizing: 'border-box', margin: '0 20pt 0 0' }} type="text" onfocus="this.style.border='0.5pt solid #808080';" onblur="this.style.border='none';" />
        <span className="s4 signature-text" style={{ fontSize: '9pt' }}>
          (서명 또는 인)
        </span>
      </p>
      <div style={{ width: '624pt', height: '1pt', borderTop: '1pt solid #7E7E7E', marginLeft: '5.329pt' }}>
      </div>
    </div>
  );
}
