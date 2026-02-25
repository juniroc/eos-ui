import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form21Data,
  Form21InputData,
} from '@/components/taxDocument/template/Form21/type';
import InputField from '@/components/taxDocument/template/common/InputField';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';

type Props = UpdaterProps<Form21Data> & { inputType?: Form21InputData };

const OutputTaxTable = ({
  updater,
  inputType,
  salesTaxInvoice,
  salesPurchaserIssued,
  salesCreditCard,
  salesOther,
  salesZeroTaxInvoice,
  salesZeroOther,
  salesOmission,
  salesBadDebt,
  salesTotal,
}: Props) => {
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
      //@ts-ignore
      ...(current as Form21Data[K]),
      [field]: value,
    };
    updater(key, updated);
  };

  return (
    <table
      className="output-tax-table"
      style={{
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        marginRight: 'auto',
        width: '624pt',
        marginLeft: '0',
        boxSizing: 'border-box',
        border: 'none',
      }}
      cellSpacing={0}
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
  );
};

export default OutputTaxTable;
