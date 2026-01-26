'use client';
import './form33.css';
import NumericInput from '@/components/documentCreate/template/Form33/NumericInput';

export default function Form33() {
  return (
    <div className="form33">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제33호서식]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{ textIndent: '0pt', textAlign: 'center', letterSpacing: '2pt' }}
      >
        사업장현황명세서
      </p>
      <h2 style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}>
        <input
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
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
            fontFamily: 'Arial',
          }}
          type="text"
        />
        기(
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
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
            fontFamily: 'Arial',
          }}
          type="text"
        />
        일~
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
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
            fontFamily: 'Arial',
          }}
          type="text"
        />
        일)
      </h2>
      <p style={{ paddingTop: '9pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        style={{
          width: '624pt',
          height: '20pt',
          background: '#c0c0c0',
          margin: '0 auto',
          padding: '1pt',
          verticalAlign: 'middle',
          lineHeight: '20pt',
        }}
      >
        <span style={{ display: 'inline-block', width: '30pt' }}></span>
        접수번호
        <span style={{ display: 'inline-block', width: '100pt' }}></span>
        접수일
        <span style={{ display: 'inline-block', width: '350pt' }}></span>
        처리기간
        <span style={{ display: 'inline-block', width: '10pt' }}></span>
        즉시
        <span style={{ display: 'inline-block', width: '50pt' }}></span>
      </p>
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
      <ol id="l2">
        <li data-list-text="1.">
          <p
            className="s4"
            style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}
          >
            인적사항
          </p>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
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
            <tr style={{ height: '31pt' }}>
              <td
                style={{
                  width: '161pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#5D5D5D',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    marginRight: '5pt',
                    width: '90pt',
                  }}
                >
                  상호
                  <span className="s6">(법인명)</span>
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 100pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '161pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#5D5D5D',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '4pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    marginRight: '5pt',
                    width: '90pt',
                  }}
                >
                  성명
                  <span className="s6">(대표자명)</span>
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 100pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '158pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '4pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    marginRight: '5pt',
                    width: '90pt',
                  }}
                >
                  사업자등록번호
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 100pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
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
        </li>
        <li data-list-text="2.">
          <h2
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
            기본사항
            <span className="s7">(자가ㆍ타가) ②</span>
            <span className="s8">
              ~⑤란은 음식점업자 및 숙박업자만 적습니다.
            </span>
          </h2>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
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
            <tr style={{ height: '21pt' }}>
              <td
                style={{
                  width: '133pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#5D5D5D',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#5D5D5D',
                }}
                colSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ① 사업장
                </p>
              </td>
              <td
                style={{
                  width: '48pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  verticalAlign: 'middle',
                }}
                rowSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ②
                </p>
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  객실 수
                </p>
              </td>
              <td
                style={{
                  width: '46pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  verticalAlign: 'middle',
                }}
                rowSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ③
                </p>
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  탁자 수
                </p>
              </td>
              <td
                style={{
                  width: '44pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  verticalAlign: 'middle',
                }}
                rowSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ④
                </p>
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  의자 수
                </p>
              </td>
              <td
                style={{
                  width: '47pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  verticalAlign: 'middle',
                }}
                rowSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑤
                </p>
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  주차장
                </p>
              </td>
              <td
                style={{
                  width: '45pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  verticalAlign: 'middle',
                }}
                rowSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑥
                </p>
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  종업원 수
                </p>
              </td>
              <td
                style={{
                  width: '117pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#5D5D5D',
                }}
                colSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑦ 차량
                </p>
              </td>
            </tr>
            <tr style={{ height: '26pt' }}>
              <td
                style={{
                  width: '31pt',
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
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  대지
                </p>
              </td>
              <td
                style={{
                  width: '102pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  건물(지하
                  <NumericInput
                    style={{
                      width: '20pt',
                      height: '15pt',
                      minWidth: '20pt',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      fontFamily: 'Arial',
                    }}
                  />
                  층,
                </p>
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
                  }}
                >
                  지상
                  <NumericInput
                    style={{
                      width: '20pt',
                      height: '15pt',
                      minWidth: '20pt',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      fontFamily: 'Arial',
                    }}
                  />
                  층)
                </p>
              </td>
              <td
                style={{
                  width: '38pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                rowSpan={2}
              >
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  승용차
                </p>
              </td>
              <td
                style={{
                  width: '79pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#5D5D5D',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#5D5D5D',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                rowSpan={2}
              >
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  화물차
                </p>
              </td>
            </tr>
            <tr style={{ height: '12pt' }}>
              <td
                style={{
                  width: '59pt',
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
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    lineHeight: '10pt',
                    textAlign: 'center',
                  }}
                >
                  바닥면적
                </p>
              </td>
              <td
                style={{
                  width: '43pt',
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
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    lineHeight: '10pt',
                    textAlign: 'center',
                  }}
                >
                  연면적
                </p>
              </td>
            </tr>
            <tr style={{ height: '37pt' }}>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#5D5D5D',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  ㎡
                </p>
              </td>
              <td
                style={{
                  width: '59pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  ㎡
                </p>
              </td>
              <td
                style={{
                  width: '43pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  ㎡
                </p>
              </td>
              <td
                style={{
                  width: '48pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  개
                </p>
              </td>
              <td
                style={{
                  width: '46pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  개
                </p>
              </td>
              <td
                style={{
                  width: '44pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  개
                </p>
              </td>
              <td
                style={{
                  width: '47pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <span
                    className="parking-option"
                    style={{
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'inline-block',
                      padding: '0 5pt',
                      marginRight: '5pt',
                    }}
                    data-value="yes"
                  >
                    유
                  </span>
                  <span
                    className="parking-option"
                    style={{
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'inline-block',
                      padding: '0 5pt',
                    }}
                    data-value="no"
                  >
                    무
                  </span>
                </p>
              </td>
              <td
                style={{
                  width: '45pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  명
                </p>
              </td>
              <td
                style={{
                  width: '38pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  대
                </p>
              </td>
              <td
                style={{
                  width: '79pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#5D5D5D',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                    fontSize: '9pt',
                  }}
                />
                <p
                  className="s10"
                  style={{
                    paddingTop: '0pt',
                    paddingBottom: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'right',
                  }}
                >
                  대
                </p>
              </td>
            </tr>
          </table>
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
        </li>
        <li data-list-text="3.">
          <h2
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
            기본경비
            <span className="s7">(6월, 12월 기준)</span>
            <span className="s8">(단위 : 천원)</span>
          </h2>
        </li>
      </ol>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '124pt',
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
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑧ 임차료
            </p>
          </td>
          <td
            style={{
              width: '50pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑨
            </p>
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              전기ㆍ가스료
            </p>
          </td>
          <td
            style={{
              width: '58pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑩
            </p>
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              수도료
            </p>
          </td>
          <td
            style={{
              width: '65pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪
            </p>
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              인건비
            </p>
          </td>
          <td
            style={{
              width: '68pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑫
            </p>
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              기타
            </p>
          </td>
          <td
            style={{
              width: '115pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
              }}
            >
              ⑬
            </p>
            <p
              className="s9"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
              }}
            >
              월 기본경비 합계
            </p>
          </td>
        </tr>
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '62pt',
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
            <p
              className="s10"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              보증금
            </p>
          </td>
          <td
            style={{
              width: '62pt',
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
            <p
              className="s10"
              style={{
                paddingTop: '0pt',
                paddingBottom: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              월세
            </p>
          </td>
        </tr>
        <tr style={{ height: '32pt' }}>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
          <td
            style={{
              width: '62pt',
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
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
          <td
            style={{
              width: '50pt',
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
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
          <td
            style={{
              width: '58pt',
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
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
          <td
            style={{
              width: '65pt',
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
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
          <td
            style={{
              width: '68pt',
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
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
          <td
            style={{
              width: '115pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
            />
          </td>
        </tr>
      </table>
      <p
        className="s7"
        style={{
          paddingTop: '10pt',
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        「부가가치세법 시행령」 제91조제2항의 표 제8호에 따라 사업장현황명세서를
        제출합니다.
      </p>
      <p
        className="s11"
        style={{ paddingTop: '6pt', textIndent: '0pt', textAlign: 'right' }}
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
            fontFamily: 'Arial',
          }}
          type="text"
        />
        년
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
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
            fontFamily: 'Arial',
          }}
          type="text"
        />
        일
      </p>
      <p
        className="s12"
        style={{
          paddingTop: '8pt',
          textIndent: '0pt',
          textAlign: 'right',
          position: 'relative',
        }}
      >
        신고인
        <span style={{ display: 'inline-block', width: '30pt' }}></span>
        <input
          className="form-input form-input-text"
          style={{
            width: '100pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 20pt',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
        />
        <span className="s13" style={{ textAlign: 'right' }}>
          (서명 또는 인)
        </span>
      </p>
      <h1
        style={{
          paddingTop: '4pt',
          paddingBottom: '2pt',
          paddingLeft: '51pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        세 무 서 장
        <span style={{ display: 'inline-block', width: '20pt' }}></span>
        <span className="s14">귀하</span>
      </h1>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <p style={{ paddingTop: '120pt', textIndent: '0pt', textAlign: 'left' }}>
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
      <h3 style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'center' }}>
        작 성 방 법<span className="s7">(3. 기본경비란)</span>
      </h3>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        style={{
          paddingTop: '14pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑧ 임차료 중 보증금란: 확정신고 최종월(6월 또는 12월) 현재 임차건물의
        임차보증금을 적습니다.
      </p>
      <p
        style={{
          paddingTop: '2pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑧ 임차료 중 월세란: 확정신고 최종월(6월 또는 12월)의 임차료를 적습니다.
      </p>
      <p
        style={{
          paddingTop: '2pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑨~⑫: 확정신고 최종월(6월 또는 12월)의 경비를 각각 적습니다.
      </p>
      <p
        style={{
          paddingTop: '2pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑬: ⑧ 임차료 중 월세란부터 ⑫ 기타란까지의 경비를 더한 금액을 적습니다.
      </p>
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
    </div>
  );
}
