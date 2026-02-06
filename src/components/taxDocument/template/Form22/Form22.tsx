'use client';
import './form22.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  CommonTaxSettlementItem,
  Form22CommonTaxAllocationItem,
  Form22Data,
  Form22MissingDetails,
  TaxRecalculationItem,
} from '@/components/taxDocument/template/Form22/type';

const COMMON_TAX_ALLOCATION_ROW_COUNT = 5;
const COMMON_TAX_SETTLEMENT_ROW_COUNT = 2;
const TAX_RECALCULATION_ROW_COUNT = 2;

export default function Form22({
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
  missingRequiredDetails,
  unrelatedToBusiness,
  nonBizCarPurchaseMaintain,
  entertainmentExpenses,
  taxFreeBusinessRelated,
  landCapitalExpenditure,
  preRegistrationTax,
  goldCopperScrapAccountUnused,
  section2Total,
  commonTaxAllocationItems,
  commonTaxAllocationTotal,
  commonTaxSettlementItems,
  commonTaxSettlementTotal,
  taxRecalculationItems,
  taxRecalculationTotal,
}: UpdaterProps<Form22Data>) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');
  const toNumber = (value: string) => {
    const digits = digitsOnly(value);
    return digits ? Number(digits) : 0;
  };

  const updateMissingDetails = <
    S extends keyof Pick<
      Form22Data,
      | 'missingRequiredDetails'
      | 'unrelatedToBusiness'
      | 'nonBizCarPurchaseMaintain'
      | 'entertainmentExpenses'
      | 'taxFreeBusinessRelated'
      | 'landCapitalExpenditure'
      | 'preRegistrationTax'
      | 'goldCopperScrapAccountUnused'
      | 'section2Total'
    >,
    K extends keyof Form22MissingDetails,
  >(
    section: S,
    field: K,
    value: Form22MissingDetails[K]
  ) => {
    updater(section, {
      ...((
        {
          missingRequiredDetails,
          unrelatedToBusiness,
          nonBizCarPurchaseMaintain,
          entertainmentExpenses,
          taxFreeBusinessRelated,
          landCapitalExpenditure,
          preRegistrationTax,
          goldCopperScrapAccountUnused,
          section2Total,
        } as Form22Data
      )[section] as Form22MissingDetails),
      [field]: value,
    } as Form22Data[S]);
  };

  const baseCommonTaxAllocationItem: Form22CommonTaxAllocationItem = {
    commonSupplyAmount: 0,
    commonTaxAmount: 0,
    totalSupplyAmount: 0,
    taxFreeSupplyAmount: 0,
    nonDeductibleTaxAmount: 0,
  };

  const mappedCommonTaxAllocationItems = Array.from(
    { length: COMMON_TAX_ALLOCATION_ROW_COUNT },
    (_, i) => commonTaxAllocationItems[i] ?? baseCommonTaxAllocationItem
  );

  const updateCommonTaxAllocationItem = <
    K extends keyof Form22CommonTaxAllocationItem,
  >(
    index: number,
    field: K,
    value: Form22CommonTaxAllocationItem[K]
  ) => {
    const nextItems = [...commonTaxAllocationItems];
    const target = nextItems[index] ?? baseCommonTaxAllocationItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('commonTaxAllocationItems', nextItems);
  };

  const updateCommonTaxAllocationTotal = <
    K extends keyof Form22CommonTaxAllocationItem,
  >(
    field: K,
    value: Form22CommonTaxAllocationItem[K]
  ) => {
    updater('commonTaxAllocationTotal', {
      ...commonTaxAllocationTotal,
      [field]: value,
    });
  };

  const baseCommonTaxSettlementItem: CommonTaxSettlementItem = {
    totalCommonTaxAmount: 0,
    taxFreeRatio: '',
    totalNonDeductibleTaxAmount: 0,
    alreadyNonDeductedTaxAmount: 0,
    finalAdjustmentTaxAmount: 0,
  };

  const mappedCommonTaxSettlementItems = Array.from(
    { length: COMMON_TAX_SETTLEMENT_ROW_COUNT },
    (_, i) => commonTaxSettlementItems[i] ?? baseCommonTaxSettlementItem
  );

  const updateCommonTaxSettlementItem = <
    K extends keyof CommonTaxSettlementItem,
  >(
    index: number,
    field: K,
    value: CommonTaxSettlementItem[K]
  ) => {
    const nextItems = [...commonTaxSettlementItems];
    const target = nextItems[index] ?? baseCommonTaxSettlementItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('commonTaxSettlementItems', nextItems);
  };

  const updateCommonTaxSettlementTotal = <
    K extends keyof CommonTaxSettlementItem,
  >(
    field: K,
    value: CommonTaxSettlementItem[K]
  ) => {
    updater('commonTaxSettlementTotal', {
      ...commonTaxSettlementTotal,
      [field]: value,
    });
  };

  const baseTaxRecalculationItem: TaxRecalculationItem = {
    goodsTaxAmount: 0,
    reductionRate: '',
    fluctuationRatio: '',
    recalculatedTaxAmount: 0,
  };

  const mappedTaxRecalculationItems = Array.from(
    { length: TAX_RECALCULATION_ROW_COUNT },
    (_, i) => taxRecalculationItems[i] ?? baseTaxRecalculationItem
  );

  const updateTaxRecalculationItem = <K extends keyof TaxRecalculationItem>(
    index: number,
    field: K,
    value: TaxRecalculationItem[K]
  ) => {
    const nextItems = [...taxRecalculationItems];
    const target = nextItems[index] ?? baseTaxRecalculationItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('taxRecalculationItems', nextItems);
  };

  const updateTaxRecalculationTotal = <K extends keyof TaxRecalculationItem>(
    field: K,
    value: TaxRecalculationItem[K]
  ) => {
    updater('taxRecalculationTotal', {
      ...taxRecalculationTotal,
      [field]: value,
    });
  };
  return (
    <div className="form22">
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
            부가가치세법 시행규칙 [별지 제22호서식]
            <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{
          paddingLeft: '10pt',
          textIndent: '0pt',
          lineHeight: '22pt',
          textAlign: 'center',
        }}
      >
        공제받지 못할 매입세액 명세서
      </p>
      <p
        style={{
          paddingLeft: '13pt',
          textIndent: '0pt',
          lineHeight: '13pt',
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
          onChange={e => updater('attributionYear', digitsOnly(e.target.value))}
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
          onChange={e => updater('attributionTerm', digitsOnly(e.target.value))}
        />
        기 (
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
          value={periodStartMonth}
          onChange={e =>
            updater('periodStartMonth', digitsOnly(e.target.value))
          }
        />
        월
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
          value={periodStartDay}
          onChange={e => updater('periodStartDay', digitsOnly(e.target.value))}
        />
        일 ~
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
          value={periodEndMonth}
          onChange={e => updater('periodEndMonth', digitsOnly(e.target.value))}
        />
        월
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
          value={periodEndDay}
          onChange={e => updater('periodEndDay', digitsOnly(e.target.value))}
        />
        일)
      </p>
      <p style={{ paddingTop: '8pt', textIndent: '0pt', textAlign: 'left' }}>
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
          <h1
            style={{
              paddingTop: '8pt',
              paddingBottom: '5pt',
              paddingLeft: '22pt',
              textIndent: '-13pt',
              textAlign: 'left',
            }}
          >
            제출자 인적사항
          </h1>
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
                  width: '104pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingLeft: '6pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    fontFamily: '돋움, monospace',
                    fontSize: '10pt',
                  }}
                >
                  상호(법인명)
                </p>
              </td>
              <td
                style={{
                  width: '104pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={bizName}
                  onChange={e => updater('bizName', e.target.value)}
                />
              </td>
              <td
                style={{
                  width: '104pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    fontFamily: '돋움, monospace',
                    fontSize: '10pt',
                  }}
                >
                  성명(대표자)
                </p>
              </td>
              <td
                style={{
                  width: '104pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={repName}
                  onChange={e => updater('repName', e.target.value)}
                />
              </td>
              <td
                style={{
                  width: '104pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s4"
                  style={{
                    paddingLeft: '5pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    fontFamily: '돋움, monospace',
                    fontSize: '10pt',
                  }}
                >
                  사업자등록번호
                </p>
              </td>
              <td
                style={{
                  width: '104pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: '20pt',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={bizNumber}
                  onChange={e => updater('bizNumber', e.target.value)}
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
          <p
            style={{
              paddingTop: '8pt',
              paddingBottom: '5pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            공제받지 못할 매입세액 명세
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
            <colgroup>
              <col style={{ width: '230pt' }}></col>
              <col style={{ width: '30pt' }}></col>
              <col style={{ width: '97pt' }}></col>
              <col style={{ width: '87pt' }}></col>
              <col style={{ width: '36pt' }}></col>
            </colgroup>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  매입세액 불공제 사유
                </p>
              </td>
              <td
                style={{
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
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
                  display: 'table-cell',
                }}
                colSpan={3}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    paddingTop: '0',
                    paddingBottom: '0',
                    margin: '0',
                  }}
                >
                  세금계산서
                </p>
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  verticalAlign: 'middle',
                  display: 'table-cell',
                }}
                rowSpan={2}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    paddingTop: '0',
                    paddingBottom: '0',
                    margin: '0',
                  }}
                >
                  비고
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
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
                  display: 'table-cell',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  매수
                </p>
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
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
                  display: 'table-cell',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  공급가액
                </p>
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
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
                  display: 'table-cell',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  매입세액
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ① 필요적 기재사항 누락 등
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={missingRequiredDetails.count}
                  onChange={value =>
                    updateMissingDetails(
                      'missingRequiredDetails',
                      'count',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={missingRequiredDetails.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'missingRequiredDetails',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={missingRequiredDetails.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'missingRequiredDetails',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={missingRequiredDetails.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'missingRequiredDetails',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ② 사업과 직접 관련 없는 지출
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={unrelatedToBusiness.count}
                  onChange={value =>
                    updateMissingDetails('unrelatedToBusiness', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={unrelatedToBusiness.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'unrelatedToBusiness',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={unrelatedToBusiness.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'unrelatedToBusiness',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={unrelatedToBusiness.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'unrelatedToBusiness',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '32pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ③ 「개별소비세법」 제1조제2항제3호에 따른 자
                </p>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '13pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  동차 구입ㆍ유지 및 임차
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={nonBizCarPurchaseMaintain.count}
                  onChange={value =>
                    updateMissingDetails(
                      'nonBizCarPurchaseMaintain',
                      'count',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={nonBizCarPurchaseMaintain.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'nonBizCarPurchaseMaintain',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={nonBizCarPurchaseMaintain.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'nonBizCarPurchaseMaintain',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={nonBizCarPurchaseMaintain.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'nonBizCarPurchaseMaintain',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ④ 접대비 및 이와 유사한 비용 관련
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={entertainmentExpenses.count}
                  onChange={value =>
                    updateMissingDetails(
                      'entertainmentExpenses',
                      'count',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={entertainmentExpenses.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'entertainmentExpenses',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={entertainmentExpenses.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'entertainmentExpenses',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={entertainmentExpenses.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'entertainmentExpenses',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ⑤ 면세사업등 관련
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={taxFreeBusinessRelated.count}
                  onChange={value =>
                    updateMissingDetails(
                      'taxFreeBusinessRelated',
                      'count',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={taxFreeBusinessRelated.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'taxFreeBusinessRelated',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={taxFreeBusinessRelated.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'taxFreeBusinessRelated',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={taxFreeBusinessRelated.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'taxFreeBusinessRelated',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ⑥ 토지의 자본적 지출 관련
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={landCapitalExpenditure.count}
                  onChange={value =>
                    updateMissingDetails(
                      'landCapitalExpenditure',
                      'count',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={landCapitalExpenditure.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'landCapitalExpenditure',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={landCapitalExpenditure.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'landCapitalExpenditure',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={landCapitalExpenditure.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'landCapitalExpenditure',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ⑦ 사업자등록 전 매입세액
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={preRegistrationTax.count}
                  onChange={value =>
                    updateMissingDetails('preRegistrationTax', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={preRegistrationTax.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'preRegistrationTax',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={preRegistrationTax.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'preRegistrationTax',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={preRegistrationTax.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'preRegistrationTax',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ⑧ 금ㆍ구리 스크랩 거래계좌 미사용 관련 매입세액
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={goldCopperScrapAccountUnused.count}
                  onChange={value =>
                    updateMissingDetails(
                      'goldCopperScrapAccountUnused',
                      'count',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={goldCopperScrapAccountUnused.supplyAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'goldCopperScrapAccountUnused',
                      'supplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={goldCopperScrapAccountUnused.taxAmount}
                  onChange={value =>
                    updateMissingDetails(
                      'goldCopperScrapAccountUnused',
                      'taxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={goldCopperScrapAccountUnused.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'goldCopperScrapAccountUnused',
                      'note',
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '230pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'left',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  ⑨ 합계
                </p>
              </td>
              <td
                style={{
                  width: '30pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={section2Total.count}
                  onChange={value =>
                    updateMissingDetails('section2Total', 'count', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '97pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={section2Total.supplyAmount}
                  onChange={value =>
                    updateMissingDetails('section2Total', 'supplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={section2Total.taxAmount}
                  onChange={value =>
                    updateMissingDetails('section2Total', 'taxAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '36pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                    textAlign: 'left',
                  }}
                  type="text"
                  value={section2Total.note ?? ''}
                  onChange={e =>
                    updateMissingDetails(
                      'section2Total',
                      'note',
                      e.target.value
                    )
                  }
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
          <p
            style={{
              paddingTop: '8pt',
              paddingBottom: '5pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            공통매입세액 안분 계산 명세
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
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
                rowSpan={2}
              >
                <p
                  className="s5"
                  style={{
                    paddingLeft: '8pt',
                    paddingRight: '8pt',
                    textIndent: '0pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  일련 번호
                </p>
              </td>
              <td style={{ verticalAlign: 'middle' }} colSpan={2}>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    paddingTop: '3pt',
                    textAlign: 'center',
                  }}
                >
                  과세ㆍ면세사업등 공통매입
                </p>
              </td>
              <td style={{ verticalAlign: 'middle' }} rowSpan={2}>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '8pt',
                    paddingRight: '8pt',
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑫
                </p>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '8pt',
                    paddingRight: '8pt',
                    textIndent: '0pt',
                    paddingTop: '3pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  총공급가액 등
                </p>
              </td>
              <td style={{ verticalAlign: 'middle' }} rowSpan={2}>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '6pt',
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑬
                </p>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '6pt',
                    paddingTop: '3pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  면세공급가액 등
                </p>
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  verticalAlign: 'middle',
                }}
                rowSpan={2}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '6pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑭ 불공제 매입세액
                </p>
                <p
                  className="s6"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  [⑪×(⑬÷⑫)]
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
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
                }}
              >
                <p
                  className="s6"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑩ 공급가액
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
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
                }}
              >
                <p
                  className="s6"
                  style={{
                    paddingTop: '2pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  ⑪ 세액
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  1
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[0].commonSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      0,
                      'commonSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[0].commonTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(0, 'commonTaxAmount', value)
                  }
                />
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[0].totalSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(0, 'totalSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[0].taxFreeSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      0,
                      'taxFreeSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxAllocationItems[0].nonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      0,
                      'nonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '1pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  2
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[1].commonSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      1,
                      'commonSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[1].commonTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(1, 'commonTaxAmount', value)
                  }
                />
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[1].totalSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(1, 'totalSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[1].taxFreeSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      1,
                      'taxFreeSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxAllocationItems[1].nonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      1,
                      'nonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  3
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[2].commonSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      2,
                      'commonSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[2].commonTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(2, 'commonTaxAmount', value)
                  }
                />
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[2].totalSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(2, 'totalSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[2].taxFreeSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      2,
                      'taxFreeSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxAllocationItems[2].nonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      2,
                      'nonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '1pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  4
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[3].commonSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      3,
                      'commonSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[3].commonTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(3, 'commonTaxAmount', value)
                  }
                />
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[3].totalSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(3, 'totalSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[3].taxFreeSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      3,
                      'taxFreeSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxAllocationItems[3].nonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      3,
                      'nonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  5
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[4].commonSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      4,
                      'commonSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[4].commonTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(4, 'commonTaxAmount', value)
                  }
                />
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[4].totalSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(4, 'totalSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxAllocationItems[4].taxFreeSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      4,
                      'taxFreeSupplyAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxAllocationItems[4].nonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxAllocationItem(
                      4,
                      'nonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '1pt',
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                  }}
                >
                  합계
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxAllocationTotal.commonSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationTotal('commonSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxAllocationTotal.commonTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationTotal('commonTaxAmount', value)
                  }
                />
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
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxAllocationTotal.totalSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationTotal('totalSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxAllocationTotal.taxFreeSupplyAmount}
                  onChange={value =>
                    updateCommonTaxAllocationTotal('taxFreeSupplyAmount', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxAllocationTotal.nonDeductibleTaxAmount}
                  onChange={value =>
                    updateCommonTaxAllocationTotal(
                      'nonDeductibleTaxAmount',
                      value
                    )
                  }
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
        <li data-list-text="4.">
          <p
            style={{
              paddingTop: '8pt',
              paddingBottom: '5pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            공통매입세액의 정산 명세
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
            <tr style={{ height: '38pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '7pt',
                    paddingRight: '6pt',
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
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                }}
              >
                <p
                  className="s5"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  ⑮ 총공통매입 세액
                </p>
              </td>
              <td
                style={{
                  width: '64pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '1pt',
                    paddingRight: '1pt',
                    textIndent: '0pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  ⑯<span className="s5">면세사업 등</span>
                </p>
                <p
                  className="s5"
                  style={{
                    paddingLeft: '1pt',
                    paddingRight: '1pt',
                    textIndent: '0pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  확정비율
                </p>
              </td>
              <td
                style={{
                  width: '99pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '23pt',
                    paddingRight: '4pt',
                    textIndent: '-18pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  ⑰<span className="s5">불공제 매입세액 총액</span>
                  <span className="s8">(⑮×</span>
                  <span className="s9">⑯</span>
                  <span className="s6">)</span>
                </p>
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                }}
              >
                <p
                  className="s7"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '0pt',
                    textIndent: '0pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  ⑱<span className="s5">기 불공제 매입세액</span>
                </p>
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                }}
              >
                <p
                  className="s9"
                  style={{
                    paddingTop: '7pt',
                    paddingLeft: '21pt',
                    paddingRight: '4pt',
                    textIndent: '-17pt',
                    lineHeight: '120%',
                    textAlign: 'center',
                  }}
                >
                  <span className="s7">⑲</span>
                  <span className="s5">가산 또는 공제되는 매입세액</span>
                  <span className="s8">(</span>⑰<span className="s6">-</span>⑱
                  <span className="s6">)</span>
                </p>
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  1
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxSettlementItems[0].totalCommonTaxAmount}
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      0,
                      'totalCommonTaxAmount',
                      value
                    )
                  }
                />
              </td>
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={mappedCommonTaxSettlementItems[0].taxFreeRatio}
                  onChange={e =>
                    updateCommonTaxSettlementItem(
                      0,
                      'taxFreeRatio',
                      e.target.value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '99pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxSettlementItems[0]
                      .totalNonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      0,
                      'totalNonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxSettlementItems[0]
                      .alreadyNonDeductedTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      0,
                      'alreadyNonDeductedTaxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxSettlementItems[0].finalAdjustmentTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      0,
                      'finalAdjustmentTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  2
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={mappedCommonTaxSettlementItems[1].totalCommonTaxAmount}
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      1,
                      'totalCommonTaxAmount',
                      value
                    )
                  }
                />
              </td>
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
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={mappedCommonTaxSettlementItems[1].taxFreeRatio}
                  onChange={e =>
                    updateCommonTaxSettlementItem(
                      1,
                      'taxFreeRatio',
                      e.target.value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '99pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxSettlementItems[1]
                      .totalNonDeductibleTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      1,
                      'totalNonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxSettlementItems[1]
                      .alreadyNonDeductedTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      1,
                      'alreadyNonDeductedTaxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderBottomColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={
                    mappedCommonTaxSettlementItems[1].finalAdjustmentTaxAmount
                  }
                  onChange={value =>
                    updateCommonTaxSettlementItem(
                      1,
                      'finalAdjustmentTaxAmount',
                      value
                    )
                  }
                />
              </td>
            </tr>
            <tr style={{ height: '16pt' }}>
              <td
                style={{
                  width: '35pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  verticalAlign: 'middle',
                }}
              >
                <p
                  className="s5"
                  style={{
                    textIndent: '0pt',
                    lineHeight: '100%',
                    textAlign: 'center',
                    margin: '0',
                    paddingTop: '0',
                    paddingBottom: '0',
                  }}
                >
                  합계
                </p>
              </td>
              <td
                style={{
                  width: '81pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxSettlementTotal.totalCommonTaxAmount}
                  onChange={value =>
                    updateCommonTaxSettlementTotal(
                      'totalCommonTaxAmount',
                      value
                    )
                  }
                />
              </td>
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
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <input
                  className="form-input form-input-text"
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  type="text"
                  value={commonTaxSettlementTotal.taxFreeRatio}
                  onChange={e =>
                    updateCommonTaxSettlementTotal(
                      'taxFreeRatio',
                      e.target.value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '99pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxSettlementTotal.totalNonDeductibleTaxAmount}
                  onChange={value =>
                    updateCommonTaxSettlementTotal(
                      'totalNonDeductibleTaxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '87pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1pt',
                  borderRightColor: '#787878',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxSettlementTotal.alreadyNonDeductedTaxAmount}
                  onChange={value =>
                    updateCommonTaxSettlementTotal(
                      'alreadyNonDeductedTaxAmount',
                      value
                    )
                  }
                />
              </td>
              <td
                style={{
                  width: '113pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#787878',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                }}
              >
                <NumericInput
                  style={{
                    width: 'calc(100% - 2pt)',
                    height: 'calc(100% - 2pt)',
                  }}
                  value={commonTaxSettlementTotal.finalAdjustmentTaxAmount}
                  onChange={value =>
                    updateCommonTaxSettlementTotal(
                      'finalAdjustmentTaxAmount',
                      value
                    )
                  }
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
        <li data-list-text="5.">
          <p
            style={{
              paddingTop: '8pt',
              paddingBottom: '5pt',
              paddingLeft: '24pt',
              textIndent: '-15pt',
              textAlign: 'left',
            }}
          >
            납부세액 또는 환급세액 재계산 명세
          </p>
        </li>
      </ol>
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
        <tr style={{ height: '38pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '7pt',
                paddingRight: '6pt',
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
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingLeft: '20pt',
                textIndent: '-15pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑳<span className="s5">해당 재화의 매입세액</span>
            </p>
          </td>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingLeft: '29pt',
                paddingRight: '6pt',
                textIndent: '-22pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ㉑<span className="s5">경감률</span>
              <span className="s8">
                [1-(5/100 또는 25/100×경과된 과세기간의 수)]
              </span>
            </p>
          </td>
          <td
            style={{
              width: '126pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '4pt',
                paddingRight: '2pt',
                textIndent: '-1pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              <span className="s7">㉒</span>
              증가 또는 감소된 면세 공급가액
              <span className="s8">(</span>
              사용 면적
              <span className="s8">)</span>
              비율
            </p>
          </td>
          <td
            style={{
              width: '113pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ㉓<span className="s5">가산 또는 공제되는 매입세액</span>
            </p>
            <p
              className="s6"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              (<span className="s9">⑳</span>×<span className="s9">㉑</span>×
              <span className="s9">㉒</span>)
            </p>
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                margin: '0',
                paddingTop: '0',
                paddingBottom: '0',
              }}
            >
              1
            </p>
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
              value={mappedTaxRecalculationItems[0].goodsTaxAmount}
              onChange={value =>
                updateTaxRecalculationItem(0, 'goodsTaxAmount', value)
              }
            />
          </td>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
              type="text"
              value={mappedTaxRecalculationItems[0].reductionRate}
              onChange={e =>
                updateTaxRecalculationItem(0, 'reductionRate', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '126pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
              type="text"
              value={mappedTaxRecalculationItems[0].fluctuationRatio}
              onChange={e =>
                updateTaxRecalculationItem(
                  0,
                  'fluctuationRatio',
                  e.target.value
                )
              }
            />
          </td>
          <td
            style={{
              width: '113pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
              value={mappedTaxRecalculationItems[0].recalculatedTaxAmount}
              onChange={value =>
                updateTaxRecalculationItem(0, 'recalculatedTaxAmount', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '0',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                margin: '0',
                paddingBottom: '0',
              }}
            >
              2
            </p>
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
              value={mappedTaxRecalculationItems[1].goodsTaxAmount}
              onChange={value =>
                updateTaxRecalculationItem(1, 'goodsTaxAmount', value)
              }
            />
          </td>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
              type="text"
              value={mappedTaxRecalculationItems[1].reductionRate}
              onChange={e =>
                updateTaxRecalculationItem(1, 'reductionRate', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '126pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
              type="text"
              value={mappedTaxRecalculationItems[1].fluctuationRatio}
              onChange={e =>
                updateTaxRecalculationItem(
                  1,
                  'fluctuationRatio',
                  e.target.value
                )
              }
            />
          </td>
          <td
            style={{
              width: '113pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
              value={mappedTaxRecalculationItems[1].recalculatedTaxAmount}
              onChange={value =>
                updateTaxRecalculationItem(1, 'recalculatedTaxAmount', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                margin: '0',
                paddingTop: '0',
                paddingBottom: '0',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
              value={taxRecalculationTotal.goodsTaxAmount}
              onChange={value =>
                updateTaxRecalculationTotal('goodsTaxAmount', value)
              }
            />
          </td>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
              type="text"
              value={taxRecalculationTotal.reductionRate}
              onChange={e =>
                updateTaxRecalculationTotal('reductionRate', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '126pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
              type="text"
              value={taxRecalculationTotal.fluctuationRatio}
              onChange={e =>
                updateTaxRecalculationTotal('fluctuationRatio', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '113pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              style={{ width: 'calc(100% - 2pt)', height: 'calc(100% - 2pt)' }}
              value={taxRecalculationTotal.recalculatedTaxAmount}
              onChange={value =>
                updateTaxRecalculationTotal('recalculatedTaxAmount', value)
              }
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
