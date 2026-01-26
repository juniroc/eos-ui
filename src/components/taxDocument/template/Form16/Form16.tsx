'use client';
import './form16.css';
import NumericInput from '@/components/documentCreate/template/Form16/NumericInput';

export default function Form16() {
  return (
    <div className="form16">
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
            부가가치세법 시행규칙 [별지 제16호서식(1)]
            <span className="s2">&lt;개정 2019. 3. 20.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '6pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'center' }}
      >
        신용카드매출전표등 수령명세서
        <span className="s4">(갑)</span>
      </p>
      <h1
        style={{
          paddingTop: '5pt',
          paddingLeft: '0pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            display: 'inline-block',
            width: '32pt',
            height: '16pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          type="text"
          maxLength={4}
        />
        년 제
        <input
          className="form-input form-input-text"
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '16pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          type="text"
          maxLength={2}
        />
        기 (
        <input
          className="form-input form-input-text"
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '16pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          type="text"
          maxLength={2}
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '16pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          type="text"
          maxLength={2}
        />
        일 ~
        <input
          className="form-input form-input-text"
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '16pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          type="text"
          maxLength={2}
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '16pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          type="text"
          maxLength={2}
        />
        일)
      </h1>
      <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
      <ol id="l2">
        <li data-list-text="1.">
          <h2
            style={{
              paddingTop: '7pt',
              paddingLeft: '19pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            제출자 인적사항
          </h2>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
        </li>
      </ol>
      <table
        style={{
          width: '624pt',
          borderCollapse: 'collapse',
          margin: '0',
          padding: '0',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '27pt' }}>
          <td
            style={{
              width: '155.5pt',
              border: 'none',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
                margin: '0',
                paddingLeft: '6pt',
              }}
            >
              ① 상호
              <span className="s6">(법인명)</span>
            </p>
          </td>
          <td
            style={{
              width: '1pt',
              border: 'none',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '155.5pt',
              border: 'none',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '1pt',
              borderLeft: '1pt solid #000',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '150pt',
              border: 'none',
              borderTop: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
                margin: '0',
                paddingLeft: '6pt',
              }}
            >
              ② 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '1pt',
              border: 'none',
              borderTop: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '160pt',
              border: 'none',
              borderTop: '1pt solid #000',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td
            style={{
              width: '155.5pt',
              border: 'none',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
                margin: '0',
                paddingLeft: '6pt',
              }}
            >
              ③ 성명
              <span className="s6">(대표자)</span>
            </p>
          </td>
          <td
            style={{
              width: '1pt',
              border: 'none',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '155.5pt',
              border: 'none',
              borderBottom: '1pt solid #000',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '1pt',
              borderLeft: '1pt solid #000',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '150pt',
              border: 'none',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '1pt',
              border: 'none',
              borderBottom: '1pt solid #000',
              padding: '0',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '160pt',
              border: 'none',
              borderBottom: '1pt solid #000',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input className="text-input" type="text" />
          </td>
        </tr>
      </table>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '4pt 0 0 0',
          padding: '0',
        }}
      />
      <ol style={{ counterReset: 'd1 2' }} id="l2">
        <li data-list-text="2.">
          <p
            style={{
              paddingTop: '7pt',
              paddingLeft: '21pt',
              textIndent: '-14pt',
              textAlign: 'left',
            }}
          >
            신용카드 등 매입명세 합계
          </p>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '624pt',
              marginLeft: '0pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '22pt' }}>
              <td
                style={{
                  width: '159pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  구 분
                </p>
              </td>
              <td
                style={{
                  width: '85pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  거래건수
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  공급가액
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  세 액
                </p>
              </td>
            </tr>
            <tr style={{ height: '23pt' }}>
              <td
                style={{
                  width: '159pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '7pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ④<span className="s7">합 계</span>
                </p>
              </td>
              <td
                style={{
                  width: '85pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
            </tr>
            <tr style={{ height: '23pt' }}>
              <td
                style={{
                  width: '159pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '7pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑤ 현금영수증
                </p>
              </td>
              <td
                style={{
                  width: '85pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
            </tr>
            <tr style={{ height: '23pt' }}>
              <td
                style={{
                  width: '159pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '7pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑥ 화물운전자복지카드
                </p>
              </td>
              <td
                style={{
                  width: '85pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
            </tr>
            <tr style={{ height: '23pt' }}>
              <td
                style={{
                  width: '159pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '7pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑦ 사업용 신용카드
                </p>
              </td>
              <td
                style={{
                  width: '85pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
            </tr>
            <tr style={{ height: '23pt' }}>
              <td
                style={{
                  width: '159pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#000',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '4pt',
                    paddingLeft: '7pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑧ 그 밖의 신용카드 등
                </p>
              </td>
              <td
                style={{
                  width: '85pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#000',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#000',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#000',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
            </tr>
          </table>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '4pt 0 0 0',
              padding: '0',
            }}
          />
        </li>
        <li data-list-text="3.">
          <p
            style={{
              paddingTop: '10pt',
              paddingBottom: '10pt',
              paddingLeft: '22pt',
              textIndent: '-15pt',
              textAlign: 'left',
              lineHeight: '10pt',
              verticalAlign: 'middle',
            }}
          >
            그 밖의 신용ㆍ직불카드, 기명식선불카드, 직불전자지급수단 및
            기명식선불전자지급수단 매출전표 수령금액 합계
          </p>
        </li>
      </ol>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              일련 번호
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                paddingTop: '12pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑨ 카드회원번호
            </p>
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                paddingLeft: '0pt',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
              }}
            >
              ⑩
            </p>
            <p
              className="s7"
              style={{
                paddingTop: '2pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              공급자(가맹점) 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '360pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
            }}
            colSpan={3}
          >
            <p
              className="s7"
              style={{
                paddingTop: '4pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪ 그 밖의 신용카드 등 거래명세 합계
            </p>
          </td>
        </tr>
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              거래건수
            </p>
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              공급가액
            </p>
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              1
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '3pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              2
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              3
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              4
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '3pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              5
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              6
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '3pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              7
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              8
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              9
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              10
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              11
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '3pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              12
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              13
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '3pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              14
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '105pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s9"
              style={{
                paddingTop: '4pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              15
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '85pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                fontSize: '9pt',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
          <td
            style={{
              width: '151.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
            />
          </td>
        </tr>
      </table>
      <p
        className="s10"
        style={{
          paddingTop: '8pt',
          paddingBottom: '20pt',
          paddingLeft: '11pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ※ 기재내용이 많은 경우 별지 제16호서식(2)의 신용카드매출전표등
        수령명세서(을)에 이어서 작성합니다.
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
        (을)표추가
      </button>
    </div>
  );
}
