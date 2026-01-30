'use client';
import './Form69_2_2.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import {
  Form6902Data,
  ReceiptPurchaseItem,
} from '@/components/taxDocument/template/Form69_2/type';
import {
  FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
  FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
} from '@/components/taxDocument/template/Form69_2/constants';

export default function Form69_2_2({
  pageIndex,
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  submitterInfo,
  receiptPurchaseItems,
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

  const startIndex =
    FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH +
    pageIndex * FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH;

  const mappedReceiptPurchaseItems = Array.from(
    { length: FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH },
    (_, i) => receiptPurchaseItems[startIndex + i] ?? baseReceiptPurchaseItem
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

  const receiptPurchaseItemUpdater = <K extends keyof ReceiptPurchaseItem>(
    absIndex: number,
    field: K,
    value: ReceiptPurchaseItem[K]
  ) => {
    const items = [...receiptPurchaseItems] as ReceiptPurchaseItem[];
    const target = items[absIndex] ?? baseReceiptPurchaseItem;

    items[absIndex] = {
      ...target,
      [field]: value,
    };

    updater('receiptPurchaseItems', items);
  };
  return (
    <div className="form-joteuk69_2_2">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-10pt',
              textAlign: 'left',
            }}
          >
            조세특례제한법 시행규칙[별지 제69호의2서식(2)]
            <span style={{ color: '#00F' }}>&lt;개정 2016.3.14.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        스크랩등 매입세액 공제신고서(을)
      </p>
      <p
        className="s5"
        style={{
          paddingTop: '12pt',
          paddingBottom: '1pt',
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
            fontSize: '11pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
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
            fontSize: '11pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
          value={attributionTerm}
          onChange={value =>
            updater('attributionTerm', value.replace(/[^0-9]/g, ''))
          }
        />
        기
        <Input
          style={{
            width: '20pt',
            minWidth: '20pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '11pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
          value={attributionTerm}
          onChange={value =>
            updater('attributionTerm', value.replace(/[^0-9]/g, ''))
          }
        />
        )
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: '15pt',
          width: '350pt',
          tableLayout: 'fixed',
          height: '15pt',
          border: '1.5pt solid black',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '150pt',
              verticalAlign: 'middle',
              textAlign: 'center',
              borderRight: '1pt solid #7E7E7E',
              padding: '0',
            }}
          >
            <p
              style={{
                fontFamily: '돋움, monospace',
                fontSize: '11pt',
                textAlign: 'center',
                margin: '0',
                padding: '0',
                lineHeight: '1',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{ width: '200pt', padding: '1pt', verticalAlign: 'middle' }}
          >
            <Input
              style={{
                width: 'calc(100% - 2pt)',
                height: '13pt',
                padding: '1pt',
                fontFamily: 'Arial, sans-serif',
                fontSize: '10pt',
              }}
              value={submitterInfo.bizRegNumber}
              onChange={value => submitterInfoUpdater('bizRegNumber', value)}
            />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '12pt' }}>
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
              className="s6"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
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
              className="s6"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
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
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑨<span className="s8">건수</span>
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
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑩<span className="s8">품명</span>
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
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑪<span className="s8">수량</span>
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
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑫<span className="s8">취득금액</span>
            </p>
          </td>
          <td
            style={{
              width: '76pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
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
              className="s6"
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
        <tr style={{ height: '22pt' }}>
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
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
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
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
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

          return (
            <tr key={`receipt-purchase-item-${startIndex + index}`} style={{ height: '20pt' }}>
              <td
                style={{
                  width: '31pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                  padding: '0',
                }}
              >
                <p
                  className="s6"
                  style={{
                    padding: '0',
                    margin: '0',
                    textIndent: '0pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  {startIndex + index + 1}
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
                  borderBottomColor: '#787878',
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
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.supplierName}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'supplierName',
                      value
                    )
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
                  borderBottomColor: '#787878',
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
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.supplierIdNumber}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'supplierIdNumber',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '45pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
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
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.count}
                  onChange={value =>
                    receiptPurchaseItemUpdater(startIndex + index, 'count', value)
                  }
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
                  borderBottomColor: '#787878',
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
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.itemName}
                  onChange={value =>
                    receiptPurchaseItemUpdater(startIndex + index, 'itemName', value)
                  }
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
                  borderBottomColor: '#787878',
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
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.quantity}
                  onChange={value =>
                    receiptPurchaseItemUpdater(startIndex + index, 'quantity', value)
                  }
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
                  borderBottomColor: '#787878',
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
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.acquisitionAmount}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'acquisitionAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '76pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1.5pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.deemedPurchaseTax}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'deemedPurchaseTax',
                      value
                    )
                  }
                />
              </td>
            </tr>
          );
        })}

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
        페이지추가
      </button>
    </div>
  );
}
