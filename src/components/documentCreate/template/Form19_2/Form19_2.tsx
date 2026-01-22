'use client';
import './form19_2.css';
import NumericInput from '@/components/documentCreate/template/Form19_2/NumericInput';

export default function Form19_2() {
  return (
    <div className="form19_2">
      <ul id="l1">
        <li data-list-text="■">
          <p style={{ paddingTop: '2pt', paddingLeft: '18pt', textIndent: '-10pt', textAlign: 'left' }}>
            부가가치세법 시행규칙 [별지 제19호서식(2)]
            <span style={{ color: '#00F' }}>
              <개정 2022. 3. 18.>
            </span>
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center', paddingTop: '10pt', paddingBottom: '5pt' }}>
        대손세액 공제(변제)신고서(을)
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <hr style={{ width: '624pt', height: '1pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto', padding: '0' }} />
      <ol id="l2">
        <li data-list-text="1.">
          <h1 style={{ paddingTop: '5pt', paddingLeft: '21pt', textIndent: '-13pt', textAlign: 'left' }}>
            신고인 인적사항
          </h1>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br  />
          </p>
          <table style={{ borderCollapse: 'collapse', width: '624pt', margin: '0 auto' }} cellSpacing="0">
            <tr style={{ height: '30pt' }}>
              <td style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderLeftStyle: 'none', borderRightStyle: 'none' }}>
                <p className="s3" style={{ textIndent: '0pt', textAlign: 'left', verticalAlign: 'middle', paddingLeft: '10pt', lineHeight: '30pt', margin: '0' }}>
                  ① 상호
                  <span className="s4">
                    (법인명)
                  </span>
                </p>
              </td>
              <td className="table-cell" style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderLeftStyle: 'none', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080', position: 'relative' }}>
                <input className="form-input text" style={{ position: 'absolute', left: '2pt', right: '2pt', top: '50%', width: 'calc(100% - 4pt)', height: '20pt', transform: 'translateY(-50%)', fontSize: '10pt' }} type="text" />
              </td>
              <td style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
                <p className="s3" style={{ textIndent: '0pt', textAlign: 'left', verticalAlign: 'middle', paddingLeft: '10pt', lineHeight: '30pt', margin: '0' }}>
                  ② 사업자등록번호
                </p>
              </td>
              <td className="table-cell" style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderLeftStyle: 'none', borderRightStyle: 'none', position: 'relative' }}>
                <input className="form-input text" style={{ position: 'absolute', left: '2pt', right: '2pt', top: '50%', width: 'calc(100% - 4pt)', height: '20pt', transform: 'translateY(-50%)', fontSize: '10pt' }} type="text" />
              </td>
            </tr>
            <tr style={{ height: '30pt' }}>
              <td style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderLeftStyle: 'none', borderRightStyle: 'none' }}>
                <p className="s3" style={{ textIndent: '0pt', textAlign: 'left', verticalAlign: 'middle', paddingLeft: '10pt', lineHeight: '30pt', margin: '0' }}>
                  ③ 성명
                </p>
              </td>
              <td className="table-cell" style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderLeftStyle: 'none', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080', position: 'relative' }}>
                <input className="form-input text" style={{ position: 'absolute', left: '2pt', right: '2pt', top: '50%', width: 'calc(100% - 4pt)', height: '20pt', transform: 'translateY(-50%)', fontSize: '10pt' }} type="text" />
              </td>
              <td style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
                <p className="s3" style={{ textIndent: '0pt', textAlign: 'left', verticalAlign: 'middle', paddingLeft: '10pt', lineHeight: '30pt', margin: '0' }}>
                  ④ 사업장 소재지
                </p>
              </td>
              <td className="table-cell" style={{ width: '156pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderLeftStyle: 'none', borderRightStyle: 'none', position: 'relative' }}>
                <textarea className="form-textarea text" style={{ height: '28pt', top: '50%', transform: 'translateY(-50%)' }}>
                </textarea>
              </td>
            </tr>
          </table>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br  />
          </p>
          <hr style={{ width: '624pt', height: '1pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto', padding: '0' }} />
        </li>
        <li data-list-text="2.">
          <h1 style={{ paddingTop: '5pt', paddingLeft: '21pt', textIndent: '-13pt', textAlign: 'left' }}>
            대손세액 계산신고 내용
          </h1>
        </li>
      </ol>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '624pt', margin: '0 auto' }} cellSpacing="0">
        <tr style={{ height: '26pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} rowSpan="2">
            <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle', lineHeight: '13pt' }}>
              ⑤ 당초 공급
              <br  />
              연월일
            </p>
          </td>
          <td style={{ width: '74pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} rowSpan="2">
            <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle', lineHeight: '13pt' }}>
              ⑥ 대손확정
              <br  />
              연월일
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} rowSpan="2">
            <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle', lineHeight: '13pt' }}>
              ⑦ 대손
              <br  />
              금액
            </p>
          </td>
          <td style={{ width: '62pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} rowSpan="2">
            <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle', lineHeight: '13pt' }}>
              ⑧ 공제율
              <br  />
              (10/110)
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} rowSpan="2">
            <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle', lineHeight: '13pt' }}>
              ⑨ 대손
              <br  />
              세액
            </p>
          </td>
          <td style={{ width: '216pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }} colSpan="3">
            <p className="s5" style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'center' }}>
              공급받는 자
            </p>
          </td>
          <td style={{ width: '78pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', verticalAlign: 'middle' }} rowSpan="2">
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', margin: '0', padding: '0' }}>
              ⑬ 대손 사유
            </p>
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td style={{ width: '58pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle' }}>
              ⑩ 상호
            </p>
          </td>
          <td style={{ width: '55pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle' }}>
              ⑪ 성명
            </p>
          </td>
          <td style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#939393', borderRightStyle: 'none' }}>
            <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s5 table-cell-text" style={{ textIndent: '0pt', textAlign: 'center', verticalAlign: 'middle' }}>
              ⑫ 사업자등록번호
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td className="table-cell" style={{ width: '58pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#939393', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td style={{ width: '75pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '48pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '46pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td className="table-cell" style={{ width: '58pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '74pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '62pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number rate-input" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input number" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '58pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '55pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <input className="form-input text" style={{ height: '18pt', width: 'calc(100% - 3pt)' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'none' }}>
            <input className="form-input text biz-reg-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'center' }} type="text" onblur="formatNumber(this)" />
          </td>
          <td className="table-cell" style={{ width: '78pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <input className="form-input text reason-input" style={{ height: '18pt', width: 'calc(100% - 3pt)', textAlign: 'left' }} type="text" onblur="formatNumber(this)" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <hr style={{ width: '624pt', height: '1pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto', padding: '0' }} />
      <p className="s6" style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}>
        작성방법
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
      </p>
      <p style={{ paddingTop: '10pt', paddingLeft: '11pt', textIndent: '0pt', textAlign: 'left' }}>
        ※ 『대손세액 공제(변제)신고서(갑)』의 “2. 대손세액 계산신고 내용”이 많은 경우에 이어서 작성합니다.
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <hr style={{ width: '624pt', height: '1pt', border: 'none', borderTop: '1pt solid #000', margin: '0 auto', padding: '0' }} />
      <button style={{ position: 'absolute', right: '10pt', bottom: '10pt', width: '55pt', height: '20pt', backgroundColor: '#CD8D65', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', fontSize: '9pt', border: 'none', cursor: 'pointer', textAlign: 'center', lineHeight: '20pt', padding: '0', boxSizing: 'border-box', borderRadius: '3pt' }} id="addTableBtn">
        페이지추가
      </button>
    </div>
  );
}
