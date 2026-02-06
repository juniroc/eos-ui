'use client';
import './form14.css';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form14Data,
  Item,
  MoneyGrid,
} from '@/components/taxDocument/template/Form14/type';

const ITEM_ROW_COUNT = 9;

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
}: UpdaterProps<Form14Data>) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');
  const toNumber = (value: string) => {
    const digits = digitsOnly(value);
    return digits ? Number(digits) : 0;
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
        style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'center' }}
      >
        매입자발행세금계산서합계표
        <span className="s4">(갑)</span>
      </p>
      <h1
        style={{ paddingLeft: '0pt', textIndent: '0pt', textAlign: 'center' }}
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
          value={attributionYear}
          onChange={e => updater('attributionYear', digitsOnly(e.target.value))}
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
          value={attributionTerm}
          onChange={e => updater('attributionTerm', digitsOnly(e.target.value))}
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
          value={taxPeriodStartMonth}
          onChange={e =>
            updater('taxPeriodStartMonth', digitsOnly(e.target.value))
          }
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
          value={taxPeriodStartDay}
          onChange={e =>
            updater('taxPeriodStartDay', digitsOnly(e.target.value))
          }
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
          value={taxPeriodEndMonth}
          onChange={e =>
            updater('taxPeriodEndMonth', digitsOnly(e.target.value))
          }
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
          value={taxPeriodEndDay}
          onChange={e => updater('taxPeriodEndDay', digitsOnly(e.target.value))}
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
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={submitterBizNumber}
                  onChange={e => updater('submitterBizNumber', e.target.value)}
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
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={submitterCompanyName}
                  onChange={e =>
                    updater('submitterCompanyName', e.target.value)
                  }
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
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={submitterRepName}
                  onChange={e => updater('submitterRepName', e.target.value)}
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
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('transactionStartYear', digitsOnly(e.target.value))
                  }
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  년
                </span>
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('transactionStartMonth', digitsOnly(e.target.value))
                  }
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  월
                </span>
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('transactionStartDay', digitsOnly(e.target.value))
                  }
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
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('transactionEndYear', digitsOnly(e.target.value))
                  }
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  년
                </span>
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('transactionEndMonth', digitsOnly(e.target.value))
                  }
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  월
                </span>
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('transactionEndDay', digitsOnly(e.target.value))
                  }
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
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('writeYear', digitsOnly(e.target.value))
                  }
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  년
                </span>
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('writeMonth', digitsOnly(e.target.value))
                  }
                />
                <span className="s5" style={{ verticalAlign: 'middle' }}>
                  월
                </span>
                <input
                  className="form-input form-input-text"
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
                  onChange={e =>
                    updater('writeDay', digitsOnly(e.target.value))
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '30pt',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalSellerCount}
                  onChange={e =>
                    updater('totalSellerCount', toNumber(e.target.value))
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '30pt',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalInvoiceCount}
                  onChange={e =>
                    updater('totalInvoiceCount', toNumber(e.target.value))
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalSupplyPrice.trillion}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalSupplyPrice',
                      'trillion',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalSupplyPrice.tenBillion}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalSupplyPrice',
                      'tenBillion',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalSupplyPrice.million}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalSupplyPrice',
                      'million',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalSupplyPrice.thousand}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalSupplyPrice',
                      'thousand',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalSupplyPrice.one}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalSupplyPrice',
                      'one',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalTaxAmount.trillion}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalTaxAmount',
                      'trillion',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalTaxAmount.tenBillion}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalTaxAmount',
                      'tenBillion',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalTaxAmount.million}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalTaxAmount',
                      'million',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalTaxAmount.thousand}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalTaxAmount',
                      'thousand',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  type="text"
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% + 4pt)',

                    textAlign: 'center',
                    verticalAlign: 'middle',
                    marginTop: '-2pt',
                    marginBottom: '-2pt',
                  }}
                  value={totalTaxAmount.one}
                  onChange={e =>
                    updateTotalMoneyGrid(
                      'totalTaxAmount',
                      'one',
                      digitsOnly(e.target.value)
                    )
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
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={item.sellerBizNumber}
                  onChange={e =>
                    updateItemField(index, 'sellerBizNumber', e.target.value)
                  }
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
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={item.sellerCompanyName}
                  onChange={e =>
                    updateItemField(index, 'sellerCompanyName', e.target.value)
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={item.invoiceCount}
                  onChange={e =>
                    updateItemField(
                      index,
                      'invoiceCount',
                      toNumber(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.supplyPrice.trillion}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'supplyPrice',
                      'trillion',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.supplyPrice.tenBillion}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'supplyPrice',
                      'tenBillion',
                      digitsOnly(e.target.value)
                    )
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.supplyPrice.million}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'supplyPrice',
                      'million',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.supplyPrice.thousand}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'supplyPrice',
                      'thousand',
                      digitsOnly(e.target.value)
                    )
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.supplyPrice.one}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'supplyPrice',
                      'one',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.taxAmount.trillion}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'taxAmount',
                      'trillion',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.taxAmount.tenBillion}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'taxAmount',
                      'tenBillion',
                      digitsOnly(e.target.value)
                    )
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.taxAmount.million}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'taxAmount',
                      'million',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.taxAmount.thousand}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'taxAmount',
                      'thousand',
                      digitsOnly(e.target.value)
                    )
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
                <input
                  className="form-input form-input-numeric"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={item.taxAmount.one}
                  onChange={e =>
                    updateItemMoneyGrid(
                      index,
                      'taxAmount',
                      'one',
                      digitsOnly(e.target.value)
                    )
                  }
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
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={item.remark ?? ''}
                  onChange={e =>
                    updateItemField(index, 'remark', e.target.value)
                  }
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
  );
}
