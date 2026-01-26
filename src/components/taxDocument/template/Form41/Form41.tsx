'use client';
import './form41.css';
import NumericInput from '@/components/documentCreate/template/Form41/NumericInput';

export default function Form41() {
  return (
    <div className="form41">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '19pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제41호서식(1)]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s1"
        style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'center' }}
      >
        내국신용장
        <span className="h1">ㆍ</span>
        구매확인서 전자발급명세서
        <span className="s2">(갑)</span>
      </p>
      <h3
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
      </h3>
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
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
          backgroundColor: '#C0C0C0',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '0.5pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '3pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              접수번호
            </p>
          </td>
          <td
            style={{
              width: '324pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '0.5pt',
              borderLeftColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '0.5pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '3pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              접수일
            </p>
          </td>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '0.5pt',
              borderLeftColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '3pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              처리기간 즉시
            </p>
          </td>
        </tr>
      </table>
      <p
        style={{ paddingTop: '10pt', textIndent: '0pt', textAlign: 'left' }}
      ></p>
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <hr
          style={{
            width: '624pt',
            border: 'none',
            borderTop: '1pt solid #000',
            margin: '0 auto',
          }}
        />
      </p>
      <ol id="l2">
        <li data-list-text="1.">
          <p
            className="s4"
            style={{
              paddingTop: '3pt',
              paddingBottom: '3pt',
              paddingLeft: '22pt',
              textIndent: '-13pt',
              textAlign: 'left',
            }}
          >
            제출자 인적사항
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
            <tr style={{ height: '24pt' }}>
              <td
                style={{
                  width: '19pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ①
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  상호
                  <span className="s6">(법인명)</span>
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  textAlign: 'right',
                }}
                colSpan={5}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '187pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '19pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ②
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '3pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  }}
                >
                  사업자등록번호
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  padding: '1.5pt',
                  textAlign: 'right',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '187pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr style={{ height: '24pt' }}>
              <td
                style={{
                  width: '19pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ③
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  성명
                  <span className="s6">(대표자)</span>
                </p>
              </td>
              <td
                style={{
                  width: '200pt',
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
                  textAlign: 'right',
                }}
                colSpan={5}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '197pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '19pt',
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
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ④
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  }}
                >
                  사업장 소재지
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  padding: '1.5pt',
                  textAlign: 'right',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '187pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr style={{ height: '24pt' }}>
              <td
                style={{
                  width: '19pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑤
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  업태
                </p>
              </td>
              <td
                style={{
                  width: '200pt',
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
                  textAlign: 'right',
                }}
                colSpan={5}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '197pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
              <td
                style={{
                  width: '19pt',
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
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑥
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  }}
                >
                  종목
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  padding: '1.5pt',
                  textAlign: 'right',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '187pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr style={{ height: '30pt' }}>
              <td
                style={{
                  width: '19pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑦
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  거래기간
                </p>
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '28pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                  type="text"
                  maxLength={4}
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  년
                </span>
              </td>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '18pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                  type="text"
                  maxLength={2}
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  월
                </span>
              </td>
              <td
                style={{
                  width: '45pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '18pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                  type="text"
                  maxLength={2}
                />
                <span
                  className="s5"
                  style={{ paddingLeft: '3pt', verticalAlign: 'middle' }}
                >
                  일
                </span>
                <span
                  className="s5"
                  style={{ paddingLeft: '3pt', verticalAlign: 'middle' }}
                >
                  ~
                </span>
              </td>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '18pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                  type="text"
                  maxLength={2}
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  월
                </span>
              </td>
              <td
                style={{
                  width: '24pt',
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
                  textAlign: 'left',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '18pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                  type="text"
                  maxLength={2}
                />
                <span
                  className="s5"
                  style={{ paddingLeft: '3pt', verticalAlign: 'middle' }}
                >
                  일
                </span>
              </td>
              <td
                style={{
                  width: '19pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑧
                </p>
              </td>
              <td
                style={{
                  width: '70pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  작성일
                </p>
              </td>
              <td
                style={{
                  width: '190pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  textAlign: 'right',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '187pt',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
          <p
            style={{
              paddingLeft: '5pt',
              textIndent: '0pt',
              lineHeight: '1pt',
              textAlign: 'left',
            }}
          >
            <span>
              <hr
                style={{
                  width: '624pt',
                  border: 'none',
                  borderTop: '1pt solid #000',
                  margin: '0 auto',
                }}
              />
            </span>
          </p>
        </li>
        <li data-list-text="2.">
          <h3
            style={{
              paddingTop: '3pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
              marginBottom: '3pt',
            }}
          >
            내국신용장ㆍ구매확인서에 의한 공급실적 합계
          </h3>
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
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '144pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  구분
                </p>
              </td>
              <td
                style={{
                  width: '118pt',
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
                }}
              >
                <p
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  건 수
                </p>
              </td>
              <td
                style={{
                  width: '163pt',
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
                }}
              >
                <p
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  금액(원)
                </p>
              </td>
              <td
                style={{
                  width: '55pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  비고
                </p>
              </td>
            </tr>
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '144pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑨ 합 계(=⑩+⑪)
                </p>
              </td>
              <td
                style={{
                  width: '118pt',
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
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                />
              </td>
              <td
                style={{
                  width: '163pt',
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
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  padding: '1.5pt',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '144pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑩ 내 국 신 용 장
                </p>
              </td>
              <td
                style={{
                  width: '118pt',
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
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                />
              </td>
              <td
                style={{
                  width: '163pt',
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
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  padding: '1.5pt',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '144pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑪ 구 매 확 인 서
                </p>
              </td>
              <td
                style={{
                  width: '118pt',
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
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                />
              </td>
              <td
                style={{
                  width: '163pt',
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
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
          <p
            style={{
              paddingLeft: '5pt',
              textIndent: '0pt',
              lineHeight: '1pt',
              textAlign: 'left',
            }}
          >
            <span>
              <hr
                style={{
                  width: '624pt',
                  border: 'none',
                  borderTop: '1pt solid #000',
                  margin: '0 auto',
                }}
              />
            </span>
          </p>
        </li>
        <li data-list-text="3.">
          <h3
            style={{
              paddingTop: '3pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
              marginBottom: '3pt',
            }}
          >
            내국신용장ㆍ구매확인서에 의한 공급실적 명세서
          </h3>
        </li>
      </ol>
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
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑫
            </p>
            <p
              className="s7"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              번호
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑬
            </p>
            <p
              className="s7"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '76pt',
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
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑭
            </p>
            <p
              className="s7"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              서류번호
            </p>
          </td>
          <td
            style={{
              width: '56pt',
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
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑮
            </p>
            <p
              className="s7"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              발급일
            </p>
          </td>
          <td
            style={{
              width: '98pt',
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
          >
            <p
              className="s8"
              style={{
                paddingTop: '1pt',
                paddingLeft: '14pt',
                paddingRight: '8pt',
                textIndent: '-5pt',
                lineHeight: '13pt',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '8pt' }}>⑯</span>
              <span className="s7">공급받는 자의 사업자등록번호</span>
            </p>
          </td>
          <td
            style={{
              width: '99pt',
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
          >
            <p
              className="s8"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              ⑰
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
              }}
            >
              금액(원)
            </p>
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
          >
            <p
              className="s8"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              ⑱
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
              }}
            >
              비고
            </p>
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '47pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '76pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '56pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '98pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '99pt',
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
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
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
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '47pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '76pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '56pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '98pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '99pt',
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
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
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
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '47pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '76pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '56pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '98pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '99pt',
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
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
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
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '47pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '76pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '56pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '98pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '99pt',
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
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
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
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1.5pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              padding: '1.5pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '76pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '56pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '98pt',
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
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '99pt',
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
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
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
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1.5pt',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
            />
          </td>
        </tr>
      </table>
      <p
        className="s9"
        style={{
          paddingTop: '5pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          lineHeight: '125%',
          textAlign: 'left',
        }}
      >
        「부가가치세법 시행령」 제101조제1항의 표 제3호가목에 따라 내국신용장
        <span className="s10">ㆍ</span>
        구매확인서 전자발급 명세서를 제출합니다.
      </p>
      <p
        className="s3"
        style={{ paddingTop: '15pt', textIndent: '0pt', textAlign: 'right' }}
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
            fontSize: '9pt',
          }}
          type="text"
          maxLength={4}
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
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '9pt',
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
            fontSize: '9pt',
          }}
          type="text"
          maxLength={2}
        />
        일
      </p>
      <p
        className="s9"
        style={{
          paddingTop: '3pt',
          textIndent: '0pt',
          textAlign: 'right',
          position: 'relative',
        }}
      >
        제출자
        <span style={{ paddingLeft: '30pt' }}></span>
        <input
          className="form-input form-input-text"
          style={{
            width: '100pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            position: 'relative',
            top: '0',
            left: '0',
            marginRight: '20pt',
          }}
          type="text"
        />
        <span className="s11" style={{ color: '#C0C0C0', fontSize: '8pt' }}>
          (서명 또는 인)
        </span>
      </p>
      <h2
        style={{
          paddingTop: '1pt',
          paddingBottom: '3pt',
          paddingLeft: '96pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        세 무 서 장<span style={{ paddingLeft: '30pt' }}></span>
        <span className="s12">귀하</span>
      </h2>
      <p
        style={{
          paddingLeft: '5pt',
          textIndent: '0pt',
          lineHeight: '1pt',
          textAlign: 'left',
        }}
      >
        <span>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '2pt solid #000',
              margin: '0 auto',
            }}
          />
        </span>
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
