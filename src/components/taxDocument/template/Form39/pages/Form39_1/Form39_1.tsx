'use client';
import './form39_1.css';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import { Form39Data } from '@/components/taxDocument/template/Form39/type';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FORM_39_1_MAX_DETAIL_LIST_MAX_LENGTH } from '@/components/taxDocument/template/Form39/constants';

export default function Form39_1({
  pageIndex,
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterInfo,
  summary,
  detailList,
}: FormPageProps<Form39Data>) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

  const createEmptySplit =
    (): Form39Data['summary']['grandTotal']['supplyPrice'] => ({
      trillion: 0,
      billion: 0,
      million: 0,
      thousand: 0,
      one: 0,
    });

  const createEmptyDetail = (): Form39Data['detailList'][number] => ({
    bizRegNumber: '',
    companyName: '',
    invoiceCount: 0,
    supplyPrice: createEmptySplit(),
    tax: createEmptySplit(),
    remarks: '',
  });

  const startIndex = pageIndex * FORM_39_1_MAX_DETAIL_LIST_MAX_LENGTH;
  const detailItems = Array.from(
    { length: FORM_39_1_MAX_DETAIL_LIST_MAX_LENGTH },
    (_, i) => detailList[startIndex + i] ?? createEmptyDetail()
  );

  type SummaryRowKey =
    | 'grandTotal'
    | 'electronicReceivedBiz'
    | 'electronicReceivedResident'
    | 'electronicSubTotal'
    | 'nonElectronicReceivedBiz'
    | 'nonElectronicReceivedResident'
    | 'nonElectronicSubTotal';

  const getSummaryRow = (rowKey: SummaryRowKey) => {
    switch (rowKey) {
      case 'grandTotal':
        return summary.grandTotal;
      case 'electronicReceivedBiz':
        return summary.electronicTaxInvoice.receivedFromBizReg;
      case 'electronicReceivedResident':
        return summary.electronicTaxInvoice.receivedFromResidentReg;
      case 'electronicSubTotal':
        return summary.electronicTaxInvoice.subTotal;
      case 'nonElectronicReceivedBiz':
        return summary.nonElectronicTaxInvoice.receivedFromBizReg;
      case 'nonElectronicReceivedResident':
        return summary.nonElectronicTaxInvoice.receivedFromResidentReg;
      case 'nonElectronicSubTotal':
        return summary.nonElectronicTaxInvoice.subTotal;
      default:
        return summary.grandTotal;
    }
  };

  const updateSummaryRow = (
    rowKey: SummaryRowKey,
    updaterFn: (
      row: Form39Data['summary']['grandTotal']
    ) => Form39Data['summary']['grandTotal']
  ) => {
    const next = { ...summary };
    switch (rowKey) {
      case 'grandTotal':
        next.grandTotal = updaterFn(summary.grandTotal);
        break;
      case 'electronicReceivedBiz':
        next.electronicTaxInvoice = {
          ...summary.electronicTaxInvoice,
          receivedFromBizReg: updaterFn(
            summary.electronicTaxInvoice.receivedFromBizReg
          ),
        };
        break;
      case 'electronicReceivedResident':
        next.electronicTaxInvoice = {
          ...summary.electronicTaxInvoice,
          receivedFromResidentReg: updaterFn(
            summary.electronicTaxInvoice.receivedFromResidentReg
          ),
        };
        break;
      case 'electronicSubTotal':
        next.electronicTaxInvoice = {
          ...summary.electronicTaxInvoice,
          subTotal: updaterFn(summary.electronicTaxInvoice.subTotal),
        };
        break;
      case 'nonElectronicReceivedBiz':
        next.nonElectronicTaxInvoice = {
          ...summary.nonElectronicTaxInvoice,
          receivedFromBizReg: updaterFn(
            summary.nonElectronicTaxInvoice.receivedFromBizReg
          ),
        };
        break;
      case 'nonElectronicReceivedResident':
        next.nonElectronicTaxInvoice = {
          ...summary.nonElectronicTaxInvoice,
          receivedFromResidentReg: updaterFn(
            summary.nonElectronicTaxInvoice.receivedFromResidentReg
          ),
        };
        break;
      case 'nonElectronicSubTotal':
        next.nonElectronicTaxInvoice = {
          ...summary.nonElectronicTaxInvoice,
          subTotal: updaterFn(summary.nonElectronicTaxInvoice.subTotal),
        };
        break;
    }
    updater('summary', next);
  };

  const updateSummaryField = (
    rowKey: SummaryRowKey,
    field: 'sellerCount' | 'invoiceCount',
    value: number
  ) => {
    updateSummaryRow(rowKey, row => ({
      ...row,
      [field]: value,
    }));
  };

  const updateSummarySplit = (
    rowKey: SummaryRowKey,
    field: 'supplyPrice' | 'tax',
    part: keyof Form39Data['summary']['grandTotal']['supplyPrice'],
    value: number
  ) => {
    updateSummaryRow(rowKey, row => ({
      ...row,
      [field]: {
        ...row[field],
        [part]: value,
      },
    }));
  };

  const updateSubmitterInfo = (
    field: keyof Form39Data['submitterInfo'],
    value: string
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const updateDetailItem = (
    absIndex: number,
    updaterFn: (
      item: Form39Data['detailList'][number]
    ) => Form39Data['detailList'][number]
  ) => {
    const next = [...detailList];
    const current = next[absIndex] ?? createEmptyDetail();
    next[absIndex] = updaterFn(current);
    updater('detailList', next);
  };

  const updateDetailField = (
    absIndex: number,
    field: keyof Form39Data['detailList'][number],
    value: string | number
  ) => {
    updateDetailItem(absIndex, item => ({
      ...item,
      [field]: value,
    }));
  };

  const updateDetailSplit = (
    absIndex: number,
    field: 'supplyPrice' | 'tax',
    part: keyof Form39Data['detailList'][number]['supplyPrice'],
    value: number
  ) => {
    updateDetailItem(absIndex, item => ({
      ...item,
      [field]: {
        ...item[field],
        [part]: value,
      },
    }));
  };

  const renderDetailRow = (
    detail: Form39Data['detailList'][number],
    absIndex: number
  ) => (
    <tr style={{ height: '20pt' }} key={absIndex}>
      <td
        style={{
          width: '30pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <p
          className="s7"
          style={{
            paddingTop: '3pt',
            textIndent: '0pt',
            textAlign: 'center',
          }}
        >
          {absIndex + 1}
        </p>
      </td>
      <td
        style={{
          width: '64pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          type="text"
          value={detail.bizRegNumber}
          onChange={e =>
            updateDetailField(absIndex, 'bizRegNumber', e.target.value)
          }
        />
      </td>
      <td
        style={{
          width: '64pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          type="text"
          value={detail.companyName}
          onChange={e =>
            updateDetailField(absIndex, 'companyName', e.target.value)
          }
        />
      </td>
      <td
        style={{
          width: '34pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.invoiceCount}
          onChange={value => updateDetailField(absIndex, 'invoiceCount', value)}
        />
      </td>
      <td
        style={{
          width: '24pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.supplyPrice.trillion}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'trillion', value)
          }
        />
      </td>
      <td
        style={{
          width: '25pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.supplyPrice.billion}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'billion', value)
          }
        />
      </td>
      <td
        style={{
          width: '24pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.supplyPrice.million}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'million', value)
          }
        />
      </td>
      <td
        style={{
          width: '25pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.supplyPrice.thousand}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'thousand', value)
          }
        />
      </td>
      <td
        style={{
          width: '24pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.supplyPrice.one}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'one', value)
          }
        />
      </td>
      <td
        style={{
          width: '25pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.tax.trillion}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'trillion', value)
          }
        />
      </td>
      <td
        style={{
          width: '24pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.tax.billion}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'billion', value)
          }
        />
      </td>
      <td
        style={{
          width: '25pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.tax.million}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'million', value)
          }
        />
      </td>
      <td
        style={{
          width: '24pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.tax.thousand}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'thousand', value)
          }
        />
      </td>
      <td
        style={{
          width: '25pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={detail.tax.one}
          onChange={value => updateDetailSplit(absIndex, 'tax', 'one', value)}
        />
      </td>
      <td
        style={{
          width: '47pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#808080',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          type="text"
          value={detail.remarks ?? ''}
          onChange={e => updateDetailField(absIndex, 'remarks', e.target.value)}
        />
      </td>
    </tr>
  );
  return (
    <div className="form39">
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
            부가가치세법 시행규칙 [별지 제39호서식(1)]
            <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p className="s3" style={{ textIndent: '0pt', textAlign: 'center' }}>
        매입처별 세금계산서합계표
        <span className="s4">(갑)</span>
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'center' }}>
        <input
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
          maxLength={4}
          value={attributionYear}
          onChange={e => updater('attributionYear', digitsOnly(e.target.value))}
        />
        년<span style={{ paddingLeft: '15pt' }}></span>
        제
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
          maxLength={2}
          value={attributionTerm}
          onChange={e => updater('attributionTerm', digitsOnly(e.target.value))}
        />
        기 (
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodStartMonth}
          onChange={e =>
            updater('taxPeriodStartMonth', digitsOnly(e.target.value))
          }
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodStartDay}
          onChange={e =>
            updater('taxPeriodStartDay', digitsOnly(e.target.value))
          }
        />
        일 ~
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodEndMonth}
          onChange={e =>
            updater('taxPeriodEndMonth', digitsOnly(e.target.value))
          }
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodEndDay}
          onChange={e => updater('taxPeriodEndDay', digitsOnly(e.target.value))}
        />
        일)
      </p>
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <ol id="l2">
        <li data-list-text="1.">
          <h1
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
            제출자 인적사항
          </h1>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '624pt',
              tableLayout: 'fixed',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '35pt' }}>
              <td
                style={{
                  width: '279pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={8}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '130pt',
                  }}
                >
                  ① 사업자등록번호
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 150pt)',
                    height: '20pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  value={submitterInfo.bizRegNumber}
                  onChange={e =>
                    updateSubmitterInfo('bizRegNumber', e.target.value)
                  }
                />
              </td>
              <td
                style={{
                  width: '205pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={4}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '110pt',
                  }}
                >
                  ② 상호(법인명)
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 130pt)',
                    height: '20pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  value={submitterInfo.companyName}
                  onChange={e =>
                    updateSubmitterInfo('companyName', e.target.value)
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '35pt' }}>
              <td
                style={{
                  width: '279pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={8}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '130pt',
                  }}
                >
                  ③ 성명(대표자)
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 150pt)',
                    height: '20pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  value={submitterInfo.representativeName}
                  onChange={e =>
                    updateSubmitterInfo('representativeName', e.target.value)
                  }
                />
              </td>
              <td
                style={{
                  width: '205pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={4}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                    width: '110pt',
                  }}
                >
                  ④ 사업장 소재지
                </p>
                <textarea
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 130pt)',
                    height: '30pt',
                    marginLeft: '10pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    fontSize: '9pt',
                    resize: 'none',
                    overflowY: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    fontFamily: 'Arial',
                  }}
                  value={submitterInfo.address}
                  onChange={e => updateSubmitterInfo('address', e.target.value)}
                ></textarea>
              </td>
            </tr>
            <tr style={{ height: '35pt' }}>
              <td
                style={{
                  width: '312pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={8}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                  }}
                >
                  ⑤ 거래기간
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '40pt',
                    height: '20pt',
                    minWidth: '40pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '10pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={4}
                  value={submitterInfo.transactionStartYear}
                  onChange={e =>
                    updateSubmitterInfo(
                      'transactionStartYear',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  년
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={2}
                  value={submitterInfo.transactionStartMonth}
                  onChange={e =>
                    updateSubmitterInfo(
                      'transactionStartMonth',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  월
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={2}
                  value={submitterInfo.transactionStartDay}
                  onChange={e =>
                    updateSubmitterInfo(
                      'transactionStartDay',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  일
                </p>
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '5pt',
                    paddingRight: '5pt',
                  }}
                >
                  ~
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '40pt',
                    height: '20pt',
                    minWidth: '40pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={4}
                  value={submitterInfo.transactionEndYear}
                  onChange={e =>
                    updateSubmitterInfo(
                      'transactionEndYear',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  년
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={2}
                  value={submitterInfo.transactionEndMonth}
                  onChange={e =>
                    updateSubmitterInfo(
                      'transactionEndMonth',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  월
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={2}
                  value={submitterInfo.transactionEndDay}
                  onChange={e =>
                    updateSubmitterInfo(
                      'transactionEndDay',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  일
                </p>
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
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
                colSpan={4}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    textAlign: 'left',
                    display: 'inline-block',
                    margin: '0',
                  }}
                >
                  ⑥ 작성일
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '40pt',
                    height: '20pt',
                    minWidth: '40pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '10pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={4}
                  value={submitterInfo.writingYear}
                  onChange={e =>
                    updateSubmitterInfo(
                      'writingYear',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  년
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={2}
                  value={submitterInfo.writingMonth}
                  onChange={e =>
                    updateSubmitterInfo(
                      'writingMonth',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  월
                </p>
                <input
                  className="form-input form-input-text"
                  style={{
                    width: '20pt',
                    height: '20pt',
                    minWidth: '20pt',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '5pt',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                  }}
                  type="text"
                  maxLength={2}
                  value={submitterInfo.writingDay}
                  onChange={e =>
                    updateSubmitterInfo(
                      'writingDay',
                      digitsOnly(e.target.value)
                    )
                  }
                />
                <p
                  className="s5"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    margin: '0',
                    paddingLeft: '2pt',
                  }}
                >
                  일
                </p>
              </td>
            </tr>
          </table>
          <p
            style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}
          ></p>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0 auto',
            }}
          />
        </li>
        <li data-list-text="2.">
          <p
            style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}
          >
            매입세금계산서 총합계
          </p>
          <p style={{ textIndent: '0pt', textAlign: 'left' }}>
            <br />
          </p>
          <table
            style={{
              borderCollapse: 'collapse',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '624pt',
              tableLayout: 'fixed',
            }}
            cellSpacing="0"
          >
            <tr style={{ height: '39pt' }}>
              <td
                style={{
                  width: '122pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                colSpan={2}
              >
                <p
                  className="s6"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  구 분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '3pt',
                    paddingLeft: '7pt',
                    paddingRight: '7pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑦
                  <br />
                  매입 처수
                </p>
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '6pt',
                    paddingRight: '6pt',
                    textIndent: '5pt',
                    textAlign: 'center',
                  }}
                >
                  ⑧
                  <br />
                  매수
                </p>
              </td>
              <td
                style={{
                  width: '147pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                colSpan={5}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑨ 공급가액
                </p>
                <p
                  className="s8"
                  style={{
                    paddingTop: '7pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <span>조</span>
                  <span>십억</span>
                  <span>백만</span>
                  <span>천</span>
                  <span>일</span>
                </p>
              </td>
              <td
                style={{
                  width: '144pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                }}
                colSpan={5}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  ⑩ 세 액
                </p>
                <p
                  className="s8"
                  style={{
                    paddingTop: '7pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <span>조</span>
                  <span>십억</span>
                  <span>백만</span>
                  <span>천</span>
                  <span>일</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '122pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                colSpan={2}
              >
                <p
                  className="s6"
                  style={{
                    paddingTop: '0pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  합 계
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').sellerCount}
                  onChange={value =>
                    updateSummaryField('grandTotal', 'sellerCount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').invoiceCount}
                  onChange={value =>
                    updateSummaryField('grandTotal', 'invoiceCount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').supplyPrice.trillion}
                  onChange={value =>
                    updateSummarySplit(
                      'grandTotal',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').supplyPrice.billion}
                  onChange={value =>
                    updateSummarySplit(
                      'grandTotal',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').supplyPrice.million}
                  onChange={value =>
                    updateSummarySplit(
                      'grandTotal',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').supplyPrice.thousand}
                  onChange={value =>
                    updateSummarySplit(
                      'grandTotal',
                      'supplyPrice',
                      'thousand',
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
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').supplyPrice.one}
                  onChange={value =>
                    updateSummarySplit(
                      'grandTotal',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').tax.trillion}
                  onChange={value =>
                    updateSummarySplit('grandTotal', 'tax', 'trillion', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').tax.billion}
                  onChange={value =>
                    updateSummarySplit('grandTotal', 'tax', 'billion', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').tax.million}
                  onChange={value =>
                    updateSummarySplit('grandTotal', 'tax', 'million', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').tax.thousand}
                  onChange={value =>
                    updateSummarySplit('grandTotal', 'tax', 'thousand', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('grandTotal').tax.one}
                  onChange={value =>
                    updateSummarySplit('grandTotal', 'tax', 'one', value)
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '59pt',
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
                rowSpan={3}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '6pt',
                    paddingLeft: '1pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  과세기간 종료일 다음 달 11일까지 전송된 전자 세금계산서 발급분
                </p>
              </td>
              <td
                style={{
                  width: '63pt',
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
                  className="s8"
                  style={{
                    paddingTop: '2pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  사업자등록 번호 발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').sellerCount}
                  onChange={value =>
                    updateSummaryField(
                      'electronicReceivedBiz',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').invoiceCount}
                  onChange={value =>
                    updateSummaryField(
                      'electronicReceivedBiz',
                      'invoiceCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedBiz').supplyPrice.trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedBiz').supplyPrice.billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedBiz').supplyPrice.million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedBiz').supplyPrice.thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'supplyPrice',
                      'thousand',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').supplyPrice.one}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').tax.trillion}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'tax',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').tax.billion}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'tax',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').tax.million}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'tax',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').tax.thousand}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'tax',
                      'thousand',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedBiz').tax.one}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedBiz',
                      'tax',
                      'one',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
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
                  className="s8"
                  style={{
                    paddingTop: '2pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  주민등록번호
                  <br />
                  발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').sellerCount
                  }
                  onChange={value =>
                    updateSummaryField(
                      'electronicReceivedResident',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').invoiceCount
                  }
                  onChange={value =>
                    updateSummaryField(
                      'electronicReceivedResident',
                      'invoiceCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').supplyPrice
                      .trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').supplyPrice
                      .billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').supplyPrice
                      .million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').supplyPrice
                      .thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'supplyPrice',
                      'thousand',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').supplyPrice.one
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').tax.trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'tax',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').tax.billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'tax',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').tax.million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'tax',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicReceivedResident').tax.thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'tax',
                      'thousand',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicReceivedResident').tax.one}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicReceivedResident',
                      'tax',
                      'one',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
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
                  className="s8"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  소 계
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').sellerCount}
                  onChange={value =>
                    updateSummaryField(
                      'electronicSubTotal',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').invoiceCount}
                  onChange={value =>
                    updateSummaryField(
                      'electronicSubTotal',
                      'invoiceCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicSubTotal').supplyPrice.trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicSubTotal').supplyPrice.billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicSubTotal').supplyPrice.million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('electronicSubTotal').supplyPrice.thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'supplyPrice',
                      'thousand',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').supplyPrice.one}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').tax.trillion}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'tax',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').tax.billion}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'tax',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').tax.million}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'tax',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').tax.thousand}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'tax',
                      'thousand',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('electronicSubTotal').tax.one}
                  onChange={value =>
                    updateSummarySplit(
                      'electronicSubTotal',
                      'tax',
                      'one',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '59pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
                rowSpan={3}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '10pt',
                    paddingLeft: '4pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  위 전자 세금계산서 외의 발급분
                </p>
              </td>
              <td
                style={{
                  width: '63pt',
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
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  사업자등록 번호 발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').sellerCount}
                  onChange={value =>
                    updateSummaryField(
                      'nonElectronicReceivedBiz',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').invoiceCount}
                  onChange={value =>
                    updateSummaryField(
                      'nonElectronicReceivedBiz',
                      'invoiceCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedBiz').supplyPrice
                      .trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedBiz').supplyPrice
                      .billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedBiz').supplyPrice
                      .million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedBiz').supplyPrice
                      .thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'supplyPrice',
                      'thousand',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedBiz').supplyPrice.one
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').tax.trillion}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'tax',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').tax.billion}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'tax',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').tax.million}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'tax',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').tax.thousand}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'tax',
                      'thousand',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedBiz').tax.one}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedBiz',
                      'tax',
                      'one',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
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
                  className="s8"
                  style={{
                    paddingTop: '1pt',
                    paddingRight: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  주민등록번호
                  <br />
                  발급분
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').sellerCount
                  }
                  onChange={value =>
                    updateSummaryField(
                      'nonElectronicReceivedResident',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').invoiceCount
                  }
                  onChange={value =>
                    updateSummaryField(
                      'nonElectronicReceivedResident',
                      'invoiceCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').supplyPrice
                      .trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').supplyPrice
                      .billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').supplyPrice
                      .million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').supplyPrice
                      .thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'supplyPrice',
                      'thousand',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').supplyPrice
                      .one
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').tax.trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'tax',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').tax.billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'tax',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').tax.million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'tax',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
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
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicReceivedResident').tax.thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'tax',
                      'thousand',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicReceivedResident').tax.one}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicReceivedResident',
                      'tax',
                      'one',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '29pt' }}>
              <td
                style={{
                  width: '63pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                }}
              >
                <p
                  className="s8"
                  style={{
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    textAlign: 'center',
                  }}
                >
                  소 계
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').sellerCount}
                  onChange={value =>
                    updateSummaryField(
                      'nonElectronicSubTotal',
                      'sellerCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '34pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').invoiceCount}
                  onChange={value =>
                    updateSummaryField(
                      'nonElectronicSubTotal',
                      'invoiceCount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicSubTotal').supplyPrice.trillion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'supplyPrice',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicSubTotal').supplyPrice.billion
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'supplyPrice',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicSubTotal').supplyPrice.million
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'supplyPrice',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={
                    getSummaryRow('nonElectronicSubTotal').supplyPrice.thousand
                  }
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'supplyPrice',
                      'thousand',
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
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').supplyPrice.one}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'supplyPrice',
                      'one',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '27pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').tax.trillion}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'tax',
                      'trillion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').tax.billion}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'tax',
                      'billion',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').tax.million}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'tax',
                      'million',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '29pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#808080',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').tax.thousand}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'tax',
                      'thousand',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#808080',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#808080',
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
                    padding: '1pt',
                    verticalAlign: 'middle',
                    fontFamily: 'Arial',
                  }}
                  value={getSummaryRow('nonElectronicSubTotal').tax.one}
                  onChange={value =>
                    updateSummarySplit(
                      'nonElectronicSubTotal',
                      'tax',
                      'one',
                      value
                    )
                  }
                />
              </td>
            </tr>
          </table>
          <p
            className="s1"
            style={{
              paddingTop: '3pt',
              paddingBottom: '3pt',
              textIndent: '0pt',
              textAlign: 'left',
            }}
          >
            * 주민등록번호로 발급받은 세금계산서는 사업자등록 전 매입세액 공제를
            받을 수 있는 세금계산서만 적습니다.
          </p>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0 auto',
            }}
          />
          <p
            style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}
          ></p>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0 auto',
            }}
          />
        </li>
        <li data-list-text="3.">
          <p
            style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}
          >
            과세기간 종료일 다음 달 11일까지 전송된 전자세금계산서 외 발급받은
            매입처별 명세
          </p>
        </li>
      </ol>
      <p
        className="s9"
        style={{
          paddingLeft: '14pt',
          lineHeight: '150%',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        (합계금액으로 적음)
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '624pt',
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
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingRight: '4pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                paddingLeft: '11pt',
                paddingRight: '11pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑫
              <br />
              사업자 등록번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '6pt',
                paddingRight: '13pt',
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑬ 상호
              <br />
              (법인명)
            </p>
          </td>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '6pt',
                paddingRight: '6pt',
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑭
              <br />
              매수
            </p>
          </td>
          <td
            style={{
              width: '122pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={5}
          >
            <p
              className="s5"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '10pt',
              }}
            >
              ⑮ 공급가액
            </p>
            <p
              className="s10"
              style={{
                paddingTop: '9pt',
                textIndent: '0pt',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <span>조</span>
              <span>십억</span>
              <span>백만</span>
              <span>천</span>
              <span>일</span>
            </p>
          </td>
          <td
            style={{
              width: '123pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={5}
          >
            <p
              className="s11"
              style={{
                paddingTop: '3pt',
                paddingRight: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              ⑯
              <span className="s5" style={{ fontSize: '8pt' }}>
                세액
              </span>
            </p>
            <p
              className="s10"
              style={{
                paddingTop: '9pt',
                textIndent: '0pt',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <span>조</span>
              <span>십억</span>
              <span>백만</span>
              <span>천</span>
              <span>일</span>
            </p>
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s7"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              비고
            </p>
          </td>
        </tr>
        {detailItems.map((detail, localIndex) =>
          renderDetailRow(detail, startIndex + localIndex)
        )}
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{ borderCollapse: 'collapse', marginLeft: '15.594pt' }}
        cellSpacing="0"
      >
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '109pt',
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
            <p
              className="s11"
              style={{
                paddingLeft: '7pt',
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '8pt',
              }}
            >
              ⑰
              <span className="s7" style={{ fontSize: '8pt' }}>
                관리번호(매출)
              </span>
            </p>
          </td>
          <td
            style={{
              width: '110pt',
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
            <p
              className="s8"
              style={{
                paddingRight: '8pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              -
            </p>
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
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
        (을)표추가
      </button>
    </div>
  );
}
