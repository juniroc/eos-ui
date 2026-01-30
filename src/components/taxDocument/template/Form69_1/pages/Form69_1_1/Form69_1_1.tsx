'use client';
import './form69_1_1.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import {FormPageProps} from '@/components/taxDocument/template/common/type';
import {Form6901Data, receiptPurchaseItem,} from '@/components/taxDocument/template/Form69_1/type';
import {FORM_69_1_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH} from '@/components/taxDocument/template/Form69_1/constants';

export default function Form69_1_1({
  pageIndex,
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  submitterInfo,
  purchaseSummary,
  taxBaseAndDeductible,
  deductibleTax,
  receiptPurchaseItemsTotal,
  receiptPurchaseItems,
  submissionYear,
  submissionMonth,
  submissionDay,
  applicantName,
}: FormPageProps<Form6901Data>) {
  const baseReceiptPurchaseItem: receiptPurchaseItem = {
    supplierName: '',
    supplierIdNumber: '',
    classificationCode: '',
    count: 0,
    itemName: '',
    quantity: 0,
    vehicleNumber: '',
    chassisNumber: '',
    acquisitionAmount: 0,
  };

  const mappedReceiptPurchaseItems = Array.from(
    { length: FORM_69_1_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH },
    (_, i) => receiptPurchaseItems[i] ?? baseReceiptPurchaseItem
  );

  const submitterInfoUpdater = <K extends keyof Form6901Data['submitterInfo']>(
    field: K,
    value: Form6901Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const purchaseSummaryUpdater = <
    S extends keyof Form6901Data['purchaseSummary'],
    K extends keyof Form6901Data['purchaseSummary'][S],
  >(
    section: S,
    field: K,
    value: Form6901Data['purchaseSummary'][S][K]
  ) => {
    updater('purchaseSummary', {
      ...purchaseSummary,
      [section]: {
        ...purchaseSummary[section],
        [field]: value,
      },
    });
  };

  const taxBaseUpdater = <K extends keyof Form6901Data['taxBaseAndDeductible']>(
    field: K,
    value: Form6901Data['taxBaseAndDeductible'][K]
  ) => {
    updater('taxBaseAndDeductible', {
      ...taxBaseAndDeductible,
      [field]: value,
    });
  };

  const deductibleTaxUpdater = <K extends keyof Form6901Data['deductibleTax']>(
    field: K,
    value: Form6901Data['deductibleTax'][K]
  ) => {
    updater('deductibleTax', {
      ...deductibleTax,
      [field]: value,
    });
  };

  const receiptPurchaseItemsTotalUpdater = <
    K extends keyof Form6901Data['receiptPurchaseItemsTotal'],
  >(
    field: K,
    value: Form6901Data['receiptPurchaseItemsTotal'][K]
  ) => {
    updater('receiptPurchaseItemsTotal', {
      ...receiptPurchaseItemsTotal,
      [field]: value,
    });
  };

  const receiptPurchaseItemUpdater = <
    K extends keyof Form6901Data['receiptPurchaseItems'][number],
  >(
    index: number,
    field: K,
    value: Form6901Data['receiptPurchaseItems'][number][K]
  ) => {
    const items = [...receiptPurchaseItems];
    const target = items[index] ?? baseReceiptPurchaseItem;

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('receiptPurchaseItems', items);
  };
  return (
    <div className="form-joteuk69">
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
            조세특례제한법 시행규칙
            <span className="s2">[별지 제69호서식(1)]</span>
            <span className="s3">&lt;개정 2025. 6. 30.&gt;</span>
          </p>
        </li>
      </ul>
      <p
        className="s4"
        style={{
          paddingTop: '6pt',
          paddingBottom: '6pt',
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        재활용폐자원 및 중고자동차 매입세액 공제신고서(갑)
      </p>
      <p
        className="s6"
        style={{
          paddingTop: '5pt',
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        (
        <Input
          style={{
            width: '40pt',
            minWidth: '40pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
            fontFamily: 'HY견고딕, sans-serif',
          }}
          value={attributionYear}
          onChange={value =>
            updater('attributionYear', value.replace(/[^0-9]/g, ''))
          }
        />
        년
        <Input
          style={{
            width: '20pt',
            minWidth: '20pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
            fontFamily: 'HY견고딕, sans-serif',
          }}
          value={attributionTerm}
          onChange={value =>
            updater('attributionTerm', value.replace(/[^0-9]/g, ''))
          }
        />
        기)
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '620pt',
          tableLayout: 'fixed',
          marginTop: '3pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#7E7E7E',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#7E7E7E',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '378pt',
              backgroundColor: '#C0C0C0',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '242pt',
              backgroundColor: '#C0C0C0',
              paddingLeft: '4pt',
              verticalAlign: 'middle',
            }}
          >
            <span style={{ fontFamily: '돋움, sans-serif', fontSize: '9pt' }}>
              처리기간
            </span>
            <span
              style={{
                paddingLeft: '30pt',
                fontFamily: '돋움, sans-serif',
                fontSize: '9pt',
              }}
            >
              즉시
            </span>
          </td>
        </tr>
      </table>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid black',
          margin: '2pt 0 0 0',
        }}
      />
      <ol id="l2">
        <li data-list-text="1.">
          <p
            className="s7"
            style={{
              paddingTop: '3pt',
              paddingBottom: '2pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              textAlign: 'left',
            }}
          >
            신고자 인적사항
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              marginLeft: '0',
              width: '618pt',
              tableLayout: 'fixed',
              marginBottom: '3pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '15pt' }}>
              <td
                style={{
                  width: '120pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingLeft: '8pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'left',
                  }}
                >
                  ⓛ 성 명<span className="s9">(법 인 명)</span>
                </p>
              </td>
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
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    fontSize: '10pt',
                  }}
                  value={submitterInfo.companyName}
                  onChange={value => submitterInfoUpdater('companyName', value)}
                />
              </td>
              <td
                style={{
                  width: '120pt',
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
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingLeft: '8pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'left',
                  }}
                >
                  ② 사업자등록번호
                </p>
              </td>
              <td
                style={{
                  width: '189pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    fontSize: '10pt',
                  }}
                  value={submitterInfo.bizRegNumber}
                  onChange={value =>
                    submitterInfoUpdater('bizRegNumber', value)
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '15pt' }}>
              <td
                style={{
                  width: '120pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingLeft: '8pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'left',
                  }}
                >
                  ③ 업 태
                </p>
              </td>
              <td
                style={{
                  width: '189pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    fontSize: '10pt',
                  }}
                  value={submitterInfo.bizType}
                  onChange={value => submitterInfoUpdater('bizType', value)}
                />
              </td>
              <td
                style={{
                  width: '120pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingLeft: '8pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'left',
                  }}
                >
                  ④ 종목
                </p>
              </td>
              <td
                style={{
                  width: '189pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    fontSize: '10pt',
                  }}
                  value={submitterInfo.bizItem}
                  onChange={value => submitterInfoUpdater('bizItem', value)}
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
              borderTop: '1pt solid black',
              margin: '0',
            }}
          />
        </li>
        <li data-list-text="2.">
          <p
            className="s7"
            style={{
              paddingTop: '3pt',
              paddingBottom: '2pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              textAlign: 'left',
            }}
          >
            재활용폐자원 등 매입 합계
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              marginLeft: '0',
              width: '624pt',
              tableLayout: 'fixed',
              marginBottom: '3pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '117pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  구분
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  매입처수
                </p>
              </td>
              <td
                style={{
                  width: '56pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  건수
                </p>
              </td>
              <td
                style={{
                  width: '112pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  취득금액
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  매입세액 공제액
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '117pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '9pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'left',
                  }}
                >
                  ⑤ 합 계
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.total.sellerCount}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'sellerCount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '56pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.total.count}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '112pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.total.acquisitionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'acquisitionAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '130pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.total.deductionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'deductionAmount', value)
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '117pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '9pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'left',
                  }}
                >
                  ⑥ 영 수 증 수 취 분
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.receiptReceived.sellerCount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'receiptReceived',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '56pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.receiptReceived.count}
                  onChange={value =>
                    purchaseSummaryUpdater('receiptReceived', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '112pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.receiptReceived.acquisitionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'receiptReceived',
                      'acquisitionAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '130pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.receiptReceived.deductionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'receiptReceived',
                      'deductionAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '117pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '9pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'left',
                  }}
                >
                  ⑦ 계 산 서 수 취 분
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.invoiceReceived.sellerCount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'invoiceReceived',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '56pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.invoiceReceived.count}
                  onChange={value =>
                    purchaseSummaryUpdater('invoiceReceived', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '112pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.invoiceReceived.acquisitionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'invoiceReceived',
                      'acquisitionAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '130pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={purchaseSummary.invoiceReceived.deductionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'invoiceReceived',
                      'deductionAmount',
                      value
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
              borderTop: '1pt solid black',
              margin: '0',
            }}
          />
        </li>
        <li data-list-text="3.">
          <p
            className="s7"
            style={{
              paddingTop: '3pt',
              paddingBottom: '3pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              lineHeight: '13pt',
              textAlign: 'left',
            }}
          >
            재활용폐자원 매입세액공제 관련 신고내용
          </p>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid black',
              margin: '0',
            }}
          />
          <p
            style={{
              paddingTop: '2pt',
              paddingBottom: '2pt',
              paddingLeft: '12pt',
              textIndent: '0pt',
              lineHeight: '13pt',
              textAlign: 'left',
            }}
          >
            가. 과세기간 과세표준 및 공제가능한 금액 등
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              marginLeft: '0',
              width: '624pt',
              tableLayout: 'fixed',
              marginBottom: '3pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '13pt' }}>
              <td
                style={{
                  width: '147pt',
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
                  className="s10"
                  style={{
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
                  }}
                >
                  매출액
                </p>
              </td>
              <td
                style={{
                  width: '97pt',
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
                  className="s10"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
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
                }}
                colSpan={3}
              >
                <p
                  className="s10"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
                  }}
                >
                  당기 매입액
                </p>
              </td>
              <td
                style={{
                  width: '92pt',
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
                  className="s11"
                  style={{
                    paddingTop: '6pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑯
                </p>
                <p
                  className="s10"
                  style={{
                    paddingTop: '2pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  공제가능한 금액
                </p>
                <p
                  className="s12"
                  style={{
                    paddingTop: '2pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  (=⑫-⑭)
                </p>
              </td>
            </tr>
            <tr style={{ height: '42pt' }}>
              <td
                style={{
                  width: '49pt',
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
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑧
                  <br />
                  합계
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
                }}
              >
                <p
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑨
                  <br />
                  예정분
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
                }}
              >
                <p
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑩
                  <br />
                  확정분
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
                }}
              >
                <p
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑪
                  <br />
                  한도율
                </p>
              </td>
              <td
                style={{
                  width: '49pt',
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
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑫
                  <br />
                  한도액
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
                }}
              >
                <p
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑬
                  <br />
                  합계
                </p>
              </td>
              <td
                style={{
                  width: '49pt',
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
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑭
                  <br />
                  세금 계산서
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
                }}
              >
                <p
                  className="s12"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    lineHeight: '130%',
                  }}
                >
                  ⑮
                  <br />
                  영수증 등
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '49pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.salesTotal}
                  onChange={value => taxBaseUpdater('salesTotal', value)}
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.salesScheduled}
                  onChange={value => taxBaseUpdater('salesScheduled', value)}
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
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.salesConfirmed}
                  onChange={value => taxBaseUpdater('salesConfirmed', value)}
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
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  value={taxBaseAndDeductible.limitRate}
                  onChange={value => taxBaseUpdater('limitRate', value)}
                />
              </td>
              <td
                style={{
                  width: '49pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.limitAmount}
                  onChange={value => taxBaseUpdater('limitAmount', value)}
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
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.purchaseTotal}
                  onChange={value => taxBaseUpdater('purchaseTotal', value)}
                />
              </td>
              <td
                style={{
                  width: '49pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.purchaseTaxInvoice}
                  onChange={value =>
                    taxBaseUpdater('purchaseTaxInvoice', value)
                  }
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
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.purchaseReceipts}
                  onChange={value => taxBaseUpdater('purchaseReceipts', value)}
                />
              </td>
              <td
                style={{
                  width: '92pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={taxBaseAndDeductible.deductibleAmount}
                  onChange={value => taxBaseUpdater('deductibleAmount', value)}
                />
              </td>
            </tr>
          </table>
          <p
            style={{
              paddingTop: '2pt',
              paddingBottom: '2pt',
              paddingLeft: '12pt',
              textIndent: '0pt',
              textAlign: 'left',
            }}
          >
            나. 과세기간 공제할 세액
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              marginLeft: '0',
              width: '624pt',
              tableLayout: 'fixed',
              marginBottom: '3pt',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '18pt' }}>
              <td
                style={{
                  width: '147pt',
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
                }}
                rowSpan={2}
              >
                <p
                  className="s11"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                  }}
                >
                  ⑰
                </p>
                <p
                  className="s10"
                  style={{
                    paddingLeft: '32pt',
                    paddingRight: '31pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  공제대상금액
                  <br />
                  <span className="s13">(=⑮과</span>
                  <span className="s14">⑰</span>
                  <span className="s12">⑯의 금액 중 적은 금액)</span>
                </p>
              </td>
              <td
                style={{
                  width: '97pt',
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
                }}
                colSpan={2}
              >
                <p
                  className="s10"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  공제대상세액
                </p>
              </td>
              <td
                style={{
                  width: '147pt',
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
                }}
                colSpan={3}
              >
                <p
                  className="s10"
                  style={{
                    paddingTop: '1pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  이미 공제받은 세액
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
                }}
                rowSpan={2}
              >
                <p
                  className="s14"
                  style={{
                    paddingTop: '9pt',
                    paddingLeft: '13pt',
                    paddingRight: '13pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  <span className="s11">㉓</span>
                  <span className="s10">
                    공제
                    <br />
                    (납부)할 세액
                    <br />
                  </span>
                  <span className="s13">(=</span>⑲<span className="s12">-</span>
                  ⑳<span className="s12">)</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '41pt' }}>
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
                }}
              >
                <p
                  className="s14"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
                  }}
                >
                  ⑱
                </p>
                <p
                  className="s12"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
                  }}
                >
                  공제율
                </p>
              </td>
              <td
                style={{
                  width: '49pt',
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
                }}
              >
                <p
                  className="s14"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑲
                  <br />
                  <span className="s12">
                    공제대상
                    <br />
                    세액
                  </span>
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
                }}
              >
                <p
                  className="s14"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    lineHeight: '11pt',
                    textAlign: 'center',
                  }}
                >
                  ⑳
                </p>
                <p
                  className="s12"
                  style={{
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
                  width: '53pt',
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
                }}
              >
                <p
                  className="s14"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ㉑
                  <br />
                  <span className="s12">
                    예정
                    <br />
                    신고분
                  </span>
                </p>
              </td>
              <td
                style={{
                  width: '46pt',
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
                }}
              >
                <p
                  className="s14"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '0pt',
                    paddingRight: '0pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ㉒
                  <br />
                  <span className="s12">
                    월별
                    <br />
                    조기분
                  </span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '15pt' }}>
              <td
                style={{
                  width: '147pt',
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
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={deductibleTax.deductibleTargetAmount}
                  onChange={value =>
                    deductibleTaxUpdater('deductibleTargetAmount', value)
                  }
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
                <Input
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                  }}
                  value={deductibleTax.deductionRate}
                  onChange={value =>
                    deductibleTaxUpdater('deductionRate', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '49pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={deductibleTax.deductionTaxAmount}
                  onChange={value =>
                    deductibleTaxUpdater('deductionTaxAmount', value)
                  }
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={deductibleTax.alreadyDeductedTotal}
                  onChange={value =>
                    deductibleTaxUpdater('alreadyDeductedTotal', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '53pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={deductibleTax.alreadyDeductedScheduled}
                  onChange={value =>
                    deductibleTaxUpdater('alreadyDeductedScheduled', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '46pt',
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={deductibleTax.alreadyDeductedEarly}
                  onChange={value =>
                    deductibleTaxUpdater('alreadyDeductedEarly', value)
                  }
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
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                  }}
                  value={deductibleTax.finalDeductibleTax}
                  onChange={value =>
                    deductibleTaxUpdater('finalDeductibleTax', value)
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
              borderTop: '1pt solid black',
              margin: '0',
            }}
          />
        </li>
        <li data-list-text="4.">
          <p
            className="s7"
            style={{
              paddingTop: '3pt',
              paddingBottom: '2pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              textAlign: 'left',
            }}
          >
            영수증 수취분에 대한 매입처 명세
            <span className="s15">
              (합계금액으로 기재, 단 중고자동차는 거래건별로 기재)
            </span>
          </p>
        </li>
      </ol>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
          marginBottom: '3pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '12pt' }}>
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
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s12"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              일련
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '140pt',
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
            }}
            colSpan={2}
          >
            <p
              className="s14"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              ㉔<span className="s12">공급자</span>
            </p>
          </td>
          <td
            style={{
              width: '37pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              ㉕
            </p>
            <p
              className="s12"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              구분
              <br />
              코드
              <span className="s16">*</span>
            </p>
          </td>
          <td
            style={{
              width: '28pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                paddingTop: '0pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ㉖
            </p>
            <p
              className="s12"
              style={{
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              건수
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
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                paddingTop: '0pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ㉗
            </p>
            <p
              className="s12"
              style={{
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              품명
            </p>
          </td>
          <td
            style={{
              width: '29pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                paddingTop: '0pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ㉘
            </p>
            <p
              className="s12"
              style={{
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              수량
            </p>
          </td>
          <td
            style={{
              width: '52pt',
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
              backgroundColor: '#DEF2FE',
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              ㉙
            </p>
            <p
              className="s12"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              차량번호
              <br />
              (중고자동차)
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
              backgroundColor: '#DEF2FE',
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              ㉚
            </p>
            <p
              className="s12"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              차대번호
              <br />
              (중고자동차)
            </p>
          </td>
          <td
            style={{
              width: '73pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s14"
              style={{
                paddingTop: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ㉛
            </p>
            <p
              className="s12"
              style={{
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              취득금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
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
            }}
          >
            <p
              className="s12"
              style={{
                paddingLeft: '0pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              성명 또는
            </p>
            <p
              className="s12"
              style={{
                paddingLeft: '0pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              상호
              <span className="s17">(기관명)</span>
            </p>
          </td>
          <td
            style={{
              width: '74pt',
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
            }}
          >
            <p
              className="s12"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              주민등록번호 또는
            </p>
            <p
              className="s12"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              사업자등록번호
            </p>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '169pt',
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
            }}
            colSpan={3}
          >
            <p
              className="s10"
              style={{
                paddingLeft: '0pt',
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
              width: '37pt',
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
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              value={receiptPurchaseItemsTotal.count}
              onChange={value =>
                receiptPurchaseItemsTotalUpdater('count', value)
              }
            />
          </td>
          <td
            style={{
              width: '28pt',
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
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
              value=""
              readOnly
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
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              type="text"
              value=""
              readOnly
            />
          </td>
          <td
            style={{
              width: '29pt',
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
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              value={receiptPurchaseItemsTotal.quantity}
              onChange={value =>
                receiptPurchaseItemsTotalUpdater('quantity', value)
              }
            />
          </td>
          <td
            style={{
              width: '52pt',
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
              backgroundColor: '#DEF2FE',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                backgroundColor: '#DEF2FE',
              }}
              type="text"
              value=""
              readOnly
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
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
              backgroundColor: '#DEF2FE',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                backgroundColor: '#DEF2FE',
              }}
              type="text"
              value=""
              readOnly
            />
          </td>
          <td
            style={{
              width: '73pt',
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
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
              value={receiptPurchaseItemsTotal.acquisitionAmount}
              onChange={value =>
                receiptPurchaseItemsTotalUpdater('acquisitionAmount', value)
              }
            />
          </td>
        </tr>
        {mappedReceiptPurchaseItems.map((item, index) => (
          <tr key={`receipt-purchase-item-${index}`} style={{ height: '13pt' }}>
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
                verticalAlign: 'middle',
              }}
            >
              <p
                className="s10"
                style={{
                  paddingLeft: '0pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.supplierName}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'supplierName', value)
                }
              />
            </td>
            <td
              style={{
                width: '74pt',
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
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.supplierIdNumber}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'supplierIdNumber', value)
                }
              />
            </td>
            <td
              style={{
                width: '37pt',
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
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.classificationCode}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'classificationCode', value)
                }
              />
            </td>
            <td
              style={{
                width: '28pt',
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
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.count}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'count', value)
                }
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
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.itemName}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'itemName', value)
                }
              />
            </td>
            <td
              style={{
                width: '29pt',
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
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.quantity}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'quantity', value)
                }
              />
            </td>
            <td
              style={{
                width: '52pt',
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
                backgroundColor: '#DEF2FE',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                  backgroundColor: '#DEF2FE',
                }}
                value={item.vehicleNumber ?? ''}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'vehicleNumber', value)
                }
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
                borderBottomColor: '#7E7E7E',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
                padding: '1pt',
                verticalAlign: 'middle',
                backgroundColor: '#DEF2FE',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                  backgroundColor: '#DEF2FE',
                }}
                value={item.chassisNumber ?? ''}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'chassisNumber', value)
                }
              />
            </td>
            <td
              style={{
                width: '73pt',
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
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
                value={item.acquisitionAmount}
                onChange={value =>
                  receiptPurchaseItemUpdater(index, 'acquisitionAmount', value)
                }
              />
            </td>
          </tr>
        ))}
      </table>
      <p
        style={{
          paddingLeft: '7pt',
          paddingBottom: '3pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        * 구분코드 : 1. 중고자동차, 2. 기타 재활용폐자원
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid black',
          margin: '0',
        }}
      />
      <p
        style={{
          paddingTop: '5pt',
          paddingLeft: '9pt',
          textIndent: '10pt',
          textAlign: 'left',
        }}
      >
        「조세특례제한법 시행령」 제110조제5항에 따라 재활용폐자원 및
        중고자동차에 대한 매입세액을 공 제받기 위해 신고합니다.
      </p>
      <p
        className="s18"
        style={{ paddingTop: '10pt', textIndent: '0pt', textAlign: 'right' }}
      >
        <Input
          style={{
            width: '40pt',
            minWidth: '40pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
          value={submissionYear}
          onChange={value =>
            updater('submissionYear', value.replace(/[^0-9]/g, ''))
          }
        />
        년
        <Input
          style={{
            width: '20pt',
            minWidth: '20pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
          value={submissionMonth}
          onChange={value =>
            updater('submissionMonth', value.replace(/[^0-9]/g, ''))
          }
        />
        월
        <Input
          style={{
            width: '20pt',
            minWidth: '20pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
          value={submissionDay}
          onChange={value =>
            updater('submissionDay', value.replace(/[^0-9]/g, ''))
          }
        />
        일
      </p>
      <p
        className="s19"
        style={{
          textIndent: '0pt',
          lineHeight: '13pt',
          textAlign: 'right',
          position: 'relative',
        }}
      >
        신고인
        <span style={{ paddingLeft: '40pt' }}></span>
        <Input
          style={{
            width: '100pt',
            height: '20pt',
            padding: '1.5pt',
            verticalAlign: 'middle',
            marginRight: '20pt',
          }}
          value={applicantName}
          onChange={value => updater('applicantName', value)}
        />
        <span className="signature-text">(서명 또는 인)</span>
      </p>
      <p
        className="s21"
        style={{
          paddingLeft: '5pt',
          textIndent: '0pt',
          lineHeight: '16pt',
          textAlign: 'left',
        }}
      >
        <span className="h1">세무서장</span>
        <span className="s22" style={{ paddingLeft: '30pt' }}>
          귀하
        </span>
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '2pt solid black',
          margin: '0',
        }}
      />
      <p style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '60pt',
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
              className="s23"
              style={{
                paddingTop: '10pt',
                paddingLeft: '14pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              첨부서류
            </p>
          </td>
          <td
            style={{
              width: '354pt',
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
              className="s24"
              style={{
                paddingLeft: '5pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              * 구비서류: 매입처별계산서합계표
            </p>
            <p
              className="s24"
              style={{
                paddingLeft: '12pt',
                textIndent: '-7pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              * 공급자가 5곳을 초과하는 경우(중고자동차의 경우 거래건수가 5건을
              초과하는 경우)에는 별지 제69호서식(2)에 이어서 작성합니다.
            </p>
          </td>
          <td
            style={{
              width: '67pt',
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
              className="s23"
              style={{
                paddingTop: '1pt',
                paddingLeft: '25pt',
                paddingRight: '21pt',
                textIndent: '-4pt',
                lineHeight: '13pt',
                textAlign: 'left',
              }}
            >
              수수료
              <br />
              없음
            </p>
          </td>
        </tr>
      </table>
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
        onClick={onAddPage}
      >
        (을)표추가
      </button>
    </div>
  );
}
