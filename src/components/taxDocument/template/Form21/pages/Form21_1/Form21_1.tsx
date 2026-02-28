'use client';
import './form21_1.css';
import { Form21Data, Form21InputData, } from '@/components/taxDocument/template/Form21/type';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import InputField from '@/components/taxDocument/template/common/InputField';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import OutputTaxTable from '@/components/taxDocument/template/Form21/pages/Form21_1/OutputTaxTable';
import InputTaxTable from '@/components/taxDocument/template/Form21/pages/Form21_1/InputTaxTable';
import Stamp from '@/components/taxDocument/template/common/Stamp';
import Input from '@/components/taxDocument/template/common/Input';

type Props = Form21Data &
  UpdaterProps<Form21Data> & { inputType?: Form21InputData };

function StampOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <span
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '0 5pt',
        cursor: 'pointer',
        lineHeight: '1',
        userSelect: 'none',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={selected}
    >
      {label}

      {selected && (
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '1.3em',
            height: '1.3em',
            border: '1pt solid #000',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            boxSizing: 'border-box',
          }}
        />
      )}
    </span>
  );
}

function BracketOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2pt',
        cursor: 'pointer',
        lineHeight: '1',
        userSelect: 'none',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={selected}
    >
      <span>{label}[</span>
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: '8pt',
          textAlign: 'center',
        }}
      >
        {selected ? 'O' : ''}
      </span>
      <span>]</span>
    </span>
  );
}

export default function Form21_1({ updater, inputType, ...data }: Props) {
  const {
    isScheduled,
    isFinal,
    isAfterDeadline,
    isZeroRateEarlyRefund,
    attributionYear,
    attributionTerm,
    periodStartMonth,
    periodStartDay,
    periodEndMonth,
    periodEndDay,
    bizName,
    repName,
    bizNumber,
    residentNumber,
    phoneNumber,
    bizAddress,
    homeAddress,
    mobileNumber,
    email,
    taxAgentName,
    taxAgentPhone,
    taxAgentBizNumber,
    taxAgentMgmtNumber,
    taxAgentResidentNumber,
    refundBankName,
    refundBranchName,
    refundAccountNumber,
    closureDate,
    closureReason,
    isZeroRateReciprocity,
    applicationType,
    zeroRateBizType,
    zeroRateCountry,
    taxBaseProofs,
  } = data;
  const reportTypeFields = [
    'isScheduled',
    'isFinal',
    'isAfterDeadline',
    'isZeroRateEarlyRefund',
  ] as const;

  const handleReportTypeChange = (
    field: (typeof reportTypeFields)[number],
    checked: boolean
  ) => {
    if (!checked) {
      updater(field, false);
      return;
    }
    reportTypeFields.forEach(key => updater(key, key === field));
  };
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

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

  const updateTaxBaseProof = <
    F extends keyof Form21Data['taxBaseProofs'][number],
  >(
    index: number,
    field: F,
    value: Form21Data['taxBaseProofs'][number][F]
  ) => {
    const current = taxBaseProofs ?? [];
    const existing = current[index] ?? {
      bizType: '',
      bizItem: '',
      productionFactor: '',
      bizCode: '',
      amount: 0,
    };
    const next = [...current];
    next[index] = {
      ...existing,
      [field]: value,
    };
    updater('taxBaseProofs', next);
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
                  onChange={e =>
                    handleReportTypeChange('isScheduled', e.target.checked)
                  }
                />
                ] 예정 [
                <InputField
                  type="checkbox"
                  name="reportType"
                  id="check2"
                  checked={isFinal}
                  onChange={e =>
                    handleReportTypeChange('isFinal', e.target.checked)
                  }
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
                  onChange={e =>
                    handleReportTypeChange('isAfterDeadline', e.target.checked)
                  }
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
                    handleReportTypeChange(
                      'isZeroRateEarlyRefund',
                      e.target.checked
                    )
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
        신고기간{' '}
        <Input
          maxLength={4}
          className="report-period-input"
          style={{
            width: '40pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          value={attributionYear}
          onChange={value => updater('attributionYear', digitsOnly(value))}
          inputType={inputType?.attributionYear}
        />
        년 제{' '}
        <Input
          maxLength={2}
          className="report-period-input"
          style={{
            width: '15pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          value={attributionTerm}
          onChange={value => updater('attributionTerm', digitsOnly(value))}
          inputType={inputType?.attributionTerm}
        />{' '}
        기 (
        <Input
          maxLength={2}
          className="report-period-input"
          style={{
            width: '15pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          value={periodStartMonth}
          onChange={value => updater('periodStartMonth', digitsOnly(value))}
          inputType={inputType?.periodStartMonth}
        />
        월{' '}
        <Input
          maxLength={2}
          className="report-period-input"
          style={{
            width: '15pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          value={periodStartDay}
          onChange={value => updater('periodStartDay', digitsOnly(value))}
          inputType={inputType?.periodStartDay}
        />
        일 ~{' '}
        <Input
          maxLength={2}
          className="report-period-input"
          style={{
            width: '15pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          value={periodEndMonth}
          onChange={value => updater('periodEndMonth', digitsOnly(value))}
          inputType={inputType?.periodEndMonth}
        />
        월{' '}
        <Input
          maxLength={2}
          className="report-period-input"
          style={{
            width: '15pt',
            border: 'none',
            textAlign: 'center',
            fontSize: '8pt',
          }}
          value={periodEndDay}
          onChange={value => updater('periodEndDay', digitsOnly(value))}
          inputType={inputType?.periodEndDay}
        />{' '}
        일)
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
            <Input
              className="cell-input full-cell-input"
              style={{ width: '100%', height: '100%', boxSizing: 'border-box' }}
              value={residentNumber}
              onChange={value => updater('residentNumber', digitsOnly(value))}
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
          />
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
            <Input
              className="cell-input"
              type="text"
              value={bizAddress}
              onChange={value => updater('bizAddress', value)}
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
      <OutputTaxTable inputType={inputType} updater={updater} {...data} />
      <InputTaxTable inputType={inputType} updater={updater} {...data} />
      <table
        className="below-purchase-tax-table"
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
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '147pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: 'none',
              position: 'relative',
              padding: '0',
              paddingLeft: '3pt',
              textAlign: 'left',
            }}
          >
            <p
              className="s3"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                fontSize: '11pt',
                textAlign: 'left',
                paddingLeft: '0',
              }}
            >
              ② <b>국세환급금 계좌신고</b>
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '92pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              position: 'relative',
              padding: '0',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
              }}
            >
              거래은행
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '162pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              position: 'relative',
              padding: '0',
            }}
          >
            <InputField
              type="text"
              className="text-input"
              maxLength={5}
              value={refundBankName}
              onChange={e => updater('refundBankName', e.target.value)}
              inputType={inputType?.refundBankName}
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '50pt',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                textAlign: 'center',
                outline: 'none',
                padding: '0px',
                margin: '0px',
                boxSizing: 'border-box',
              }}
            />
            <p
              style={{
                position: 'absolute',
                left: '55pt',
                top: '0px',
                margin: '0px',
                padding: '0px',
                textIndent: '0px',
                lineHeight: '20pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
              }}
            >
              은행
            </p>
            <InputField
              type="text"
              className="text-input"
              maxLength={5}
              value={refundBranchName}
              onChange={e => updater('refundBranchName', e.target.value)}
              inputType={inputType?.refundBranchName}
              style={{
                position: 'absolute',
                left: '80pt',
                top: '0px',
                width: '50pt',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                textAlign: 'center',
                outline: 'none',
                padding: '0px',
                margin: '0px',
                boxSizing: 'border-box',
              }}
            />
            <p
              style={{
                position: 'absolute',
                left: '135pt',
                top: '0px',
                margin: '0px',
                padding: '0px',
                textIndent: '0px',
                lineHeight: '20pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
              }}
            >
              지점
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '82pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              position: 'relative',
              padding: '0',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
              }}
            >
              계좌번호
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '141pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderRight: 'none',
              position: 'relative',
              padding: '0',
            }}
          >
            <InputField
              type="text"
              className="text-input"
              value={refundAccountNumber}
              onChange={e => updater('refundAccountNumber', e.target.value)}
              inputType={inputType?.refundAccountNumber}
              style={{
                position: 'absolute',
                inset: '0px',
                width: '100%',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '8pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                padding: '0px',
                outline: 'none',
                margin: '0px',
                boxSizing: 'border-box',
              }}
            />
          </td>
        </tr>
      </table>
      <table
        className="inserted-between-tables"
        style={{
          borderCollapse: 'collapse',
          marginTop: '2pt',
          tableLayout: 'fixed',
          marginRight: 'auto',
          width: '624pt',
          marginLeft: '0',
          boxSizing: 'border-box',
          border: 'none',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '150pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '10pt',
                paddingLeft: '3pt',
              }}
            >
              ③ <span style={{ fontWeight: 'bold' }}>폐업신고</span>
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '118pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              폐업일
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '118pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              position: 'relative',
              padding: '0',
              margin: '0',
            }}
          >
            <InputField
              type="text"
              className="closure-date-input"
              value={closureDate}
              onChange={e => updater('closureDate', e.target.value)}
              inputType={inputType?.closureDate}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '119pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              폐업 사유
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '119pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              position: 'relative',
              padding: '0',
              margin: '0',
            }}
          >
            <InputField
              type="text"
              className="closure-reason-input"
              value={closureReason}
              onChange={e => updater('closureReason', e.target.value)}
              inputType={inputType?.closureReason}
            />
          </td>
        </tr>
      </table>
      <table
        className="closure-report-detail-table"
        style={{
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          marginTop: '2pt',
          marginRight: 'auto',
          width: '624pt',
          marginLeft: '0',
          boxSizing: 'border-box',
          border: 'none',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              width: '150pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              paddingLeft: '3pt',
              textAlign: 'left',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                fontSize: '10pt',
                textAlign: 'left',
                paddingLeft: '0',
              }}
            >
              <span style={{ marginLeft: '3pt' }}>④</span>{' '}
              <span style={{ fontWeight: 'bold' }}>영세율 상호주의</span>
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '118pt',
              borderTop: '1pt solid rgb(0, 0, 0)',
              borderBottom: '1pt solid rgb(0, 0, 0)',
              borderLeft: '1pt solid rgb(126, 126, 126)',
              textAlign: 'center',
              padding: '0px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8pt',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
              }}
            >
              <BracketOption
                label="해당"
                selected={isZeroRateReciprocity === true}
                onClick={() => updater('isZeroRateReciprocity', true)}
              />
              <BracketOption
                label="미해당"
                selected={isZeroRateReciprocity === false}
                onClick={() => updater('isZeroRateReciprocity', false)}
              />
            </div>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '59pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              적용구분
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '59pt',
              borderTop: '1pt solid rgb(0, 0, 0)',
              borderBottom: '1pt solid rgb(0, 0, 0)',
              borderLeft: '1pt solid rgb(126, 126, 126)',
              position: 'relative',
              padding: '0px',
            }}
          >
            <InputField
              type="text"
              className="text-input"
              value={applicationType}
              onChange={e => updater('applicationType', e.target.value)}
              inputType={inputType?.applicationType}
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '100%',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '9pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                outline: 'none',
                padding: '0px',
                margin: '0px',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '59pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              업종
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '59pt',
              borderTop: '1pt solid rgb(0, 0, 0)',
              borderBottom: '1pt solid rgb(0, 0, 0)',
              borderLeft: '1pt solid rgb(126, 126, 126)',
              position: 'relative',
              padding: '0px',
            }}
          >
            <InputField
              type="text"
              className="text-input"
              value={zeroRateBizType}
              onChange={e => updater('zeroRateBizType', e.target.value)}
              inputType={inputType?.zeroRateBizType}
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '100%',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '9pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                outline: 'none',
                padding: '0px',
                margin: '0px',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '59pt',
              borderTop: '1pt solid #000',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              해당국가
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              width: '61pt',
              borderTop: '1pt solid rgb(0, 0, 0)',
              borderBottom: '1pt solid rgb(0, 0, 0)',
              borderLeft: '1pt solid rgb(126, 126, 126)',
              position: 'relative',
              padding: '0px',
            }}
          >
            <InputField
              type="text"
              className="text-input"
              value={zeroRateCountry}
              onChange={e => updater('zeroRateCountry', e.target.value)}
              inputType={inputType?.zeroRateCountry}
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '100%',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '9pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                outline: 'none',
                padding: '0px',
                margin: '0px',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
        </tr>
      </table>
      <table
        className="below-zero-rate-table"
        style={{
          borderCollapse: 'collapse',
          marginRight: 'auto',
          marginTop: '2pt',
          tableLayout: 'fixed',
          display: 'table',
          visibility: 'visible',
          opacity: '1',
          width: '624pt',
          marginLeft: '0',
          boxSizing: 'border-box',
          border: 'none',
          marginBottom: '2pt !important',
        }}
        cellSpacing="0"
        data-protected="true"
        data-below-zero-rate="true"
      >
        <colgroup>
          <col style={{ width: '80pt' }} />
          <col style={{ width: '50.33pt' }} />
          <col style={{ width: '50.33pt' }} />
          <col style={{ width: '50.34pt' }} />
          <col style={{ width: '70pt' }} />
          <col style={{ width: '323pt' }} />
        </colgroup>
        <tr style={{ height: '20pt' }}>
          <td
            colSpan={5}
            style={{
              verticalAlign: 'middle',
              borderTop: '1pt solid #000',
              borderLeft: 'none',
              borderRight: 'none',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '10pt',
                paddingLeft: '3pt',
              }}
            >
              ⑤ <span style={{ fontWeight: 'bold' }}>과세표준명세</span>
            </p>
          </td>
          <td
            rowSpan={6}
            style={{
              borderTop: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderRight: 'none',
              verticalAlign: 'top !important',
              borderBottom: '1pt solid #7E7E7E !important',
            }}
          >
            <div
              style={{
                fontSize: '9pt',
                padding: '3pt',
                paddingLeft: '5pt',
                lineHeight: '0.9',
              }}
            >
              <p
                style={{
                  textIndent: '0pt',
                  textAlign: 'left',
                  margin: '0',
                  paddingLeft: '6pt',
                  letterSpacing: '-0.05em',
                }}
              >
                「부가가치세법」 제48조ㆍ제49조 또는 제59조와 「국세기본법」
                제45조 의3에 따라 위의 내용을 신고하며,{' '}
                <span style={{ fontWeight: 'bold' }}>
                  위 내용을 충분히 검토하였고 신고인이 알고 있는 사실 그대로를
                  정확하게 적었음을 확인합니다.
                </span>
              </p>
              <div style={{ textAlign: 'right', margin: '2pt 0' }}>
                <input
                  type="text"
                  maxLength={4}
                  className="cell-input"
                  style={{
                    width: '24pt',
                    height: '9pt',
                    border: '1pt solid transparent',
                    outline: 'none',
                    padding: '0',
                    margin: '0',
                    fontSize: '9pt',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    background: 'transparent',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '1em',
                  }}
                />
                년{' '}
                <input
                  type="text"
                  maxLength={2}
                  className="cell-input"
                  style={{
                    width: '16pt',
                    height: '9pt',
                    border: '1pt solid transparent',
                    outline: 'none',
                    padding: '0',
                    margin: '0',
                    fontSize: '9pt',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    background: 'transparent',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '1em',
                  }}
                />
                월{' '}
                <input
                  type="text"
                  maxLength={2}
                  className="cell-input"
                  style={{
                    width: '16pt',
                    height: '9pt',
                    border: '1pt solid transparent',
                    outline: 'none',
                    padding: '0',
                    margin: '0',
                    fontSize: '9pt',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    background: 'transparent',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '1em',
                  }}
                />
                일
              </div>
              <p
                style={{
                  textIndent: '0pt',
                  textAlign: 'right',
                  margin: '0',
                  marginLeft: '10pt',
                  position: 'relative',
                }}
              >
                신고인:{' '}
                <input
                  type="text"
                  className="cell-input"
                  style={{
                    width: '80pt',
                    height: '20pt',
                    border: '1pt solid transparent',
                    outline: 'none',
                    padding: '0',
                    margin: '0 20pt',
                    fontSize: '9pt',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    background: 'transparent',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '1em',
                  }}
                />
                <Stamp style={{ fontSize: '9pt' }}>(서명 또는 인)</Stamp>
              </p>
              <div
                style={{
                  height: '2pt',
                  backgroundColor: '#808080',
                  margin: '0',
                  marginLeft: '4pt',
                  marginRight: '0',
                }}
              ></div>
              <p
                style={{
                  textIndent: '0pt',
                  textAlign: 'left',
                  margin: '0',
                  paddingLeft: '6pt',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>
                  세무대리인은 조세전문자격자로서 위 신고서를 성실하고 공정하게
                  작성 하였음을 확인합니다.
                </span>
              </p>
              <p
                style={{
                  textIndent: '0pt',
                  textAlign: 'right',
                  margin: '0',
                  marginLeft: '10pt',
                  position: 'relative',
                }}
              >
                세무대리인:{' '}
                <input
                  type="text"
                  className="cell-input"
                  style={{
                    width: '80pt',
                    height: '20pt',
                    border: '1pt solid transparent',
                    outline: 'none',
                    padding: '0',
                    margin: '0 20pt',
                    fontSize: '9pt',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    background: 'transparent',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '1em',
                  }}
                />
                <Stamp style={{ fontSize: '9pt' }}>(서명 또는 인)</Stamp>
              </p>
              <div
                style={{
                  height: '2pt',
                  backgroundColor: '#808080',
                  margin: '0',
                  marginLeft: '4pt',
                  marginRight: '0',
                }}
              ></div>
              <p
                style={{
                  textIndent: '0pt',
                  textAlign: 'left',
                  margin: '0',
                  paddingLeft: '10pt',
                  fontSize: '12pt',
                  fontWeight: 'bold',
                }}
              >
                세무서장{' '}
                <span style={{ fontSize: '10pt', fontWeight: 'normal' }}>
                  귀하
                </span>
              </p>
            </div>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: 'none',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              업태
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              종목
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              생산요소
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              업종 코드
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: 'none',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                paddingLeft: '3pt',
                margin: '0',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              (31)
              <InputField
                type="text"
                className="cell-input"
                value={taxBaseProofs?.[0]?.bizType ?? ''}
                onChange={e => updateTaxBaseProof(0, 'bizType', e.target.value)}
                inputType={inputType?.taxBaseProofs?.[0]?.bizType}
                style={{
                  marginLeft: '5pt',
                  border: '1pt solid transparent',
                  outline: 'none',
                  padding: '0',
                  fontSize: '9pt',
                  fontFamily: 'Arial, sans-serif',
                  background: 'transparent',
                  boxSizing: 'border-box',
                  width: '50pt',
                }}
              />
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[0]?.bizItem ?? ''}
              onChange={e => updateTaxBaseProof(0, 'bizItem', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[0]?.bizItem}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[0]?.productionFactor ?? ''}
              onChange={e =>
                updateTaxBaseProof(0, 'productionFactor', e.target.value)
              }
              inputType={inputType?.taxBaseProofs?.[0]?.productionFactor}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[0]?.bizCode ?? ''}
              onChange={e => updateTaxBaseProof(0, 'bizCode', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[0]?.bizCode}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <NumericInput
              value={taxBaseProofs?.[0]?.amount ?? 0}
              onChange={value => updateTaxBaseProof(0, 'amount', value)}
              inputType={inputType?.taxBaseProofs?.[0]?.amount}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'right',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: 'none',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                paddingLeft: '3pt',
                margin: '0',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              (32)
              <InputField
                type="text"
                className="cell-input"
                value={taxBaseProofs?.[1]?.bizType ?? ''}
                onChange={e => updateTaxBaseProof(1, 'bizType', e.target.value)}
                inputType={inputType?.taxBaseProofs?.[1]?.bizType}
                style={{
                  marginLeft: '5pt',
                  border: '1pt solid transparent',
                  outline: 'none',
                  padding: '0',
                  fontSize: '9pt',
                  fontFamily: 'Arial, sans-serif',
                  background: 'transparent',
                  boxSizing: 'border-box',
                  width: '50pt',
                }}
              />
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[1]?.bizItem ?? ''}
              onChange={e => updateTaxBaseProof(1, 'bizItem', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[1]?.bizItem}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[1]?.productionFactor ?? ''}
              onChange={e =>
                updateTaxBaseProof(1, 'productionFactor', e.target.value)
              }
              inputType={inputType?.taxBaseProofs?.[1]?.productionFactor}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[1]?.bizCode ?? ''}
              onChange={e => updateTaxBaseProof(1, 'bizCode', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[1]?.bizCode}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <NumericInput
              value={taxBaseProofs?.[1]?.amount ?? 0}
              onChange={value => updateTaxBaseProof(1, 'amount', value)}
              inputType={inputType?.taxBaseProofs?.[1]?.amount}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'right',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: 'none',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                paddingLeft: '3pt',
                margin: '0',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              (33)
              <InputField
                type="text"
                className="cell-input"
                value={taxBaseProofs?.[2]?.bizType ?? ''}
                onChange={e => updateTaxBaseProof(2, 'bizType', e.target.value)}
                inputType={inputType?.taxBaseProofs?.[2]?.bizType}
                style={{
                  marginLeft: '5pt',
                  border: '1pt solid transparent',
                  outline: 'none',
                  padding: '0',
                  fontSize: '9pt',
                  fontFamily: 'Arial, sans-serif',
                  background: 'transparent',
                  boxSizing: 'border-box',
                  width: '50pt',
                }}
              />
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[2]?.bizItem ?? ''}
              onChange={e => updateTaxBaseProof(2, 'bizItem', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[2]?.bizItem}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[2]?.productionFactor ?? ''}
              onChange={e =>
                updateTaxBaseProof(2, 'productionFactor', e.target.value)
              }
              inputType={inputType?.taxBaseProofs?.[2]?.productionFactor}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[2]?.bizCode ?? ''}
              onChange={e => updateTaxBaseProof(2, 'bizCode', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[2]?.bizCode}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <NumericInput
              value={taxBaseProofs?.[2]?.amount ?? 0}
              onChange={value => updateTaxBaseProof(2, 'amount', value)}
              inputType={inputType?.taxBaseProofs?.[2]?.amount}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'right',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: 'none',
              borderTop: '1pt solid #7E7E7E',
              borderBottom: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                paddingLeft: '3pt',
              }}
            >
              (34)<span style={{ letterSpacing: '-0.3em' }}>수입금액</span>{' '}
              <span style={{ letterSpacing: '-0.3em' }}>제외</span>
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              borderBottom: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[3]?.bizItem ?? ''}
              onChange={e => updateTaxBaseProof(3, 'bizItem', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[3]?.bizItem}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              borderBottom: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[3]?.productionFactor ?? ''}
              onChange={e =>
                updateTaxBaseProof(3, 'productionFactor', e.target.value)
              }
              inputType={inputType?.taxBaseProofs?.[3]?.productionFactor}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              borderBottom: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <InputField
              type="text"
              className="cell-input"
              value={taxBaseProofs?.[3]?.bizCode ?? ''}
              onChange={e => updateTaxBaseProof(3, 'bizCode', e.target.value)}
              inputType={inputType?.taxBaseProofs?.[3]?.bizCode}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              borderBottom: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <NumericInput
              value={taxBaseProofs?.[3]?.amount ?? 0}
              onChange={value => updateTaxBaseProof(3, 'amount', value)}
              inputType={inputType?.taxBaseProofs?.[3]?.amount}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'right',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              verticalAlign: 'middle',
              borderBottom: '1pt solid #000',
              borderLeft: 'none',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                paddingLeft: '3pt',
              }}
            >
              (35) 합 계
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderTop: '1pt solid #7E7E7E',
              padding: '0',
              position: 'relative',
            }}
          >
            <input
              type="text"
              className="cell-input number-input-comma"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                width: '100%',
                height: '100%',
                border: '1pt solid transparent',
                outline: 'none',
                padding: '0',
                margin: '0',
                fontSize: '7pt',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'right',
                background: 'transparent',
                boxSizing: 'border-box',
                lineHeight: '1em',
              }}
            />
          </td>
          <td
            style={{
              verticalAlign: 'middle',
              borderBottom: '1pt solid #000',
              borderLeft: '1pt solid #7E7E7E',
              borderRight: 'none',
              borderTop: '1pt solid #7E7E7E',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움, Dotum, sans-serif',
                paddingLeft: '15pt',
                margin: '0',
              }}
            >
              <span style={{ marginRight: '15pt' }}>첨부서류</span>
              <span>뒤쪽참조</span>
            </p>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
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
