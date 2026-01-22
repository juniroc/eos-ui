'use client';
import './form21_1.css';
import NumericInput from '@/components/documentCreate/template/Form21_1/NumericInput';

export default function Form21_1() {
  return (
    <div className="form21_1">
      <ul id="l1">
        <li data-list-text="■">
          <p style={{ paddingTop: '2pt', paddingLeft: '18pt', textIndent: '-11pt', textAlign: 'left' }}>
            부가가치세법 시행규칙 [별지 제21호서식]
            <span style={{ color: '#00F' }}>
              <개정 2025. 3. 21.>
            </span>
          </p>
        </li>
      </ul>
      <table style={{ width: '624pt', borderCollapse: 'collapse', margin: '0', padding: '0' }}>
        <tr >
          <td style={{ verticalAlign: 'middle', width: '270pt', padding: '0', margin: '0' }}>
            <div className="textbox" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70pt', width: '100%' }}>
              <p className="s2" style={{ textIndent: '0pt', lineHeight: '20pt', textAlign: 'center', margin: '0' }}>
                일반과세자 부가가치세
              </p>
            </div>
          </td>
          <td style={{ verticalAlign: 'middle', width: '354pt', padding: '0', margin: '0' }}>
            <div className="textbox" style={{ display: 'block', minHeight: '70pt', width: '100%' }}>
              <p className="s2" style={{ paddingTop: '6pt', paddingLeft: '2pt', textIndent: '0pt', lineHeight: '18pt', textAlign: 'left', margin: '0' }}>
                [
                <input type="checkbox" name="reportType" id="check1" />
                ] 예정 [
                <input type="checkbox" name="reportType" id="check2" />
                ]확정
              </p>
              <p className="s2" style={{ paddingLeft: '2pt', textIndent: '0pt', lineHeight: '18pt', textAlign: 'left', margin: '0' }}>
                [
                <input type="checkbox" name="reportType" id="check3" />
                ] 기한후 과세표준
                <span style={{ paddingLeft: '30pt' }}>
                  신고서
                </span>
              </p>
              <p className="s2" style={{ paddingLeft: '2pt', textIndent: '0pt', lineHeight: '18pt', textAlign: 'left', margin: '0' }}>
                [
                <input type="checkbox" name="reportType" id="check4" />
                ] 영세율 등 조기환급
              </p>
            </div>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ width: '624pt', borderCollapse: 'collapse', margin: '0', padding: '0' }}>
        <tr >
          <td style={{ verticalAlign: 'middle', width: '400.4pt', padding: '0', margin: '0' }}>
            <div className="textbox" style={{ background: '#BABABA', display: 'block', minHeight: '12.9pt', width: '100%' }}>
              <p className="s3" style={{ paddingTop: '1pt', paddingLeft: '8pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'left' }}>
                관리번호
              </p>
            </div>
          </td>
          <td style={{ verticalAlign: 'middle', width: '223.6pt', padding: '0', margin: '0' }}>
            <div className="textbox" style={{ background: '#BABABA', display: 'block', minHeight: '12.9pt', width: '100%', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080' }}>
              <p className="s3" style={{ paddingTop: '1pt', paddingLeft: '2pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'left' }}>
                처리기간
                <span style={{ paddingLeft: '30pt' }}>
                  즉시
                </span>
              </p>
            </div>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', height: '5pt', paddingBottom: '2pt', textAlign: 'left' }}>
      </p>
      <p style={{ paddingLeft: '7pt', paddingBottom: '2pt', textIndent: '0pt', textAlign: 'left' }}>
        신고기간
        <input className="report-period-input" style={{ width: '40pt', border: 'none', textAlign: 'center', fontSize: '8pt' }} type="text" maxlength="4" />
      </p>
      <table className="business-info-table" style={{ width: '624pt', borderCollapse: 'collapse', margin: '0', tableLayout: 'fixed' }} cellSpacing="0">
        <tr style={{ height: '18pt' }}>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="4">
            <p style={{ textIndent: '0pt', textAlign: 'left', margin: '0', padding: '0', lineHeight: '0', height: '0' }}>
              <br  />
            </p>
            <p className="s3" style={{ paddingLeft: '3pt', paddingTop: '0', marginTop: '0', textIndent: '0pt', textAlign: 'left' }}>
              사업자
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '8pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'left' }}>
              상 호
            </p>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'left' }}>
              (법인명)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '85pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '2pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'left' }}>
              성  명
            </p>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'left' }}>
              (대표자명)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '64pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingTop: '3pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              사업자등록번호
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingTop: '3pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              -
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingTop: '3pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>
              -
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ paddingTop: '5pt', paddingLeft: '6pt', textIndent: '0pt', textAlign: 'left' }}>
              생년월일
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '136pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2" rowSpan="2">
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              전화번호
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="1">
            <p className="s3" style={{ paddingLeft: '25pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              사업장
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="7">
            <p className="s3" style={{ paddingLeft: '25pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              주소지
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '73pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }} colSpan="5">
            <p className="s3" style={{ paddingLeft: '21pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              휴대전화
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E', position: 'relative!important', padding: '0!important', margin: '0!important' }} colSpan="1">
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E', position: 'relative!important', padding: '0!important', margin: '0!important' }} colSpan="7">
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '73pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }} colSpan="5">
            <input className="cell-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td style={{ verticalAlign: 'middle', width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingTop: '3pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>
              사업장주소
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '208pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <input className="cell-input" type="text" />
          </td>
          <td style={{ verticalAlign: 'middle', width: '45pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'center' }}>
              전자우편
            </p>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'center' }}>
              주소
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '146pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }} colSpan="12">
            <input className="cell-input" type="text" />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
      </p>
      <hr style={{ width: '624pt', height: '1pt', border: 'none', borderTop: '1pt solid #000', margin: '0', padding: '0' }} />
      <p className="s7" style={{ paddingLeft: '3pt', paddingTop: '3pt', paddingBottom: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        ①
        <b >
          신고내용
        </b>
      </p>
      <table style={{ width: '624pt', borderCollapse: 'collapse', margin: '0', tableLayout: 'fixed' }} cellSpacing="0">
        <colgroup >
          <col style={{ width: '40pt' }}>
          </col>
          <col style={{ width: '25pt' }}>
          </col>
          <col style={{ width: '161pt' }}>
          </col>
          <col style={{ width: '25pt' }}>
          </col>
          <col style={{ width: '161pt' }}>
          </col>
          <col style={{ width: '40pt' }}>
          </col>
          <col style={{ width: '171pt' }}>
          </col>
        </colgroup>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '251pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="4">
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center', fontSize: '9pt', paddingLeft: '0pt' }}>
              구     분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center', fontSize: '9pt', paddingLeft: '0pt' }}>
              금  액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center', fontSize: '9pt', paddingLeft: '0pt' }}>
              세율
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center', fontSize: '9pt', paddingLeft: '0pt' }}>
              세  액
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="9">
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '130%', textAlign: 'center', fontSize: '9pt' }}>
              과세
              <br  />
              표준
              <br  />
              <span style={{ display: 'block', marginTop: '5pt' }}>
                및
              </span>
              <span style={{ display: 'block', marginTop: '5pt' }}>
                매출
                <br  />
                세액
              </span>
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="4">
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', fontSize: '9pt' }}>
              과세
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (1)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '8pt', textAlign: 'center', fontSize: '9pt', color: '#000', paddingLeft: '0pt' }}>
              10/100
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              매입자발행 세금계산서
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (2)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '8pt', textAlign: 'center', fontSize: '9pt', color: '#000', paddingLeft: '0pt' }}>
              10/100
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              신용카드ㆍ현금영수증 발행분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (3)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '8pt', textAlign: 'center', fontSize: '9pt', color: '#000', paddingLeft: '0pt' }}>
              10/100
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              기타(정규영수증 외 매출분)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (4)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s9" style={{ textIndent: '0pt', lineHeight: '8pt', textAlign: 'center', fontSize: '9pt', color: '#000', paddingLeft: '0pt' }}>
              10/100
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', fontSize: '9pt' }}>
              영세율
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', textAlign: 'left' }}>
              세금계산서 발급분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (5)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s9" style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'center', fontSize: '9pt', color: '#000', paddingLeft: '0pt' }}>
              0/100
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              기        타
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (6)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s9" style={{ textIndent: '0pt', textAlign: 'center', fontSize: '9pt', color: '#000', paddingLeft: '0pt' }}>
              0/100
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '186pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left', fontSize: '9pt' }}>
              예정 신고 누락분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (7)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '186pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left', fontSize: '9pt' }}>
              대손세액 가감
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (8)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTop: '1pt solid #7E7E7E', borderLeft: '1pt solid #7E7E7E', borderBottom: '1pt solid #7E7E7E', borderRight: '0 !important', borderRightWidth: '0 !important', borderRightStyle: 'none !important', borderRightColor: 'transparent !important' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '186pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '5pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left', fontSize: '9pt' }}>
              합계
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center', paddingLeft: '0pt' }}>
              (9)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s6" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center', paddingLeft: '0pt' }}>
              ㉮
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTop: '1pt solid #7E7E7E', borderLeft: 'none !important', borderBottom: '1pt solid #7E7E7E', borderRight: 'none' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
      </table>
      <table style={{ width: '624pt', borderCollapse: 'collapse', margin: '0', marginTop: '2pt', tableLayout: 'fixed' }} cellSpacing="0">
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="9">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
            <p className="s3" style={{ paddingLeft: '7pt', paddingRight: '5pt', textIndent: '0pt', lineHeight: '110%', textAlign: 'left', fontSize: '9pt' }}>
              매입 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '50pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="3">
            <p className="s3" style={{ paddingTop: '7pt', paddingLeft: '6pt', paddingRight: '6pt', textIndent: '0pt', lineHeight: '100%', textAlign: 'left' }}>
              세금계산서 수 취 분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              일 반 매 입
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '18pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (10)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '90pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '98pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              수출기업 수입분 납부유예
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (10-1)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} bgColor="#D5D5D5">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '98pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              고정자산 매입
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (11)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left', fontSize: '9pt' }}>
              예정 신고 누락분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (12)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              매입자발행 세금계산서
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (13)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              그 밖의 공제매입세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (14)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              합계 (10)-(10-1)+(11)+(12)+(13)+(14)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (15)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              공제받지 못할 매입세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (16)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}>
              차감계 (15)-(16)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              (17)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '120pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              ㉯
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '321pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="5">
            <p className="s3" style={{ paddingLeft: '36pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              납 부 ( 환 급 ) 세 액 ( 매 출 세 액 ㉮ - 매 입 세 액 ㉯ )
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉰
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              경감
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2" rowSpan="2">
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>
              그 밖의 경감ㆍ공제세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>
              (18)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2" bgColor="#D5D5D5">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              •
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2" rowSpan="2">
            <p className="s3" style={{ paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>
              신용카드매출전표등 발행공제 등
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>
              (19)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ paddingLeft: '7pt', textIndent: '0pt', lineHeight: '8pt', textAlign: 'left' }}>
              공제
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '151pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="2" rowSpan="2">
            <p className="s3" style={{ paddingTop: '1pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left' }}>
              합계
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ paddingTop: '1pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>
              (20)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} rowSpan="2">
            <p className="s3" style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'center' }}>
              ㉱
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }} rowSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}>
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#999999', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              소규모 개인사업자 부가가치세 감면세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#999999', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (20-1)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '120pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#999999', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#999999', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉲
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#999999' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#999999', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              예정 신고 미환급 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#999999', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (21)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '120pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#999999', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#999999', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉳
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#999999', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              예정 고지 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (22)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉴
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              사업양수자가 대리납부한 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (23)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} bgColor="#D5D5D5">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉵
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              매입자 납부특례에 따라 납부한 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (24)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} bgColor="#D5D5D5">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉶
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              신용카드업자가 대리납부한 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (25)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} bgColor="#D5D5D5">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉷
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '185pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="3">
            <p className="s3" style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              가산세액 계
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              (26)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              ㉸
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '321pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="5">
            <p className="s3" style={{ paddingLeft: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}>
              차감ㆍ가감하여 납부할 세액(환급받을 세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              (27)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#7E7E7E' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '351pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#7E7E7E' }} colSpan="6">
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}>
              총 괄 납 부 사 업 자 가 납 부 할 세 액 (환 급 받 을 세 액 )
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#7E7E7E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#7E7E7E', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br  />
      </p>
      <table style={{ borderCollapse: 'collapse', marginLeft: '5.929pt' }} cellSpacing="0">
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} rowSpan="2">
            <p className="s3" style={{ padding: '0', paddingLeft: '6pt', textIndent: '0pt', textAlign: 'left' }}>
              세무대리인
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '79pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              성 명
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '132pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }} colSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p className="s3" style={{ paddingLeft: '3pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              사업자등록번호
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '141pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080' }} colSpan="2">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '69pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p className="s3" style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}>
              관리번호
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '72pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p className="s3" style={{ paddingLeft: '17pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              생년월일
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '70pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#808080' }}>
            <p className="s3" style={{ paddingLeft: '17pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left' }}>
              전화번호
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '71pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#808080', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#808080', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#808080' }}>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br  />
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
