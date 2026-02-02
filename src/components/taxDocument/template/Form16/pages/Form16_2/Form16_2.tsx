'use client';
import '@/components/taxDocument/template/Form16/pages/Form16_2/form16_2.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import {
  Form16Data,
  OtherCreditCardItem,
} from '@/components/taxDocument/template/Form16/type';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import { FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH } from '@/components/taxDocument/template/Form16/constants';

export default function Form16_2({
  pageIndex: index,
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  bizNumber,
  otherCreditCardItems,
}: FormPageProps<Form16Data>) {
  const mappedOtherCreditCardItems: (OtherCreditCardItem | null)[] = Array.from(
    { length: FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH },
    (_, i) => otherCreditCardItems[15 + index * 26 + i] ?? null
  );

  const otherItemUpdater = <
    K extends keyof Form16Data['otherCreditCardItems'][number],
  >(
    i: number,
    field: K,
    value: Form16Data['otherCreditCardItems'][number][K]
  ) => {
    const targetIndex =
      15 + (index - 1) * FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH + i;
    const items = [...otherCreditCardItems];
    const target = items[index] ?? {};

    items[targetIndex] = {
      ...target,
      [field]: value,
    };

    updater('otherCreditCardItems', items);
  };

  return (
    <div className="form16_2">
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
            부가가치세법 시행규칙 [별지 제16호서식(2)]
            <span className="s2">&lt;개정 2019. 3. 20.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{ paddingLeft: '11pt', textIndent: '0pt', textAlign: 'center' }}
      >
        신용카드매출전표등 수령명세서
        <span className="s4">(을)</span>
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
        />
        일)
      </h1>
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
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '312pt',
          marginLeft: 'auto',
          marginRight: '0pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '19pt' }}>
          <td
            style={{
              width: '113.5pt',
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
              className="s5"
              style={{
                paddingTop: '1pt',
                paddingLeft: '9pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '198.5pt',
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
              textAlign: 'center',
            }}
          >
            <Input
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                fontSize: '10pt',
                textAlign: 'center',
              }}
              value={bizNumber}
              onChange={value => updater('bizNumber', value)}
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
      <h2
        style={{
          paddingTop: '5pt',
          paddingBottom: '5pt',
          paddingLeft: '22pt',
          textIndent: '-15pt',
          textAlign: 'left',
          lineHeight: '20pt',
          verticalAlign: 'middle',
        }}
      >
        3. 그 밖의 신용ㆍ직불카드, 기명식선불카드, 직불전자지급수단 및
        기명식선불전자지급수단 매출전표 수령금액 합계
      </h2>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '21pt' }}>
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
              className="s6"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '124%',
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
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
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
              className="s6"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '124%',
                textAlign: 'center',
              }}
            >
              ⑩ 공급자(가맹점) 사업자등록번호
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
              className="s6"
              style={{
                paddingTop: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪ 그 밖의 신용카드 등 거래명세 합계
            </p>
          </td>
        </tr>
        <tr style={{ height: '24pt' }}>
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
              className="s6"
              style={{
                paddingTop: '4pt',
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
              className="s6"
              style={{
                paddingTop: '4pt',
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
              className="s6"
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
        {mappedOtherCreditCardItems.map((item, i) => (
          <tr key={`other-credit-card-item-${i}`} style={{ height: '18pt' }}>
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <p
                className="s6"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                }}
              >
                {15 +
                  index * FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH +
                  i +
                  1}
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
                  height: 'calc(100% - 2pt)',
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
                  height: 'calc(100% - 2pt)',
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
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                  fontSize: '9pt',
                }}
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
                value={item?.supplyPrice}
                onChange={value =>
                  otherItemUpdater(index, 'supplyPrice', value)
                }
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                  fontSize: '9pt',
                }}
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
                onChange={value => otherItemUpdater(index, 'taxAmount', value)}
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 2pt)',
                  fontSize: '9pt',
                }}
              />
            </td>
          </tr>
        ))}
      </table>
      <p
        style={{
          paddingTop: '5pt',
          paddingBottom: '30pt',
          textIndent: '0pt',
          textAlign: 'left',
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
