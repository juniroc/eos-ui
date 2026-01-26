'use client';
import './form28.css';
import NumericInput from '@/components/documentCreate/template/Form28/NumericInput';

export default function Form28() {
  return (
    <div className="form28">
      <ul id="l1">
        <li data-list-text="■">
          <p className="s1" style={{ paddingTop: '3pt', paddingLeft: '18pt', textIndent: '-11pt', textAlign: 'left' }}>
            부가가치세법 시행규칙 [별지 제28호서식]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
        사업자 단위 과세의 사업장별 부가가치세 과세표준 및 납부세액
        <span className="s3">
          (환급세액)
        </span>
        신고명세서
      </p>
      <p style={{ paddingTop: '8pt', paddingBottom: '2pt', paddingLeft: '7pt', textIndent: '0pt', textAlign: 'left' }}>
        신고기간 :
        <input className="form-input form-input-text" style={{ width: '40pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', background: 'transparent', fontFamily: 'Arial', fontSize: '10pt', textAlign: 'center' }} type="text" />
        년 제
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', background: 'transparent', fontFamily: 'Arial', fontSize: '10pt', textAlign: 'center' }} type="text" />
        기 (
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', background: 'transparent', fontFamily: 'Arial', fontSize: '10pt', textAlign: 'center' }} type="text" />
        월
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', background: 'transparent', fontFamily: 'Arial', fontSize: '10pt', textAlign: 'center' }} type="text" />
        일 ~
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', background: 'transparent', fontFamily: 'Arial', fontSize: '10pt', textAlign: 'center' }} type="text" />
        월
        <input className="form-input form-input-text" style={{ width: '20pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', background: 'transparent', fontFamily: 'Arial', fontSize: '10pt', textAlign: 'center' }} type="text" />
        일)
        <span style={{ paddingLeft: '40pt' }}>
          사업자 단위 과세 적용사업장
        </span>
        <span style={{ paddingLeft: '20pt' }}>
          사업자등록번호
        </span>
        :
        <input className="form-input form-input-text" style={{ width: '150pt', height: '20pt', display: 'inline-block', verticalAlign: 'middle', margin: '0 2pt', fontSize: '10pt', fontFamily: 'Arial' }} type="text" />
      </p>
      <hr style={{ width: '882pt', border: 'none', borderTop: '1pt solid #000', margin: '0', padding: '0' }} />
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', width: '882pt', marginLeft: 'auto', marginRight: 'auto', tableLayout: 'fixed' }} cellSpacing="0">
        <colgroup >
          <col style={{ width: '56pt' }}>
          </col>
          <col style={{ width: '66pt' }}>
          </col>
          <col style={{ width: '89pt' }}>
          </col>
          <col style={{ width: '45pt' }}>
          </col>
          <col style={{ width: '100pt' }}>
          </col>
          <col style={{ width: '80pt' }}>
          </col>
          <col style={{ width: '71pt' }}>
          </col>
          <col style={{ width: '45pt' }}>
          </col>
          <col style={{ width: '78pt' }}>
          </col>
          <col style={{ width: '67pt' }}>
          </col>
          <col style={{ width: '41pt' }}>
          </col>
          <col style={{ width: '49pt' }}>
          </col>
          <col style={{ width: '59pt' }}>
          </col>
          <col style={{ width: '36pt' }}>
          </col>
        </colgroup>
        <tr style={{ height: '13pt' }}>
          <td style={{ width: '139pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="3">
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              사업장(본점 및 주사무소 포함)
            </p>
          </td>
          <td style={{ width: '266pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="4">
            <p className="s4" style={{ textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              매 출 세 액
            </p>
          </td>
          <td style={{ width: '101pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="3">
            <p className="s4" style={{ textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              매 입 세 액
            </p>
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s4" style={{ paddingTop: '12pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              가산세
            </p>
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s4" style={{ paddingTop: '12pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              공제세액
            </p>
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s4" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              납부세액
            </p>
            <p className="s5" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              (환급세액)
            </p>
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }} rowSpan="2">
            <p className="s4" style={{ paddingTop: '12pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              비 고
            </p>
          </td>
        </tr>
        <tr style={{ height: '26pt' }}>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '3pt', paddingLeft: '2pt', paddingRight: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              사업장
            </p>
            <p className="s5" style={{ paddingLeft: '2pt', paddingRight: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              일련번호
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              상  호
            </p>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              소 재 지
            </p>
          </td>
          <td style={{ width: '130pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="2">
            <p className="s5" style={{ paddingTop: '7pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              구 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', textAlign: 'center' }}>
              과세표준
            </p>
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', textAlign: 'center' }}>
              세액
            </p>
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', textAlign: 'center' }}>
              구분
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', textAlign: 'center' }}>
              과세표준
            </p>
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '7pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', textAlign: 'center' }}>
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '56pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="4">
            <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              본점
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              0000
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '30pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial', fontSize: '9pt' }}>
            </textarea>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '35pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '71pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '78pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '36pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              영세율
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              의제 등
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="4">
            <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              0001
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '30pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '35pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              영세율
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              의제 등
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="4">
            <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              0002
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '30pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '35pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              영세율
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              의제 등
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="4">
            <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              0003
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '30pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '35pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              영세율
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              의제 등
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="4">
            <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              0004
            </p>
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '30pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="4">
            <textarea className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '35pt', resize: 'none', overflowY: 'auto', fontFamily: 'Arial' }}>
            </textarea>
          </td>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              영세율
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              의제 등
            </p>
          </td>
          <td style={{ width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '60pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ width: '139pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} colSpan="3" rowSpan="4">
            <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s4" style={{ paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              합      계
            </p>
          </td>
          <td style={{ width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '80pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '71pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '9pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              과 세
            </p>
          </td>
          <td style={{ width: '78pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '67pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '49pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '59pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '36pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '8pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              영세율
            </p>
          </td>
          <td style={{ width: '100pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '54pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#ADADAD', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '40pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }} rowSpan="2">
            <p className="s5" style={{ paddingTop: '8pt', paddingLeft: '0pt', paddingRight: '0pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              의제 등
            </p>
          </td>
          <td style={{ width: '157pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '43pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', textAlign: 'right', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '37pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '44pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '53pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '32pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', padding: '1pt', verticalAlign: 'middle' }} rowSpan="2">
            <input className="form-input form-input-text" style={{ width: 'calc(100% - 2pt)', height: '20pt', fontFamily: 'Arial' }} type="text" />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD' }}>
            <p className="s5" style={{ paddingTop: '1pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'center' }}>
              기 타 분
            </p>
          </td>
          <td style={{ width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
          <td style={{ width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#ADADAD', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#ADADAD', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#ADADAD', padding: '1pt', verticalAlign: 'middle' }}>
            <NumericInput style={{ width: 'calc(100% - 2pt)', height: '15pt', fontFamily: 'Arial' }} />
          </td>
        </tr>
      </table>
      <button style={{ position: 'absolute', right: '10pt', bottom: '10pt', width: '55pt', height: '20pt', backgroundColor: '#CD8D65', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', fontSize: '9pt', border: 'none', cursor: 'pointer', textAlign: 'center', lineHeight: '20pt', padding: '0', boxSizing: 'border-box', borderRadius: '3pt' }} id="addPageBtn">
        페이지추가
      </button>
    </div>
  );
}
