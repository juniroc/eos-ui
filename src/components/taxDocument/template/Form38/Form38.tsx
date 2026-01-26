'use client';
import './form38.css';
import NumericInput from '@/components/documentCreate/template/Form38/NumericInput';

export default function Form38() {
  return (
    <div className="form38">
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
            부가가치세법 시행규칙 [별지 제38호서식(1)]
            <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p className="s3" style={{ textIndent: '0pt', textAlign: 'center' }}>
        매출처별 세금계산서합계표
        <span className="s4">(갑)</span>
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'center' }}>
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
      </p>
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
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
          <h1
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
            제출자 인적사항
          </h1>
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
            <tr style={{ height: '35pt' }}>
              <td
                style={{
                  width: '279pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={8}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '130pt',
                  }}
                >
                  ① 사업자등록번호
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 150pt)',
                    height: '20pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '205pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={4}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '110pt',
                  }}
                >
                  ② 상호(법인명)
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 130pt)',
                    height: '20pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr style={{ height: '35pt' }}>
              <td
                style={{
                  width: '279pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={8}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '130pt',
                  }}
                >
                  ③ 성명(대표자)
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 150pt)',
                    height: '20pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '205pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={4}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '110pt',
                  }}
                >
                  ④ 사업장 소재지
                </p>
                <textarea
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 130pt)',
                    height: '30pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontSize: '9pt',
                    resize: 'none',
                    overflowY: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    fontFamily: 'Arial',
                  }}
                ></textarea>
              </td>
            </tr>
            <tr style={{ height: '35pt' }}>
              <td
                style={{
                  width: '312pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={8}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                  }}
                >
                  ⑤ 거래기간
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '40pt',
                    height: '20pt',
                    minWidth: '40pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '10pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  년
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  월
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  일
                </p>
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '5pt',
                    paddingRight: '5pt',
                  }}
                >
                  ~
                </p>
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
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  년
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  월
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  일
                </p>
              </td>
              <td
                style={{
                  width: '312pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={4}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                  }}
                >
                  ⑥ 작성일
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '40pt',
                    height: '20pt',
                    minWidth: '40pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '10pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  년
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  월
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  일
                </p>
              </td>
            </tr>
          </table>
          <p
            style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}
          ></p>
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
          <p
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
            매출세금계산서 총합계
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
            <tr style={{ height: '39pt' }}>
              <td
                style={{
                  width: '122pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                colSpan={2}
              >
                <p
                  className="s6"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  구 분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '7pt',
                    paddingRight: '7pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑦
                  <br />
                  매출 처수
                </p>
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '6pt',
                    paddingRight: '6pt',
                    textIndent: '5pt',
                    textAlign: 'center',
                  }}
                >
                  ⑧
                  <br />
                  매수
                </p>
              </td>
              <td
                style={{
                  width: '147pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                colSpan={5}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑨ 공급가액
                </p>
                <p
                  className="s8"
                  style={{
                    paddingTop: '7pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <span>조</span>
                  <span>십억</span>
                  <span>백만</span>
                  <span>천</span>
                  <span>일</span>
                </p>
              </td>
              <td
                style={{
                  width: '144pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                }}
                colSpan={5}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑩ 세 액
                </p>
                <p
                  className="s8"
                  style={{
                    paddingTop: '7pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <span>조</span>
                  <span>십억</span>
                  <span>백만</span>
                  <span>천</span>
                  <span>일</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '122pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                colSpan={2}
              >
                <p
                  className="s6"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  합 계
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '59pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                rowSpan={3}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '6pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  과세기간 종료일 다음 달 11일까지 전송된 전자 세금계산서 발급분
                </p>
              </td>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '2pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  사업자등록 번호 발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '2pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  주민등록번호
                  <br />
                  발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  소 계
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '59pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                rowSpan={3}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '10pt',
                    paddingLeft: '4pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  위 전자 세금계산서 외의 발급분
                </p>
              </td>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  사업자등록 번호 발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  주민등록번호
                  <br />
                  발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  소 계
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
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
                  }}
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
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
                  }}
                />
              </td>
            </tr>
          </table>
          <p
            style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}
          ></p>
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
          <p
            style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}
          >
            과세기간 종료일 다음 달 11일까지 전송된 전자세금계산서 외 발급분
            매출처별 명세
          </p>
        </li>
      </ol>
      <p
        className="s9"
        style={{
          paddingLeft: '14pt',
          lineHeight: '150%',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        (합계금액으로 적음)
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
        <tr style={{ height: '42pt' }}>
          <td
            style={{
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingRight: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                paddingLeft: '11pt',
                paddingRight: '11pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑫
              <br />
              사업자 등록번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '6pt',
                paddingRight: '13pt',
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑬ 상호
              <br />
              (법인명)
            </p>
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '6pt',
                paddingRight: '6pt',
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑭
              <br />
              매수
            </p>
          </td>
          <td
            style={{
              width: '122pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={5}
          >
            <p
              className="s5"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '10pt',
              }}
            >
              ⑮ 공급가액
            </p>
            <p
              className="s10"
              style={{
                paddingTop: '9pt',
                textIndent: '0pt',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <span>조</span>
              <span>십억</span>
              <span>백만</span>
              <span>천</span>
              <span>일</span>
            </p>
          </td>
          <td
            style={{
              width: '123pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={5}
          >
            <p
              className="s11"
              style={{
                paddingTop: '3pt',
                paddingRight: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              ⑯
              <span className="s5" style={{ fontSize: '8pt' }}>
                세액
              </span>
            </p>
            <p
              className="s10"
              style={{
                paddingTop: '9pt',
                textIndent: '0pt',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <span>조</span>
              <span>십억</span>
              <span>백만</span>
              <span>천</span>
              <span>일</span>
            </p>
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s7"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              비고
            </p>
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              1
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              2
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              3
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              4
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              5
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '24pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '25pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
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
              }}
            />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
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
      <table
        style={{ borderCollapse: 'collapse', marginLeft: '15.594pt' }}
        cellSpacing="0"
      >
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '109pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s11"
              style={{
                paddingLeft: '7pt',
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '8pt',
              }}
            >
              ⑰
              <span className="s7" style={{ fontSize: '8pt' }}>
                관리번호(매출)
              </span>
            </p>
          </td>
          <td
            style={{
              width: '110pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s8"
              style={{
                paddingRight: '8pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              -
            </p>
          </td>
        </tr>
      </table>
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
