'use client';
import './form15.css';
import BusinessInfoTable from '@/components/taxDocument/template/Form15/BusinessInfoTable';
import { useState } from 'react';
import { Form15Data } from '@/components/taxDocument/template/Form15/types';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import TaxFreePurchaseAmountTable from '@/components/taxDocument/template/Form15/TaxFreePurchaseAmountTable';
import {
  baseFarmerPurchaseItem,
  mockForm15Constants,
} from '@/components/taxDocument/template/Form15/constants';
import Input from '@/components/taxDocument/template/common/Input';

export default function Form15() {
  const [data, setData] = useState<Form15Data>(mockForm15Constants);

  const farmerItems = Array.from(
    { length: 3 },
    (_, i) => data.farmerPurchaseItems[i] ?? baseFarmerPurchaseItem
  );

  const updater = <K extends keyof Form15Data>(
    field: K,
    value: Form15Data[K]
  ) => {
    setData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const farmerItemUpdater = <
    K extends keyof Form15Data['farmerPurchaseItems'][number],
  >(
    index: number,
    field: K,
    value: Form15Data['farmerPurchaseItems'][number][K]
  ) => {
    const items = [...data.farmerPurchaseItems];
    const target = items[index] ?? baseFarmerPurchaseItem;

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('farmerPurchaseItems', items);
  };

  return (
    <div className="form-15">
      <p
        className="s1"
        style={{
          paddingTop: '3pt',
          paddingLeft: '8pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        [별지 제15호서식] <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
      </p>
      <p
        className="s3"
        style={{
          paddingTop: '9pt',
          paddingBottom: '12pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        의제매입세액 공제신고서
      </p>
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          height: '5pt',
          margin: '0pt',
          padding: '0pt',
          lineHeight: '5pt',
        }}
      >
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
        <tr style={{ height: '13pt' }}>
          <td
            className="bg-[#BABABA]"
            style={{
              width: '192pt',
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
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '3pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              접수번호
            </p>
          </td>
          <td
            className={'bg-[#BABABA]'}
            style={{
              width: '166pt',
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
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '2pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              접수일
            </p>
          </td>
          <td
            className={'bg-[#BABABA]'}
            style={{
              width: '124pt',
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
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '2pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              처리기간 즉시
            </p>
          </td>
        </tr>
      </table>
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          height: '5pt',
          margin: '0pt',
          padding: '0pt',
          lineHeight: '5pt',
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
      <ol id="l1">
        <BusinessInfoTable {...data} onChange={updater} />
        <TaxFreePurchaseAmountTable {...data} onChange={updater} />
        <li data-list-text="3.">
          <h2
            style={{
              paddingTop: '1pt',
              paddingLeft: '20pt',
              textIndent: '-15pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            면세농산물등 의제매입세액 관련 신고내용
          </h2>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0',
              padding: '0',
            }}
          />
          <p
            style={{
              paddingTop: '1pt',
              textIndent: '10pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            가. 과세기간 과세표준 및 공제 가능한 금액 등
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '624pt',
              marginLeft: '0pt',
            }}
            cellSpacing={0}
          >
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '151pt',
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
                colSpan={3}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  과세표준
                </p>
              </td>
              <td
                style={{
                  width: '118pt',
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
                colSpan={2}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '21pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'left',
                  }}
                >
                  대상액 한도계산
                </p>
              </td>
              <td
                style={{
                  width: '109pt',
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
                  className="s9"
                  style={{
                    paddingTop: '10pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    fontSize: '10pt',
                  }}
                >
                  ⑲{' '}
                  <span className="s4" style={{ fontSize: '10pt' }}>
                    당기{' '}
                  </span>
                  <span className="s10" style={{ fontSize: '10pt' }}>
                    매입액
                  </span>
                </p>
              </td>
              <td
                style={{
                  width: '104pt',
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
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '9pt',
                    paddingRight: '9pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑳ <span className="s4">공제대상금액 (=</span>⑱
                  <span className="s4">과 </span>⑲
                  <span className="s4">의 금액 중 적은 금액)</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '18pt' }}>
              <td
                style={{
                  width: '51pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ⑭ 합계
                </p>
              </td>
              <td
                style={{
                  width: '50pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ⑮ 예정분
                </p>
              </td>
              <td
                style={{
                  width: '50pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ⑯<span className="s4">확정분</span>
                </p>
              </td>
              <td
                style={{
                  width: '59pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ⑰<span className="s4">한도율</span>
                </p>
              </td>
              <td
                style={{
                  width: '59pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ⑱<span className="s4">한도액</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '51pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
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
                  value={data.baseTotalAmt}
                  onChange={value => updater('baseTotalAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '50pt',
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
                  value={data.basePlannedAmt}
                  onChange={value => updater('basePlannedAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '50pt',
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
                  value={data.basePlannedAmt}
                  onChange={value => updater('basePlannedAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '59pt',
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
                <Input
                  value={data.limitRate}
                  onChange={value => updater('limitRate', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                />
              </td>
              <td
                style={{
                  width: '59pt',
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
                  value={data.limitAmt}
                  onChange={value => updater('limitAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '109pt',
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
                  value={data.currentPurchaseAmt}
                  onChange={value => updater('currentPurchaseAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '104pt',
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
                  value={data.deductibleTargetAmt}
                  onChange={value => updater('deductibleTargetAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
            </tr>
          </table>
          <p
            style={{
              paddingTop: '1pt',
              paddingLeft: '13pt',
              textIndent: '0pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            나. 과세기간 공제할 세액
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '624pt',
              marginLeft: '0pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '189pt',
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
                colSpan={2}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  공제대상세액
                </p>
              </td>
              <td
                style={{
                  width: '208pt',
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
                colSpan={3}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '58pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'left',
                  }}
                >
                  이미 공제받은 세액
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉖{' '}
                  <span className="s4">
                    공제(납부)할 세액
                    <br />
                    (=
                  </span>
                  ㉒<span className="s4">-</span>㉓<span className="s4">)</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '15pt' }}>
              <td
                style={{
                  width: '91pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '12pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉑ <span className="s4">공제율</span>
                </p>
              </td>
              <td
                style={{
                  width: '98pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '12pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉒ <span className="s4">공제대상세액</span>
                </p>
              </td>
              <td
                style={{
                  width: '71pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '12pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉓ <span className="s4">합계</span>
                </p>
              </td>
              <td
                style={{
                  width: '71pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '12pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉔ <span className="s4">예정 신고분</span>
                </p>
              </td>
              <td
                style={{
                  width: '66pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '12pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉕ <span className="s4">월별 조기분</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '91pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  value={data.deductionRate}
                  onChange={value => updater('deductionRate', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                />
              </td>
              <td
                style={{
                  width: '98pt',
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
                  value={data.deductibleTaxAmt}
                  onChange={value => updater('deductibleTaxAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '71pt',
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
                  value={data.preDeductedTotal}
                  onChange={value => updater('preDeductedTotal', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '71pt',
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
                  value={data.preDeductedPlanned}
                  onChange={value => updater('preDeductedPlanned', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '66pt',
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
                  value={data.preDeductedEarly}
                  onChange={value => updater('preDeductedEarly', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  value={data.finalDeductibleTax}
                  onChange={value => updater('finalDeductibleTax', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
            </tr>
          </table>
          <p
            style={{
              textIndent: '0pt',
              textAlign: 'left',
              height: '5pt',
              margin: '0pt',
              padding: '0pt',
              lineHeight: '5pt',
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
        <li data-list-text="4.">
          <h2
            style={{
              paddingTop: '1pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            매입시기 집중 제조업 면세농산물등 의제매입세액 관련 신고내용
          </h2>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0',
              padding: '0',
            }}
          />
          <p
            style={{
              paddingTop: '1pt',
              paddingLeft: '13pt',
              textIndent: '0pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            가. 해당 해의 1월 1일부터 12월 31일까지 과세표준 및 제2기 과세기간
            공제 가능한 금액 등
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '624pt',
              marginLeft: '0pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '28pt' }}>
              <td
                style={{
                  width: '162pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                colSpan={3}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  과세표준
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                colSpan={2}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  대상액 한도계산
                </p>
              </td>
              <td
                style={{
                  width: '145pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                colSpan={3}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    lineHeight: '92%',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  해당 해의 1월 1일부터
                  <br />
                  12월 31일까지 매입액
                </p>
              </td>
              <td
                style={{
                  width: '90pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉟{' '}
                  <span className="s4">
                    공제대상금액
                    <br />
                    (=
                  </span>
                  ㉛<span className="s4">과 </span>㉜
                  <span className="s4">
                    의 금액 중<br />
                    적은 금액)
                  </span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '17pt' }}>
              <td
                style={{
                  width: '52pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉗<span className="s4">합계</span>
                </p>
              </td>
              <td
                style={{
                  width: '55pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉘<span className="s4">제1기</span>
                </p>
              </td>
              <td
                style={{
                  width: '55pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉙<span className="s4">제2기</span>
                </p>
              </td>
              <td
                style={{
                  width: '38pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉚<span className="s4">한도율</span>
                </p>
              </td>
              <td
                style={{
                  width: '47pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉛<span className="s4">한도액</span>
                </p>
              </td>
              <td
                style={{
                  width: '48pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉜<span className="s4">합계</span>
                </p>
              </td>
              <td
                style={{
                  width: '48pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉝<span className="s4">제1기</span>
                </p>
              </td>
              <td
                style={{
                  width: '48pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㉞<span className="s4">제2기</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '52pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
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
                  value={data.manufBaseTotal}
                  onChange={value => updater('manufBaseTotal', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '55pt',
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
                  value={data.manufBaseTerm1}
                  onChange={value => updater('manufBaseTerm1', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '55pt',
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
                  value={data.manufBaseTerm2}
                  onChange={value => updater('manufBaseTerm2', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '38pt',
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
                <Input
                  value={data.manufLimitRate}
                  onChange={value => updater('manufLimitRate', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '47pt',
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
                  value={data.manufLimitAmt}
                  onChange={value => updater('manufLimitAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '48pt',
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
                  value={data.manufPurchaseTotal}
                  onChange={value => updater('manufPurchaseTotal', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '48pt',
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
                  value={data.manufPurchaseTerm1}
                  onChange={value => updater('manufPurchaseTerm1', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '48pt',
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
                  value={data.manufPurchaseTerm2}
                  onChange={value => updater('manufPurchaseTerm2', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '90pt',
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
                  value={data.manufTargetAmt}
                  onChange={value => updater('manufTargetAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
            </tr>
          </table>
          <p
            style={{
              paddingTop: '1pt',
              paddingLeft: '13pt',
              textIndent: '0pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            나. 제2기 과세기간 공제할 세액
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '624pt',
              marginLeft: '0pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '125pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                colSpan={2}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  공제대상세액
                </p>
              </td>
              <td
                style={{
                  width: '276pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                colSpan={5}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  이미 공제받은 세액
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={3}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊸
                  <span className="s4">
                    공제(납부)할 세액
                    <br />
                    (=
                  </span>
                  ㊲<span className="s4">-</span>㊳<span className="s4">)</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '12pt' }}>
              <td
                style={{
                  width: '48pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊱<span className="s4">공제율</span>
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊲<span className="s4">공제대상세액</span>
                </p>
              </td>
              <td
                style={{
                  width: '44pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊳<span className="s4">총 합계</span>
                </p>
              </td>
              <td
                style={{
                  width: '44pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊴<span className="s4">제1기</span>
                </p>
              </td>
              <td
                style={{
                  width: '188pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                colSpan={3}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '10pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  제2기
                </p>
              </td>
            </tr>
            <tr style={{ height: '12pt' }}>
              <td
                style={{
                  width: '63pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '10pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊵<span className="s4">합계</span>
                </p>
              </td>
              <td
                style={{
                  width: '63pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '10pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊶<span className="s4">예정 신고분</span>
                </p>
              </td>
              <td
                style={{
                  width: '62pt',
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
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '10pt',
                    textAlign: 'center',
                    margin: '0',
                  }}
                >
                  ㊷<span className="s4">월별 조기분</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '48pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  value={data.manufDeductionRate}
                  onChange={value => updater('manufDeductionRate', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  value={data.manufDeductibleTaxAmt}
                  onChange={value => updater('manufDeductibleTaxAmt', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '44pt',
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
                  value={data.manufPreDedTotal}
                  onChange={value => updater('manufPreDedTotal', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '44pt',
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
                  value={data.manufPreDedTerm1}
                  onChange={value => updater('manufPreDedTerm1', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '63pt',
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
                  value={data.manufPreDedTerm2Total}
                  onChange={value => updater('manufPreDedTerm2Total', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '63pt',
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
                  value={data.manufPreDedTerm2Planned}
                  onChange={value => updater('manufPreDedTerm2Planned', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '62pt',
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
                  value={data.manufPreDedTerm2Early}
                  onChange={value => updater('manufPreDedTerm2Early', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
              <td
                style={{
                  width: '81pt',
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
                  value={data.manufFinalDeductibleTax}
                  onChange={value => updater('manufFinalDeductibleTax', value)}
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                />
              </td>
            </tr>
          </table>
          <p
            style={{
              textIndent: '0pt',
              textAlign: 'left',
              height: '5pt',
              margin: '0pt',
              padding: '0pt',
              lineHeight: '5pt',
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
        <li data-list-text="5.">
          <h2
            style={{
              paddingTop: '1pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
              lineHeight: '150%',
            }}
          >
            농어민 등으로부터의 매입분에 대한 명세(합계금액으로 작성함)
          </h2>
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
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '45pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            rowSpan={2}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              일련 번호
            </p>
          </td>
          <td
            style={{
              width: '189pt',
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
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            colSpan={2}
          >
            <p
              className="s11"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
                margin: '0',
                fontSize: '9pt',
              }}
            >
              ㊹
              <span className="s8" style={{ fontSize: '9pt' }}>
                면세농산물등을 공급한 농어민 등
              </span>
            </p>
          </td>
          <td
            style={{
              width: '38pt',
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
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            rowSpan={2}
          >
            <p
              className="s11"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
                fontSize: '9pt',
              }}
            >
              ㊺
              <span className="s8" style={{ fontSize: '9pt' }}>
                건수
              </span>
            </p>
          </td>
          <td
            style={{
              width: '83pt',
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
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            rowSpan={2}
          >
            <p
              className="s11"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
                fontSize: '9pt',
              }}
            >
              ㊻
              <span className="s8" style={{ fontSize: '9pt' }}>
                품 명
              </span>
            </p>
          </td>
          <td
            style={{
              width: '45pt',
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
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            rowSpan={2}
          >
            <p
              className="s11"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
                fontSize: '9pt',
              }}
            >
              ㊼
              <span className="s8" style={{ fontSize: '9pt' }}>
                수 량
              </span>
            </p>
          </td>
          <td
            style={{
              width: '82pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            rowSpan={2}
          >
            <p
              className="s11"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
                fontSize: '9pt',
              }}
            >
              ㊽
              <span className="s8" style={{ fontSize: '9pt' }}>
                매입가액
              </span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '84pt',
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
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '0pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              성명
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
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              주민등록번호
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '234pt',
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
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '38pt',
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
              value={data.farmerPurchaseTotalCount}
              onChange={value => updater('farmerPurchaseTotalCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '83pt',
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
            <Input
              value={data.farmerPurchaseTotalItemName}
              onChange={value => updater('farmerPurchaseTotalItemName', value)}
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
            />
          </td>
          <td
            style={{
              width: '45pt',
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
              value={data.farmerPurchaseTotalQuantity}
              onChange={value => updater('farmerPurchaseTotalQuantity', value)}
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
            />
          </td>
          <td
            style={{
              width: '82pt',
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
              value={data.farmerPurchaseTotalAmt}
              onChange={value => updater('farmerPurchaseTotalAmt', value)}
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
            />
          </td>
        </tr>
        {farmerItems.map((item, index) => (
          <tr key={`farmer-item-${index}`} style={{ height: '15pt' }}>
            <td
              style={{
                width: '45pt',
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
                className="s4"
                style={{
                  paddingTop: '1pt',
                  paddingLeft: '1pt',
                  textIndent: '0pt',
                  lineHeight: '11pt',
                  textAlign: 'center',
                }}
              >
                {index + 1}
              </p>
            </td>
            <td
              style={{
                width: '84pt',
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
              <Input
                value={item.sellerName}
                onChange={value =>
                  farmerItemUpdater(index, 'sellerName', value)
                }
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                }}
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
              <Input
                value={item.sellerResNumber}
                onChange={value =>
                  farmerItemUpdater(index, 'sellerResNumber', value)
                }
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                }}
              />
            </td>
            <td
              style={{
                width: '38pt',
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
                value={item.itemCount}
                onChange={value => farmerItemUpdater(index, 'itemCount', value)}
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                }}
              />
            </td>
            <td
              style={{
                width: '83pt',
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
              <Input
                value={item.itemName}
                onChange={value => farmerItemUpdater(index, 'itemName', value)}
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                }}
              />
            </td>
            <td
              style={{
                width: '45pt',
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
                value={item.quantity}
                onChange={value => farmerItemUpdater(index, 'quantity', value)}
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                }}
              />
            </td>
            <td
              style={{
                width: '82pt',
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
                value={item.purchasePrice}
                onChange={value =>
                  farmerItemUpdater(index, 'purchasePrice', value)
                }
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                }}
              />
            </td>
          </tr>
        ))}
      </table>
      <p
        style={{
          paddingTop: '6pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        「부가가치세법 시행령」 제84조제5항에 따라 의제매입세액을 공제받기 위해
        위와 같이 신고합니다.
      </p>
      <p
        className="s12"
        style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'right' }}
      >
        <Input
          value={data.writeYear}
          onChange={value => updater('writeYear', value.replace(/[^0-9]/g, ''))}
          style={{
            width: '25pt',
            height: '18pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: '돋움, monospace',
            fontSize: '9pt',
          }}
        />
        년
        <NumericInput
          value={Number(data.writeMonth)}
          onChange={value => updater('writeMonth', value.toString())}
          maxLength={2}
          style={{
            width: '15pt',
            height: '18pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: '돋움, monospace',
            fontSize: '9pt',
          }}
        />
        월
        <NumericInput
          value={Number(data.writeDay)}
          onChange={value => updater('writeDay', value.toString())}
          maxLength={2}
          style={{
            width: '15pt',
            height: '18pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: '돋움, monospace',
            fontSize: '9pt',
          }}
        />
        일
      </p>
      <p
        style={{
          paddingTop: '2pt',
          textIndent: '0pt',
          textAlign: 'right',
          position: 'relative',
        }}
      >
        신고인
        <Input
          value={data.submitterName}
          onChange={value => updater('submitterName', value)}
          style={{
            width: '100pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 30pt',
            marginLeft: '30pt',
            background: 'transparent',
            fontFamily: '돋움, monospace',
            fontSize: '9pt',
          }}
        />
        <span className="s13">(서명 또는 인)</span>
      </p>
      <h1
        style={{
          paddingTop: '2pt',
          paddingLeft: '62pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        세 무 서 장
        <span className="s14" style={{ marginLeft: '30pt' }}>
          귀하
        </span>
      </h1>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '2pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          height: '5pt',
          margin: '0pt',
          padding: '0pt',
          lineHeight: '5pt',
        }}
      >
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
              width: '50pt',
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
              className="s15"
              style={{
                paddingTop: '6pt',
                paddingLeft: '9pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              첨부서류
            </p>
          </td>
          <td
            style={{
              width: '385pt',
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
            <ol id="l2">
              <li data-list-text="1.">
                <p
                  className="s15"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '13pt',
                    textIndent: '-11pt',
                    lineHeight: '10pt',
                    textAlign: 'left',
                  }}
                >
                  제조업을 경영하는 사업자가 농어민으로부터 면세농산물등을 직접
                  공급받는 경우: 첨부서류 없음
                </p>
              </li>
              <li data-list-text="2.">
                <p
                  className="s15"
                  style={{
                    paddingLeft: '13pt',
                    textIndent: '-11pt',
                    lineHeight: '9pt',
                    textAlign: 'left',
                  }}
                >
                  그 밖의 경우: 매입처별 계산서합계표 또는 신용카드매출전표등
                  수령명세서
                </p>
              </li>
            </ol>
          </td>
          <td
            style={{
              width: '47pt',
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
              className="s15"
              style={{
                paddingTop: '6pt',
                paddingLeft: '9pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              수수료없음
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
