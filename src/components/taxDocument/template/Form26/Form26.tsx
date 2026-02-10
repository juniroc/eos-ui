'use client';
import './form26.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import InputField from '@/components/taxDocument/template/common/InputField';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  CashSalesDetailItem,
  Form26Data,
  Form26InputData,
} from '@/components/taxDocument/template/Form26/type';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form26Props = UpdaterProps<Form26Data> & { inputType?: Form26InputData };

const CASH_SALES_DETAIL_ROW_COUNT = 11;

export default function Form26({
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
  totalStats,
  cashSalesStats,
  taxInvoiceStats,
  cashSalesDetailsTotal,
  cashSalesDetailItems,
  inputType,
}: Form26Props) {
  const toNumberValue = (value: string) => {
    const digits = value.replace(/[^0-9]/g, '');
    return digits ? Number(digits) : undefined;
  };
  const toStringValue = (value: number) => (value ? String(value) : '');

  const baseCashSalesDetailItem: CashSalesDetailItem = {
    clientResOrBizNumber: '',
    clientName: '',
    transactionDate: '',
    totalAmount: 0,
    supplyValue: 0,
    taxAmount: 0,
  };

  const mappedCashSalesDetailItems = Array.from(
    { length: CASH_SALES_DETAIL_ROW_COUNT },
    (_, index) => cashSalesDetailItems[index] ?? baseCashSalesDetailItem
  );

  const updateCashSalesDetailItem = <K extends keyof CashSalesDetailItem>(
    index: number,
    field: K,
    value: CashSalesDetailItem[K]
  ) => {
    const nextItems = [...cashSalesDetailItems];
    const target = nextItems[index] ?? baseCashSalesDetailItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('cashSalesDetailItems', nextItems);
  };

  return (
    <PageSlot slotWidth={624} slotHeight={882}>
      <div className="form26">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제26호서식]
            <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'center' }}
      >
        현금매출명세서
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
            fontSize: '9pt',
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
            fontSize: '9pt',
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
      <p style={{ paddingTop: '9pt', textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '90pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ① 상호(법인명)
            </p>
          </td>
          <td
            style={{
              width: '115pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
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
              width: '90pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ② 성명(대표자)
            </p>
          </td>
          <td
            style={{
              width: '115pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
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
          <td
            style={{
              width: '100pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ③ 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '114pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
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
              width: '30pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
            }}
            rowSpan={3}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              공급
              <br />
              가액
            </p>
          </td>
          <td
            style={{
              width: '146pt',
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
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ④ 합계
            </p>
          </td>
          <td
            style={{
              width: '152pt',
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
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑤ 현금매출
            </p>
          </td>
          <td
            style={{
              width: '153pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑥ 세금계산서
            </p>
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
          <td
            style={{
              width: '59pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              건수
            </p>
          </td>
          <td
            style={{
              width: '87pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '65pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              건수
            </p>
          </td>
          <td
            style={{
              width: '87pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '65pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              건수
            </p>
          </td>
          <td
            style={{
              width: '88pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '26pt' }}>
          <td
            style={{
              width: '59pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={totalStats.count}
              onChange={value =>
                updater('totalStats', { ...totalStats, count: value })
              }
            inputType={inputType?.totalStats?.count}
            />
          </td>
          <td
            style={{
              width: '87pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={totalStats.amount}
              onChange={value =>
                updater('totalStats', { ...totalStats, amount: value })
              }
            inputType={inputType?.totalStats?.amount}
            />
          </td>
          <td
            style={{
              width: '65pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={cashSalesStats.count}
              onChange={value =>
                updater('cashSalesStats', { ...cashSalesStats, count: value })
              }
            inputType={inputType?.cashSalesStats?.count}
            />
          </td>
          <td
            style={{
              width: '87pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={cashSalesStats.amount}
              onChange={value =>
                updater('cashSalesStats', { ...cashSalesStats, amount: value })
              }
            inputType={inputType?.cashSalesStats?.amount}
            />
          </td>
          <td
            style={{
              width: '65pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={taxInvoiceStats.count}
              onChange={value =>
                updater('taxInvoiceStats', { ...taxInvoiceStats, count: value })
              }
            inputType={inputType?.taxInvoiceStats?.count}
            />
          </td>
          <td
            style={{
              width: '88pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
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
              value={taxInvoiceStats.amount}
              onChange={value =>
                updater('taxInvoiceStats', {
                  ...taxInvoiceStats,
                  amount: value,
                })
              }
            inputType={inputType?.taxInvoiceStats?.amount}
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
      <p
        className="s7"
        style={{
          paddingTop: '6pt',
          paddingLeft: '10pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        현금매출 명세
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
        <tr style={{ height: '26pt' }}>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '4pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑦
            </p>
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              일련
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '182pt',
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
              verticalAlign: 'middle',
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑧<span className="s4">의뢰인</span>
            </p>
          </td>
          <td
            style={{
              width: '45pt',
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
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑨
            </p>
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              거래일
            </p>
          </td>
          <td
            style={{
              width: '221pt',
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
            }}
            colSpan={3}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑩<span className="s4">거 래 금 액</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '112pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              주민등록번호
              <br />
              (또는 사업자등록번호)
            </p>
          </td>
          <td
            style={{
              width: '70pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              성명
              <br />
              (또는 상호)
            </p>
          </td>
          <td
            style={{
              width: '64pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              공급대가
            </p>
          </td>
          <td
            style={{
              width: '67pt',
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
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              공급가액
            </p>
          </td>
          <td
            style={{
              width: '90pt',
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
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              부가가치세
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              textAlign: 'center',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '112pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <InputField
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '70pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <InputField
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '45pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <InputField
              className="form-input form-input-text"
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '64pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={cashSalesDetailsTotal.totalAmount}
              onChange={value =>
                updater('cashSalesDetailsTotal', {
                  ...cashSalesDetailsTotal,
                  totalAmount: value,
                })
              }
            inputType={inputType?.cashSalesDetailsTotal?.totalAmount}
            />
          </td>
          <td
            style={{
              width: '67pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={cashSalesDetailsTotal.supplyValue}
              onChange={value =>
                updater('cashSalesDetailsTotal', {
                  ...cashSalesDetailsTotal,
                  supplyValue: value,
                })
              }
            inputType={inputType?.cashSalesDetailsTotal?.supplyValue}
            />
          </td>
          <td
            style={{
              width: '90pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={cashSalesDetailsTotal.taxAmount}
              onChange={value =>
                updater('cashSalesDetailsTotal', {
                  ...cashSalesDetailsTotal,
                  taxAmount: value,
                })
              }
            inputType={inputType?.cashSalesDetailsTotal?.taxAmount}
            />
          </td>
        </tr>
        {mappedCashSalesDetailItems.map((item, index) => (
          <tr key={index} style={{ height: '23pt' }}>
            <td
              style={{
                width: '33pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#5D5D5D',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#5D5D5D',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#5D5D5D',
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            >
              <InputField
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  textAlign: 'center',
                }}
                type="text"
              />
            </td>
            <td
              style={{
                width: '112pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <InputField
                className="form-input form-input-text"
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.clientResOrBizNumber}
                onChange={e =>
                  updateCashSalesDetailItem(
                    index,
                    'clientResOrBizNumber',
                    e.target.value
                  )
                }
              inputType={inputType?.cashSalesDetailItems?.[index]?.clientResOrBizNumber}
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <InputField
                className="form-input form-input-text"
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.clientName}
                onChange={e =>
                  updateCashSalesDetailItem(index, 'clientName', e.target.value)
                }
              inputType={inputType?.cashSalesDetailItems?.[index]?.clientName}
              />
            </td>
            <td
              style={{
                width: '45pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <InputField
                className="form-input form-input-text"
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                type="text"
                value={item.transactionDate}
                onChange={e =>
                  updateCashSalesDetailItem(
                    index,
                    'transactionDate',
                    e.target.value
                  )
                }
              inputType={inputType?.cashSalesDetailItems?.[index]?.transactionDate}
              />
            </td>
            <td
              style={{
                width: '64pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item.totalAmount}
                onChange={value =>
                  updateCashSalesDetailItem(index, 'totalAmount', value)
                }
              inputType={inputType?.cashSalesDetailItems?.[index]?.totalAmount}
              />
            </td>
            <td
              style={{
                width: '67pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item.supplyValue}
                onChange={value =>
                  updateCashSalesDetailItem(index, 'supplyValue', value)
                }
              inputType={inputType?.cashSalesDetailItems?.[index]?.supplyValue}
              />
            </td>
            <td
              style={{
                width: '90pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#5D5D5D',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#5D5D5D',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#5D5D5D',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item.taxAmount}
                onChange={value =>
                  updateCashSalesDetailItem(index, 'taxAmount', value)
                }
              inputType={inputType?.cashSalesDetailItems?.[index]?.taxAmount}
              />
            </td>
          </tr>
        ))}
      </table>
      <p style={{ paddingTop: '20pt', textIndent: '0pt', textAlign: 'left' }}>
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
      <p
        className="s8"
        style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}
      >
        작 성 방 법
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        className="s1"
        style={{
          paddingTop: '1pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ① ~<span className="p">③은</span>
        제출자의 상호 또는 법인명과 대표자, 사업자등록번호를 적습니다.
      </p>
      <p
        style={{
          paddingTop: '4pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑤: 현금매출란에는 순수 현금매출(세금계산서 발급분 제외)을 적습니다.
      </p>
      <p
        style={{
          paddingTop: '4pt',
          paddingLeft: '33pt',
          textIndent: '-16pt',
          lineHeight: '138%',
          textAlign: 'left',
        }}
      >
        ⑥<span className="s1">:</span>
        세금계산서 발급분 중 「부가가치세법」 제32조제1항제2호 단서에 따라
        주민등록번호를 적은 분은 ⑥ 세금계산서란에 포함하여 적습니다.
      </p>
      <p style={{ paddingLeft: '17pt', textIndent: '0pt', textAlign: 'left' }}>
        ⑦<span className="s1">~</span>
        ⑩은
        <span className="s1">현금매출 내용을 적습니다.</span>
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
    </PageSlot>
  );
}
