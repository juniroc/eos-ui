'use client';
import './form40.css';
import NumericInput from '@/components/documentCreate/template/Form40/NumericInput';

export default function Form40() {
  return (
    <div className="form40">
      <ul id="l1">
        <li data-list-text="■">
          <p style={{ paddingTop: '2pt', paddingLeft: '18pt', textIndent: '-9pt', textAlign: 'left' }}>
            부가가치세법 시행규칙 [별지 제40호서식(1)]
            <span className="s1">
              &lt;개정 2025. 3. 21.&gt;
            </span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
        수출실적명세서
        <span className="s3">
          (갑)
        </span>
      </p>
      <h1 style={{ paddingTop: '5pt', paddingLeft: '10pt', textIndent: '0pt', textAlign: 'center' }}>
        <input className="text-input" style={{ width: '4ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt' }} type="text" />
        년
        <span style={{ marginLeft: '15pt' }}>
        </span>
        <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt' }} type="text" />
        기 (
        <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt' }} type="text" />
        월
        <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt' }} type="text" />
        일 ~
        <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt' }} type="text" />
        월
        <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt' }} type="text" />
        일)
      </h1>
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '624pt' }} cellSpacing="0">
        <tr style={{ height: '21pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#5D5D5D', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} rowSpan="3">
            <p className="s4" style={{ paddingLeft: '5pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '123%', textAlign: 'center' }}>
              제출자
              <br  />
              인적사항
            </p>
          </td>
          <td style={{ width: '186pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#5D5D5D', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ① 사업자등록번호
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ② 상호
              <span className="s6">
                (법인명)
              </span>
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '21pt' }}>
          <td style={{ width: '186pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ③ 성명
              <span className="s6">
                (대표자)
              </span>
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ④ 사업장 소재지
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '21pt' }}>
          <td style={{ width: '186pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ⑤ 업태
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ⑥ 종목
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '624pt' }} cellSpacing="0">
        <tr style={{ height: '26pt' }}>
          <td style={{ width: '99pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s7" style={{ paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '0' }}>
              ⑦ 거래기간
            </p>
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s7" style={{ paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0', margin: '0', lineHeight: '26pt', verticalAlign: 'middle' }}>
              <input className="text-input" style={{ width: '4ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0 1pt 0' }} type="text" />
              <span style={{ fontSize: '10pt', verticalAlign: 'middle' }}>
                년
              </span>
            </p>
          </td>
          <td style={{ width: '20pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s7" style={{ textIndent: '0pt', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0', margin: '0', lineHeight: '26pt', verticalAlign: 'middle' }}>
              <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0 1pt 0' }} type="text" />
              <span style={{ fontSize: '10pt', verticalAlign: 'middle' }}>
                월
              </span>
            </p>
          </td>
          <td style={{ width: '24pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s7" style={{ paddingLeft: '0pt', textIndent: '0pt', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0', margin: '0', lineHeight: '26pt', verticalAlign: 'middle' }}>
              <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0 1pt 0' }} type="text" />
              <span style={{ fontSize: '10pt', verticalAlign: 'middle' }}>
                일 ~
              </span>
            </p>
          </td>
          <td style={{ width: '20pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s7" style={{ textIndent: '0pt', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0', margin: '0', lineHeight: '26pt', verticalAlign: 'middle' }}>
              <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0 1pt 0' }} type="text" />
              <span style={{ fontSize: '10pt', verticalAlign: 'middle' }}>
                월
              </span>
            </p>
          </td>
          <td style={{ width: '20pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s7" style={{ textIndent: '0pt', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0', margin: '0', lineHeight: '26pt', verticalAlign: 'middle' }}>
              <input className="text-input" style={{ width: '2ch', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0 1pt 0' }} type="text" />
              <span style={{ fontSize: '10pt', verticalAlign: 'middle' }}>
                일
              </span>
            </p>
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', width: '100pt', margin: '0', verticalAlign: 'middle' }}>
              ⑧ 작성일자
            </p>
            <input className="text-input" style={{ width: 'calc(100% - 110pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '10pt', fontFamily: 'Arial', textAlign: 'left', display: 'inline-block', verticalAlign: 'middle', margin: '1pt 0' }} type="text" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '624pt' }} cellSpacing="0">
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '110pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ textIndent: '0pt', textAlign: 'center' }}>
              구분
            </p>
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ textIndent: '0pt', textAlign: 'center' }}>
              건수
            </p>
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '22pt', textIndent: '0pt', textAlign: 'left' }}>
              외화금액
            </p>
          </td>
          <td style={{ width: '96pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '27pt', textIndent: '0pt', textAlign: 'left' }}>
              원화금액
            </p>
          </td>
          <td style={{ width: '104pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ textIndent: '0pt', textAlign: 'center' }}>
              비고
            </p>
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '110pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left' }}>
              ⑨ 합계
            </p>
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '96pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '104pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '110pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left' }}>
              ⑩ 수출재화(=⑫합계)
            </p>
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '96pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '104pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '110pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s5" style={{ paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left' }}>
              ⑪ 기타 영세율적용
            </p>
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '96pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '104pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '624pt' }} cellSpacing="0">
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              ⑫
              <br  />
              일련번호
            </p>
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              ⑬
              <br  />
              수출신고번호
            </p>
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              ⑭
              <br  />
              선(기)적일자
            </p>
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              ⑮
              <br  />
              통화코드
            </p>
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s8" style={{ textIndent: '0pt', lineHeight: '120%', fontSize: '7pt', textAlign: 'center' }}>
              ⑯
            </p>
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              환율
            </p>
          </td>
          <td style={{ width: '175pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }} colSpan="2">
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '120%', fontSize: '7pt', textAlign: 'center' }}>
              ⑰
              <span className="s10">
                외화
              </span>
            </p>
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '120%', fontSize: '7pt', textAlign: 'center' }}>
              ⑱
              <span className="s10">
                원화
              </span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '144pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }} colSpan="2">
            <p className="s5" style={{ textIndent: '0pt', lineHeight: '120%', textAlign: 'center' }}>
              합계
            </p>
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '19pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'left', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '65pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '51pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="text-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'center', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '89pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', verticalAlign: 'middle' }}>
            <input className="number-input" style={{ width: 'calc(100% - 4pt)', height: 'calc(100% - 4pt)', border: 'none', outline: 'none', background: '#ffffff', padding: '1pt', fontSize: '9pt', fontFamily: 'Arial', textAlign: 'right', margin: '1pt 2pt 1pt 1pt' }} type="text" />
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <hr style={{ width: '624pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto' }} />
      <h2 style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}>
        작 성 방 법
      </h2>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
      </p>
      <p style={{ paddingTop: '4pt', paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        이 명세서는 외국으로 재화를 직접 반출(수출)하여 영세율을 적용받는 사업자가 작성하며 아래의 작성요령에 따라 한글, 아라비아숫자, 영문자로 정확하고 선명하게 적어야 합니다.
      </p>
      <p style={{ paddingTop: '3pt', paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ①~⑥: 제출자(수출자)의 사업자등록증에 적힌 사업자등록번호ㆍ상호(법인명)ㆍ성명(대표자)ㆍ사업장 소재지ㆍ업태ㆍ종목을 적습니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑦: 신고대상기간을 적습니다(예시 : 2010년 1월 1일~3월 31일).
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑧: 수출실적명세서 작성일자를 적습니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑨: 부가가치세 영세율이 적용되는 재화 또는 용역의 공급으로 세금계산서 발급대상이 아닌 영세율 적용분에 대한 총건수, 외화금액 합계, 원화금액 합계[부가가치세 신고서 2쪽 영세율 기타분(④항) 과세표준]를 적습니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑩: 관세청에 수출신고 후 외국으로 직접 반출(수출)하는 재화의 총건수, 외화금액 합계, 원화금액 합계를 적으며, ⑫란의 1번부터 마지막 번호까지를 모두 합계한 건수, 외화금액, 원화금액과 일치하여야 합니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑪: 관세청에 수출신고 후 외국으로 직접 반출(수출)하는 재화 이외의 영세율적용분(국외제공용역 등)으로 세금계산서를 발 급하지 아니하는 분의 총건수, 외화금액 합계, 원화금액 합계를 적습니다(※ 영세율 첨부서류는 별도제출).
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑫: 수출 건별로 1번부터 부여하여 마지막 번호까지 순서대로 적습니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑬: 수출신고서의 (5)번 신고번호를 적습니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑭: 수출재화(물품)을 실질적으로 선(기)적한 일자를 적습니다.
      </p>
      <p style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'justify' }}>
        ⑮: 수출대금을 결제받기로 한 외국통화의 코드를 영문자 3자로 적습니다(수출신고서 (34)번 항목의 중간에 표시되며, 미국 달러로 결제받는 경우 USD라 적습니다).
      </p>
      <p className="s11" style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '8pt', textAlign: 'justify' }}>
        <span style={{ fontSize: '6pt' }}>
          ⑯
        </span>
        <span className="p" style={{ fontSize: '9pt' }}>
          : 수출재화의 선(기)적 일자에 해당하는 외국환거래법에 의한 기준환율 또는 재정환율을 적습니다.
        </span>
      </p>
      <p className="s11" style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '8pt', textAlign: 'justify' }}>
        <span style={{ fontSize: '6pt' }}>
          ⑰
        </span>
        <span className="p" style={{ fontSize: '9pt' }}>
          : 수출물품의 인도조건에 따라 지급받기로 한 전체 수출금액으로 수출신고서의 (33)번 항목의 금액이며 소수점 미만 2자 리까지 적습니다.
        </span>
      </p>
      <p className="s11" style={{ paddingLeft: '13pt', paddingRight: '3pt', textIndent: '0pt', lineHeight: '120%', fontSize: '8pt', textAlign: 'justify' }}>
        <span style={{ fontSize: '6pt' }}>
          ⑱
        </span>
        <span className="p" style={{ fontSize: '9pt' }}>
          :
        </span>
        <span style={{ fontSize: '6pt' }}>
          ⑰
        </span>
        <span className="p" style={{ fontSize: '9pt' }}>
          란의 금액을
        </span>
        <span style={{ fontSize: '6pt' }}>
          ⑯
        </span>
        <span className="p" style={{ fontSize: '9pt' }}>
          란의 환율로 곱한 환산금액 또는 선(기)적일 전에 수출대금(수출선수금, 사전송금방식수출 등)을 원화  로 환가한 경우에는 그 금액을 원단위 미만은 절사하고 적습니다.
        </span>
      </p>
      <p className="s12" style={{ paddingTop: '7pt', paddingBottom: '3pt', paddingLeft: '17pt', textIndent: '0pt', lineHeight: '120%', fontSize: '9pt', textAlign: 'left' }}>
        ※ 『수출실적명세서(갑)』서식을 초과하는 수출실적분에 대해서는 『수출실적명세서(을)』[별지 제40호서식(2)]에 작성합니다.
      </p>
      <hr style={{ width: '624pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto' }} />
      <button style={{ position: 'absolute', right: '10pt', bottom: '10pt', width: '55pt', height: '20pt', backgroundColor: '#CD8D65', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', fontSize: '9pt', border: 'none', cursor: 'pointer', textAlign: 'center', lineHeight: '20pt', padding: '0', boxSizing: 'border-box', borderRadius: '3pt' }} id="addTableBtn">
        (을)표추가
      </button>
    </div>
  );
}
