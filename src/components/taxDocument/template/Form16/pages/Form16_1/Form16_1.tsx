'use client';
import '@/components/taxDocument/template/Form16/pages/Form16_1/form16_1.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import {
  Form16Data,
  Form16InputData,
  OtherCreditCardItem,
} from '@/components/taxDocument/template/Form16/type';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { FORM16_1_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH } from '@/components/taxDocument/template/Form16/constants';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Props = UpdaterProps<Form16Data> & { onAddPage: () => void } & {
  inputType?: Form16InputData;
};

export default function Form16_1({
  updater,
  inputType,
  onAddPage,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  companyName,
  bizNumber,
  repName,
  totalTransactionCount,
  totalSupplyPrice,
  totalTaxAmount,
  cashReceiptCount,
  cashReceiptSupply,
  cashReceiptTax,
  freightCardCount,
  freightCardSupply,
  freightCardTax,
  bizCreditCardCount,
  bizCreditCardSupply,
  bizCreditCardTax,
  otherCreditCardCount,
  otherCreditCardSupply,
  otherCreditCardTax,
  otherCreditCardItems,
}: Props) {
  const mappedOtherCreditCardItems: (OtherCreditCardItem | null)[] = Array.from(
    { length: FORM16_1_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH },
    (_, i) => otherCreditCardItems[i] ?? null
  );

  const otherItemUpdater = <
    K extends keyof Props['otherCreditCardItems'][number],
  >(
    index: number,
    field: K,
    value: Props['otherCreditCardItems'][number][K]
  ) => {
    const items = [...otherCreditCardItems];
    const target = items[index] ?? {};

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('otherCreditCardItems', items);
  };

  return (
    <PageSlot slotWidth={624} slotHeight={882}>
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
          style={{
            paddingLeft: '10pt',
            textIndent: '0pt',
            textAlign: 'center',
          }}
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
          <Input
            style={{
              display: 'inline-block',
              width: '32pt',
              height: '16pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            maxLength={4}
            value={attributionYear}
            onChange={value =>
              updater('attributionYear', value.replace(/[^0-9]/g, ''))
            }
            inputType={inputType?.attributionYear}
          />
          년 제
          <Input
            style={{
              display: 'inline-block',
              width: '20pt',
              height: '16pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            maxLength={2}
            value={attributionTerm}
            onChange={value =>
              updater('attributionTerm', value.replace(/[^0-9]/g, ''))
            }
            inputType={inputType?.attributionTerm}
          />
          기 (
          <Input
            style={{
              display: 'inline-block',
              width: '20pt',
              height: '16pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            maxLength={2}
            value={taxPeriodStartMonth}
            onChange={value =>
              updater('taxPeriodStartMonth', value.replace(/[^0-9]/g, ''))
            }
            inputType={inputType?.taxPeriodStartMonth}
          />
          월
          <Input
            style={{
              display: 'inline-block',
              width: '20pt',
              height: '16pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            maxLength={2}
            value={taxPeriodStartDay}
            onChange={value =>
              updater('taxPeriodStartDay', value.replace(/[^0-9]/g, ''))
            }
            inputType={inputType?.taxPeriodStartDay}
          />
          일 ~
          <Input
            style={{
              display: 'inline-block',
              width: '20pt',
              height: '16pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            maxLength={2}
            value={taxPeriodEndMonth}
            onChange={value =>
              updater('taxPeriodEndMonth', value.replace(/[^0-9]/g, ''))
            }
            inputType={inputType?.taxPeriodEndMonth}
          />
          월
          <Input
            style={{
              display: 'inline-block',
              width: '20pt',
              height: '16pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            maxLength={2}
            value={taxPeriodEndDay}
            onChange={value =>
              updater('taxPeriodEndDay', value.replace(/[^0-9]/g, ''))
            }
            inputType={inputType?.taxPeriodEndDay}
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
            ></td>
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
              <Input
                style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                value={companyName}
                onChange={value => updater('companyName', value)}
                inputType={inputType?.companyName}
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
            ></td>
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
            ></td>
            <td
              style={{
                width: '160pt',
                border: 'none',
                borderTop: '1pt solid #000',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                value={bizNumber}
                onChange={value => updater('bizNumber', value)}
                inputType={inputType?.bizNumber}
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
            ></td>
            <td
              style={{
                width: '155.5pt',
                border: 'none',
                borderBottom: '1pt solid #000',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                value={repName}
                onChange={value => updater('repName', value)}
                inputType={inputType?.repName}
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
            ></td>
            <td
              style={{
                width: '150pt',
                border: 'none',
                borderBottom: '1pt solid #000',
                padding: '0',
                verticalAlign: 'middle',
              }}
            ></td>
            <td
              style={{
                width: '1pt',
                border: 'none',
                borderBottom: '1pt solid #000',
                padding: '0',
                verticalAlign: 'middle',
              }}
            ></td>
            <td
              style={{
                width: '160pt',
                border: 'none',
                borderBottom: '1pt solid #000',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            ></td>
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
                    value={totalTransactionCount}
                    onChange={value => updater('totalTransactionCount', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.totalTransactionCount}
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
                    value={totalSupplyPrice}
                    onChange={value => updater('totalSupplyPrice', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.totalSupplyPrice}
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
                    value={totalTaxAmount}
                    onChange={value => updater('totalTaxAmount', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.totalTaxAmount}
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
                    value={cashReceiptCount}
                    onChange={value => updater('cashReceiptCount', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.cashReceiptCount}
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
                    value={cashReceiptSupply}
                    onChange={value => updater('cashReceiptSupply', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.cashReceiptSupply}
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
                    value={cashReceiptTax}
                    onChange={value => updater('cashReceiptTax', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.cashReceiptTax}
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
                    value={freightCardCount}
                    onChange={value => updater('freightCardCount', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.freightCardCount}
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
                    value={freightCardSupply}
                    onChange={value => updater('freightCardSupply', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.freightCardSupply}
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
                    value={freightCardTax}
                    onChange={value => updater('freightCardTax', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.freightCardTax}
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
                    value={bizCreditCardCount}
                    onChange={value => updater('bizCreditCardCount', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.bizCreditCardCount}
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
                    value={bizCreditCardSupply}
                    onChange={value => updater('bizCreditCardSupply', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.bizCreditCardSupply}
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
                    value={bizCreditCardTax}
                    onChange={value => updater('bizCreditCardTax', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.bizCreditCardTax}
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
                    value={otherCreditCardCount}
                    onChange={value => updater('otherCreditCardCount', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.otherCreditCardCount}
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
                    value={otherCreditCardSupply}
                    onChange={value => updater('otherCreditCardSupply', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.otherCreditCardSupply}
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
                    value={otherCreditCardTax}
                    onChange={value => updater('otherCreditCardTax', value)}
                    style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                    inputType={inputType?.otherCreditCardTax}
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
          {mappedOtherCreditCardItems.map((item, index) => (
            <tr
              key={`other-credit-card-item-${index}`}
              style={{ height: '18pt' }}
            >
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
                  {index + 1}
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
                <Input
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '18pt',
                    fontSize: '9pt',
                  }}
                  value={item?.cardMemberNumber}
                  onChange={value =>
                    otherItemUpdater(index, 'cardMemberNumber', value)
                  }
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '18pt',
                    fontSize: '9pt',
                  }}
                  value={item?.supplierBizNumber}
                  onChange={value =>
                    otherItemUpdater(index, 'supplierBizNumber', value)
                  }
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
                  value={item?.transactionCount}
                  onChange={value =>
                    otherItemUpdater(index, 'transactionCount', value)
                  }
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
                  value={item?.supplyPrice}
                  onChange={value =>
                    otherItemUpdater(index, 'supplyPrice', value)
                  }
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
                  value={item?.taxAmount}
                  onChange={value =>
                    otherItemUpdater(index, 'taxAmount', value)
                  }
                  style={{ width: 'calc(100% - 2pt)', height: '18pt' }}
                />
              </td>
            </tr>
          ))}
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
          className="print:hidden"
          id="addTableBtn"
          onClick={onAddPage}
        >
          (을)표추가
        </button>
      </div>
    </PageSlot>
  );
}
