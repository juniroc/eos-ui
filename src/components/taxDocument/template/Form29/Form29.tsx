'use client';
import './form29.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form29Data } from '@/components/taxDocument/template/Form29/type';

export default function Form29({
  updater,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterInfo,
  vatLawPerformance,
  subTotalVatLaw,
  specialTaxLawPerformance,
  subTotalSpecialLaw,
  grandTotalSupplyPrice,
}: UpdaterProps<Form29Data>) {
  const updateSubmitterInfo = <K extends keyof Form29Data['submitterInfo']>(
    field: K,
    value: Form29Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const updateVatLawPerformance = <
    K extends keyof Form29Data['vatLawPerformance'],
  >(
    field: K,
    value: Form29Data['vatLawPerformance'][K]
  ) => {
    updater('vatLawPerformance', {
      ...vatLawPerformance,
      [field]: value,
    });
  };

  const updateSpecialTaxLawPerformance = <
    K extends keyof Form29Data['specialTaxLawPerformance'],
  >(
    field: K,
    value: Form29Data['specialTaxLawPerformance'][K]
  ) => {
    updater('specialTaxLawPerformance', {
      ...specialTaxLawPerformance,
      [field]: value,
    });
  };

  return (
    <div className="form29">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제29호서식]
            <span className="s1">&lt;개정 2023. 3. 20.&gt;</span>
          </p>
          <p
            className="s2"
            style={{
              paddingTop: '7pt',
              paddingLeft: '10pt',
              textIndent: '0pt',
              lineHeight: '21pt',
              textAlign: 'center',
              fontFamily: 'HY견고딕,serif',
            }}
          >
            영세율 매출명세서
          </p>
          <h1
            style={{
              paddingLeft: '12pt',
              textIndent: '0pt',
              lineHeight: '13pt',
              textAlign: 'center',
              fontFamily: '돋움,monospace',
              fontWeight: 'bold',
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
                fontFamily: 'Arial',
              }}
              type="text"
              value={attributionYear}
              onChange={e => updater('attributionYear', e.target.value)}
            />
            년<span style={{ paddingLeft: '10pt' }}></span>
            제
            <input
              className="form-input form-input-text"
              style={{
                width: '20pt',
                height: '20pt',
                minWidth: '20pt',
                display: 'inline-block',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              type="text"
              value={attributionTerm}
              onChange={e => updater('attributionTerm', e.target.value)}
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
                fontFamily: 'Arial',
              }}
              type="text"
              value={taxPeriodStartMonth}
              onChange={e => updater('taxPeriodStartMonth', e.target.value)}
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
                fontFamily: 'Arial',
              }}
              type="text"
              value={taxPeriodStartDay}
              onChange={e => updater('taxPeriodStartDay', e.target.value)}
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
                fontFamily: 'Arial',
              }}
              type="text"
              value={taxPeriodEndMonth}
              onChange={e => updater('taxPeriodEndMonth', e.target.value)}
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
                fontFamily: 'Arial',
              }}
              type="text"
              value={taxPeriodEndDay}
              onChange={e => updater('taxPeriodEndDay', e.target.value)}
            />
            일)
          </h1>
          <p
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
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
                className="s3"
                style={{
                  paddingBottom: '7pt',
                  paddingLeft: '25pt',
                  paddingTop: '7pt',
                  textIndent: '-12pt',
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
                <tr style={{ height: '19pt' }}>
                  <td
                    style={{
                      width: '243pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#939393',
                      borderRightStyle: 'solid',
                      borderRightWidth: '1pt',
                      padding: '1pt',
                      verticalAlign: 'middle',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      className="s4"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '6pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: '0',
                        marginRight: '5pt',
                        width: '90pt',
                      }}
                    >
                      ① 상호(법인명)
                    </span>
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
                      value={submitterInfo.companyName}
                      onChange={e =>
                        updateSubmitterInfo('companyName', e.target.value)
                      }
                    />
                  </td>
                  <td
                    style={{
                      width: '237pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '1pt',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#939393',
                      padding: '1pt',
                      verticalAlign: 'middle',
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '5pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: '0',
                        marginRight: '5pt',
                        width: '90pt',
                      }}
                    >
                      ② 사업자등록번호
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
                      value={submitterInfo.bizRegNumber}
                      onChange={e =>
                        updateSubmitterInfo('bizRegNumber', e.target.value)
                      }
                    />
                  </td>
                </tr>
                <tr style={{ height: '19pt' }}>
                  <td
                    style={{
                      width: '243pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#939393',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#939393',
                      borderRightStyle: 'solid',
                      borderRightWidth: '1pt',
                      padding: '1pt',
                      verticalAlign: 'middle',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      className="s4"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '6pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: '0',
                        marginRight: '5pt',
                        width: '90pt',
                      }}
                    >
                      ③ 성명(대표자)
                    </span>
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
                      value={submitterInfo.representativeName}
                      onChange={e =>
                        updateSubmitterInfo(
                          'representativeName',
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td
                    style={{
                      width: '237pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#939393',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '1pt',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderBottomColor: '#939393',
                      padding: '1pt',
                      verticalAlign: 'middle',
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '5pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: '0',
                        marginRight: '5pt',
                        width: '90pt',
                      }}
                    >
                      ④ 사업장 소재지
                    </p>
                    <input
                      className="form-input form-input-text"
                      style={{
                        width: 'calc(100% - 100pt)',
                        height: '20pt',
                        padding: '1pt',
                        verticalAlign: 'middle',
                        display: 'inline-block',
                        fontSize: '8pt',
                        letterSpacing: '-0.5pt',
                        fontFamily: 'Arial',
                      }}
                      type="text"
                      value={submitterInfo.address}
                      onChange={e =>
                        updateSubmitterInfo('address', e.target.value)
                      }
                    />
                  </td>
                </tr>
                <tr style={{ height: '19pt' }}>
                  <td
                    style={{
                      width: '243pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#939393',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      borderRightStyle: 'solid',
                      borderRightWidth: '1pt',
                      padding: '1pt',
                      verticalAlign: 'middle',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      className="s4"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '6pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: '0',
                        marginRight: '5pt',
                        width: '90pt',
                      }}
                    >
                      ⑤ 업태
                    </span>
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
                      value={submitterInfo.bizType}
                      onChange={e =>
                        updateSubmitterInfo('bizType', e.target.value)
                      }
                    />
                  </td>
                  <td
                    style={{
                      width: '237pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1pt',
                      borderTopColor: '#939393',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '1pt',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1pt',
                      padding: '1pt',
                      verticalAlign: 'middle',
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingTop: '1pt',
                        paddingLeft: '5pt',
                        textIndent: '0pt',
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: '0',
                        marginRight: '5pt',
                        width: '90pt',
                      }}
                    >
                      ⑥ 종목
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
                      value={submitterInfo.bizItem}
                      onChange={e =>
                        updateSubmitterInfo('bizItem', e.target.value)
                      }
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
                style={{
                  paddingTop: '7pt',
                  paddingLeft: '26pt',
                  textIndent: '-14pt',
                  textAlign: 'left',
                }}
              >
                영세율 적용 공급실적 합계
              </h2>
            </li>
          </ol>
        </li>
      </ul>
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
        <tr style={{ height: '17pt' }}>
          <td
            style={{
              width: '36pt',
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
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '3pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑦ 구분
            </p>
          </td>
          <td
            style={{
              width: '70pt',
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
              className="s4"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑧ 조문
            </p>
          </td>
          <td
            style={{
              width: '299pt',
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
              className="s4"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑨ 내 용
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '13pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑩ 금액(원)
            </p>
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '36pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            rowSpan={16}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'justify',
              }}
            >
              부 가 가 치 세 법
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            rowSpan={5}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              제21조
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              직접수출(대행수출 포함)
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art21_directExport}
              onChange={value =>
                updateVatLawPerformance('art21_directExport', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              중계무역ㆍ위탁판매ㆍ외국인도 또는 위탁가공무역 방식의 수출
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art21_intermediaryTrade}
              onChange={value =>
                updateVatLawPerformance('art21_intermediaryTrade', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              내국신용장ㆍ구매확인서에 의하여 공급하는 재화
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art21_localLC}
              onChange={value =>
                updateVatLawPerformance('art21_localLC', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              한국국제협력단, 한국국제보건의료재단 및 대한적십자사에 공급하는 해
              외반출용 재화
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art21_koicaRedCross}
              onChange={value =>
                updateVatLawPerformance('art21_koicaRedCross', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              수탁가공무역 수출용으로 공급하는 재화
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art21_processingTrade}
              onChange={value =>
                updateVatLawPerformance('art21_processingTrade', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              제22조
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              국외에서 공급하는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art22_abroadService}
              onChange={value =>
                updateVatLawPerformance('art22_abroadService', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              제23조
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              선박ㆍ항공기에 의한 외국항행용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art23_foreignNavigation}
              onChange={value =>
                updateVatLawPerformance('art23_foreignNavigation', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              국제복합운송계약에 의한 외국항행용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art23_intMultimodalTransport}
              onChange={value =>
                updateVatLawPerformance('art23_intMultimodalTransport', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            rowSpan={8}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              제24조
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              국내에서 비거주자ㆍ외국법인에 공급되는 재화 또는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_nonResidentSupply}
              onChange={value =>
                updateVatLawPerformance('art24_nonResidentSupply', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              수출재화임가공용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_exportGoodsProcessing}
              onChange={value =>
                updateVatLawPerformance('art24_exportGoodsProcessing', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              외국항행 선박ㆍ항공기 등에 공급하는 재화 또는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_foreignNavigationSupplies}
              onChange={value =>
                updateVatLawPerformance(
                  'art24_foreignNavigationSupplies',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '7pt',
                textIndent: '-1pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              국내 주재 외교공관, 영사기관, 국제연합과 이에 준하는 국제기구,
              국제 연합군 또는 미합중국군대에 공급하는 재화 또는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_diplomaticMission}
              onChange={value =>
                updateVatLawPerformance('art24_diplomaticMission', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '7pt',
                textIndent: '-5pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              「관광진흥법 시행령」에 따른 일반여행업자가 외국인 관광객에게
              공급하 는 관광알선용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_touristAgency}
              onChange={value =>
                updateVatLawPerformance('art24_touristAgency', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '7pt',
                textIndent: '-1pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              외국인전용판매장 또는 주한외국군인 등의 전용 유흥음식점에서 공급
              하는 재화 또는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_foreignerShop}
              onChange={value =>
                updateVatLawPerformance('art24_foreignerShop', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              외교관 등에게 공급하는 재화 또는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_diplomatSupply}
              onChange={value =>
                updateVatLawPerformance('art24_diplomatSupply', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
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
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              외국인환자 유치용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
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
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={vatLawPerformance.art24_foreignPatient}
              onChange={value =>
                updateVatLawPerformance('art24_foreignPatient', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '405pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪ 「부가가치세법」에 따른 영세율 적용 공급실적 합계
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={subTotalVatLaw}
              onChange={value => updater('subTotalVatLaw', value)}
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '36pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            rowSpan={9}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'justify',
              }}
            >
              조 세 특 례 제 한 법
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '22pt',
                textIndent: '-16pt',
                lineHeight: '85%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제1호
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'left',
              }}
            >
              방위산업물자 또는 「비상대비에 관한 법률」에 따라 지정된 자가 생산
              공급하는 시제품 및 자원동원으로 공급하는 용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_1_DefenseMaterials}
              onChange={value =>
                updateSpecialTaxLawPerformance(
                  'art105_1_1_DefenseMaterials',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '22pt',
                textIndent: '-16pt',
                lineHeight: '84%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제2호
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              「국군조직법」에 따라 설치된 부대 또는 기관에 공급하는 석유류
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_2_MilitaryOil}
              onChange={value =>
                updateSpecialTaxLawPerformance('art105_1_2_MilitaryOil', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '22pt',
                textIndent: '-16pt',
                lineHeight: '84%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제3호
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              도시철도건설용역
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_3_UrbanRail}
              onChange={value =>
                updateSpecialTaxLawPerformance('art105_1_3_UrbanRail', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '15pt',
                textIndent: '-9pt',
                lineHeight: '85%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제3호의2
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              국가ㆍ지방자치단체에 공급하는 사회기반시설 등
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_3_2_SocialInfra}
              onChange={value =>
                updateSpecialTaxLawPerformance(
                  'art105_1_3_2_SocialInfra',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '22pt',
                textIndent: '-16pt',
                lineHeight: '85%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제4호
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              장애인용 보장구 및 장애인용 특수 정보통신기기 등
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_4_DisabledEquipment}
              onChange={value =>
                updateSpecialTaxLawPerformance(
                  'art105_1_4_DisabledEquipment',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '22pt',
                textIndent: '-16pt',
                lineHeight: '85%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제5호
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'left',
              }}
            >
              농민 또는 임업에 종사하는 자에게 공급하는 농업용ㆍ축산업용ㆍ임업용
              기자재
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_5_FarmersEquipment}
              onChange={value =>
                updateSpecialTaxLawPerformance(
                  'art105_1_5_FarmersEquipment',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '22pt',
                textIndent: '-16pt',
                lineHeight: '85%',
                textAlign: 'left',
              }}
            >
              제105조제1항 제6호
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              어민에게 공급하는 어업용 기자재
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art105_1_6_FisheryEquipment}
              onChange={value =>
                updateSpecialTaxLawPerformance(
                  'art105_1_6_FisheryEquipment',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              제107조
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '4pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              외국인 관광객 등에게 공급하는 재화
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art107_ForeignTouristGoods}
              onChange={value =>
                updateSpecialTaxLawPerformance(
                  'art107_ForeignTouristGoods',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
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
              className="s4"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              제121조의13
            </p>
          </td>
          <td
            style={{
              width: '299pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
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
              className="s4"
              style={{
                paddingLeft: '7pt',
                textIndent: '-1pt',
                lineHeight: '11pt',
                textAlign: 'left',
              }}
            >
              제주특별자치도 면세품판매장에서 판매하거나 제주특별자치도 면세품
              판매장에 공급하는 물품
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
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
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={specialTaxLawPerformance.art121_13_JejuDutyFree}
              onChange={value =>
                updateSpecialTaxLawPerformance('art121_13_JejuDutyFree', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '405pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '45pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑫ 「조세특례제한법」 및 그 밖의 법률에 따른 영세율 적용 공급실적
              합계
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={subTotalSpecialLaw}
              onChange={value => updater('subTotalSpecialLaw', value)}
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '405pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑬ 영세율 적용 공급실적 총 합계 ⑪+⑫
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                height: '16pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={grandTotalSupplyPrice}
              onChange={value => updater('grandTotalSupplyPrice', value)}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
