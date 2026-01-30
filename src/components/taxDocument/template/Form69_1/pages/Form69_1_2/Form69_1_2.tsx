'use client';
import './form69_1_2.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import {
  Form6901Data,
  receiptPurchaseItem,
} from '@/components/taxDocument/template/Form69_1/type';
import {
  FORM_69_1_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
  FORM_69_1_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
} from '@/components/taxDocument/template/Form69_1/constants';

export default function Form69_1_2({
  pageIndex,
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  submitterInfo,
  receiptPurchaseItems,
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

  const startIndex =
    FORM_69_1_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH +
    pageIndex * FORM_69_1_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH;

  const mappedReceiptPurchaseItems = Array.from(
    { length: FORM_69_1_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH },
    (_, i) => receiptPurchaseItems[startIndex + i] ?? baseReceiptPurchaseItem
  );

  const submitterInfoUpdater = <
    K extends keyof Form6901Data['submitterInfo'],
  >(
    field: K,
    value: Form6901Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const receiptPurchaseItemUpdater = <
    K extends keyof Form6901Data['receiptPurchaseItems'][number],
  >(
    absIndex: number,
    field: K,
    value: Form6901Data['receiptPurchaseItems'][number][K]
  ) => {
    const items = [...receiptPurchaseItems];
    const target = items[absIndex] ?? baseReceiptPurchaseItem;

    items[absIndex] = {
      ...target,
      [field]: value,
    };

    updater('receiptPurchaseItems', items);
  };
  return (
    <div className="form-joteuk69_2">
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
            조세특례제한법 시행규칙 [별지 제69호서식(2)]
            <span style={{ color: '#00F' }}>&lt;개정 2019. 3. 20.&gt;</span>
          </p>
        </li>
      </ul>
      <p
        className="s3"
        style={{
          paddingTop: '9pt',
          textIndent: '0pt',
          lineHeight: '22pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        재활용폐자원 및 중고자동차 매입세액 공제신고서
        <span className="s3" style={{ fontFamily: 'HY견고딕, sans-serif' }}>
          (을)
        </span>
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        className="s5"
        style={{
          textIndent: '0pt',
          lineHeight: '14pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        (
        <Input
          style={{
            width: '30pt',
            minWidth: '30pt',
            height: '15pt',
            padding: '1pt',
            fontSize: '10pt',
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
            fontSize: '10pt',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
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
          marginLeft: 'auto',
          marginRight: '20pt',
          width: '350pt',
          tableLayout: 'fixed',
          marginTop: '0',
          marginBottom: '10pt',
          paddingBottom: '0',
          border: '1.5pt solid black',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '19pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1.5pt',
              borderTopColor: 'black',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1.5pt',
              borderBottomColor: 'black',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1.5pt',
              borderLeftColor: 'black',
              verticalAlign: 'middle',
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
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1.5pt',
              borderTopColor: 'black',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1.5pt',
              borderBottomColor: 'black',
              borderRightStyle: 'solid',
              borderRightWidth: '1.5pt',
              borderRightColor: 'black',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
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
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          marginTop: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '25pt',
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
              textAlign: 'center',
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
              일련 번호
            </p>
          </td>
          <td
            style={{
              width: '146pt',
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
              textAlign: 'center',
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
              공급자
            </p>
          </td>
          <td
            style={{
              width: '31pt',
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
              textAlign: 'center',
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
              구분
              <br />
              코드
              <span className="s7">*</span>
            </p>
          </td>
          <td
            style={{
              width: '31pt',
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
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              <br />
            </p>
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
              건수
            </p>
          </td>
          <td
            style={{
              width: '39pt',
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
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              <br />
            </p>
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
              품명
            </p>
          </td>
          <td
            style={{
              width: '42pt',
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
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              <br />
            </p>
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
              수량
            </p>
          </td>
          <td
            style={{
              width: '49pt',
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
              textAlign: 'center',
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
              차량번호
            </p>
            <p
              className="s8"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              (중고자동차)
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
              textAlign: 'center',
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
              차대번호
            </p>
            <p
              className="s8"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              (중고자동차)
            </p>
          </td>
          <td
            style={{
              width: '71pt',
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
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              <br />
            </p>
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
              취득금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '64pt',
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
              textAlign: 'center',
              padding: '0',
            }}
          >
            <p
              className="s8"
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
              상호
              <span className="s9">(기관명)</span>
            </p>
          </td>
          <td
            style={{
              width: '82pt',
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
              textAlign: 'center',
              padding: '0',
            }}
          >
            <p
              className="s8"
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
                  width: '25pt',
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
                  textAlign: 'center',
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
                  width: '82pt',
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
                  width: '31pt',
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
                  value={item.classificationCode}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'classificationCode',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '31pt',
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
                  width: '39pt',
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
                  width: '42pt',
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
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'quantity',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '49pt',
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
                  value={item.vehicleNumber ?? ''}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'vehicleNumber',
                      value
                    )
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
                <Input
                  style={{
                    width: 'calc(100% - 3pt)',
                    height: '20pt',
                    padding: '1.5pt',
                  }}
                  value={item.chassisNumber ?? ''}
                  onChange={value =>
                    receiptPurchaseItemUpdater(
                      startIndex + index,
                      'chassisNumber',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '71pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: rowBorderTopColor,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
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
            </tr>
          );
        })}

      </table>
      <p
        style={{
          paddingTop: '3pt',
          paddingBottom: '1pt',
          paddingLeft: '7pt',
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
