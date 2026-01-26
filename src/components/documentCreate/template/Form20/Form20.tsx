'use client';
import './form20.css';
import NumericInput from '@/components/documentCreate/template/Form20/NumericInput';

export default function Form20() {
  return (
    <div className="form20">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제20호서식]
            <span style={{ color: '#00F' }}>&lt;개정 2022. 3. 18.&gt;</span>
          </p>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              textAlign: 'center',
              paddingTop: '20pt',
              paddingBottom: '15pt',
            }}
          >
            전자세금계산서 발급세액공제신고서
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
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '141pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#5D5D5D',
                  backgroundColor: '#BABABA',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '1pt',
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
                  width: '243pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#5D5D5D',
                  backgroundColor: '#BABABA',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  접수일
                </p>
              </td>
              <td
                style={{
                  width: '240pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#5D5D5D',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  backgroundColor: '#BABABA',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '2pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  처리기간 즉시
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
              margin: '0',
              padding: '0',
            }}
          />
          <ol id="l2">
            <li data-list-text="1.">
              <h2
                style={{
                  paddingTop: '6pt',
                  paddingLeft: '27pt',
                  textIndent: '-13pt',
                  textAlign: 'left',
                }}
              >
                신고인 인적사항
              </h2>
              <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                <br />
              </p>
              <table
                style={{
                  borderCollapse: 'collapse',
                  width: '624pt',
                  marginLeft: '0pt',
                  tableLayout: 'fixed',
                }}
                cellSpacing="0"
              >
                <tr style={{ height: '32pt' }}>
                  <td
                    style={{
                      width: '156pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#808080',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '5pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                      }}
                    >
                      ① 상호
                    </p>
                  </td>
                  <td
                    style={{
                      width: '156pt',
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
                  >
                    <input
                      className="form-input form-input-text"
                      style={{
                        width: 'calc(100% - 2pt)',
                        height: '20pt',
                        textAlign: 'left',
                      }}
                      type="text"
                    />
                  </td>
                  <td
                    style={{
                      width: '156pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '1pt',
                      borderLeftColor: '#808080',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#808080',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '4pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                      }}
                    >
                      ② 사업자등록번호
                    </p>
                  </td>
                  <td
                    style={{
                      width: '156pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
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
                        textAlign: 'left',
                      }}
                      type="text"
                    />
                  </td>
                </tr>
                <tr style={{ height: '32pt' }}>
                  <td
                    style={{
                      width: '156pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#808080',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#808080',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '5pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                      }}
                    >
                      ③ 성명
                    </p>
                  </td>
                  <td
                    style={{
                      width: '156pt',
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
                  >
                    <input
                      className="form-input form-input-text"
                      style={{
                        width: 'calc(100% - 2pt)',
                        height: '20pt',
                        textAlign: 'left',
                      }}
                      type="text"
                    />
                  </td>
                  <td
                    style={{
                      width: '156pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#808080',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '1pt',
                      borderLeftColor: '#808080',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#808080',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '4pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                      }}
                    >
                      ④ 전화번호
                    </p>
                  </td>
                  <td
                    style={{
                      width: '156pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#808080',
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
                        textAlign: 'left',
                      }}
                      type="text"
                    />
                  </td>
                </tr>
                <tr style={{ height: '32pt' }}>
                  <td
                    style={{
                      width: '624pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#808080',
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
                        display: 'inline-block',
                        margin: '0',
                        padding: '0',
                        paddingLeft: '5pt',
                        verticalAlign: 'middle',
                      }}
                    >
                      ⑤ 사업장 소재지
                    </p>
                    <input
                      className="form-input form-input-text"
                      style={{
                        width: '500pt',
                        height: '20pt',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginLeft: '5pt',
                        boxSizing: 'border-box',
                      }}
                      type="text"
                    />
                  </td>
                </tr>
                <tr style={{ height: '32pt' }}>
                  <td
                    style={{
                      width: '624pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#808080',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#808080',
                    }}
                    colSpan={4}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '5pt',
                        textIndent: '0pt',
                        lineHeight: '13pt',
                        textAlign: 'left',
                      }}
                    >
                      ⑥ 직전연도 사업장별 공급가액(면세공급가액 포함) 합계액
                      3억원 미만 개인사업자 여부
                    </p>
                    <p
                      className="s5"
                      style={{
                        paddingBottom: '4pt',
                        paddingLeft: '383pt',
                        textIndent: '0pt',
                        lineHeight: '13pt',
                        textAlign: 'right',
                      }}
                    >
                      [
                      <input
                        className="form-input-checkbox"
                        style={{
                          width: '18pt',
                          height: '18pt',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                        type="text"
                        data-group="personal-business"
                      />
                      ] 여, [
                      <input
                        className="form-input-checkbox"
                        style={{
                          width: '18pt',
                          height: '18pt',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                        type="text"
                        data-group="personal-business"
                      />
                      ] 부
                    </p>
                  </td>
                </tr>
              </table>
              <p
                style={{
                  paddingTop: '3pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
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
            </li>
            <li data-list-text="2.">
              <h2
                style={{
                  paddingTop: '8pt',
                  paddingLeft: '26pt',
                  textIndent: '-13pt',
                  textAlign: 'left',
                }}
              >
                전자세금계산서 발급세액공제 계산신고 내용
              </h2>
            </li>
          </ol>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
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
      <p style={{ paddingTop: '12pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <h3 style={{ paddingLeft: '18pt', textIndent: '0pt', textAlign: 'left' }}>
        가. 공제대상 세액
      </h3>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '560pt',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '41pt' }}>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑦
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '14pt',
                paddingRight: '13pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              전자세금계산서 발급건수
            </p>
          </td>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
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
              className="s5"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑧
            </p>
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              건당 공제금액
            </p>
          </td>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
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
              className="s5"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑨
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '8pt',
                paddingRight: '8pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              공제가능 세액
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '0pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              (⑦ × ⑧)
            </p>
          </td>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#4B4B4B',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑩
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '10pt',
                paddingRight: '10pt',
                textIndent: '30pt',
                lineHeight: '100%',
                textAlign: 'left',
              }}
            >
              해당 공제세액 (⑨과 ⑬ 중 적은 금액)
            </p>
          </td>
        </tr>
        <tr style={{ height: '26pt' }}>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              200원
            </p>
          </td>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
          <td
            style={{
              width: '140pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#4B4B4B',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '10pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <h3 style={{ paddingLeft: '18pt', textIndent: '0pt', textAlign: 'left' }}>
        나. 공제 한도액 계산
      </h3>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '560pt',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '44pt' }}>
          <td
            style={{
              width: '186pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑪
            </p>
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              연간 공제한도액
            </p>
          </td>
          <td
            style={{
              width: '187pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
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
              className="s5"
              style={{
                paddingTop: '4pt',
                paddingLeft: '5pt',
                paddingRight: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑫
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '5pt',
                paddingRight: '5pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              기 공제세액
            </p>
          </td>
          <td
            style={{
              width: '187pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#4B4B4B',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '4pt',
                paddingLeft: '5pt',
                paddingRight: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑬
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '18pt',
                paddingRight: '18pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              해당 과세기간 공제한도액 (⑪ - ⑫)
            </p>
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '186pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '8pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              100만원
            </p>
          </td>
          <td
            style={{
              width: '187pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
          <td
            style={{
              width: '187pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#4B4B4B',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
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
          margin: '0',
          padding: '0',
        }}
      />
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p style={{ paddingLeft: '12pt', textIndent: '0pt', textAlign: 'left' }}>
        「부가가치세법」 제47조에 따라 전자세금계산서 발급세액공제를 받기 위하여
        위와 같이 신고합니다.
      </p>
      <p
        className="s1"
        style={{
          paddingTop: '20pt',
          textIndent: '0pt',
          textAlign: 'right',
          lineHeight: '1',
          margin: '0',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: 'Arial',
            fontSize: '9pt',
            textAlign: 'center',
          }}
          type="text"
        />
        년
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: 'Arial',
            fontSize: '9pt',
            textAlign: 'center',
          }}
          type="text"
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: 'Arial',
            fontSize: '9pt',
            textAlign: 'center',
          }}
          type="text"
        />
        일
      </p>
      <p
        style={{
          paddingTop: '0pt',
          textIndent: '0pt',
          textAlign: 'right',
          lineHeight: '1',
          margin: '0',
          position: 'relative',
        }}
      >
        <span style={{ paddingRight: '30pt' }}>신고인</span>
        <input
          className="form-input form-input-text"
          style={{
            width: '100pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 20pt',
            background: '#ffffff',
            fontFamily: '돋움체, monospace',
            fontSize: '10pt',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
          type="text"
        />
        <span className="s7">(서명 또는 인)</span>
      </p>
      <h1
        style={{
          paddingTop: '0pt',
          paddingLeft: '29pt',
          textIndent: '0pt',
          textAlign: 'left',
          lineHeight: '1',
          margin: '0',
        }}
      >
        세무서장
        <span style={{ paddingLeft: '20pt' }}></span>
        <span className="s6">귀하</span>
      </h1>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
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
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '35pt' }}>
          <td
            style={{
              width: '60pt',
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
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s4"
              style={{
                paddingLeft: '12pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              첨부서류
            </p>
          </td>
          <td
            style={{
              width: '500pt',
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
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s4"
              style={{
                paddingLeft: '5pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              없음
            </p>
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
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '10pt',
                paddingRight: '15pt',
                textIndent: '-4pt',
                lineHeight: '14pt',
                textAlign: 'left',
              }}
            >
              수수료 없음
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
