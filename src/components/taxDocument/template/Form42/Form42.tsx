'use client';
import './form42.css';
import NumericInput from '@/components/documentCreate/template/Form42/NumericInput';

export default function Form42() {
  return (
    <div className="form42">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '3pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제42호서식]
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{
          paddingTop: '15pt',
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, serif',
        }}
      >
        영세율 첨부서류 제출명세서
      </p>
      <p
        style={{
          paddingTop: '12pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <input
          className="form-input form-input-date"
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          type="text"
          maxLength={4}
        />
        년<span style={{ paddingLeft: '15pt' }}></span>
        제
        <input
          className="form-input form-input-date"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          type="text"
          maxLength={2}
        />
        기 (
        <input
          className="form-input form-input-date"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          type="text"
          maxLength={2}
        />
        월
        <input
          className="form-input form-input-date"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          type="text"
          maxLength={2}
        />
        일 ~
        <input
          className="form-input form-input-date"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          type="text"
          maxLength={2}
        />
        월
        <input
          className="form-input form-input-date"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          type="text"
          maxLength={2}
        />
        일)
      </p>
      <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
              padding: '0',
            }}
            rowSpan={3}
          >
            <p
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              <br />
            </p>
            <p
              className="s3"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '160%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              제출자
              <br />
              인적사항
            </p>
          </td>
          <td
            style={{
              width: '275pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            >
              ① 사업자등록번호
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ② 상호
              <span className="s5">(법인명)</span>
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '32pt' }}>
          <td
            style={{
              width: '275pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ③ 성명
              <span className="s5">(대표자)</span>
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ④ 사업장 소재지 및 연락처
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '275pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'none',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑤ 업태
              <span className="s5">(종목)</span>
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'none',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '342pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '5pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑥ 거래기간
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 103pt)',
                height: '20pt',
                padding: '1.5pt',
                float: 'right',
                textAlign: 'center',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑦ 작성일자
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 103pt)',
                height: '20pt',
                padding: '1.5pt',
                float: 'right',
                textAlign: 'center',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
        </tr>
      </table>
      <p
        className="s6"
        style={{
          paddingTop: '3pt',
          paddingLeft: '5pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑧ 제출사유
      </p>
      <input
        className="form-input form-input-text"
        style={{
          width: 'calc(100% - 103pt)',
          height: '20pt',
          padding: '1.5pt',
          verticalAlign: 'middle',
          float: 'right',
          fontSize: '10pt',
        }}
        type="text"
      />
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          borderBottom: '1pt solid #000',
          clear: 'both',
          marginTop: '-4pt',
          width: '624pt',
        }}
      >
        <br />
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑨
              <br />
              일련 번호
            </p>
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑩
              <br />
              서류명
            </p>
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑪
              <br />
              발급자
            </p>
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑫
              <br />
              발급 일자
            </p>
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑬
              <br />
              선적 일자
            </p>
          </td>
          <td
            style={{
              width: '49pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑭
              <br />
              통화 코드
            </p>
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑮
              <br />
              환율
            </p>
          </td>
          <td
            style={{
              width: '114pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            colSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              당기제출금액
            </p>
          </td>
          <td
            style={{
              width: '114pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            colSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              당기신고해당분
            </p>
          </td>
          <td
            style={{
              width: '63pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              style={{
                paddingTop: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s8"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              <span style={{ fontSize: '8pt' }}>⑳</span>
              <span className="s7">비고</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑯
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              외화
            </p>
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑰
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              원화
            </p>
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑱
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              외화
            </p>
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑲
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              원화
            </p>
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '51pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '38pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '36pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
            />
          </td>
          <td
            style={{
              width: '46pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1.5pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '8pt',
              }}
              type="text"
            />
          </td>
        </tr>
      </table>
      <div style={{ height: '20pt' }}></div>
      <button
        style={{
          position: 'absolute',
          right: '10pt',
          bottom: '10pt',
          width: '55pt',
          height: '20pt',
          backgroundColor: '#CD8D65',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
          fontSize: '9pt',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          lineHeight: '20pt',
          padding: '0',
          boxSizing: 'border-box',
          borderRadius: '3pt',
        }}
        id="addPageBtn"
      >
        페이지추가
      </button>
    </div>
  );
}
