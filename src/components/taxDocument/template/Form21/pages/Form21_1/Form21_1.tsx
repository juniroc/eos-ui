'use client';
import './form21_1.css';
import { Form21Data, Form21InputData, } from '@/components/taxDocument/template/Form21/type';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import InputField from '@/components/taxDocument/template/common/InputField';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';

type Props = Form21Data &
  UpdaterProps<Form21Data> & { inputType?: Form21InputData };

export default function Form21_1({
  updater,
  inputType,
  isScheduled,
  isFinal,
  isAfterDeadline,
  isZeroRateEarlyRefund,
  attributionYear,
  bizName,
  repName,
  bizNumber,
  residentNumber,
  phoneNumber,
  bizAddress,
  homeAddress,
  mobileNumber,
  email,
  salesTaxInvoice,
  salesPurchaserIssued,
  salesCreditCard,
  salesOther,
  salesZeroTaxInvoice,
  salesZeroOther,
  salesOmission,
  salesBadDebt,
  salesTotal,
  purchaseGeneral,
  purchaseImportDeferral,
  purchaseFixedAsset,
  purchaseOmission,
  purchasePurchaserIssued,
  purchaseOtherDeduction,
  purchaseTotalInput,
  purchaseNonDeductible,
  purchaseNetResult,
  taxPayableOrRefundable,
  deductionOther,
  deductionCreditCardIssuance,
  deductionTotal,
  smallBizExemption,
  prepaidUnrefunded,
  prepaidNotified,
  taxPaidByProxy,
  taxPaidBySpecialPurchase,
  taxPaidByCardCompany,
  penaltyTotal,
  finalTaxToPay,
  consolidatedPaymentTax,
  taxAgentName,
  taxAgentPhone,
  taxAgentBizNumber,
  taxAgentMgmtNumber,
  taxAgentResidentNumber,
}: Props) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

  const toNumber = (value: string) => {
    const digits = digitsOnly(value);
    return digits ? Number(digits) : 0;
  };

  const updateNestedField = <
    K extends keyof Form21Data,
    F extends keyof Form21Data[K],
  >(
    key: K,
    current: Form21Data[K],
    field: F,
    value: Form21Data[K][F]
  ) => {
    const updated = {
      ...(current as Form21Data[K]),
      [field]: value,
    };
    updater(key, updated);
  };

  const getBizNumberDigit = (index: number) =>
    digitsOnly(bizNumber).charAt(index) || '';

  const setBizNumberDigit = (index: number, digit: string) => {
    const digits = digitsOnly(bizNumber).padEnd(10, ' ');
    const chars = digits.split('');
    const nextDigit = digitsOnly(digit).slice(-1);
    chars[index] = nextDigit || ' ';
    const next = chars.join('').replace(/\s/g, '');
    updater('bizNumber', next);
  };
  return (
    <div className="form21_1">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제21호서식]
            <span style={{ color: '#00F' }}>&lt;개정 2025. 3. 21.&gt;</span>
          </p>
        </li>
      </ul>
      <table
        style={{
          width: '624pt',
          borderCollapse: 'collapse',
          margin: '0',
          padding: '0',
        }}
      >
        <tr>
          <td
            style={{
              verticalAlign: 'middle',
              width: '270pt',
              padding: '0',
              margin: '0',
            }}
          >
            <div
              className="textbox"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70pt',
                width: '100%',
              }}
            >
              <p
                className="s2"
                style={{
                  textIndent: '0pt',
                  lineHeight: '20pt',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                일반과세자 부가가치세
              </p>
            </div>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '354pt',
              padding: '0',
              margin: '0',
            }}
          >
            <div
              className="textbox"
              style={{ display: 'block', minHeight: '70pt', width: '100%' }}
            >
              <p
                className="s2"
                style={{
                  paddingTop: '6pt',
                  paddingLeft: '2pt',
                  textIndent: '0pt',
                  lineHeight: '18pt',
                  textAlign: 'left',
                  margin: '0',
                }}
              >
                [
                <InputField
                  type="checkbox"
                  name="reportType"
                  id="check1"
                  checked={isScheduled}
                  onChange={e => updater('isScheduled', e.target.checked)}
                />
                ] 예정 [
                <InputField
                  type="checkbox"
                  name="reportType"
                  id="check2"
                  checked={isFinal}
                  onChange={e => updater('isFinal', e.target.checked)}
                />
                ]확정
              </p>
              <p
                className="s2"
                style={{
                  paddingLeft: '2pt',
                  textIndent: '0pt',
                  lineHeight: '18pt',
                  textAlign: 'left',
                  margin: '0',
                }}
              >
                [
                <InputField
                  type="checkbox"
                  name="reportType"
                  id="check3"
                  checked={isAfterDeadline}
                  onChange={e => updater('isAfterDeadline', e.target.checked)}
                />
                ] 기한후 과세표준
                <span style={{ paddingLeft: '30pt' }}>신고서</span>
              </p>
              <p
                className="s2"
                style={{
                  paddingLeft: '2pt',
                  textIndent: '0pt',
                  lineHeight: '18pt',
                  textAlign: 'left',
                  margin: '0',
                }}
              >
                [
                <InputField
                  type="checkbox"
                  name="reportType"
                  id="check4"
                  checked={isZeroRateEarlyRefund}
                  onChange={e =>
                    updater('isZeroRateEarlyRefund', e.target.checked)
                  }
                />
                ] 영세율 등 조기환급
              </p>
            </div>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          width: '624pt',
          borderCollapse: 'collapse',
          margin: '0',
          padding: '0',
        }}
      >
        <tr>
          <td
            style={{
              verticalAlign: 'middle',
              width: '400.4pt',
              padding: '0',
              margin: '0',
            }}
          >
            <div
              className="textbox"
              style={{
                background: '#BABABA',
                display: 'block',
                minHeight: '12.9pt',
                width: '100%',
              }}
            >
              <p
                className="s3"
                style={{
                  paddingTop: '1pt',
                  paddingLeft: '8pt',
                  textIndent: '0pt',
                  lineHeight: '15pt',
                  textAlign: 'left',
                }}
              >
                관리번호
              </p>
            </div>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '223.6pt',
              padding: '0',
              margin: '0',
            }}
          >
            <div
              className="textbox"
              style={{
                background: '#BABABA',
                display: 'block',
                minHeight: '12.9pt',
                width: '100%',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#808080',
              }}
            >
              <p
                className="s3"
                style={{
                  paddingTop: '1pt',
                  paddingLeft: '2pt',
                  textIndent: '0pt',
                  lineHeight: '15pt',
                  textAlign: 'left',
                }}
              >
                처리기간
                <span style={{ paddingLeft: '30pt' }}>즉시</span>
              </p>
            </div>
          </td>
        </tr>
      </table>
      <p
        style={{
          textIndent: '0pt',
          height: '5pt',
          paddingBottom: '2pt',
          textAlign: 'left',
        }}
      ></p>
      <p
        style={{
          paddingLeft: '7pt',
          paddingBottom: '2pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        신고기간
        <InputField
          className="report-period-input"
          style={{
            width: '40pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          type="text"
          maxLength={4}
          value={attributionYear}
          onChange={e => updater('attributionYear', digitsOnly(e.target.value))}
          inputType={inputType?.attributionYear}
        />
      </p>
      <table
        className="business-info-table"
        style={{
          width: '624pt',
          borderCollapse: 'collapse',
          margin: '0',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
            rowSpan={4}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                margin: '0',
                padding: '0',
                lineHeight: '0',
                height: '0',
              }}
            >
              <br />
            </p>
            <p
              className="s3"
              style={{
                paddingLeft: '3pt',
                paddingTop: '0',
                marginTop: '0',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              사업자
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '50pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              className="s3"
              style={{
                paddingLeft: '8pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'left',
              }}
            >
              상 호
            </p>
            <p
              className="s3"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'left',
              }}
            >
              (법인명)
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '85pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="cell-input"
              type="text"
              value={bizName}
              onChange={e => updater('bizName', e.target.value)}
              inputType={inputType?.bizName}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '50pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              className="s3"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'left',
              }}
            >
              성 명
            </p>
            <p
              className="s3"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'left',
              }}
            >
              (대표자명)
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '72pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="cell-input"
              type="text"
              value={repName}
              onChange={e => updater('repName', e.target.value)}
              inputType={inputType?.repName}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              className="s3"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="cell-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(0)}
              onChange={e => setBizNumberDigit(0, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="cell-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(1)}
              onChange={e => setBizNumberDigit(1, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="cell-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(2)}
              onChange={e => setBizNumberDigit(2, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              className="s3"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              -
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(3)}
              onChange={e => setBizNumberDigit(3, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(4)}
              onChange={e => setBizNumberDigit(4, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              className="s3"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              -
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(5)}
              onChange={e => setBizNumberDigit(5, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(6)}
              onChange={e => setBizNumberDigit(6, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(7)}
              onChange={e => setBizNumberDigit(7, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(8)}
              onChange={e => setBizNumberDigit(8, e.target.value)}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '18pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
            }}
          >
            <InputField
              className="text-input"
              type="text"
              maxLength={1}
              value={getBizNumberDigit(9)}
              onChange={e => setBizNumberDigit(9, e.target.value)}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
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
            rowSpan={2}
          >
            <p
              className="s3"
              style={{
                paddingTop: '5pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              생년월일
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '136pt',
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
            rowSpan={2}
          >
            <InputField
              className="cell-input"
              type="text"
              value={residentNumber}
              onChange={e =>
                updater('residentNumber', digitsOnly(e.target.value))
              }
              inputType={inputType?.residentNumber}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '72pt',
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
              className="s3"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              전화번호
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
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
            colSpan={1}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '25pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
              }}
            >
              사업장
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
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
            colSpan={7}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '25pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
              }}
            >
              주소지
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
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
            }}
            colSpan={5}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '21pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
              }}
            >
              휴대전화
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '72pt',
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
            <InputField
              className="cell-input"
              type="text"
              value={phoneNumber}
              onChange={e => updater('phoneNumber', e.target.value)}
              inputType={inputType?.phoneNumber}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
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
              position: 'relative',
              padding: '0',
              margin: '0',
            }}
            colSpan={1}
          >
            <InputField
              className="cell-input"
              type="text"
              value={bizAddress}
              onChange={e => updater('bizAddress', e.target.value)}
              inputType={inputType?.bizAddress}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
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
              position: 'relative',
              padding: '0',
              margin: '0',
            }}
            colSpan={7}
          >
            <InputField
              className="cell-input"
              type="text"
              value={homeAddress}
              onChange={e => updater('homeAddress', e.target.value)}
              inputType={inputType?.homeAddress}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
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
            }}
            colSpan={5}
          >
            <InputField
              className="cell-input"
              type="text"
              value={mobileNumber}
              onChange={e => updater('mobileNumber', e.target.value)}
              inputType={inputType?.mobileNumber}
            />
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '50pt',
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
            }}
          >
            <p
              className="s3"
              style={{
                paddingTop: '3pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              사업장주소
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '208pt',
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
            }}
            colSpan={3}
          >
            <InputField
              className="cell-input"
              type="text"
              value={bizAddress}
              onChange={e => updater('bizAddress', e.target.value)}
              inputType={inputType?.bizAddress}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '45pt',
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
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
              }}
            >
              전자우편
            </p>
            <p
              className="s3"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
              }}
            >
              주소
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '146pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
            colSpan={12}
          >
            <InputField
              className="cell-input"
              type="text"
              value={email ?? ''}
              onChange={e => updater('email', e.target.value)}
            />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <hr
        style={{
          width: '624pt',
          height: '1pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
      <p
        className="s7"
        style={{
          paddingLeft: '3pt',
          paddingTop: '3pt',
          paddingBottom: '3pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ①&nbsp;&nbsp;<b>신고내용</b>
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          marginRight: 'auto',
          width: '624pt',
          marginLeft: '0',
          boxSizing: 'border-box',
          border: 'none',
        }}
        cellSpacing="0"
      >
        <colgroup>
          <col style={{ width: '40pt' }} />
          <col style={{ width: '25pt' }} />
          <col style={{ width: '161pt' }} />
          <col style={{ width: '25pt' }} />
          <col style={{ width: '161pt' }} />
          <col style={{ width: '40pt' }} />
          <col style={{ width: '171pt' }} />
        </colgroup>
        <tbody>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '251pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
              }}
              colSpan={4}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '11pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  paddingLeft: '0pt',
                }}
              >
                구 분
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              }}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '11pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  paddingLeft: '0pt',
                }}
              >
                금 액
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
              }}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '11pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  paddingLeft: '0pt',
                }}
              >
                세율
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '171pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#7E7E7E',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
              }}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '11pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  paddingLeft: '0pt',
                }}
              >
                세 액
              </p>
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
              }}
              rowSpan={9}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '130%',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과세
                <br />
                표준
                <br />
                <span style={{ display: 'block', marginTop: '5pt' }}> 및 </span>
                <span style={{ display: 'block', marginTop: '5pt' }}>
                  매출
                  <br />
                  세액
                </span>
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#7E7E7E',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
              }}
              rowSpan={4}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과세
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                }}
              >
                세금계산서 발급분
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (1)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
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
              <NumericInput
                value={salesTaxInvoice.amount}
                onChange={value =>
                  updateNestedField(
                    'salesTaxInvoice',

                    salesTaxInvoice,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesTaxInvoice?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
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
                  textIndent: '0pt',
                  lineHeight: '8pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  color: '#000',
                  paddingLeft: '0pt',
                }}
              >
                10/100
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '171pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#7E7E7E',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#7E7E7E',
              }}
            >
              <NumericInput
                value={salesTaxInvoice.tax}
                onChange={value =>
                  updateNestedField(
                    'salesTaxInvoice',

                    salesTaxInvoice,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesTaxInvoice?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                }}
              >
                매입자발행 세금계산서
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (2)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesPurchaserIssued.amount}
                onChange={value =>
                  updateNestedField(
                    'salesPurchaserIssued',

                    salesPurchaserIssued,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesPurchaserIssued?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
                  textIndent: '0pt',
                  lineHeight: '8pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  color: '#000',
                  paddingLeft: '0pt',
                }}
              >
                10/100
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '134pt',
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
              <NumericInput
                value={salesPurchaserIssued.tax}
                onChange={value =>
                  updateNestedField(
                    'salesPurchaserIssued',

                    salesPurchaserIssued,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesPurchaserIssued?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                }}
              >
                신용카드ㆍ현금영수증 발행분
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (3)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesCreditCard.amount}
                onChange={value =>
                  updateNestedField(
                    'salesCreditCard',

                    salesCreditCard,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesCreditCard?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
                  textIndent: '0pt',
                  lineHeight: '8pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  color: '#000',
                  paddingLeft: '0pt',
                }}
              >
                10/100
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '134pt',
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
              <NumericInput
                value={salesCreditCard.tax}
                onChange={value =>
                  updateNestedField(
                    'salesCreditCard',

                    salesCreditCard,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesCreditCard?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                }}
              >
                기타(정규영수증 외 매출분)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                }}
              >
                (4)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesOther.amount}
                onChange={value =>
                  updateNestedField(
                    'salesOther',

                    salesOther,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesOther?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
                  textIndent: '0pt',
                  lineHeight: '8pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  color: '#000',
                  paddingLeft: '0pt',
                }}
              >
                10/100
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '134pt',
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
              <NumericInput
                value={salesOther.tax}
                onChange={value =>
                  updateNestedField(
                    'salesOther',

                    salesOther,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesOther?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#7E7E7E',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
              }}
              rowSpan={2}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  textAlign: 'left',
                }}
              >
                세금계산서 발급분
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (5)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesZeroTaxInvoice.amount}
                onChange={value =>
                  updateNestedField(
                    'salesZeroTaxInvoice',

                    salesZeroTaxInvoice,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesZeroTaxInvoice?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  color: '#000',
                  paddingLeft: '0pt',
                }}
              >
                0/100
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '134pt',
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
              <NumericInput
                value={salesZeroTaxInvoice.tax}
                onChange={value =>
                  updateNestedField(
                    'salesZeroTaxInvoice',

                    salesZeroTaxInvoice,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesZeroTaxInvoice?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'left',
                }}
              >
                기 타
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (6)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesZeroOther.amount}
                onChange={value =>
                  updateNestedField(
                    'salesZeroOther',

                    salesZeroOther,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesZeroOther?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                  color: '#000',
                  paddingLeft: '0pt',
                }}
              >
                0/100
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '134pt',
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
              <NumericInput
                value={salesZeroOther.tax}
                onChange={value =>
                  updateNestedField(
                    'salesZeroOther',

                    salesZeroOther,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesZeroOther?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '186pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                  fontSize: '9pt',
                }}
              >
                예정 신고 누락분
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (7)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesOmission.amount}
                onChange={value =>
                  updateNestedField(
                    'salesOmission',

                    salesOmission,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesOmission?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
              <InputField
                className="text-input"
                type="text"
                value={salesOmission.taxRate ?? ''}
                onChange={e =>
                  updateNestedField(
                    'salesOmission',

                    salesOmission,

                    'taxRate',

                    e.target.value
                  )
                }
                inputType={inputType?.salesOmission?.taxRate}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '134pt',
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
              <NumericInput
                value={salesOmission.tax}
                onChange={value =>
                  updateNestedField(
                    'salesOmission',

                    salesOmission,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesOmission?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '186pt',
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
                className="s3"
                style={{
                  paddingLeft: '6pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                  fontSize: '9pt',
                }}
              >
                대손세액 가감
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '25pt',
                textAlign: 'center',
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
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (8)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              <NumericInput
                value={salesBadDebt.amount}
                onChange={value =>
                  updateNestedField(
                    'salesBadDebt',

                    salesBadDebt,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesBadDebt?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
              <InputField
                className="text-input"
                type="text"
                value={salesBadDebt.taxRate ?? ''}
                onChange={e =>
                  updateNestedField(
                    'salesBadDebt',

                    salesBadDebt,

                    'taxRate',

                    e.target.value
                  )
                }
                inputType={inputType?.salesBadDebt?.taxRate}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '171pt',
                borderTop: '1pt solid #7E7E7E',
                borderLeft: '1pt solid #7E7E7E',
                borderBottom: '1pt solid #7E7E7E',
                borderRight: '0 !important',
                borderRightWidth: '0 !important',
                borderRightStyle: 'none',
                borderRightColor: 'transparent !important',
              }}
            >
              <NumericInput
                value={salesBadDebt.tax}
                onChange={value =>
                  updateNestedField(
                    'salesBadDebt',

                    salesBadDebt,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesBadDebt?.tax}
              />
            </td>
          </tr>
          <tr style={{ height: '15pt' }}>
            <td
              style={{
                verticalAlign: 'middle',
                width: '186pt',
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
              }}
              colSpan={2}
            >
              <p
                className="s3"
                style={{
                  paddingLeft: '5pt',
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'left',
                  fontSize: '9pt',
                }}
              >
                합계
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '15pt',
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
              }}
            >
              <p
                className="s3"
                style={{
                  textIndent: '0pt',
                  lineHeight: '9pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                (9)
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '161pt',
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
              }}
            >
              <NumericInput
                value={salesTotal.amount}
                onChange={value =>
                  updateNestedField(
                    'salesTotal',

                    salesTotal,

                    'amount',

                    value
                  )
                }
                inputType={inputType?.salesTotal?.amount}
              />
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '40pt',
                textAlign: 'center',
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
              }}
            >
              <p
                className="s6"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  paddingLeft: '0pt',
                }}
              >
                ㉮
              </p>
            </td>
            <td
              style={{
                verticalAlign: 'middle',
                width: '171pt',
                borderTop: '1pt solid #7E7E7E',
                borderLeft: 'none !important',
                borderBottom: '1pt solid #7E7E7E',
                borderRight: 'none',
              }}
            >
              <NumericInput
                value={salesTotal.tax}
                onChange={value =>
                  updateNestedField(
                    'salesTotal',

                    salesTotal,

                    'tax',

                    value
                  )
                }
                inputType={inputType?.salesTotal?.tax}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        cellSpacing="0"
        style={{ width: '624pt', borderCollapse: 'collapse', margin: '0pt 0px 0px', tableLayout: 'fixed' }}
      >
        <tr style={{ height: '15pt' }}>
          <td
            rowSpan={9}
            style={{ verticalAlign: 'middle', width: '39.5pt', borderTop: '1pt solid rgb(0, 0, 0)', borderBottom: '1pt solid rgb(126, 126, 126)', textAlign: 'center' }}
          >
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '110%', textAlign: 'center', fontSize: '9pt' }}
            >
              매입
              <br />
              세액
            </p>
          </td>
          <td
            rowSpan={3}
            style={{ verticalAlign: 'middle', width: '63pt', borderTop: '1pt solid rgb(0, 0, 0)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', textAlign: 'center' }}
          >
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '100%', textAlign: 'center', fontSize: '9pt' }}
            >
              세금계산서
              <br />
              <span style={{ letterSpacing: '8pt' }}>수취</span>분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '122.5pt', borderTop: '1pt solid rgb(0, 0, 0)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              일반매입
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '24pt', borderTop: '1pt solid rgb(0, 0, 0)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (10)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '90pt', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderBottomColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseGeneral.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseGeneral',

                  purchaseGeneral,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseGeneral?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderBottomColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseGeneral.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseGeneral',

                  purchaseGeneral,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseGeneral?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseGeneral.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseGeneral',

                  purchaseGeneral,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseGeneral?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '98pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              수출기업 수입분 납부유예
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (11)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)', backgroundColor: 'rgb(213, 213, 213)' }}>
            <NumericInput

              value={purchaseImportDeferral.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseImportDeferral',

                  purchaseImportDeferral,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseImportDeferral?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseImportDeferral.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseImportDeferral',

                  purchaseImportDeferral,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseImportDeferral?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseImportDeferral.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseImportDeferral',

                  purchaseImportDeferral,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseImportDeferral?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td style={{ verticalAlign: 'middle', width: '98pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingLeft: '1pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              고정자산 매입
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (12)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseFixedAsset.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseFixedAsset',

                  purchaseFixedAsset,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseFixedAsset?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseFixedAsset.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseFixedAsset',

                  purchaseFixedAsset,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseFixedAsset?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseFixedAsset.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseFixedAsset',

                  purchaseFixedAsset,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseFixedAsset?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left', fontSize: '9pt' }}
            >
              예정 신고 누락분
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (13)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseOmission.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseOmission',

                  purchaseOmission,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseOmission?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseOmission.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseOmission',

                  purchaseOmission,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseOmission?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseOmission.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseOmission',

                  purchaseOmission,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseOmission?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              매입자발행 세금계산서
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (14)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchasePurchaserIssued.amount}

              onChange={value =>

                updateNestedField(

                  'purchasePurchaserIssued',

                  purchasePurchaserIssued,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchasePurchaserIssued?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchasePurchaserIssued.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchasePurchaserIssued',

                  purchasePurchaserIssued,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchasePurchaserIssued?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchasePurchaserIssued.tax}

              onChange={value =>

                updateNestedField(

                  'purchasePurchaserIssued',

                  purchasePurchaserIssued,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchasePurchaserIssued?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              그 밖의 공제매입세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (15)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseOtherDeduction.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseOtherDeduction',

                  purchaseOtherDeduction,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseOtherDeduction?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseOtherDeduction.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseOtherDeduction',

                  purchaseOtherDeduction,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseOtherDeduction?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseOtherDeduction.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseOtherDeduction',

                  purchaseOtherDeduction,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseOtherDeduction?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              합계 (10)-(11)+(12)+(13)+(14)+(15)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (16)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseTotalInput.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseTotalInput',

                  purchaseTotalInput,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseTotalInput?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseTotalInput.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseTotalInput',

                  purchaseTotalInput,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseTotalInput?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseTotalInput.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseTotalInput',

                  purchaseTotalInput,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseTotalInput?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              공제받지 못할 매입세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (17)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseNonDeductible.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseNonDeductible',

                  purchaseNonDeductible,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseNonDeductible?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={purchaseNonDeductible.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'purchaseNonDeductible',

                  purchaseNonDeductible,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.purchaseNonDeductible?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseNonDeductible.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseNonDeductible',

                  purchaseNonDeductible,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseNonDeductible?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderTopColor: 'rgb(126, 126, 126)', borderLeftColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '9pt', textAlign: 'left' }}
            >
              차감계 (16)-(17)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderStyle: 'solid', borderWidth: '1pt', borderTopColor: 'rgb(126, 126, 126)', borderLeftColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              (18)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '120pt', borderStyle: 'solid', borderWidth: '1pt', borderTopColor: 'rgb(126, 126, 126)', borderLeftColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={purchaseNetResult.amount}

              onChange={value =>

                updateNestedField(

                  'purchaseNetResult',

                  purchaseNetResult,

                  'amount',

                  value

                )

              }

              inputType={inputType?.purchaseNetResult?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderStyle: 'solid', borderWidth: '1pt', borderTopColor: 'rgb(126, 126, 126)', borderLeftColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '9pt', textAlign: 'center' }}
            >
              ㉯
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <NumericInput

              value={purchaseNetResult.tax}

              onChange={value =>

                updateNestedField(

                  'purchaseNetResult',

                  purchaseNetResult,

                  'tax',

                  value

                )

              }

              inputType={inputType?.purchaseNetResult?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={5}
            style={{ verticalAlign: 'middle', width: '321pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '36pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              납 부 ( 환 급 ) 세 액 ( 매 출 세 액 ㉮ - 매 입 세 액 ㉯ )
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉰
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <NumericInput

              value={taxPayableOrRefundable.tax}

              onChange={value =>

                updateNestedField(

                  'taxPayableOrRefundable',

                  taxPayableOrRefundable,

                  'tax',

                  value

                )

              }

              inputType={inputType?.taxPayableOrRefundable?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            rowSpan={3}
            style={{ verticalAlign: 'middle', width: '39.5pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', textAlign: 'center' }}
          >
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '110%', textAlign: 'center', fontSize: '9pt' }}
            >
              경감
              <br />·<br />
              공제
              <br />
              세액
            </p>
          </td>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderBottomColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}
            >
              그 밖의 경감ㆍ공제세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderBottomColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}
            >
              (19)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderBottomColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)', backgroundColor: 'rgb(213, 213, 213)' }}>
            <NumericInput

              value={deductionOther.amount}

              onChange={value =>

                updateNestedField(

                  'deductionOther',

                  deductionOther,

                  'amount',

                  value

                )

              }

              inputType={inputType?.deductionOther?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderStyle: 'solid', borderWidth: '1pt', borderLeftColor: 'rgb(126, 126, 126)', borderBottomColor: 'rgb(126, 126, 126)', borderRightColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={deductionOther.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'deductionOther',

                  deductionOther,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.deductionOther?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '171pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={deductionOther.tax}

              onChange={value =>

                updateNestedField(

                  'deductionOther',

                  deductionOther,

                  'tax',

                  value

                )

              }

              inputType={inputType?.deductionOther?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}
            >
              신용카드매출전표등 발행공제 등
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}
            >
              (20)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={deductionCreditCardIssuance.amount}

              onChange={value =>

                updateNestedField(

                  'deductionCreditCardIssuance',

                  deductionCreditCardIssuance,

                  'amount',

                  value

                )

              }

              inputType={inputType?.deductionCreditCardIssuance?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <InputField

              className="text-input"

              type="text"

              value={deductionCreditCardIssuance.taxRate ?? ''}

              onChange={e =>

                updateNestedField(

                  'deductionCreditCardIssuance',

                  deductionCreditCardIssuance,

                  'taxRate',

                  e.target.value

                )

              }

              inputType={inputType?.deductionCreditCardIssuance?.taxRate}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={deductionCreditCardIssuance.tax}

              onChange={value =>

                updateNestedField(

                  'deductionCreditCardIssuance',

                  deductionCreditCardIssuance,

                  'tax',

                  value

                )

              }

              inputType={inputType?.deductionCreditCardIssuance?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={2}
            style={{ verticalAlign: 'middle', width: '151pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingTop: '1pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left' }}
            >
              합계
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingTop: '1pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}
            >
              (20)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={deductionTotal.amount}

              onChange={value =>

                updateNestedField(

                  'deductionTotal',

                  deductionTotal,

                  'amount',

                  value

                )

              }

              inputType={inputType?.deductionTotal?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'center' }}
            >
              ㉱
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={deductionTotal.tax}

              onChange={value =>

                updateNestedField(

                  'deductionTotal',

                  deductionTotal,

                  'tax',

                  value

                )

              }

              inputType={inputType?.deductionTotal?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(153, 153, 153)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              소규모 개인사업자 부가가치세 감면세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126) rgb(126, 126, 126) rgb(153, 153, 153)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (21)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '120pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126) rgb(126, 126, 126) rgb(153, 153, 153)' }}>
            <NumericInput

              value={smallBizExemption.amount}

              onChange={value =>

                updateNestedField(

                  'smallBizExemption',

                  smallBizExemption,

                  'amount',

                  value

                )

              }

              inputType={inputType?.smallBizExemption?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126) rgb(126, 126, 126) rgb(153, 153, 153)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉲
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(153, 153, 153)' }}>
            <NumericInput

              value={smallBizExemption.tax}

              onChange={value =>

                updateNestedField(

                  'smallBizExemption',

                  smallBizExemption,

                  'tax',

                  value

                )

              }

              inputType={inputType?.smallBizExemption?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(153, 153, 153)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              예정 신고 미환급 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '15pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(153, 153, 153) rgb(126, 126, 126) rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (22)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '120pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(153, 153, 153) rgb(126, 126, 126) rgb(126, 126, 126)' }}>
            <NumericInput

              value={prepaidUnrefunded.amount}

              onChange={value =>

                updateNestedField(

                  'prepaidUnrefunded',

                  prepaidUnrefunded,

                  'amount',

                  value

                )

              }

              inputType={inputType?.prepaidUnrefunded?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '30pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(153, 153, 153) rgb(126, 126, 126) rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉳
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(153, 153, 153)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={prepaidUnrefunded.tax}

              onChange={value =>

                updateNestedField(

                  'prepaidUnrefunded',

                  prepaidUnrefunded,

                  'tax',

                  value

                )

              }

              inputType={inputType?.prepaidUnrefunded?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              예정 고지 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (23)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={prepaidNotified.amount}

              onChange={value =>

                updateNestedField(

                  'prepaidNotified',

                  prepaidNotified,

                  'amount',

                  value

                )

              }

              inputType={inputType?.prepaidNotified?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉴
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={prepaidNotified.tax}

              onChange={value =>

                updateNestedField(

                  'prepaidNotified',

                  prepaidNotified,

                  'tax',

                  value

                )

              }

              inputType={inputType?.prepaidNotified?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              사업양수자가 대리납부한 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (24)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)', backgroundColor: 'rgb(213, 213, 213)' }}>
            <NumericInput

              value={taxPaidByProxy.amount}

              onChange={value =>

                updateNestedField(

                  'taxPaidByProxy',

                  taxPaidByProxy,

                  'amount',

                  value

                )

              }

              inputType={inputType?.taxPaidByProxy?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉵
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={taxPaidByProxy.tax}

              onChange={value =>

                updateNestedField(

                  'taxPaidByProxy',

                  taxPaidByProxy,

                  'tax',

                  value

                )

              }

              inputType={inputType?.taxPaidByProxy?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              매입자 납부특례에 따라 납부한 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (25)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)', backgroundColor: 'rgb(213, 213, 213)' }}>
            <NumericInput

              value={taxPaidBySpecialPurchase.amount}

              onChange={value =>

                updateNestedField(

                  'taxPaidBySpecialPurchase',

                  taxPaidBySpecialPurchase,

                  'amount',

                  value

                )

              }

              inputType={inputType?.taxPaidBySpecialPurchase?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉶
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={taxPaidBySpecialPurchase.tax}

              onChange={value =>

                updateNestedField(

                  'taxPaidBySpecialPurchase',

                  taxPaidBySpecialPurchase,

                  'tax',

                  value

                )

              }

              inputType={inputType?.taxPaidBySpecialPurchase?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              신용카드업자가 대리납부한 세액
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (26)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)', backgroundColor: 'rgb(213, 213, 213)' }}>
            <NumericInput

              value={taxPaidByCardCompany.amount}

              onChange={value =>

                updateNestedField(

                  'taxPaidByCardCompany',

                  taxPaidByCardCompany,

                  'amount',

                  value

                )

              }

              inputType={inputType?.taxPaidByCardCompany?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉷
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={taxPaidByCardCompany.tax}

              onChange={value =>

                updateNestedField(

                  'taxPaidByCardCompany',

                  taxPaidByCardCompany,

                  'tax',

                  value

                )

              }

              inputType={inputType?.taxPaidByCardCompany?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={3}
            style={{ verticalAlign: 'middle', width: '185pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              가산세액 계
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '25pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              (27)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '161pt', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <NumericInput

              value={penaltyTotal.amount}

              onChange={value =>

                updateNestedField(

                  'penaltyTotal',

                  penaltyTotal,

                  'amount',

                  value

                )

              }

              inputType={inputType?.penaltyTotal?.amount}

            />
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'center' }}
            >
              ㉸
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={penaltyTotal.tax}

              onChange={value =>

                updateNestedField(

                  'penaltyTotal',

                  penaltyTotal,

                  'tax',

                  value

                )

              }

              inputType={inputType?.penaltyTotal?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={5}
            style={{ verticalAlign: 'middle', width: '321pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ paddingLeft: '7pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
            >
              차감ㆍ가감하여 납부할 세액(환급받을
              세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '40pt', textAlign: 'center', borderStyle: 'solid', borderWidth: '1pt', borderColor: 'rgb(126, 126, 126)' }}>
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}
            >
              (28)
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottom: '1pt solid rgb(126, 126, 126)' }}>
            <NumericInput

              value={finalTaxToPay.tax}

              onChange={value =>

                updateNestedField(

                  'finalTaxToPay',

                  finalTaxToPay,

                  'tax',

                  value

                )

              }

              inputType={inputType?.finalTaxToPay?.tax}

            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            colSpan={6}
            style={{ verticalAlign: 'middle', width: '351pt', borderTop: '1pt solid rgb(126, 126, 126)', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRight: '1pt solid rgb(126, 126, 126)' }}
          >
            <p
              className="s3"
              style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}
            >
              총 괄 납 부 사 업 자 가 납 부 할 세 액 (환 급 받 을 세 액 )
            </p>
          </td>
          <td style={{ verticalAlign: 'middle', width: '134pt', borderTop: '1pt solid rgb(126, 126, 126)', borderLeft: '1pt solid rgb(126, 126, 126)', borderBottomStyle: 'solid', borderBottomWidth: '1pt' }}>
            <NumericInput

              value={consolidatedPaymentTax.tax}

              onChange={value =>

                updateNestedField(

                  'consolidatedPaymentTax',

                  consolidatedPaymentTax,

                  'tax',

                  value

                )

              }

              inputType={inputType?.consolidatedPaymentTax?.tax}

            />
          </td>
        </tr>
      </table>
      <table
        style={{ borderCollapse: 'collapse', marginLeft: '5.929pt' }}
        cellSpacing="0"
      >
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            rowSpan={2}
          >
            <p
              className="s3"
              style={{
                padding: '0',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              세무대리인
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '79pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s3"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              성 명
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '132pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={2}
          >
            <InputField
              className="text-input"
              type="text"
              value={taxAgentName}
              onChange={e => updater('taxAgentName', e.target.value)}
              inputType={inputType?.taxAgentName}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '3pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '141pt',
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
            colSpan={2}
          >
            <InputField
              className="text-input"
              type="text"
              value={taxAgentBizNumber}
              onChange={e => updater('taxAgentBizNumber', e.target.value)}
              inputType={inputType?.taxAgentBizNumber}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '69pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s3"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
              }}
            >
              관리번호
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '72pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <InputField
              className="text-input"
              type="text"
              value={taxAgentMgmtNumber}
              onChange={e => updater('taxAgentMgmtNumber', e.target.value)}
              inputType={inputType?.taxAgentMgmtNumber}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '17pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              생년월일
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <InputField
              className="text-input"
              type="text"
              value={taxAgentResidentNumber}
              onChange={e =>
                updater('taxAgentResidentNumber', digitsOnly(e.target.value))
              }
              inputType={inputType?.taxAgentResidentNumber}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '17pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'left',
              }}
            >
              전화번호
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '71pt',
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
            <InputField
              className="text-input"
              type="text"
              value={taxAgentPhone}
              onChange={e => updater('taxAgentPhone', e.target.value)}
              inputType={inputType?.taxAgentPhone}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
