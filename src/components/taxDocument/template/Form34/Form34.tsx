'use client';
import './form34.css';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form34Data,
  Form34InputData,
  WorkplaceItem,
} from '@/components/taxDocument/template/Form34/type';
import Input from '@/components/taxDocument/template/common/Input';
import NumericTextArea from '@/components/taxDocument/template/common/NumericTextArea';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form34Props = UpdaterProps<Form34Data> & { inputType?: Form34InputData };

export default function Form34({
  updater,
  reportingYear,
  reportingTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  workplaceItems,
  total,
  inputType,
}: Form34Props) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');
  const baseWorkplaceItem: WorkplaceItem = {
    location: '',
    bizRegNumberRow1: '',
    bizRegNumberRow2: '',
    salesTaxable: {
      taxBase: 0,
      taxRate: '',
      taxAmount: 0,
    },
    salesZeroRate: {
      taxBase: 0,
      taxRate: '',
      taxAmount: 0,
    },
    purchaseTaxable: {
      taxBase: 0,
      taxRate: '',
      taxAmount: 0,
    },
    purchaseDeemed: {
      taxBase: 0,
      taxRate: '',
      taxAmount: 0,
    },
    penaltyTax: 0,
    deductionTax: 0,
    payableOrRefundableTax: 0,
    internalTransaction: {
      outflowAmount: 0,
      inflowAmount: 0,
    },
    remarks: '',
  };

  const mappedWorkplaceItems = Array.from({ length: 5 }, (_, index) => {
    return workplaceItems[index] ?? baseWorkplaceItem;
  });

  const [
    workplaceItem0,
    workplaceItem1,
    workplaceItem2,
    workplaceItem3,
    workplaceItem4,
  ] = mappedWorkplaceItems;

  const updateWorkplaceField = <K extends keyof WorkplaceItem>(
    index: number,
    field: K,
    value: WorkplaceItem[K]
  ) => {
    const nextItems = [...workplaceItems];
    const target = nextItems[index] ?? baseWorkplaceItem;

    nextItems[index] = {
      ...target,
      [field]: value,
    };

    updater('workplaceItems', nextItems);
  };

  const updateWorkplaceTaxGroup = (
    index: number,
    group:
      | 'salesTaxable'
      | 'salesZeroRate'
      | 'purchaseTaxable'
      | 'purchaseDeemed',
    key: 'taxBase' | 'taxAmount',
    value: number
  ) => {
    const nextItems = [...workplaceItems];
    const target = nextItems[index] ?? baseWorkplaceItem;

    nextItems[index] = {
      ...target,
      [group]: {
        ...target[group],
        [key]: value,
      },
    };

    updater('workplaceItems', nextItems);
  };

  const updateWorkplaceInternalTransaction = (
    index: number,
    key: 'outflowAmount' | 'inflowAmount',
    value: number
  ) => {
    const nextItems = [...workplaceItems];
    const target = nextItems[index] ?? baseWorkplaceItem;

    nextItems[index] = {
      ...target,
      internalTransaction: {
        ...target.internalTransaction,
        [key]: value,
      },
    };

    updater('workplaceItems', nextItems);
  };

  const updateTotalTaxGroup = (
    group:
      | 'salesTaxableTotal'
      | 'salesZeroRateTotal'
      | 'purchaseTaxableTotal'
      | 'purchaseDeemedTotal',
    key: 'taxBase' | 'taxAmount',
    value: number
  ) => {
    updater('total', {
      ...total,
      [group]: {
        ...total[group],
        [key]: value,
      },
    });
  };

  const updateTotalInternalTransaction = (
    key: 'outflowAmount' | 'inflowAmount',
    value: number
  ) => {
    updater('total', {
      ...total,
      internalTransactionTotal: {
        ...total.internalTransactionTotal,
        [key]: value,
      },
    });
  };

  const updateTotalNumberField = (
    field:
      | 'penaltyTaxTotal'
      | 'deductionTaxTotal'
      | 'payableOrRefundableTaxTotal',
    value: number
  ) => {
    updater('total', {
      ...total,
      [field]: value,
    });
  };

  const updateTotalRemarks = (value: string) => {
    updater('total', {
      ...total,
      remarks: value,
    });
  };
  return (
    <PageSlot slotWidth={882} slotHeight={624}>
      <div className="form34">
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
              부가가치세법 시행규칙 [별지 제34호서식]
            </p>
          </li>
        </ul>
        <p style={{ paddingTop: '9pt', textIndent: '0pt', textAlign: 'left' }}>
          <br />
        </p>
        <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
          사업장별 부가가치세 과세표준 및 납부세액
          <span className="s3">(환급세액)</span>
          신고명세서
        </p>
        <p
          style={{
            paddingTop: '16pt',
            paddingLeft: '8pt',
            textIndent: '0pt',
            textAlign: 'left',
          }}
        >
          신고기간 :
          <Input
            className="form-input form-input-text"
            style={{
              width: '40pt',
              height: '20pt',
              minWidth: '40pt',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'Arial',
              fontSize: '10pt',
              textAlign: 'center',
            }}
            value={reportingYear}
            onChange={value => updater('reportingYear', digitsOnly(value))}
            inputType={inputType?.reportingYear}
          />
          년<span style={{ paddingLeft: '15pt' }}></span>
          제
          <Input
            className="form-input form-input-text"
            style={{
              width: '20pt',
              height: '20pt',
              minWidth: '20pt',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'Arial',
              fontSize: '10pt',
              textAlign: 'center',
            }}
            value={reportingTerm}
            onChange={value => updater('reportingTerm', digitsOnly(value))}
            inputType={inputType?.reportingTerm}
          />
          기 (
          <Input
            className="form-input form-input-text"
            style={{
              width: '20pt',
              height: '20pt',
              minWidth: '20pt',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'Arial',
              fontSize: '10pt',
              textAlign: 'center',
            }}
            value={taxPeriodStartMonth}
            onChange={value =>
              updater('taxPeriodStartMonth', digitsOnly(value))
            }
            inputType={inputType?.taxPeriodStartMonth}
          />
          월
          <Input
            className="form-input form-input-text"
            style={{
              width: '20pt',
              height: '20pt',
              minWidth: '20pt',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'Arial',
              fontSize: '10pt',
              textAlign: 'center',
            }}
            value={taxPeriodStartDay}
            onChange={value => updater('taxPeriodStartDay', digitsOnly(value))}
            inputType={inputType?.taxPeriodStartDay}
          />
          일 ~
          <Input
            className="form-input form-input-text"
            style={{
              width: '20pt',
              height: '20pt',
              minWidth: '20pt',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'Arial',
              fontSize: '10pt',
              textAlign: 'center',
            }}
            value={taxPeriodEndMonth}
            onChange={value => updater('taxPeriodEndMonth', digitsOnly(value))}
            inputType={inputType?.taxPeriodEndMonth}
          />
          월
          <Input
            className="form-input form-input-text"
            style={{
              width: '20pt',
              height: '20pt',
              minWidth: '20pt',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'Arial',
              fontSize: '10pt',
              textAlign: 'center',
            }}
            value={taxPeriodEndDay}
            onChange={value => updater('taxPeriodEndDay', digitsOnly(value))}
            inputType={inputType?.taxPeriodEndDay}
          />
          일) 총괄 납부 관리번호 : □□□□□□□
        </p>
        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
          <br />
        </p>
        <hr
          style={{
            width: '882pt',
            border: 'none',
            borderTop: '1pt solid #000',
            margin: '0 auto',
          }}
        />
        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
          <br />
        </p>
        <table
          style={{
            borderCollapse: 'collapse',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '882pt',
            tableLayout: 'fixed',
          }}
          cellSpacing="0"
        >
          <tr style={{ height: '22pt' }}>
            <td
              style={{
                width: '127pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
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
                className="s4"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                사업장
              </p>
            </td>
            <td
              style={{
                width: '200pt',
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
              colSpan={4}
            >
              <p
                className="s4"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                매출세액
              </p>
            </td>
            <td
              style={{
                width: '204pt',
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
              colSpan={4}
            >
              <p
                className="s4"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                매입세액
              </p>
            </td>
            <td
              style={{
                width: '39pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p style={{ textIndent: '0pt', textAlign: 'center' }}>
                <br />
              </p>
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                가산세
              </p>
            </td>
            <td
              style={{
                width: '39pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p style={{ textIndent: '0pt', textAlign: 'center' }}>
                <br />
              </p>
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                공제세액
              </p>
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                납부세액
              </p>
              <p
                className="s6"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                (환급세액)
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
              colSpan={2}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                내부거래
              </p>
              <p
                className="s6"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                (판매목적)
              </p>
            </td>
            <td
              style={{
                width: '28pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
              }}
              rowSpan={2}
            >
              <p style={{ textIndent: '0pt', textAlign: 'center' }}>
                <br />
              </p>
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                비고
              </p>
            </td>
          </tr>
          <tr style={{ height: '29pt' }}>
            <td
              style={{
                width: '65pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                소재지
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                사업자등록번호
              </p>
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                구분
              </p>
            </td>
            <td
              style={{
                width: '70pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                과세표준
              </p>
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                세율
              </p>
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                세액
              </p>
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                구분
              </p>
            </td>
            <td
              style={{
                width: '70pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                과세표준
              </p>
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                세율
              </p>
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                세액
              </p>
            </td>
            <td
              style={{
                width: '40pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s6"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                반출액
              </p>
            </td>
            <td
              style={{
                width: '37pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s6"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                반입액
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
            <td
              style={{
                width: '65pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.location}
                onChange={event =>
                  updateWorkplaceField(0, 'location', event.target.value)
                }
              ></textarea>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.bizRegNumberRow1}
                onChange={value =>
                  updateWorkplaceField(0, 'bizRegNumberRow1', value)
                }
                inputType={inputType?.workplaceItems?.[0]?.bizRegNumberRow1}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.salesTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(0, 'salesTaxable', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.salesTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.salesTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(0, 'salesTaxable', 'taxAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.salesTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.purchaseTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    0,
                    'purchaseTaxable',
                    'taxBase',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.purchaseTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                }}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.purchaseTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    0,
                    'purchaseTaxable',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.purchaseTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '39pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.penaltyTax}
                onChange={value => updateWorkplaceField(0, 'penaltyTax', value)}
                inputType={inputType?.workplaceItems?.[0]?.penaltyTax}
              />
            </td>
            <td
              style={{
                width: '39pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.deductionTax}
                onChange={value =>
                  updateWorkplaceField(0, 'deductionTax', value)
                }
                inputType={inputType?.workplaceItems?.[0]?.deductionTax}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.payableOrRefundableTax}
                onChange={value =>
                  updateWorkplaceField(0, 'payableOrRefundableTax', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.payableOrRefundableTax
                }
              />
            </td>
            <td
              style={{
                width: '40pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.internalTransaction.outflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(0, 'outflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.internalTransaction
                    ?.outflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '37pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.internalTransaction.inflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(0, 'inflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.internalTransaction
                    ?.inflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '28pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '8pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.remarks ?? ''}
                onChange={event =>
                  updateWorkplaceField(0, 'remarks', event.target.value)
                }
              ></textarea>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.bizRegNumberRow2}
                onChange={value =>
                  updateWorkplaceField(0, 'bizRegNumberRow2', value)
                }
                inputType={inputType?.workplaceItems?.[0]?.bizRegNumberRow2}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.salesZeroRate.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(0, 'salesZeroRate', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.salesZeroRate?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.salesZeroRate.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    0,
                    'salesZeroRate',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.salesZeroRate?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                의제등
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.purchaseDeemed.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(0, 'purchaseDeemed', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.purchaseDeemed?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem0.purchaseDeemed.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    0,
                    'purchaseDeemed',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[0]?.purchaseDeemed?.taxAmount
                }
              />
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
            <td
              style={{
                width: '57pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.location}
                onChange={event =>
                  updateWorkplaceField(1, 'location', event.target.value)
                }
              ></textarea>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.bizRegNumberRow1}
                onChange={value =>
                  updateWorkplaceField(1, 'bizRegNumberRow1', value)
                }
                inputType={inputType?.workplaceItems?.[1]?.bizRegNumberRow1}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.salesTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(1, 'salesTaxable', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.salesTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.salesTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(1, 'salesTaxable', 'taxAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.salesTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.purchaseTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    1,
                    'purchaseTaxable',
                    'taxBase',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.purchaseTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.purchaseTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    1,
                    'purchaseTaxable',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.purchaseTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.penaltyTax}
                onChange={value => updateWorkplaceField(1, 'penaltyTax', value)}
                inputType={inputType?.workplaceItems?.[1]?.penaltyTax}
              />
            </td>
            <td
              style={{
                width: '54pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.deductionTax}
                onChange={value =>
                  updateWorkplaceField(1, 'deductionTax', value)
                }
                inputType={inputType?.workplaceItems?.[1]?.deductionTax}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.payableOrRefundableTax}
                onChange={value =>
                  updateWorkplaceField(1, 'payableOrRefundableTax', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.payableOrRefundableTax
                }
              />
            </td>
            <td
              style={{
                width: '45pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.internalTransaction.outflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(1, 'outflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.internalTransaction
                    ?.outflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '42pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.internalTransaction.inflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(1, 'inflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.internalTransaction
                    ?.inflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '33pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '8pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.remarks ?? ''}
                onChange={event =>
                  updateWorkplaceField(1, 'remarks', event.target.value)
                }
              ></textarea>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.bizRegNumberRow2}
                onChange={value =>
                  updateWorkplaceField(1, 'bizRegNumberRow2', value)
                }
                inputType={inputType?.workplaceItems?.[1]?.bizRegNumberRow2}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.salesZeroRate.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(1, 'salesZeroRate', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.salesZeroRate?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.salesZeroRate.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    1,
                    'salesZeroRate',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.salesZeroRate?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                의제등
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.purchaseDeemed.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(1, 'purchaseDeemed', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.purchaseDeemed?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem1.purchaseDeemed.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    1,
                    'purchaseDeemed',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[1]?.purchaseDeemed?.taxAmount
                }
              />
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
            <td
              style={{
                width: '57pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.location}
                onChange={event =>
                  updateWorkplaceField(2, 'location', event.target.value)
                }
              ></textarea>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.bizRegNumberRow1}
                onChange={value =>
                  updateWorkplaceField(2, 'bizRegNumberRow1', value)
                }
                inputType={inputType?.workplaceItems?.[2]?.bizRegNumberRow1}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.salesTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(2, 'salesTaxable', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.salesTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.salesTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(2, 'salesTaxable', 'taxAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.salesTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.purchaseTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    2,
                    'purchaseTaxable',
                    'taxBase',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.purchaseTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.purchaseTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    2,
                    'purchaseTaxable',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.purchaseTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.penaltyTax}
                onChange={value => updateWorkplaceField(2, 'penaltyTax', value)}
                inputType={inputType?.workplaceItems?.[2]?.penaltyTax}
              />
            </td>
            <td
              style={{
                width: '54pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.deductionTax}
                onChange={value =>
                  updateWorkplaceField(2, 'deductionTax', value)
                }
                inputType={inputType?.workplaceItems?.[2]?.deductionTax}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.payableOrRefundableTax}
                onChange={value =>
                  updateWorkplaceField(2, 'payableOrRefundableTax', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.payableOrRefundableTax
                }
              />
            </td>
            <td
              style={{
                width: '45pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.internalTransaction.outflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(2, 'outflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.internalTransaction
                    ?.outflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '42pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.internalTransaction.inflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(2, 'inflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.internalTransaction
                    ?.inflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '33pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '8pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.remarks ?? ''}
                onChange={event =>
                  updateWorkplaceField(2, 'remarks', event.target.value)
                }
              ></textarea>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.bizRegNumberRow2}
                onChange={value =>
                  updateWorkplaceField(2, 'bizRegNumberRow2', value)
                }
                inputType={inputType?.workplaceItems?.[2]?.bizRegNumberRow2}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.salesZeroRate.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(2, 'salesZeroRate', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.salesZeroRate?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.salesZeroRate.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    2,
                    'salesZeroRate',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.salesZeroRate?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                의제등
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.purchaseDeemed.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(2, 'purchaseDeemed', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.purchaseDeemed?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem2.purchaseDeemed.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    2,
                    'purchaseDeemed',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[2]?.purchaseDeemed?.taxAmount
                }
              />
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
            <td
              style={{
                width: '57pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.location}
                onChange={event =>
                  updateWorkplaceField(3, 'location', event.target.value)
                }
              ></textarea>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.bizRegNumberRow1}
                onChange={value =>
                  updateWorkplaceField(3, 'bizRegNumberRow1', value)
                }
                inputType={inputType?.workplaceItems?.[3]?.bizRegNumberRow1}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.salesTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(3, 'salesTaxable', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.salesTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.salesTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(3, 'salesTaxable', 'taxAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.salesTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.purchaseTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    3,
                    'purchaseTaxable',
                    'taxBase',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.purchaseTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.purchaseTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    3,
                    'purchaseTaxable',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.purchaseTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.penaltyTax}
                onChange={value => updateWorkplaceField(3, 'penaltyTax', value)}
                inputType={inputType?.workplaceItems?.[3]?.penaltyTax}
              />
            </td>
            <td
              style={{
                width: '54pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.deductionTax}
                onChange={value =>
                  updateWorkplaceField(3, 'deductionTax', value)
                }
                inputType={inputType?.workplaceItems?.[3]?.deductionTax}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.payableOrRefundableTax}
                onChange={value =>
                  updateWorkplaceField(3, 'payableOrRefundableTax', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.payableOrRefundableTax
                }
              />
            </td>
            <td
              style={{
                width: '45pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.internalTransaction.outflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(3, 'outflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.internalTransaction
                    ?.outflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '42pt',
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
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.internalTransaction.inflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(3, 'inflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.internalTransaction
                    ?.inflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '33pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '8pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.remarks ?? ''}
                onChange={event =>
                  updateWorkplaceField(3, 'remarks', event.target.value)
                }
              ></textarea>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.bizRegNumberRow2}
                onChange={value =>
                  updateWorkplaceField(3, 'bizRegNumberRow2', value)
                }
                inputType={inputType?.workplaceItems?.[3]?.bizRegNumberRow2}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.salesZeroRate.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(3, 'salesZeroRate', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.salesZeroRate?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.salesZeroRate.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    3,
                    'salesZeroRate',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.salesZeroRate?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                의제등
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.purchaseDeemed.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(3, 'purchaseDeemed', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.purchaseDeemed?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem3.purchaseDeemed.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    3,
                    'purchaseDeemed',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[3]?.purchaseDeemed?.taxAmount
                }
              />
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '57pt',
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
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.location}
                onChange={event =>
                  updateWorkplaceField(4, 'location', event.target.value)
                }
              ></textarea>
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
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.bizRegNumberRow1}
                onChange={value =>
                  updateWorkplaceField(4, 'bizRegNumberRow1', value)
                }
                inputType={inputType?.workplaceItems?.[4]?.bizRegNumberRow1}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '53pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.salesTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(4, 'salesTaxable', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.salesTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.salesTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(4, 'salesTaxable', 'taxAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.salesTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.purchaseTaxable.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    4,
                    'purchaseTaxable',
                    'taxBase',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.purchaseTaxable?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.purchaseTaxable.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    4,
                    'purchaseTaxable',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.purchaseTaxable?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.penaltyTax}
                onChange={value => updateWorkplaceField(4, 'penaltyTax', value)}
                inputType={inputType?.workplaceItems?.[4]?.penaltyTax}
              />
            </td>
            <td
              style={{
                width: '54pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.deductionTax}
                onChange={value =>
                  updateWorkplaceField(4, 'deductionTax', value)
                }
                inputType={inputType?.workplaceItems?.[4]?.deductionTax}
              />
            </td>
            <td
              style={{
                width: '53pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.payableOrRefundableTax}
                onChange={value =>
                  updateWorkplaceField(4, 'payableOrRefundableTax', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.payableOrRefundableTax
                }
              />
            </td>
            <td
              style={{
                width: '45pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.internalTransaction.outflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(4, 'outflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.internalTransaction
                    ?.outflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '42pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.internalTransaction.inflowAmount}
                onChange={value =>
                  updateWorkplaceInternalTransaction(4, 'inflowAmount', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.internalTransaction
                    ?.inflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '33pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '8pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.remarks ?? ''}
                onChange={event =>
                  updateWorkplaceField(4, 'remarks', event.target.value)
                }
              ></textarea>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '35pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '14pt' }}>
            <td
              style={{
                width: '56pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <Input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '9pt',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.bizRegNumberRow2}
                onChange={value =>
                  updateWorkplaceField(4, 'bizRegNumberRow2', value)
                }
                inputType={inputType?.workplaceItems?.[4]?.bizRegNumberRow2}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                width: '53pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.salesZeroRate.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(4, 'salesZeroRate', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.salesZeroRate?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.salesZeroRate.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    4,
                    'salesZeroRate',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.salesZeroRate?.taxAmount
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                의제등
              </p>
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.purchaseDeemed.taxBase}
                onChange={value =>
                  updateWorkplaceTaxGroup(4, 'purchaseDeemed', 'taxBase', value)
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.purchaseDeemed?.taxBase
                }
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#ADADAD',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={workplaceItem4.purchaseDeemed.taxAmount}
                onChange={value =>
                  updateWorkplaceTaxGroup(
                    4,
                    'purchaseDeemed',
                    'taxAmount',
                    value
                  )
                }
                inputType={
                  inputType?.workplaceItems?.[4]?.purchaseDeemed?.taxAmount
                }
              />
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '46pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '13pt' }}>
            <td
              style={{
                width: '127pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              colSpan={2}
            ></td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.salesTaxableTotal.taxBase}
                onChange={value =>
                  updateTotalTaxGroup('salesTaxableTotal', 'taxBase', value)
                }
                inputType={inputType?.total?.salesTaxableTotal?.taxBase}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.salesTaxableTotal.taxAmount}
                onChange={value =>
                  updateTotalTaxGroup('salesTaxableTotal', 'taxAmount', value)
                }
                inputType={inputType?.total?.salesTaxableTotal?.taxAmount}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
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
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                과 세
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.purchaseTaxableTotal.taxBase}
                onChange={value =>
                  updateTotalTaxGroup('purchaseTaxableTotal', 'taxBase', value)
                }
                inputType={inputType?.total?.purchaseTaxableTotal?.taxBase}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  paddingTop: '1pt',
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                10
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '35pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.purchaseTaxableTotal.taxAmount}
                onChange={value =>
                  updateTotalTaxGroup(
                    'purchaseTaxableTotal',
                    'taxAmount',
                    value
                  )
                }
                inputType={inputType?.total?.purchaseTaxableTotal?.taxAmount}
              />
            </td>
            <td
              style={{
                width: '39pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.penaltyTaxTotal}
                onChange={value =>
                  updateTotalNumberField('penaltyTaxTotal', value)
                }
                inputType={inputType?.total?.penaltyTaxTotal}
              />
            </td>
            <td
              style={{
                width: '39pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.deductionTaxTotal}
                onChange={value =>
                  updateTotalNumberField('deductionTaxTotal', value)
                }
                inputType={inputType?.total?.deductionTaxTotal}
              />
            </td>
            <td
              style={{
                width: '47pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.payableOrRefundableTaxTotal}
                onChange={value =>
                  updateTotalNumberField('payableOrRefundableTaxTotal', value)
                }
                inputType={inputType?.total?.payableOrRefundableTaxTotal}
              />
            </td>
            <td
              style={{
                width: '40pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.internalTransactionTotal.outflowAmount}
                onChange={value =>
                  updateTotalInternalTransaction('outflowAmount', value)
                }
                inputType={
                  inputType?.total?.internalTransactionTotal?.outflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '37pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.internalTransactionTotal.inflowAmount}
                onChange={value =>
                  updateTotalInternalTransaction('inflowAmount', value)
                }
                inputType={
                  inputType?.total?.internalTransactionTotal?.inflowAmount
                }
              />
            </td>
            <td
              style={{
                width: '28pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={4}
            >
              <textarea
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '40pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontSize: '8pt',
                  fontFamily: 'Arial',
                }}
                value={total.remarks ?? ''}
                onChange={event => updateTotalRemarks(event.target.value)}
              ></textarea>
            </td>
          </tr>
          <tr style={{ height: '11pt' }}>
            <td
              style={{
                width: '127pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                borderBottomStyle: 'none',
              }}
              rowSpan={2}
              colSpan={2}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                합 계
              </p>
            </td>
            <td
              style={{
                width: '46pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
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
                className="s7"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
          <tr style={{ height: '12pt' }}>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                영세율
              </p>
            </td>
            <td
              style={{
                width: '70pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.salesZeroRateTotal.taxBase}
                onChange={value =>
                  updateTotalTaxGroup('salesZeroRateTotal', 'taxBase', value)
                }
                inputType={inputType?.total?.salesZeroRateTotal?.taxBase}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.salesZeroRateTotal.taxAmount}
                onChange={value =>
                  updateTotalTaxGroup('salesZeroRateTotal', 'taxAmount', value)
                }
                inputType={inputType?.total?.salesZeroRateTotal?.taxAmount}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              rowSpan={2}
            >
              <p
                className="s5"
                style={{
                  textIndent: '0pt',
                  textAlign: 'center',
                  fontSize: '9pt',
                }}
              >
                의제등
              </p>
            </td>
            <td
              style={{
                width: '70pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.purchaseDeemedTotal.taxBase}
                onChange={value =>
                  updateTotalTaxGroup('purchaseDeemedTotal', 'taxBase', value)
                }
                inputType={inputType?.total?.purchaseDeemedTotal?.taxBase}
              />
            </td>
            <td
              style={{
                width: '35pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                0
              </p>
              <hr
                style={{
                  width: '20pt',
                  height: '0.3pt',
                  background: '#999',
                  border: 'none',
                  margin: '0 auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#000',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              rowSpan={2}
            >
              <NumericTextArea
                style={{
                  width: 'calc(100% - 2pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  resize: 'none',
                  overflowY: 'auto',
                  fontFamily: 'Arial',
                }}
                value={total.purchaseDeemedTotal.taxAmount}
                onChange={value =>
                  updateTotalTaxGroup('purchaseDeemedTotal', 'taxAmount', value)
                }
                inputType={inputType?.total?.purchaseDeemedTotal?.taxAmount}
              />
            </td>
          </tr>
          <tr style={{ height: '11pt' }}>
            <td
              style={{
                width: '127pt',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
              colSpan={2}
            ></td>
            <td
              style={{
                width: '35pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
            <td
              style={{
                width: '60pt',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#ADADAD',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2pt',
                borderBottomColor: '#000',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#ADADAD',
              }}
            >
              <p
                className="s7"
                style={{
                  textIndent: '0pt',
                  lineHeight: '10pt',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
              >
                100
              </p>
            </td>
          </tr>
        </table>
      </div>
    </PageSlot>
  );
}
