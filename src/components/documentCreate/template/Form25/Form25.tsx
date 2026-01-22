'use client';
import './form25.css';
import NumericInput from '@/components/documentCreate/template/Form25/NumericInput';

export default function Form25() {
  return (
    <div className="form25">
      <ul id="l1">
        <li data-list-text="■">
          <p className="s1" style={{ paddingTop: '2pt', paddingLeft: '18pt', textIndent: '-10pt', textAlign: 'left' }}>
            부가가치세법 시행규칙 [별지 제25호서식]
            <span className="s2">
              <개정 2021. 10. 28.>
            </span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <p className="s3" style={{ textIndent: '0pt', lineHeight: '21pt', textAlign: 'center' }}>
        부동산임대공급가액명세서
      </p>
      <h1 style={{ paddingLeft: '0pt', textIndent: '0pt', lineHeight: '13pt', textAlign: 'center' }}>
        <input className="form-input form-input-text" style={{ display: 'inline-block', width: '32pt', height: '20pt', maxlength: '4', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="4" />
        년  제
        <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
        기 (
        <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
        월
        <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
        일 ~
        <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
        월
        <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
        일)
      </h1>
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '880pt', marginLeft: '0pt' }} cellSpacing="0">
        <tr style={{ height: '36pt' }}>
          <td style={{ width: '200pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'none' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              ① 부동산 소재지
            </p>
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle', borderLeftStyle: 'none' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '200pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'none' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              ② 상호
              <span className="s5">
                (소유자 성명)
              </span>
            </p>
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle', borderLeftStyle: 'none' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '36pt' }}>
          <td style={{ width: '200pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'none' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              ③ 사업자등록번호
            </p>
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle', borderLeftStyle: 'none' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '200pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'none' }}>
            <p className="s4" style={{ paddingTop: '2pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              ④ 사업자 단위 과세자의 종된 사업장 일련번호
            </p>
          </td>
          <td style={{ width: '240pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '1pt', verticalAlign: 'middle', borderLeftStyle: 'none' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <hr style={{ width: '880pt', border: 'none', borderTop: '1pt solid #000', margin: '0', padding: '0' }} />
      <h1 style={{ paddingTop: '5pt', paddingBottom: '0pt', paddingLeft: '0pt', textIndent: '0pt', textAlign: 'center', position: 'relative', width: '880pt' }}>
        <span style={{ display: 'inline-block' }}>
          수입금액 내용
          <span className="p" style={{ fontFamily: '돋움, monospace', fontSize: '11pt', fontWeight: 'bold' }}>
            (기간
            <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
            월 ~
            <input className="form-input form-input-text" style={{ display: 'inline-block', width: '20pt', height: '20pt', maxlength: '2', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="2" />
            월)
          </span>
        </span>
        <span className="s6" style={{ position: 'absolute', right: '10pt', top: '2pt' }}>
          (단위:
          <input className="form-input form-input-text" style={{ display: 'inline-block', width: '24pt', height: '20pt', maxlength: '3', verticalAlign: 'middle', margin: '0 2pt' }} type="text" maxlength="3" />
          원)
        </span>
      </h1>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '880pt', marginLeft: '0pt', marginTop: '-6pt' }} cellSpacing="0">
        <tr style={{ height: '21pt' }}>
          <td style={{ width: '117pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="3">
            <p className="s4" style={{ paddingTop: '3pt', paddingLeft: '38pt', textIndent: '0pt', textAlign: 'left' }}>
              임대사항
            </p>
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s7" style={{ paddingTop: '10pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑧
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              임대면적
              <br  />
              (㎡)
            </p>
          </td>
          <td style={{ width: '398pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="7">
            <p className="s4" style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'center' }}>
              임차인 인적사항 및 임대차 계약내용
            </p>
          </td>
          <td style={{ width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD' }} colSpan="3">
            <p className="s4" style={{ paddingTop: '3pt', paddingLeft: '23pt', textIndent: '0pt', textAlign: 'left' }}>
              임대수입금액 (과세표준)
            </p>
          </td>
        </tr>
        <tr style={{ height: '37pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', paddingLeft: '14pt', paddingRight: '13pt', textIndent: '0pt', lineHeight: '92%', textAlign: 'center' }}>
              ⑤ 동
            </p>
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', paddingLeft: '17pt', paddingRight: '17pt', textIndent: '0pt', lineHeight: '92%', textAlign: 'center' }}>
              ⑥ 층
            </p>
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', paddingLeft: '12pt', paddingRight: '12pt', textIndent: '0pt', lineHeight: '92%', textAlign: 'center' }}>
              ⑦ 호
            </p>
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑨
            </p>
            <p className="s7" style={{ paddingLeft: '20pt', paddingRight: '20pt', textIndent: '0pt', lineHeight: '92%', textAlign: 'center' }}>
              상 호
              <br  />
              (성명)
            </p>
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '2pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑩
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              사업자등록번호
              <br  />
              (주민등록번호)
            </p>
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑪
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              입주일
            </p>
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑫
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              갱신일
            </p>
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑬
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              퇴거일
            </p>
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑭
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              보증금
            </p>
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑮
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              월 임대료
            </p>
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑯
            </p>
            <p className="s7" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              합 계
            </p>
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s7" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑰
            </p>
            <p className="s7" style={{ paddingLeft: '8pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '92%', textAlign: 'center' }}>
              보 증 금
              <br  />
              이자(계)
            </p>
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s7" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              ⑱
            </p>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              월 임대료(계)
            </p>
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '117pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="3">
            <p className="s4" style={{ paddingTop: '6pt', textIndent: '0pt', textAlign: 'center' }}>
              합 계
            </p>
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '35pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '68pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '82pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '47pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt' }} type="text" />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt' }} />
          </td>
        </tr>
      </table>
      <button style={{ position: 'absolute', right: '10pt', bottom: '10pt', width: '55pt', height: '20pt', backgroundColor: '#CD8D65', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', fontSize: '9pt', border: 'none', cursor: 'pointer', textAlign: 'center', lineHeight: '20pt', padding: '0', boxSizing: 'border-box', borderRadius: '3pt' }} id="addPageBtn">
        페이지추가
      </button>
    </div>
  );
}
