'use client';
import './form40_2.css';
import NumericInput from '@/components/documentCreate/template/Form40_2/NumericInput';

export default function Form40_2() {
  return (
    <div className="form40_2">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제40호서식(2)]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '15pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{ paddingLeft: '11pt', textIndent: '0pt', textAlign: 'center' }}
      >
        수출실적명세서
        <span className="s3">(을)</span>
      </p>
      <h1
        style={{
          paddingTop: '5pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <input
          className="form-input form-input-text"
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
          className="form-input form-input-text"
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
          className="form-input form-input-text"
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
          className="form-input form-input-text"
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
          className="form-input form-input-text"
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
          className="form-input form-input-text"
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
      </h1>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: '0',
          width: '350pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '9pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                textAlign: 'center',
                fontSize: '10pt',
              }}
              type="text"
            />
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑫
              <br />
              일련
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '130pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑬ 수출신고번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑭
              <br />
              선(기)적
              <br />
              일자
            </p>
          </td>
          <td
            style={{
              width: '52pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑮
              <br />
              통화
              <br />
              코드
            </p>
          </td>
          <td
            style={{
              width: '57pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s6"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                fontSize: '8pt',
                textAlign: 'center',
              }}
            >
              ⑯
              <br />
            </p>
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              환율
            </p>
          </td>
          <td
            style={{
              width: '142pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '55pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                fontSize: '8pt',
                textAlign: 'center',
              }}
            >
              ⑰<span className="s8">외화</span>
            </p>
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                fontSize: '8pt',
                textAlign: 'center',
              }}
            >
              ⑱<span className="s8">원화</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
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
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            />
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            />
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <h2 style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'center' }}>
        작성방법
      </h2>
      <p
        style={{ textIndent: '0pt', textAlign: 'left', paddingTop: '5pt' }}
      ></p>
      <p
        style={{
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'left',
          fontSize: '9pt',
        }}
      >
        이 서식은 『수출실적명세서(갑)』[별지 제40호서식(1)]을 초과하는
        수출실적분에 대해서만 작성합니다.
      </p>
      <p
        style={{
          paddingBottom: '4pt',
          paddingLeft: '444pt',
          textIndent: '0pt',
          textAlign: 'right',
        }}
      >
        (
        <input
          className="form-input form-input-text"
          style={{
            width: '15pt',
            height: '15pt',
            fontSize: '8pt',
            padding: '1pt',
            verticalAlign: 'middle',
            display: 'inline-block',
            position: 'relative',
            top: '0',
            left: '0',
          }}
          type="text"
        />
        )쪽
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <p style={{ paddingTop: '20pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
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
        id="addTableBtn"
      >
        페이지추가
      </button>
    </div>
  );
}
