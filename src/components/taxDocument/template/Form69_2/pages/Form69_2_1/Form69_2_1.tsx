'use client';
import 'src/components/taxDocument/template/Form69_2/pages/Form69_2_1/form69_1_1.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import {
  Form6902Data,
  ReceiptPurchaseItem,
} from '@/components/taxDocument/template/Form69_2/type';
import { FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH } from '@/components/taxDocument/template/Form69_2/constants';

export default function Form69_2_1({
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  submitterInfo,
  purchaseSummary,
  receiptPurchaseItems,
  submissionYear,
  submissionMonth,
  submissionDay,
  applicantName,
}: FormPageProps<Form6902Data>) {
  const baseReceiptPurchaseItem: ReceiptPurchaseItem = {
    supplierName: '',
    supplierIdNumber: '',
    count: 0,
    itemName: '',
    quantity: 0,
    acquisitionAmount: 0,
    deemedPurchaseTax: 0,
  };

  const mappedReceiptPurchaseItems = Array.from(
    { length: FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH },
    (_, i) => receiptPurchaseItems[i] ?? baseReceiptPurchaseItem
  );

  const submitterInfoUpdater = <
    K extends keyof Form6902Data['submitterInfo'],
  >(
    field: K,
    value: Form6902Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const purchaseSummaryUpdater = <
    S extends keyof Form6902Data['purchaseSummary'],
    K extends keyof Form6902Data['purchaseSummary'][S],
  >(
    section: S,
    field: K,
    value: Form6902Data['purchaseSummary'][S][K]
  ) => {
    updater('purchaseSummary', {
      ...purchaseSummary,
      [section]: {
        ...purchaseSummary[section],
        [field]: value,
      },
    });
  };

  const receiptPurchaseItemUpdater = <K extends keyof ReceiptPurchaseItem>(
    index: number,
    field: K,
    value: ReceiptPurchaseItem[K]
  ) => {
    const items = [...receiptPurchaseItems] as ReceiptPurchaseItem[];
    const target = items[index] ?? baseReceiptPurchaseItem;

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('receiptPurchaseItems', items);
  };
  return (
    <div className="form69">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-10pt',
              textAlign: 'left',
            }}
          >
            조세특례제한법 시행규칙[별지 제69호의2서식(1)]
            <span style={{ color: '#00F' }}>&lt;개정 2016.3.14.&gt;</span>
          </p>
        </li>
      </ul>
      <p
        className="s3"
        style={{
          paddingTop: '17pt',
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        스크랩등 매입세액 공제신고서(갑)
      </p>
      <p
        className="s4"
        style={{
          paddingTop: '8pt',
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
            height: '17pt',
            padding: '1pt',
            fontSize: '10pt',
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
            height: '17pt',
            padding: '1pt',
            fontSize: '10pt',
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
      <p style={{ paddingTop: '14pt', textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '172pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              backgroundColor: '#BABABA',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
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
              width: '178pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              verticalAlign: 'middle',
              backgroundColor: '#BABABA',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              접수일자
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              verticalAlign: 'middle',
              backgroundColor: '#BABABA',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
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
      <ol id="l2">
        <li data-list-text="1.">
          <p
            className="s6"
            style={{
              paddingTop: '5pt',
              paddingBottom: '4pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              textAlign: 'left',
              fontSize: '10pt',
              fontWeight: 'bold',
            }}
          >
            신고자 인적사항
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
            <tr style={{ height: '22pt' }}>
              <td
                style={{
                  width: '312pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: 'black',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '4pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '22pt',
                  }}
                >
                  ⓛ 성 명(법 인 명)
                </p>
                <Input
                  style={{
                    width: '140pt',
                    height: '22pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    marginLeft: '1pt',
                    float: 'right',
                  }}
                  value={submitterInfo.companyName}
                  onChange={value =>
                    submitterInfoUpdater('companyName', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '312pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: 'black',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '22pt',
                  }}
                >
                  ② 사업자등록번호
                </p>
                <Input
                  style={{
                    width: '140pt',
                    height: '22pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    marginLeft: '1pt',
                    float: 'right',
                  }}
                  value={submitterInfo.bizRegNumber}
                  onChange={value =>
                    submitterInfoUpdater('bizRegNumber', value)
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '22pt' }}>
              <td
                style={{
                  width: '312pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#181818',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '4pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '22pt',
                  }}
                >
                  ③ 업 태
                </p>
                <Input
                  style={{
                    width: '140pt',
                    height: '22pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    marginLeft: '1pt',
                    float: 'right',
                  }}
                  value={submitterInfo.bizType}
                  onChange={value => submitterInfoUpdater('bizType', value)}
                />
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
                  borderBottomColor: '#181818',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '22pt',
                  }}
                >
                  ④ 종 목
                </p>
                <Input
                  style={{
                    width: '140pt',
                    height: '22pt',
                    padding: '1.5pt',
                    verticalAlign: 'middle',
                    marginLeft: '1pt',
                    float: 'right',
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
            className="s8"
            style={{
              paddingTop: '4pt',
              paddingBottom: '4pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              textAlign: 'left',
              fontSize: '10pt',
              fontWeight: 'bold',
            }}
          >
            스크랩등 매입 합계
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
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '94pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  구분
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  매입처 수
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  건수
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  수량
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  취득금액
                </p>
              </td>
              <td
                style={{
                  width: '78pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#939393',
                  verticalAlign: 'middle',
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  의제매입세액
                </p>
              </td>
            </tr>
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '94pt',
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
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '9pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑤ 합 계
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.total.sellerCount}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'sellerCount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.total.count}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.total.quantity}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'quantity', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.total.acquisitionAmount}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'total',
                      'acquisitionAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '78pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.total.deemedPurchaseTax}
                  onChange={value =>
                    purchaseSummaryUpdater('total', 'deemedPurchaseTax', value)
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '94pt',
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
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '9pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑥ 영수증 수취분
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.receiptReceived.sellerCount}
                  onChange={value =>
                    purchaseSummaryUpdater('receiptReceived', 'sellerCount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.receiptReceived.count}
                  onChange={value =>
                    purchaseSummaryUpdater('receiptReceived', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.receiptReceived.quantity}
                  onChange={value =>
                    purchaseSummaryUpdater('receiptReceived', 'quantity', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
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
                  width: '78pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.receiptReceived.deemedPurchaseTax}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'receiptReceived',
                      'deemedPurchaseTax',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '19pt' }}>
              <td
                style={{
                  width: '94pt',
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
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    paddingLeft: '9pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑦ 계산서 수취분
                </p>
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.invoiceReceived.sellerCount}
                  onChange={value =>
                    purchaseSummaryUpdater('invoiceReceived', 'sellerCount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.invoiceReceived.count}
                  onChange={value =>
                    purchaseSummaryUpdater('invoiceReceived', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.invoiceReceived.quantity}
                  onChange={value =>
                    purchaseSummaryUpdater('invoiceReceived', 'quantity', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
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
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
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
                  width: '78pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#939393',
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
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={purchaseSummary.invoiceReceived.deemedPurchaseTax}
                  onChange={value =>
                    purchaseSummaryUpdater(
                      'invoiceReceived',
                      'deemedPurchaseTax',
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
            className="s6"
            style={{
              paddingTop: '4pt',
              paddingBottom: '3pt',
              paddingLeft: '23pt',
              textIndent: '-14pt',
              textAlign: 'left',
              fontSize: '10pt',
              fontWeight: 'bold',
            }}
          >
            영수증 수취분에 대한 매입처 명세
            <span className="s10">(합계금액으로 기재)</span>
          </p>
        </li>
      </ol>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '17pt' }}>
          <td
            style={{
              width: '31pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              일련
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '155pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
            colSpan={2}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑧ 공급자
            </p>
          </td>
          <td
            style={{
              width: '40pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑨<span className="s11">건수</span>
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑩<span className="s11">품명</span>
            </p>
          </td>
          <td
            style={{
              width: '48pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑪<span className="s11">수량</span>
            </p>
          </td>
          <td
            style={{
              width: '65pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑫<span className="s11">취득금액</span>
            </p>
          </td>
          <td
            style={{
              width: '77pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              verticalAlign: 'middle',
              padding: '0',
            }}
            rowSpan={2}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑬ 의제매입세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '63pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              성명 또는
              <br />
              상호(기관명)
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#4B4B4B',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '0',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              주민등록번호 또는
              <br />
              사업자등록번호
            </p>
          </td>
        </tr>
        {mappedReceiptPurchaseItems.map((item, index) => {
          const rowBorderTopColor = index === 0 ? '#4B4B4B' : '#787878';
          const rowBorderBottomColor =
            index === mappedReceiptPurchaseItems.length - 1
              ? '#5D5D5D'
              : '#787878';
          const rowHeight = index === 0 ? '18pt' : '19pt';

          return (
            <tr
              key={`receipt-purchase-item-${index}`}
              style={{ height: rowHeight }}
            >
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                  padding: '0',
                }}
              >
                <p
                  className="s9"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  {index + 1}
                </p>
              </td>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.supplierName}
                  onChange={value =>
                    receiptPurchaseItemUpdater(index, 'supplierName', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '92pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.supplierIdNumber}
                  onChange={value =>
                    receiptPurchaseItemUpdater(index, 'supplierIdNumber', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '40pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.count}
                  onChange={value => receiptPurchaseItemUpdater(index, 'count', value)}
                />
              </td>
              <td
                style={{
                  width: '64pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.itemName}
                  onChange={value => receiptPurchaseItemUpdater(index, 'itemName', value)}
                />
              </td>
              <td
                style={{
                  width: '48pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.quantity}
                  onChange={value => receiptPurchaseItemUpdater(index, 'quantity', value)}
                />
              </td>
              <td
                style={{
                  width: '65pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.acquisitionAmount}
                  onChange={value =>
                    receiptPurchaseItemUpdater(index, 'acquisitionAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '77pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: rowBorderBottomColor,
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '22pt',
                    padding: '1.5pt',
                  }}
                  value={item.deemedPurchaseTax}
                  onChange={value =>
                    receiptPurchaseItemUpdater(index, 'deemedPurchaseTax', value)
                  }
                />
              </td>
            </tr>
          );
        })}

      </table>
      <p
        style={{
          paddingTop: '7pt',
          paddingLeft: '9pt',
          textIndent: '10pt',
          textAlign: 'left',
        }}
      >
        「조세특례제한법 시행령」 제110조의2제4항에 따라 스크랩등에 대한
        매입세액을 공제받기 위하 여 신고합니다.
      </p>
      <p
        className="s12"
        style={{
          paddingTop: '9pt',
          paddingRight: '10pt',
          textIndent: '0pt',
          textAlign: 'right',
        }}
      >
        <Input
          style={{
            width: '40pt',
            minWidth: '40pt',
            height: '17pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
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
            height: '17pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
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
            height: '17pt',
            padding: '1pt',
            fontSize: '9pt',
            textAlign: 'center',
          }}
          value={submissionDay}
          onChange={value =>
            updater('submissionDay', value.replace(/[^0-9]/g, ''))
          }
        />
        일
      </p>
      <p
        className="s13"
        style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'right' }}
      >
        신고인
        <span style={{ marginLeft: '40pt' }}>
          <Input
            style={{
              width: '100pt',
              height: '22pt',
              padding: '1.5pt',
              verticalAlign: 'middle',
              marginRight: '20pt',
            }}
            value={applicantName}
            onChange={value => updater('applicantName', value)}
          />
        </span>
        <span className="signature-text">(서명 또는 인)</span>
      </p>
      <h1
        style={{
          paddingTop: '2pt',
          paddingBottom: '3pt',
          paddingLeft: '45pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        세무서장
        <span className="s15" style={{ marginLeft: '30pt' }}>
          귀하
        </span>
      </h1>
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
        <tr style={{ height: '29pt' }}>
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
            <p
              className="s16"
              style={{
                paddingTop: '8pt',
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
              width: '365pt',
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
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                paddingLeft: '9pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              없음
            </p>
          </td>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              verticalAlign: 'middle',
              padding: '0',
            }}
          >
            <p
              className="s16"
              style={{
                padding: '0',
                margin: '0',
                paddingLeft: '13pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              수수료
            </p>
            <p
              className="s16"
              style={{
                padding: '0',
                margin: '0',
                paddingLeft: '18pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
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
