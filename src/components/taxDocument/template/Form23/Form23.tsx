'use client';
import './form23.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import InputField from '@/components/taxDocument/template/common/InputField';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form23Data,
  Form23InputData,
  PaymentMethodColumns,
} from '@/components/taxDocument/template/Form23/type';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form23Props = UpdaterProps<Form23Data> & { inputType?: Form23InputData };

export default function Form23({
  updater,
  attributionYear,
  attributionTerm,
  periodStartMonth,
  periodStartDay,
  periodEndMonth,
  periodEndDay,
  bizName,
  repName,
  bizAddress,
  bizNumber,
  grandTotalStats,
  taxableSalesStats,
  taxFreeSalesStats,
  serviceChargeStats,
  taxInvoiceIssuedAmount,
  invoiceIssuedAmount,
  inputType}: Form23Props) {
  const toNumberValue = (value: string) => {
    const digits = value.replace(/[^0-9]/g, '');
    return digits ? Number(digits) : undefined;
  };
  const toStringValue = (value: number) => (value ? String(value) : '');

  const updatePaymentStats = <K extends keyof PaymentMethodColumns>(
    section:
      | 'grandTotalStats'
      | 'taxableSalesStats'
      | 'taxFreeSalesStats'
      | 'serviceChargeStats',
    field: K,
    value: PaymentMethodColumns[K]
  ) => {
    const current = (
      {
        grandTotalStats,
        taxableSalesStats,
        taxFreeSalesStats,
        serviceChargeStats,
      } as Form23Data
    )[section] as PaymentMethodColumns;

    updater(section, {
      ...current,
      [field]: value,
    } as Form23Data[typeof section]);
  };

  return (
    <PageSlot slotWidth={624} slotHeight={882}>
      <div className="form23">
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
            부가가치세법 시행규칙 [별지 제23호서식]
            <span className="s2">&lt;개정 2019. 3. 20.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'center' }}
      >
        신용카드매출전표등발행금액집계표
      </p>
      <h1
        style={{
          paddingTop: '2pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <InputField
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
          value={attributionYear}
          onChange={e => updater('attributionYear', e.target.value)}
        inputType={inputType?.attributionYear}
        />
        년 제
        <InputField
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            background: 'transparent',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={attributionTerm}
          onChange={e => updater('attributionTerm', e.target.value)}
        inputType={inputType?.attributionTerm}
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
            fontSize: '10pt',
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
            fontSize: '10pt',
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
            fontSize: '10pt',
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
            fontSize: '10pt',
            textAlign: 'center',
          }}
          value={toNumberValue(periodEndDay)}
          onChange={value => updater('periodEndDay', toStringValue(value))}
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
      <ol id="l2">
        <li data-list-text="1.">
          <p
            className="s4"
            style={{
              paddingTop: '7pt',
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
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '40pt' }}>
              <td
                style={{
                  width: '154.77pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ① 상호
                  <span className="s6">(법인명)</span>
                </p>
              </td>
              <td
                style={{
                  width: '154.77pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <InputField
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={bizName}
                  onChange={e => updater('bizName', e.target.value)}
                inputType={inputType?.bizName}
                />
              </td>
              <td
                style={{
                  width: '154.77pt',
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
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ② 성명
                  <span className="s6">(대표자)</span>
                </p>
              </td>
              <td
                style={{
                  width: '154.77pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <InputField
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={repName}
                  onChange={e => updater('repName', e.target.value)}
                inputType={inputType?.repName}
                />
              </td>
            </tr>
            <tr style={{ height: '40pt' }}>
              <td
                style={{
                  width: '154.77pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ③ 사업장 소재지
                </p>
              </td>
              <td
                style={{
                  width: '154.77pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <InputField
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={bizAddress}
                  onChange={e => updater('bizAddress', e.target.value)}
                inputType={inputType?.bizAddress}
                />
              </td>
              <td
                style={{
                  width: '154.77pt',
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
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                  }}
                >
                  ④ 사업자등록번호
                </p>
              </td>
              <td
                style={{
                  width: '154.77pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <InputField
                  className="form-input form-input-text"
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  type="text"
                  value={bizNumber}
                  onChange={e => updater('bizNumber', e.target.value)}
                inputType={inputType?.bizNumber}
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
              paddingTop: '9pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            신용카드매출전표등 발행금액 현황
          </h1>
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
            <tr style={{ height: '63pt' }}>
              <td
                style={{
                  width: '98pt',
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  구분
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  ⑤ 합계
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
                  className="s7"
                  style={{
                    paddingLeft: '14pt',
                    paddingRight: '14pt',
                    textIndent: '0pt',
                    lineHeight: '123%',
                    textAlign: 'center',
                  }}
                >
                  ⑥ 신용ㆍ직불ㆍ 기명식 선불카드
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
                  className="s7"
                  style={{
                    paddingLeft: '12pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑦ 현금영수증
                </p>
              </td>
              <td
                style={{
                  width: '91pt',
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
                  className="s7"
                  style={{
                    paddingLeft: '7pt',
                    paddingRight: '6pt',
                    textIndent: '-1pt',
                    lineHeight: '123%',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ color: 'black' }}>⑧</span>
                  <span style={{ color: '#CC0000' }}>
                    직불전자지급 수단 및 기명식선 불
                  </span>
                </p>
                <p
                  className="s7"
                  style={{
                    paddingRight: '15pt',
                    textIndent: '0pt',
                    lineHeight: '13pt',
                    textAlign: 'center',
                    color: '#CC0000',
                  }}
                >
                  전자지급수단
                </p>
              </td>
            </tr>
            <tr style={{ height: '40pt' }}>
              <td
                style={{
                  width: '98pt',
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  합계
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={grandTotalStats.totalAmount}
                  onChange={value =>
                    updatePaymentStats('grandTotalStats', 'totalAmount', value)
                  }
                inputType={inputType?.grandTotalStats?.totalAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={grandTotalStats.creditCardAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'grandTotalStats',
                      'creditCardAmount',
                      value
                    )
                  }
                inputType={inputType?.grandTotalStats?.creditCardAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={grandTotalStats.cashReceiptAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'grandTotalStats',
                      'cashReceiptAmount',
                      value
                    )
                  }
                inputType={inputType?.grandTotalStats?.cashReceiptAmount}
                />
              </td>
              <td
                style={{
                  width: '91pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={grandTotalStats.electronicPaymentAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'grandTotalStats',
                      'electronicPaymentAmount',
                      value
                    )
                  }
                inputType={inputType?.grandTotalStats?.electronicPaymentAmount}
                />
              </td>
            </tr>
            <tr style={{ height: '40pt' }}>
              <td
                style={{
                  width: '98pt',
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  과세 매출분
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxableSalesStats.totalAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxableSalesStats',
                      'totalAmount',
                      value
                    )
                  }
                inputType={inputType?.taxableSalesStats?.totalAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxableSalesStats.creditCardAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxableSalesStats',
                      'creditCardAmount',
                      value
                    )
                  }
                inputType={inputType?.taxableSalesStats?.creditCardAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxableSalesStats.cashReceiptAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxableSalesStats',
                      'cashReceiptAmount',
                      value
                    )
                  }
                inputType={inputType?.taxableSalesStats?.cashReceiptAmount}
                />
              </td>
              <td
                style={{
                  width: '91pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxableSalesStats.electronicPaymentAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxableSalesStats',
                      'electronicPaymentAmount',
                      value
                    )
                  }
                inputType={inputType?.taxableSalesStats?.electronicPaymentAmount}
                />
              </td>
            </tr>
            <tr style={{ height: '40pt' }}>
              <td
                style={{
                  width: '98pt',
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  면세 매출분
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxFreeSalesStats.totalAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxFreeSalesStats',
                      'totalAmount',
                      value
                    )
                  }
                inputType={inputType?.taxFreeSalesStats?.totalAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxFreeSalesStats.creditCardAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxFreeSalesStats',
                      'creditCardAmount',
                      value
                    )
                  }
                inputType={inputType?.taxFreeSalesStats?.creditCardAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxFreeSalesStats.cashReceiptAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxFreeSalesStats',
                      'cashReceiptAmount',
                      value
                    )
                  }
                inputType={inputType?.taxFreeSalesStats?.cashReceiptAmount}
                />
              </td>
              <td
                style={{
                  width: '91pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#7E7E7E',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxFreeSalesStats.electronicPaymentAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'taxFreeSalesStats',
                      'electronicPaymentAmount',
                      value
                    )
                  }
                inputType={inputType?.taxFreeSalesStats?.electronicPaymentAmount}
                />
              </td>
            </tr>
            <tr style={{ height: '40pt' }}>
              <td
                style={{
                  width: '98pt',
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  봉사료
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={serviceChargeStats.totalAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'serviceChargeStats',
                      'totalAmount',
                      value
                    )
                  }
                inputType={inputType?.serviceChargeStats?.totalAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={serviceChargeStats.creditCardAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'serviceChargeStats',
                      'creditCardAmount',
                      value
                    )
                  }
                inputType={inputType?.serviceChargeStats?.creditCardAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={serviceChargeStats.cashReceiptAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'serviceChargeStats',
                      'cashReceiptAmount',
                      value
                    )
                  }
                inputType={inputType?.serviceChargeStats?.cashReceiptAmount}
                />
              </td>
              <td
                style={{
                  width: '91pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={serviceChargeStats.electronicPaymentAmount}
                  onChange={value =>
                    updatePaymentStats(
                      'serviceChargeStats',
                      'electronicPaymentAmount',
                      value
                    )
                  }
                inputType={inputType?.serviceChargeStats?.electronicPaymentAmount}
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
          <h1
            style={{
              paddingTop: '9pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            신용카드매출전표등 발행금액(⑤ 합계) 중 세금계산서(계산서) 발급명세
          </h1>
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
            <tr style={{ height: '42pt' }}>
              <td
                style={{
                  width: '121pt',
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
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  ⑨ 세금계산서 발급금액
                </p>
              </td>
              <td
                style={{
                  width: '121pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={taxInvoiceIssuedAmount}
                  onChange={value => updater('taxInvoiceIssuedAmount', value)}
                inputType={inputType?.taxInvoiceIssuedAmount}
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
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#939393',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s7"
                  style={{ textIndent: '0pt', textAlign: 'center' }}
                >
                  ⑩ 계산서 발급금액
                </p>
              </td>
              <td
                style={{
                  width: '119pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#7E7E7E',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#939393',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                  value={invoiceIssuedAmount}
                  onChange={value => updater('invoiceIssuedAmount', value)}
                inputType={inputType?.invoiceIssuedAmount}
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
              margin: '50pt 0 0 0',
              padding: '0',
            }}
          />
          <h2
            style={{
              paddingTop: '2pt',
              textIndent: '0pt',
              textAlign: 'center',
            }}
          >
            작 성 방 법
          </h2>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
          <ol id="l3">
            <li data-list-text="1.">
              <p
                style={{
                  paddingTop: '7pt',
                  paddingLeft: '30pt',
                  textIndent: '-12pt',
                  lineHeight: '123%',
                  textAlign: 'justify',
                }}
              >
                신용카드매출전표등 발행금액 현황(⑤~⑧): 부가가치세 과세 매출분,
                면세 매출분 및 봉사료로 각각 구분하여 적고, 과세 매출분란에는
                공급대가(부가가치세 포함)를 적습니다.
              </p>
            </li>
            <li data-list-text="2.">
              <p
                style={{
                  paddingBottom: '3pt',
                  paddingLeft: '29pt',
                  textIndent: '-10pt',
                  lineHeight: '123%',
                  textAlign: 'justify',
                }}
              >
                신용카드매출전표등 발행금액(⑤ 합계) 중 세금계산서(계산서)
                발급명세(⑨ㆍ⑩): ⑨ 세금계산서 발급금액란에는 ⑤ 합계 란의 과세
                매출분 합계금액 중 세금계산서를 발급한 금액을 적고, ⑩ 계산서
                발급금액란에는 ⑤ 합계란의 면세 매출분 합계금액 중 계산서를
                발급한 금액을 각각 적습니다.
              </p>
            </li>
          </ol>
        </li>
      </ol>
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
    </PageSlot>
  );
}
