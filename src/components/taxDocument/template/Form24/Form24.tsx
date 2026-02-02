'use client';
import 'src/components/taxDocument/template/Form24/form24.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form24Data,
  PaymentItem,
} from '@/components/taxDocument/template/Form24/type';

const PAYMENT_ITEM_ROW_COUNT = 15;

export default function Form24({
  updater,
  attributionYear,
  attributionTerm,
  periodStartMonth,
  periodStartDay,
  periodEndMonth,
  periodEndDay,
  bizName,
  repName,
  bizNumber,
  bizAddress,
  bizType,
  merchantNumber,
  totalPaymentAmount,
  paymentItems,
}: UpdaterProps<Form24Data>) {
  const toNumberValue = (value: string) => {
    const digits = value.replace(/[^0-9]/g, '');
    return digits ? Number(digits) : undefined;
  };
  const toStringValue = (value: number) => (value ? String(value) : '');

  const basePaymentItem: PaymentItem = {
    issuerName: '',
    buyerName: '',
    paymentDate: '',
    paymentAmount: 0,
    processingNumber: '',
    buyerEmail: '',
  };

  const mappedPaymentItems = Array.from(
    { length: PAYMENT_ITEM_ROW_COUNT },
    (_, index) => paymentItems[index] ?? basePaymentItem
  );

  const updatePaymentItem = <K extends keyof PaymentItem>(
    index: number,
    field: K,
    value: PaymentItem[K]
  ) => {
    const nextItems = [...paymentItems];
    const target = nextItems[index] ?? basePaymentItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('paymentItems', nextItems);
  };

  return (
    <div className="form24">
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
            부가가치세법 시행규칙 [별지 제24호서식]
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{
          paddingTop: '15pt',
          paddingLeft: '10pt',
          textIndent: '0pt',
          textAlign: 'center',
          letterSpacing: '1pt',
        }}
      >
        전자화폐결제명세서
      </p>
      <h1
        style={{
          paddingTop: '2pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          textAlign: 'center',
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
          value={attributionYear}
          onChange={e => updater('attributionYear', e.target.value)}
        />
        년 제
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
          maxLength={2}
          value={attributionTerm}
          onChange={e => updater('attributionTerm', e.target.value)}
        />
        기 (
        <NumericInput
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
          value={toNumberValue(periodStartMonth)}
          onChange={value => updater('periodStartMonth', toStringValue(value))}
        />
        월
        <NumericInput
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
          value={toNumberValue(periodStartDay)}
          onChange={value => updater('periodStartDay', toStringValue(value))}
        />
        일 ~
        <NumericInput
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
          value={toNumberValue(periodEndMonth)}
          onChange={value => updater('periodEndMonth', toStringValue(value))}
        />
        월
        <NumericInput
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
          value={toNumberValue(periodEndDay)}
          onChange={value => updater('periodEndDay', toStringValue(value))}
        />
        일)
      </h1>
      <p style={{ paddingTop: '12pt', textIndent: '0pt', textAlign: 'left' }}>
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
            className="s3"
            style={{
              paddingTop: '6pt',
              paddingLeft: '22pt',
              textIndent: '-13pt',
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
              marginLeft: 'auto',
              marginRight: 'auto',
              tableLayout: 'fixed',
              boxSizing: 'border-box',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '27pt' }}>
              <td
                style={{
                  width: '83pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#ADADAD',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ① 상호
                </p>
              </td>
              <td
                style={{
                  width: '123pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={bizName}
                  onChange={e => updater('bizName', e.target.value)}
                />
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#ADADAD',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ② 성명
                </p>
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={repName}
                  onChange={e => updater('repName', e.target.value)}
                />
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#ADADAD',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ③ 사업자등록번호
                </p>
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#ADADAD',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={bizNumber}
                  onChange={e => updater('bizNumber', e.target.value)}
                />
              </td>
            </tr>
            <tr style={{ height: '30pt' }}>
              <td
                style={{
                  width: '83pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '3pt',
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
                  width: '123pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#ADADAD',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <textarea
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '28pt',
                    fontFamily: 'Arial',
                    fontSize: '8pt',
                    resize: 'none',
                    overflow: 'hidden',
                  }}
                  value={bizAddress}
                  onChange={e => updater('bizAddress', e.target.value)}
                ></textarea>
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#ADADAD',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑤ 업태 종목
                </p>
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#ADADAD',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={bizType}
                  onChange={e => updater('bizType', e.target.value)}
                />
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#ADADAD',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ⑥ 가맹점번호
                </p>
              </td>
              <td
                style={{
                  width: '103pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#ADADAD',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={merchantNumber}
                  onChange={e => updater('merchantNumber', e.target.value)}
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
        <li data-list-text="2.">
          <h1
            style={{
              paddingTop: '4pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            전자화폐결제명세
          </h1>
        </li>
      </ol>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: 'auto',
          marginRight: 'auto',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '39pt' }}>
          <td
            style={{
              width: '55pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                paddingTop: '7pt',
                paddingRight: '9pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'right',
              }}
            >
              ⑦ 일련
            </p>
            <p
              className="s5"
              style={{
                paddingRight: '9pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'right',
              }}
            >
              번호
            </p>
          </td>
          <td
            style={{
              width: '77pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                paddingLeft: '26pt',
                paddingRight: '9pt',
                textIndent: '-16pt',
                lineHeight: '105%',
                textAlign: 'left',
              }}
            >
              ⑧ 전자화폐 발행회사
            </p>
          </td>
          <td
            style={{
              width: '66pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                paddingTop: '12pt',
                paddingLeft: '10pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑨ 구매자
            </p>
          </td>
          <td
            style={{
              width: '76pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                paddingTop: '12pt',
                paddingLeft: '15pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑩ 결제일
            </p>
          </td>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                paddingLeft: '26pt',
                paddingRight: '8pt',
                textIndent: '-17pt',
                lineHeight: '105%',
                textAlign: 'left',
              }}
            >
              ⑪ 전자결제 금액
            </p>
          </td>
          <td
            style={{
              width: '71pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
                paddingLeft: '24pt',
                paddingRight: '7pt',
                textIndent: '-17pt',
                lineHeight: '85%',
                textAlign: 'left',
              }}
            >
              ⑫ 결제처리 번호
            </p>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '4pt',
                paddingLeft: '11pt',
                paddingRight: '9pt',
                textIndent: '2pt',
                lineHeight: '105%',
                textAlign: 'justify',
              }}
            >
              ⑬ 기타
              <span className="s6">(구매자의 전자우편)</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
          <td
            style={{
              width: '132pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '66pt',
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
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
          <td
            style={{
              width: '76pt',
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
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
          <td
            style={{
              width: '73pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={totalPaymentAmount}
              onChange={value => updater('totalPaymentAmount', value)}
            />
          </td>
          <td
            style={{
              width: '71pt',
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
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
            }}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
        </tr>
        {mappedPaymentItems.map((item, index) => (
          <tr key={index} style={{ height: '20pt' }}>
            <td
              style={{
                width: '55pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
              />
            </td>
            <td
              style={{
                width: '77pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.issuerName}
                onChange={e =>
                  updatePaymentItem(index, 'issuerName', e.target.value)
                }
              />
            </td>
            <td
              style={{
                width: '66pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.buyerName}
                onChange={e =>
                  updatePaymentItem(index, 'buyerName', e.target.value)
                }
              />
            </td>
            <td
              style={{
                width: '76pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.paymentDate}
                onChange={e =>
                  updatePaymentItem(index, 'paymentDate', e.target.value)
                }
              />
            </td>
            <td
              style={{
                width: '73pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item.paymentAmount}
                onChange={value =>
                  updatePaymentItem(index, 'paymentAmount', value)
                }
              />
            </td>
            <td
              style={{
                width: '71pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.processingNumber}
                onChange={e =>
                  updatePaymentItem(index, 'processingNumber', e.target.value)
                }
              />
            </td>
            <td
              style={{
                width: '62pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.buyerEmail ?? ''}
                onChange={e =>
                  updatePaymentItem(index, 'buyerEmail', e.target.value)
                }
              />
            </td>
          </tr>
        ))}
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
      <h2 style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}>
        작 성 방 법
      </h2>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        style={{
          paddingTop: '5pt',
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        이 명세서는 아래 작성요령에 따라 한글과 아라비아 숫자로 적습니다.
      </p>
      <p style={{ paddingLeft: '12pt', textIndent: '0pt', textAlign: 'left' }}>
        ①~⑥: 전자화폐결제명세서를 제출하는 사업자의 인적사항을 적습니다.
      </p>
      <p
        style={{
          paddingLeft: '12pt',
          textIndent: '0pt',
          lineHeight: '10pt',
          textAlign: 'left',
        }}
      >
        ⑦: 일련번호를 적습니다.
      </p>
      <p
        style={{
          paddingLeft: '12pt',
          textIndent: '0pt',
          lineHeight: '10pt',
          textAlign: 'left',
        }}
      >
        ⑧: 전자화폐를 발행한 회사의 이름을 적습니다.
      </p>
      <p style={{ paddingLeft: '12pt', textIndent: '0pt', textAlign: 'left' }}>
        ⑨: 재화나 용역을 구매한 구매자의 이름을 적습니다.
      </p>
      <p
        style={{
          paddingLeft: '12pt',
          textIndent: '0pt',
          lineHeight: '10pt',
          textAlign: 'left',
        }}
      >
        ⑩: 구매자가 결제한 날짜를 적습니다.
      </p>
      <p
        style={{
          paddingLeft: '12pt',
          textIndent: '0pt',
          lineHeight: '10pt',
          textAlign: 'left',
        }}
      >
        ⑪: 구매자가 결제한 전자화폐의 결제금액을 적습니다.
      </p>
      <p style={{ paddingLeft: '12pt', textIndent: '0pt', textAlign: 'left' }}>
        ⑫: 결제처리번호를 적습니다.
      </p>
      <p
        style={{
          paddingBottom: '4pt',
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑬: 구매자의 전자우편주소 등 그 밖의 사항을 적습니다.
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
    </div>
  );
}
