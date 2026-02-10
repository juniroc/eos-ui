'use client';
import './form14.css';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import {
  Form14Data,
  Form14InputData,
  Item,
  MoneyGrid,
} from '@/components/taxDocument/template/Form14/type';
import { PageSlot } from '@/components/documentCreate/PageSlot';

const ITEM_ROW_COUNT = 9;

type Form14Props = UpdaterProps<Form14Data> & {
  inputType?: Form14InputData;
};

export default function Form14({
  updater,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterBizNumber,
  submitterCompanyName,
  submitterRepName,
  submitterAddress,
  transactionStartYear,
  transactionStartMonth,
  transactionStartDay,
  transactionEndYear,
  transactionEndMonth,
  transactionEndDay,
  writeYear,
  writeMonth,
  writeDay,
  totalSellerCount,
  totalInvoiceCount,
  totalSupplyPrice,
  totalTaxAmount,
  items,
  inputType,
}: Form14Props) {
  const digitsOnly = (value: string | number) =>
    String(value).replace(/[^0-9]/g, '');
  const toNumber = (value: string | number) => {
    const digits = digitsOnly(String(value));
    return digits ? Number(digits) : 0;
  };
  const toNumberValue = (value?: string | number) => {
    if (value === '' || value === undefined) return undefined;
    return Number(value);
  };

  const emptyMoneyGrid: MoneyGrid = {
    trillion: '',
    tenBillion: '',
    million: '',
    thousand: '',
    one: '',
  };

  const baseItem: Item = {
    sellerBizNumber: '',
    sellerCompanyName: '',
    invoiceCount: 0,
    supplyPrice: emptyMoneyGrid,
    taxAmount: emptyMoneyGrid,
    remark: '',
  };

  const mappedItems = Array.from({ length: ITEM_ROW_COUNT }, (_, i) => {
    return items[i] ?? baseItem;
  });

  const updateMoneyGrid = (
    grid: MoneyGrid,
    field: keyof MoneyGrid,
    value: string
  ) => ({
    ...grid,
    [field]: value,
  });

  const updateItemField = <K extends keyof Item>(
    index: number,
    field: K,
    value: Item[K]
  ) => {
    const nextItems = [...items];
    const target = nextItems[index] ?? baseItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('items', nextItems);
  };

  const updateItemMoneyGrid = (
    index: number,
    field: 'supplyPrice' | 'taxAmount',
    key: keyof MoneyGrid,
    value: string
  ) => {
    const nextItems = [...items];
    const target = nextItems[index] ?? baseItem;
    const grid = updateMoneyGrid(target[field] ?? emptyMoneyGrid, key, value);

    nextItems[index] = {
      ...target,
      [field]: grid,
    };

    updater('items', nextItems);
  };

  const updateTotalMoneyGrid = (
    field: 'totalSupplyPrice' | 'totalTaxAmount',
    key: keyof MoneyGrid,
    value: string
  ) => {
    const nextGrid = updateMoneyGrid(
      field === 'totalSupplyPrice' ? totalSupplyPrice : totalTaxAmount,
      key,
      value
    );

    updater(field, nextGrid);
  };

  return (
    <PageSlot slotWidth={624} slotHeight={882} className="form-page">
      <div className="form14">
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
              부가가치세법 시행규칙 [별지 제14호의4서식]
              <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
            </p>
          </li>
        </ul>
        <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
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
          매입자발행세금계산서합계표
          <span className="s4">(갑)</span>
        </p>
        <h1
          style={{ paddingLeft: '0pt', textIndent: '0pt', textAlign: 'center' }}
        >
          <Input
            style={{
              display: 'inline-block',
              width: '32pt',
              height: '16pt',

              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
            type="text"
            maxLength={4}
            value={attributionYear}
            onChange={value =>
              updater('attributionYear', digitsOnly(String(value)))
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
            type="text"
            maxLength={2}
            value={attributionTerm}
            onChange={value =>
              updater('attributionTerm', digitsOnly(String(value)))
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
            type="text"
            maxLength={2}
            value={taxPeriodStartMonth}
            onChange={value =>
              updater('taxPeriodStartMonth', digitsOnly(String(value)))
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
            type="text"
            maxLength={2}
            value={taxPeriodStartDay}
            onChange={value =>
              updater('taxPeriodStartDay', digitsOnly(String(value)))
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
            type="text"
            maxLength={2}
            value={taxPeriodEndMonth}
            onChange={value =>
              updater('taxPeriodEndMonth', digitsOnly(String(value)))
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
            type="text"
            maxLength={2}
            value={taxPeriodEndDay}
            onChange={value =>
              updater('taxPeriodEndDay', digitsOnly(String(value)))
            }
            inputType={inputType?.taxPeriodEndDay}
          />
          일)
        </h1>
        <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
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
            <p
              style={{
                paddingTop: '6pt',
                paddingLeft: '21pt',
                textIndent: '-12pt',
                textAlign: 'left',
              }}
            >
              제출자 인적사항
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
              <tr style={{ height: '27pt' }}>
                <td
                  style={{
                    width: '120pt',
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
                      paddingTop: '4pt',
                      paddingLeft: '6pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    ① 사업자등록번호
                  </p>
                </td>
                <td
                  style={{
                    width: '204pt',
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
                    textAlign: 'center',
                  }}
                >
                  <Input
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    type="text"
                    value={submitterBizNumber}
                    onChange={value => updater('submitterBizNumber', value)}
                    inputType={inputType?.submitterBizNumber}
                  />
                </td>
                <td
                  style={{
                    width: '120pt',
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
                      paddingTop: '4pt',
                      paddingLeft: '5pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    ② 상호(법인명)
                  </p>
                </td>
                <td
                  style={{
                    width: '180pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#808080',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                >
                  <Input
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    type="text"
                    value={submitterCompanyName}
                    onChange={value => updater('submitterCompanyName', value)}
                    inputType={inputType?.submitterCompanyName}
                  />
                </td>
              </tr>
              <tr style={{ height: '27pt' }}>
                <td
                  style={{
                    width: '120pt',
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
                      paddingTop: '4pt',
                      paddingLeft: '6pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    ③ 성명(대표자)
                  </p>
                </td>
                <td
                  style={{
                    width: '204pt',
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
                    textAlign: 'center',
                  }}
                >
                  <Input
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    type="text"
                    value={submitterRepName}
                    onChange={value => updater('submitterRepName', value)}
                    inputType={inputType?.submitterRepName}
                  />
                </td>
                <td
                  style={{
                    width: '120pt',
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
                      paddingTop: '4pt',
                      paddingLeft: '5pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    ④ 사업장 소재지
                  </p>
                </td>
                <td
                  style={{
                    width: '180pt',
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
                  <textarea
                    className="form-input form-input-address"
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(133% - 2pt)',
                      minHeight: '27pt',
                    }}
                    rows={2}
                    value={submitterAddress}
                    onChange={e => updater('submitterAddress', e.target.value)}
                  />
                </td>
              </tr>
              <tr style={{ height: '27pt' }}>
                <td
                  style={{
                    width: '120pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: '#808080',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                  }}
                >
                  <p
                    className="s5"
                    style={{
                      paddingTop: '4pt',
                      paddingLeft: '6pt',
                      textIndent: '0pt',
                      lineHeight: '11pt',
                      textAlign: 'left',
                    }}
                  >
                    ⑤ 거래기간
                  </p>
                </td>
                <td
                  style={{
                    width: '204pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: '#808080',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#808080',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                >
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '28pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={4}
                    value={transactionStartYear}
                    onChange={value =>
                      updater('transactionStartYear', digitsOnly(String(value)))
                    }
                    inputType={inputType?.transactionStartYear}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    년
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '12pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={2}
                    value={transactionStartMonth}
                    onChange={value =>
                      updater(
                        'transactionStartMonth',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.transactionStartMonth}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    월
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '12pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={2}
                    value={transactionStartDay}
                    onChange={value =>
                      updater('transactionStartDay', digitsOnly(String(value)))
                    }
                    inputType={inputType?.transactionStartDay}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    일
                  </span>
                  <span
                    className="s5"
                    style={{
                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                  >
                    ~
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '28pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={4}
                    value={transactionEndYear}
                    onChange={value =>
                      updater('transactionEndYear', digitsOnly(String(value)))
                    }
                    inputType={inputType?.transactionEndYear}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    년
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '12pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={2}
                    value={transactionEndMonth}
                    onChange={value =>
                      updater('transactionEndMonth', digitsOnly(String(value)))
                    }
                    inputType={inputType?.transactionEndMonth}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    월
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '12pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={2}
                    value={transactionEndDay}
                    onChange={value =>
                      updater('transactionEndDay', digitsOnly(String(value)))
                    }
                    inputType={inputType?.transactionEndDay}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    일
                  </span>
                </td>
                <td
                  style={{
                    width: '120pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: '#808080',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#808080',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                  }}
                >
                  <p
                    className="s5"
                    style={{
                      paddingTop: '4pt',
                      paddingLeft: '5pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    ⑥ 작성일
                  </p>
                </td>
                <td
                  style={{
                    width: '180pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: '#808080',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                >
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '28pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={4}
                    value={writeYear}
                    onChange={value =>
                      updater('writeYear', digitsOnly(String(value)))
                    }
                    inputType={inputType?.writeYear}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    년
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '12pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={2}
                    value={writeMonth}
                    onChange={value =>
                      updater('writeMonth', digitsOnly(String(value)))
                    }
                    inputType={inputType?.writeMonth}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    월
                  </span>
                  <Input
                    style={{
                      display: 'inline-block',
                      width: '12pt',
                      height: 'calc(100% - 2pt)',

                      verticalAlign: 'middle',
                      marginLeft: '2pt',
                      marginRight: '2pt',
                    }}
                    type="text"
                    maxLength={2}
                    value={writeDay}
                    onChange={value =>
                      updater('writeDay', digitsOnly(String(value)))
                    }
                    inputType={inputType?.writeDay}
                  />
                  <span className="s5" style={{ verticalAlign: 'middle' }}>
                    일
                  </span>
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
          </li>
          <li data-list-text="2.">
            <p
              style={{
                paddingTop: '7pt',
                paddingLeft: '21pt',
                textIndent: '-12pt',
                textAlign: 'left',
              }}
            >
              매입자발행세금계산서 총합계
            </p>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <table
              className="total-summary-table"
              style={{
                borderCollapse: 'collapse',
                width: '624pt',
                marginLeft: '0pt',
              }}
              cellSpacing="0"
            >
              <tr style={{ height: '48pt' }}>
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
                >
                  <p
                    style={{
                      paddingTop: '5pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    <br />
                  </p>
                  <p
                    className="s5"
                    style={{ textIndent: '0pt', textAlign: 'center' }}
                  >
                    구 분
                  </p>
                </td>
                <td
                  style={{
                    width: '33pt',
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
                    className="s5"
                    style={{
                      paddingTop: '4pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
                    ⑦
                  </p>
                  <p
                    className="s5"
                    style={{
                      paddingTop: '6pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
                    매입처수
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
                    className="s5"
                    style={{
                      paddingTop: '4pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
                    ⑧
                  </p>
                  <p
                    className="s5"
                    style={{
                      paddingTop: '6pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
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
                    className="s5"
                    style={{
                      paddingTop: '8pt',
                      paddingLeft: '48pt',
                      textIndent: '0pt',
                      textAlign: 'left',
                    }}
                  >
                    ⑨ 공급가액
                  </p>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    <tr>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          조
                        </p>
                      </td>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          십억
                        </p>
                      </td>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          백만
                        </p>
                      </td>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          천
                        </p>
                      </td>
                      <td
                        style={{
                          width: '31pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          일
                        </p>
                      </td>
                    </tr>
                  </table>
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
                    className="s5"
                    style={{
                      paddingTop: '8pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
                    ⑩ 세 액
                  </p>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    <tr>
                      <td
                        style={{
                          width: '27pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          조
                        </p>
                      </td>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          십억
                        </p>
                      </td>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          백만
                        </p>
                      </td>
                      <td
                        style={{
                          width: '29pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          천
                        </p>
                      </td>
                      <td
                        style={{
                          width: '30pt',
                          padding: '0',
                          textAlign: 'center',
                          border: 'none',
                        }}
                      >
                        <p
                          className="s5"
                          style={{
                            paddingTop: '6pt',
                            textIndent: '0pt',
                            textAlign: 'center',
                            margin: '0',
                          }}
                        >
                          일
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr style={{ height: '26pt' }}>
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
                >
                  <p
                    className="s5"
                    style={{
                      paddingTop: '6pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
                    합 계
                  </p>
                </td>
                <td
                  style={{
                    width: '33pt',
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
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: '30pt',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={totalSellerCount}
                    onChange={value =>
                      updater('totalSellerCount', toNumber(value))
                    }
                    inputType={inputType?.totalSellerCount}
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
                      height: '30pt',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={totalInvoiceCount}
                    onChange={value =>
                      updater('totalInvoiceCount', toNumber(value))
                    }
                    inputType={inputType?.totalInvoiceCount}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalSupplyPrice.trillion)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalSupplyPrice',
                        'trillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalSupplyPrice?.trillion}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalSupplyPrice.tenBillion)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalSupplyPrice',
                        'tenBillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalSupplyPrice?.tenBillion}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalSupplyPrice.million)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalSupplyPrice',
                        'million',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalSupplyPrice?.million}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalSupplyPrice.thousand)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalSupplyPrice',
                        'thousand',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalSupplyPrice?.thousand}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalSupplyPrice.one)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalSupplyPrice',
                        'one',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalSupplyPrice?.one}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalTaxAmount.trillion)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalTaxAmount',
                        'trillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalTaxAmount?.trillion}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalTaxAmount.tenBillion)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalTaxAmount',
                        'tenBillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalTaxAmount?.tenBillion}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalTaxAmount.million)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalTaxAmount',
                        'million',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalTaxAmount?.million}
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
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalTaxAmount.thousand)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalTaxAmount',
                        'thousand',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalTaxAmount?.thousand}
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
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% + 4pt)',

                      textAlign: 'center',
                      verticalAlign: 'middle',
                      marginTop: '-2pt',
                      marginBottom: '-2pt',
                    }}
                    value={toNumberValue(totalTaxAmount.one)}
                    onChange={value =>
                      updateTotalMoneyGrid(
                        'totalTaxAmount',
                        'one',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.totalTaxAmount?.one}
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
          </li>
          <li data-list-text="3.">
            <p
              style={{
                paddingTop: '8pt',
                paddingLeft: '21pt',
                textIndent: '-12pt',
                textAlign: 'left',
              }}
            >
              매입처별 명세
              <span className="s6">(합계금액으로 적음)</span>
            </p>
          </li>
        </ol>
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
          <tr style={{ height: '42pt' }}>
            <td
              style={{
                width: '30pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{
                  paddingTop: '8pt',
                  paddingLeft: '6pt',
                  paddingRight: '5pt',
                  textIndent: '4pt',
                  textAlign: 'left',
                }}
              >
                ⑪ 번호
              </p>
            </td>
            <td
              style={{
                width: '64pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{
                  paddingTop: '4pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                }}
              >
                ⑫
              </p>
              <p
                className="s5"
                style={{
                  paddingTop: '6pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                }}
              >
                사업자 등록번호
              </p>
            </td>
            <td
              style={{
                width: '61pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{
                  paddingTop: '4pt',
                  paddingLeft: '12pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                ⑬ 상 호
              </p>
              <p
                className="s5"
                style={{
                  paddingTop: '9pt',
                  paddingLeft: '12pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
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
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{
                  paddingTop: '4pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                }}
              >
                ⑭
              </p>
              <p
                className="s5"
                style={{
                  paddingTop: '9pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                }}
              >
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
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              colSpan={5}
            >
              <p
                className="s5"
                style={{
                  paddingTop: '4pt',
                  paddingLeft: '36pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                ⑮ 공급가액
              </p>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  margin: '0',
                  padding: '0',
                }}
              >
                <tr>
                  <td
                    style={{
                      width: '24pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      조
                    </p>
                  </td>
                  <td
                    style={{
                      width: '24pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      십억
                    </p>
                  </td>
                  <td
                    style={{
                      width: '25pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      백만
                    </p>
                  </td>
                  <td
                    style={{
                      width: '24pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      천
                    </p>
                  </td>
                  <td
                    style={{
                      width: '25pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      일
                    </p>
                  </td>
                </tr>
              </table>
            </td>
            <td
              style={{
                width: '122pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              colSpan={5}
            >
              <p
                className="s5"
                style={{
                  paddingTop: '4pt',
                  paddingLeft: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                }}
              >
                ⑯<span className="s5">세액</span>
              </p>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  margin: '0',
                  padding: '0',
                }}
              >
                <tr>
                  <td
                    style={{
                      width: '24pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      조
                    </p>
                  </td>
                  <td
                    style={{
                      width: '24pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      십억
                    </p>
                  </td>
                  <td
                    style={{
                      width: '25pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      백만
                    </p>
                  </td>
                  <td
                    style={{
                      width: '24pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      천
                    </p>
                  </td>
                  <td
                    style={{
                      width: '25pt',
                      padding: '0',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingTop: '8pt',
                        textIndent: '0pt',
                        textAlign: 'center',
                        margin: '0',
                      }}
                    >
                      일
                    </p>
                  </td>
                </tr>
              </table>
            </td>
            <td
              style={{
                width: '46pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
              }}
            >
              <p
                style={{
                  paddingTop: '3pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                <br />
              </p>
              <p
                className="s5"
                style={{
                  paddingLeft: '14pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                비고
              </p>
            </td>
          </tr>

          {mappedItems.map((item, index) => {
            const rowBorderTopColor = index === 0 ? '#939393' : '#ADADAD';
            const itemSupplyPrice = item.supplyPrice ?? emptyMoneyGrid;
            const itemTaxAmount = item.taxAmount ?? emptyMoneyGrid;

            return (
              <tr key={`item-row-${index}`} style={{ height: '23pt' }}>
                <td
                  style={{
                    width: '30pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
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
                      paddingTop: '4pt',
                      textIndent: '0pt',
                      textAlign: 'center',
                    }}
                  >
                    {index + 1}
                  </p>
                </td>
                <td
                  style={{
                    width: '64pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <Input
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                    }}
                    type="text"
                    value={item.sellerBizNumber}
                    onChange={value =>
                      updateItemField(index, 'sellerBizNumber', value)
                    }
                    inputType={inputType?.items?.[index]?.sellerBizNumber}
                  />
                </td>
                <td
                  style={{
                    width: '61pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <Input
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                    }}
                    type="text"
                    value={item.sellerCompanyName}
                    onChange={value =>
                      updateItemField(index, 'sellerCompanyName', value)
                    }
                    inputType={inputType?.items?.[index]?.sellerCompanyName}
                  />
                </td>
                <td
                  style={{
                    width: '34pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                    }}
                    value={item.invoiceCount}
                    onChange={value =>
                      updateItemField(index, 'invoiceCount', toNumber(value))
                    }
                    inputType={inputType?.items?.[index]?.invoiceCount}
                  />
                </td>
                <td
                  style={{
                    width: '24pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemSupplyPrice.trillion)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'supplyPrice',
                        'trillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.supplyPrice?.trillion}
                  />
                </td>
                <td
                  style={{
                    width: '24pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemSupplyPrice.tenBillion)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'supplyPrice',
                        'tenBillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={
                      inputType?.items?.[index]?.supplyPrice?.tenBillion
                    }
                  />
                </td>
                <td
                  style={{
                    width: '25pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemSupplyPrice.million)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'supplyPrice',
                        'million',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.supplyPrice?.million}
                  />
                </td>
                <td
                  style={{
                    width: '24pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemSupplyPrice.thousand)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'supplyPrice',
                        'thousand',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.supplyPrice?.thousand}
                  />
                </td>
                <td
                  style={{
                    width: '25pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemSupplyPrice.one)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'supplyPrice',
                        'one',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.supplyPrice?.one}
                  />
                </td>
                <td
                  style={{
                    width: '24pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemTaxAmount.trillion)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'taxAmount',
                        'trillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.taxAmount?.trillion}
                  />
                </td>
                <td
                  style={{
                    width: '24pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemTaxAmount.tenBillion)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'taxAmount',
                        'tenBillion',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.taxAmount?.tenBillion}
                  />
                </td>
                <td
                  style={{
                    width: '25pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemTaxAmount.million)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'taxAmount',
                        'million',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.taxAmount?.million}
                  />
                </td>
                <td
                  style={{
                    width: '24pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemTaxAmount.thousand)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'taxAmount',
                        'thousand',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.taxAmount?.thousand}
                  />
                </td>
                <td
                  style={{
                    width: '25pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1pt',
                    borderRightColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <NumericInput
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                      textAlign: 'center',
                    }}
                    value={toNumberValue(itemTaxAmount.one)}
                    onChange={value =>
                      updateItemMoneyGrid(
                        index,
                        'taxAmount',
                        'one',
                        digitsOnly(String(value))
                      )
                    }
                    inputType={inputType?.items?.[index]?.taxAmount?.one}
                  />
                </td>
                <td
                  style={{
                    width: '46pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1pt',
                    borderTopColor: rowBorderTopColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#ADADAD',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1pt',
                    borderBottomColor: '#ADADAD',
                    padding: '1pt',
                    verticalAlign: 'middle',
                  }}
                >
                  <Input
                    style={{
                      width: 'calc(100% - 2pt)',
                      height: 'calc(100% - 2pt)',
                    }}
                    type="text"
                    value={item.remark ?? ''}
                    inputType={inputType?.items?.[index]?.remark}
                    onChange={value => updateItemField(index, 'remark', value)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
          <br />
        </p>
        <table
          style={{
            borderCollapse: 'collapse',
            width: '300pt',
            marginLeft: '0pt',
          }}
          cellSpacing="0"
        >
          <tr style={{ height: '30pt' }}>
            <td
              style={{
                width: '150pt',
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
                className="s5"
                style={{
                  paddingTop: '8pt',
                  paddingLeft: '7pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                ⑰<span className="s9">관리번호(매입)</span>
              </p>
            </td>
            <td
              style={{
                width: '150pt',
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
                className="s5"
                style={{
                  paddingTop: '8pt',
                  paddingLeft: '7pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                (권번호) - (페이지번호)
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
            margin: '0 0 20pt 0',
            padding: '0',
          }}
        />
      </div>
    </PageSlot>
  );
}
