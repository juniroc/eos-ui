'use client';
import './form32.css';
import NumericInput from '@/components/documentCreate/template/Form32/NumericInput';

export default function Form32() {
  return (
    <div className="form32">
      <ul id="l1">
        <li data-list-text="■">
          <p className="s1" style={{ paddingTop: '3pt', paddingLeft: '17pt', textIndent: '-9pt', textAlign: 'left' }}>
            부가가치세법 시행규칙 [별지 제32호서식]
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
        건물관리명세서
      </p>
      <h1 style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}>
        <input className="form-input form-input-text" style={{ width: '40pt', height: '20pt', minWidth: '40pt', display: 'inline-block', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
        년
        <span style={{ paddingLeft: '15pt' }}>
        </span>
        제
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', minWidth: '20pt', display: 'inline-block', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
        기(
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', minWidth: '20pt', display: 'inline-block', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
        월
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', minWidth: '20pt', display: 'inline-block', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
        일~
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', minWidth: '20pt', display: 'inline-block', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
        월
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', minWidth: '20pt', display: 'inline-block', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
        일)
      </h1>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto', width: '624pt', tableLayout: 'fixed' }} cellSpacing="0">
        <tr style={{ height: '26pt' }}>
          <td style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#5D5D5D', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s3" style={{ paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left' }}>
              제출자
            </p>
          </td>
          <td style={{ width: '218pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#5D5D5D', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#5D5D5D', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#5D5D5D', padding: '1pt', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
            <p className="s4" style={{ paddingTop: '3pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', margin: '0', marginRight: '5pt', width: '90pt' }}>
              ① 부동산 소재지
            </p>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 100pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', display: 'inline-block', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '214pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#5D5D5D', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#5D5D5D', padding: '1pt', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', margin: '0', marginRight: '5pt', width: '90pt' }}>
              ② 건물명
            </p>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 100pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', display: 'inline-block', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td style={{ width: '218pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#5D5D5D', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#5D5D5D', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#5D5D5D', padding: '1pt', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', margin: '0', marginRight: '5pt', width: '90pt' }}>
              ③ 상호
              <span className="s5">
                (관리업자)
              </span>
            </p>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 100pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', display: 'inline-block', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '214pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#5D5D5D', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#5D5D5D', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '1pt', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left', display: 'inline-block', margin: '0', marginRight: '5pt', width: '90pt' }}>
              ④ 사업자등록번호
            </p>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 100pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', display: 'inline-block', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <hr style={{ width: '624pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto' }} />
      <p className="s6" style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'center' }}>
        건물관리명세
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto', width: '624pt', tableLayout: 'fixed' }} cellSpacing="0">
        <tr style={{ height: '46pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '6pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑤
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              일련
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              번호
            </p>
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '6pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑥
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              층별
            </p>
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑦
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              호실명ㆍ번호
            </p>
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑧
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              면 적
            </p>
            <p className="s8" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              (㎡)
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑨
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              상 호
            </p>
            <p className="s8" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              (성명)
            </p>
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑩
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              사업자등록번호
            </p>
            <p className="s8" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              (주민등록번호)
            </p>
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑪
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              입주일
            </p>
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑫
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              퇴거일
            </p>
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s7" style={{ paddingTop: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center' }}>
              ⑬
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              관리비
            </p>
            <p className="s8" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              (원)
            </p>
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393' }}>
            <p className="s7" style={{ paddingTop: '4pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              합계
            </p>
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ width: '29pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle', textAlign: 'center' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', textAlign: 'center', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '28pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '86pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} type="text" />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#939393', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontSize: '9pt' }} type="text" />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', padding: '1pt', verticalAlign: 'middle', fontFamily: 'Arial' }} />
          </td>
        </tr>
      </table>
      <button style={{ position: 'absolute', right: '10pt', bottom: '10pt', width: '55pt', height: '20pt', backgroundColor: '#CD8D65', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', fontSize: '9pt', border: 'none', cursor: 'pointer', textAlign: 'center', lineHeight: '20pt', padding: '0', boxSizing: 'border-box', borderRadius: '3pt' }} id="addPageBtn">
        페이지추가
      </button>
    </div>
  );
}
