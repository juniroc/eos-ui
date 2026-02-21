import React from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form21Data, Form21InputData, } from '@/components/taxDocument/template/Form21/type';
import InputField from '@/components/taxDocument/template/common/InputField';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';

type Props = UpdaterProps<Form21Data> & { inputType?: Form21InputData };

function InputTaxTable({
  updater,
  inputType,
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
  prepaidOccasional,
  taxPaidByProxy,
  taxPaidBySpecialPurchase,
  taxPaidByCardCompany,
  penaltyTotal,
  finalTaxToPay,
  consolidatedPaymentTax,
}: Props) {
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
      // @ts-ignore
      ...(current as Form21Data[K]),
      [field]: value,
    };
    updater(key, updated);
  };
  return (
    <table
      className="new-purchase-tax-table"
      style={{
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        marginRight: 'auto',
        marginTop: '0',
        width: '624pt',
        marginLeft: '0',
        boxSizing: 'border-box',
        border: 'none',
      }}
      cellSpacing="0"
    >
      <tr style={{ height: '15pt' }}>
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderTop: '1pt solid #000',
            borderBottom: '1pt solid #7E7E7E',
            textAlign: 'center',
          }}
          rowSpan={9}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '110%',
              textAlign: 'center',
              fontSize: '9pt',
            }}
          >
            매입
            <br />
            세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '63pt',
            borderTop: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            textAlign: 'center',
          }}
          rowSpan={3}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '100%',
              textAlign: 'center',
              fontSize: '9pt',
            }}
          >
            세금계산서
            <br />
            <span style={{ letterSpacing: '8pt' }}>수취</span>분
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '122.5pt',
            borderTop: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              paddingLeft: '1pt',
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'left',
            }}
          >
            일반매입
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderTop: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (10)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderTop: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderTop: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderTop: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '122.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              paddingLeft: '1pt',
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'left',
            }}
          >
            수출기업 수입분 납부유예
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (11)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            backgroundColor: '#C0C0C0',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '122.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              paddingLeft: '1pt',
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'left',
            }}
          >
            고정자산 매입
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (12)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '185.5pt',
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
            }}
          >
            예정신고 누락분
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (13)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '185.5pt',
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
            }}
          >
            매입자발행 세금계산서
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (14)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '185.5pt',
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
            }}
          >
            그 밖의 공제매입세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (15)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '185.5pt',
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
            }}
          >
            합계 (10)-(11)+(12)+(13)+(14)+(15)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (16)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '185.5pt',
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
            }}
          >
            공제받지 못할 매입세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (17)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '185.5pt',
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
            }}
          >
            차감계 (16)-(17)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (18)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉯
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1.5pt solid #000',
            borderBottom: '1.5pt solid #000',
            width: '412pt',
          }}
          colSpan={5}
        >
          <p
            className="s6"
            style={{
              paddingLeft: '1pt',
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            납부(환급)세액 (매출세액㉮-매입세액㉯)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1.5pt solid #000',
            borderBottom: '1.5pt solid #000',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉰
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1.5pt solid #000',
            borderBottom: '1.5pt solid #000',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            textAlign: 'center',
          }}
          rowSpan={3}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '110%',
              textAlign: 'center',
              fontSize: '9pt',
            }}
          >
            경감
            <br />·<br />
            공제
            <br />
            세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '186pt',
            textAlign: 'left',
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
            }}
          >
            그 밖의 경감·공제세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (19)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            backgroundColor: '#C0C0C0',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '186pt',
            textAlign: 'left',
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
            }}
          >
            신용카드매출전표등 발행공제 등
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (20)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '186pt',
            textAlign: 'left',
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
            }}
          >
            합계
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (21)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉱
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            소규모 개인사업자 부가가치세 감면세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (22)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
          data-input-removed="true"
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉲
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            예정신고 미환급세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (23)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉳
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            예정고지세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (24)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉴
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            수시부과세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (25)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
          <NumericInput
            value={prepaidOccasional.amount}
            onChange={value =>
              updateNestedField(
                'prepaidOccasional',

                prepaidOccasional,

                'amount',

                value
              )
            }
            inputType={inputType?.prepaidOccasional?.amount}
          />
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉵
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
          <NumericInput
            value={prepaidOccasional.tax}
            onChange={value =>
              updateNestedField(
                'prepaidOccasional',

                prepaidOccasional,

                'tax',

                value
              )
            }
            inputType={inputType?.prepaidOccasional?.tax}
          />
        </td>
      </tr>
      <tr style={{ height: '15pt' }}>
        <td
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            사업양수자가 대리납부한 세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (26)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            backgroundColor: '#C0C0C0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉶
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            매입자 납부특례에 따라 납부한 세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (27)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            backgroundColor: '#C0C0C0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉷
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            신용카드업자가 대리납부한 세액
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (28)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            backgroundColor: '#C0C0C0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉸
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '226pt',
            textAlign: 'left',
          }}
          colSpan={3}
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
            가산세액 계
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '24pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (29)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '161pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
          }}
        >
          <p
            className="s3"
            style={{
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
              fontSize: '10pt',
            }}
          >
            ㉹
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            width: '412pt',
            textAlign: 'left',
          }}
          colSpan={5}
        >
          <p
            className="s3"
            style={{
              paddingLeft: '1pt',
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'left',
            }}
          >
            차감ㆍ가감하여 납부할 세액(환급받을
            세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '39.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
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
            (30)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            borderBottom: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
          style={{
            verticalAlign: 'middle',
            borderBottom: '1pt solid #000',
            borderTop: '1pt solid #7E7E7E',
            width: '452pt',
            textAlign: 'left',
          }}
          colSpan={6}
        >
          <p
            className="s6"
            style={{
              paddingLeft: '1pt',
              textIndent: '0pt',
              lineHeight: '9pt',
              textAlign: 'center',
            }}
          >
            총괄 납부 사업자가 납부할 세액 (환급받을 세액)
          </p>
        </td>
        <td
          style={{
            verticalAlign: 'middle',
            width: '174.5pt',
            borderBottom: '1pt solid #000',
            borderLeft: '1pt solid #7E7E7E',
            borderRight: 'none',
            borderTop: '1pt solid #7E7E7E',
            position: 'relative',
            padding: '0',
          }}
        >
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
  );
}

export default InputTaxTable;
