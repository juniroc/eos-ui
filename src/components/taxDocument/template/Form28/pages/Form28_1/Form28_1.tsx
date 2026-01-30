'use client';
import './form28_1.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form28Data } from '@/components/taxDocument/template/Form28/type';
import { MAX_BUSINESS_PLACE_LENGTH } from '@/components/taxDocument/template/Form28/constants';

type Props = UpdaterProps<Form28Data> & {
  onAddPage: () => void;
  pageIndex: number;
};

export default function Form28_1({
  updater,
  onAddPage,
  pageIndex,
  reportingYear,
  reportingTerm,
  periodStartMonth,
  periodStartDay,
  periodEndMonth,
  periodEndDay,
  mainBizNumber,
  businessPlaces,
  totalStats,
}: Props) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

  const createEmptyPlace = (): Form28Data['businessPlaces'][number] => ({
    bizName: '',
    address: '',
    sales: {
      taxable: {
        invoice: { taxBase: 0, taxAmount: 0 },
        other: { taxBase: 0, taxAmount: 0 },
      },
      zeroRate: {
        invoice: { taxBase: 0, taxAmount: 0 },
        other: { taxBase: 0, taxAmount: 0 },
      },
    },
    purchase: {
      taxable: { taxBase: 0, taxAmount: 0 },
      deemedEtc: { taxBase: 0, taxAmount: 0 },
    },
    calcResult: {
      row1: { penaltyTax: 0, deductionTax: 0, payableTax: 0, note: '' },
      row2: { penaltyTax: 0, deductionTax: 0, payableTax: 0, note: '' },
    },
  });

  const createEmptyTotal = (): Form28Data['totalStats'] => ({
    sales: {
      taxable: {
        invoice: { taxBase: 0, taxAmount: 0 },
        other: { taxBase: 0, taxAmount: 0 },
      },
      zeroRate: {
        invoice: { taxBase: 0, taxAmount: 0 },
        other: { taxBase: 0, taxAmount: 0 },
      },
    },
    purchase: {
      taxable: { taxBase: 0, taxAmount: 0 },
      deemedEtc: { taxBase: 0, taxAmount: 0 },
    },
    calcResult: {
      row1: { penaltyTax: 0, deductionTax: 0, payableTax: 0, note: '' },
      row2: { penaltyTax: 0, deductionTax: 0, payableTax: 0, note: '' },
    },
  });

  const startIndex = pageIndex * MAX_BUSINESS_PLACE_LENGTH;
  const places = Array.from({ length: MAX_BUSINESS_PLACE_LENGTH }, (_, i) => {
    return businessPlaces[startIndex + i] ?? createEmptyPlace();
  });
  const total = totalStats ?? createEmptyTotal();

  const updatePlace = (
    absIndex: number,
    updaterFn: (
      current: Form28Data['businessPlaces'][number]
    ) => Form28Data['businessPlaces'][number]
  ) => {
    const items = [...businessPlaces];
    const current = items[absIndex] ?? createEmptyPlace();
    items[absIndex] = updaterFn(current);
    updater('businessPlaces', items);
  };

  const updatePlaceField = <
    K extends keyof Form28Data['businessPlaces'][number],
  >(
    absIndex: number,
    field: K,
    value: Form28Data['businessPlaces'][number][K]
  ) => {
    updatePlace(absIndex, current => ({ ...current, [field]: value }));
  };

  const updatePlaceSales = (
    absIndex: number,
    section: 'taxable' | 'zeroRate',
    kind: 'invoice' | 'other',
    field: 'taxBase' | 'taxAmount',
    value: number
  ) => {
    updatePlace(absIndex, current => ({
      ...current,
      sales: {
        ...current.sales,
        [section]: {
          ...current.sales[section],
          [kind]: {
            ...current.sales[section][kind],
            [field]: value,
          },
        },
      },
    }));
  };

  const updatePlacePurchase = (
    absIndex: number,
    kind: 'taxable' | 'deemedEtc',
    field: 'taxBase' | 'taxAmount',
    value: number
  ) => {
    updatePlace(absIndex, current => ({
      ...current,
      purchase: {
        ...current.purchase,
        [kind]: {
          ...current.purchase[kind],
          [field]: value,
        },
      },
    }));
  };

  const updatePlaceCalc = (
    absIndex: number,
    row: 'row1' | 'row2',
    field: 'penaltyTax' | 'deductionTax' | 'payableTax' | 'note',
    value: number | string
  ) => {
    updatePlace(absIndex, current => ({
      ...current,
      calcResult: {
        ...current.calcResult,
        [row]: {
          ...current.calcResult[row],
          [field]: value,
        },
      },
    }));
  };

  const updateTotalSales = (
    section: 'taxable' | 'zeroRate',
    kind: 'invoice' | 'other',
    field: 'taxBase' | 'taxAmount',
    value: number
  ) => {
    updater('totalStats', {
      ...total,
      sales: {
        ...total.sales,
        [section]: {
          ...total.sales[section],
          [kind]: {
            ...total.sales[section][kind],
            [field]: value,
          },
        },
      },
    });
  };

  const updateTotalPurchase = (
    kind: 'taxable' | 'deemedEtc',
    field: 'taxBase' | 'taxAmount',
    value: number
  ) => {
    updater('totalStats', {
      ...total,
      purchase: {
        ...total.purchase,
        [kind]: {
          ...total.purchase[kind],
          [field]: value,
        },
      },
    });
  };

  const updateTotalCalc = (
    row: 'row1' | 'row2',
    field: 'penaltyTax' | 'deductionTax' | 'payableTax' | 'note',
    value: number | string
  ) => {
    updater('totalStats', {
      ...total,
      calcResult: {
        ...total.calcResult,
        [row]: {
          ...total.calcResult[row],
          [field]: value,
        },
      },
    });
  };

  const renderBusinessPlaceRows = (
    place: Form28Data['businessPlaces'][number],
    absIndex: number
  ) => {
    const serial = String(absIndex).padStart(4, '0');
    const isHeadOffice = absIndex === 0;
    return (
      <>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: isHeadOffice ? '56pt' : '40pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={4}
          >
            <p
              style={{
                paddingTop: isHeadOffice ? '3pt' : '11pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            {isHeadOffice ? (
              <p
                className="s4"
                style={{
                  paddingLeft: '0pt',
                  paddingRight: '0pt',
                  textIndent: '0pt',
                  lineHeight: '130%',
                  textAlign: 'center',
                }}
              >
                본점
              </p>
            ) : null}
            <p
              className="s4"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              {serial}
            </p>
          </td>
          <td
            style={{
              width: '59pt',
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
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '30pt',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
                fontSize: '9pt',
              }}
              value={place.bizName}
              onChange={e =>
                updatePlaceField(absIndex, 'bizName', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '80pt',
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
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '35pt',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
              value={place.address}
              onChange={e =>
                updatePlaceField(absIndex, 'address', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '45pt',
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
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '100pt',
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
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              세금계산서 발급분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.taxable.invoice.taxBase}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'taxable',
                  'invoice',
                  'taxBase',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '71pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.taxable.invoice.taxAmount}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'taxable',
                  'invoice',
                  'taxAmount',
                  value
                )
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
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '78pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={place.purchase.taxable.taxBase}
              onChange={value =>
                updatePlacePurchase(absIndex, 'taxable', 'taxBase', value)
              }
            />
          </td>
          <td
            style={{
              width: '67pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={place.purchase.taxable.taxAmount}
              onChange={value =>
                updatePlacePurchase(absIndex, 'taxable', 'taxAmount', value)
              }
            />
          </td>
          <td
            style={{
              width: '41pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={place.calcResult.row1.penaltyTax}
              onChange={value =>
                updatePlaceCalc(absIndex, 'row1', 'penaltyTax', value)
              }
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={place.calcResult.row1.deductionTax}
              onChange={value =>
                updatePlaceCalc(absIndex, 'row1', 'deductionTax', value)
              }
            />
          </td>
          <td
            style={{
              width: '59pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={place.calcResult.row1.payableTax}
              onChange={value =>
                updatePlaceCalc(absIndex, 'row1', 'payableTax', value)
              }
            />
          </td>
          <td
            style={{
              width: '36pt',
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
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              type="text"
              value={place.calcResult.row1.note ?? ''}
              onChange={e =>
                updatePlaceCalc(absIndex, 'row1', 'note', e.target.value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '90pt',
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
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              기 타 분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.taxable.other.taxBase}
              onChange={value =>
                updatePlaceSales(absIndex, 'taxable', 'other', 'taxBase', value)
              }
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.taxable.other.taxAmount}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'taxable',
                  'other',
                  'taxAmount',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
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
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '100pt',
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
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              세금계산서 발급분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.zeroRate.invoice.taxBase}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'zeroRate',
                  'invoice',
                  'taxBase',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.zeroRate.invoice.taxAmount}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'zeroRate',
                  'invoice',
                  'taxAmount',
                  value
                )
              }
            />
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
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              의제 등
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={place.purchase.deemedEtc.taxBase}
              onChange={value =>
                updatePlacePurchase(absIndex, 'deemedEtc', 'taxBase', value)
              }
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={place.purchase.deemedEtc.taxAmount}
              onChange={value =>
                updatePlacePurchase(absIndex, 'deemedEtc', 'taxAmount', value)
              }
            />
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
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={place.calcResult.row2.penaltyTax}
              onChange={value =>
                updatePlaceCalc(absIndex, 'row2', 'penaltyTax', value)
              }
            />
          </td>
          <td
            style={{
              width: '44pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={place.calcResult.row2.deductionTax}
              onChange={value =>
                updatePlaceCalc(absIndex, 'row2', 'deductionTax', value)
              }
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
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={place.calcResult.row2.payableTax}
              onChange={value =>
                updatePlaceCalc(absIndex, 'row2', 'payableTax', value)
              }
            />
          </td>
          <td
            style={{
              width: '32pt',
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
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              type="text"
              value={place.calcResult.row2.note ?? ''}
              onChange={e =>
                updatePlaceCalc(absIndex, 'row2', 'note', e.target.value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '90pt',
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
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              기 타 분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.zeroRate.other.taxBase}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'zeroRate',
                  'other',
                  'taxBase',
                  value
                )
              }
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={place.sales.zeroRate.other.taxAmount}
              onChange={value =>
                updatePlaceSales(
                  absIndex,
                  'zeroRate',
                  'other',
                  'taxAmount',
                  value
                )
              }
            />
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className="form28">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '3pt',
              paddingLeft: '18pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제28호서식]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
        사업자 단위 과세의 사업장별 부가가치세 과세표준 및 납부세액
        <span className="s3">(환급세액)</span>
        신고명세서
      </p>
      <p
        style={{
          paddingTop: '8pt',
          paddingBottom: '2pt',
          paddingLeft: '7pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        신고기간 :
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
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
          maxLength={4}
          value={reportingYear}
          onChange={e => updater('reportingYear', digitsOnly(e.target.value))}
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
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={reportingTerm}
          onChange={e => updater('reportingTerm', digitsOnly(e.target.value))}
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
            fontSize: '10pt',
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
            fontSize: '10pt',
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
            fontSize: '10pt',
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
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={periodEndDay}
          onChange={e => updater('periodEndDay', digitsOnly(e.target.value))}
        />
        일)
        <span style={{ paddingLeft: '40pt' }}>사업자 단위 과세 적용사업장</span>
        <span style={{ paddingLeft: '20pt' }}>사업자등록번호</span> :
        <input
          className="form-input form-input-text"
          style={{
            width: '150pt',
            height: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 2pt',
            fontSize: '10pt',
            fontFamily: 'Arial',
          }}
          type="text"
          value={mainBizNumber}
          onChange={e => updater('mainBizNumber', e.target.value)}
        />
      </p>
      <hr
        style={{
          width: '882pt',
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
          width: '882pt',
          marginLeft: 'auto',
          marginRight: 'auto',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <colgroup>
          <col style={{ width: '56pt' }}></col>
          <col style={{ width: '66pt' }}></col>
          <col style={{ width: '89pt' }}></col>
          <col style={{ width: '45pt' }}></col>
          <col style={{ width: '100pt' }}></col>
          <col style={{ width: '80pt' }}></col>
          <col style={{ width: '71pt' }}></col>
          <col style={{ width: '45pt' }}></col>
          <col style={{ width: '78pt' }}></col>
          <col style={{ width: '67pt' }}></col>
          <col style={{ width: '41pt' }}></col>
          <col style={{ width: '49pt' }}></col>
          <col style={{ width: '59pt' }}></col>
          <col style={{ width: '36pt' }}></col>
        </colgroup>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '139pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              사업장(본점 및 주사무소 포함)
            </p>
          </td>
          <td
            style={{
              width: '266pt',
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
              style={{
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              매 출 세 액
            </p>
          </td>
          <td
            style={{
              width: '101pt',
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
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              매 입 세 액
            </p>
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
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '12pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              가산세
            </p>
          </td>
          <td
            style={{
              width: '44pt',
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
              className="s4"
              style={{
                paddingTop: '12pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              공제세액
            </p>
          </td>
          <td
            style={{
              width: '53pt',
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
              className="s4"
              style={{
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              납부세액
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              (환급세액)
            </p>
          </td>
          <td
            style={{
              width: '32pt',
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
            <p
              className="s4"
              style={{
                paddingTop: '12pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              비 고
            </p>
          </td>
        </tr>
        <tr style={{ height: '26pt' }}>
          <td
            style={{
              width: '50pt',
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
              style={{
                paddingTop: '3pt',
                paddingLeft: '2pt',
                paddingRight: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              사업장
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '2pt',
                paddingRight: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              일련번호
            </p>
          </td>
          <td
            style={{
              width: '59pt',
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
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              상 호
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              소 재 지
            </p>
          </td>
          <td
            style={{
              width: '130pt',
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
            colSpan={2}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              구 분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
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
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              과세표준
            </p>
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
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
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
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
              style={{
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              과세표준
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
              style={{
                paddingTop: '7pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        {places.map((place, localIndex) =>
          renderBusinessPlaceRows(place, startIndex + localIndex)
        )}
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '139pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={3}
            rowSpan={4}
          >
            <p
              style={{
                paddingTop: '11pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s4"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              합 계
            </p>
          </td>
          <td
            style={{
              width: '45pt',
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
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '100pt',
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
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              세금계산서 발급분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.taxable.invoice.taxBase}
              onChange={value =>
                updateTotalSales('taxable', 'invoice', 'taxBase', value)
              }
            />
          </td>
          <td
            style={{
              width: '71pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.taxable.invoice.taxAmount}
              onChange={value =>
                updateTotalSales('taxable', 'invoice', 'taxAmount', value)
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
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                paddingTop: '9pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '78pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={total.purchase.taxable.taxBase}
              onChange={value =>
                updateTotalPurchase('taxable', 'taxBase', value)
              }
            />
          </td>
          <td
            style={{
              width: '67pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={total.purchase.taxable.taxAmount}
              onChange={value =>
                updateTotalPurchase('taxable', 'taxAmount', value)
              }
            />
          </td>
          <td
            style={{
              width: '41pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={total.calcResult.row1.penaltyTax}
              onChange={value => updateTotalCalc('row1', 'penaltyTax', value)}
            />
          </td>
          <td
            style={{
              width: '49pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={total.calcResult.row1.deductionTax}
              onChange={value => updateTotalCalc('row1', 'deductionTax', value)}
            />
          </td>
          <td
            style={{
              width: '59pt',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={total.calcResult.row1.payableTax}
              onChange={value => updateTotalCalc('row1', 'payableTax', value)}
            />
          </td>
          <td
            style={{
              width: '36pt',
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
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              type="text"
              value={total.calcResult.row1.note ?? ''}
              onChange={e => updateTotalCalc('row1', 'note', e.target.value)}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '90pt',
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
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              기 타 분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.taxable.other.taxBase}
              onChange={value =>
                updateTotalSales('taxable', 'other', 'taxBase', value)
              }
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.taxable.other.taxAmount}
              onChange={value =>
                updateTotalSales('taxable', 'other', 'taxAmount', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '50pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
                paddingTop: '8pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '100pt',
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
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              세금계산서 발급분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.zeroRate.invoice.taxBase}
              onChange={value =>
                updateTotalSales('zeroRate', 'invoice', 'taxBase', value)
              }
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.zeroRate.invoice.taxAmount}
              onChange={value =>
                updateTotalSales('zeroRate', 'invoice', 'taxAmount', value)
              }
            />
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
                paddingTop: '8pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              의제 등
            </p>
          </td>
          <td
            style={{
              width: '157pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={total.purchase.deemedEtc.taxBase}
              onChange={value =>
                updateTotalPurchase('deemedEtc', 'taxBase', value)
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                textAlign: 'right',
                fontFamily: 'Arial',
              }}
              value={total.purchase.deemedEtc.taxAmount}
              onChange={value =>
                updateTotalPurchase('deemedEtc', 'taxAmount', value)
              }
            />
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
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={total.calcResult.row2.penaltyTax}
              onChange={value => updateTotalCalc('row2', 'penaltyTax', value)}
            />
          </td>
          <td
            style={{
              width: '44pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={total.calcResult.row2.deductionTax}
              onChange={value => updateTotalCalc('row2', 'deductionTax', value)}
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
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              value={total.calcResult.row2.payableTax}
              onChange={value => updateTotalCalc('row2', 'payableTax', value)}
            />
          </td>
          <td
            style={{
              width: '32pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                fontFamily: 'Arial',
              }}
              type="text"
              value={total.calcResult.row2.note ?? ''}
              onChange={e => updateTotalCalc('row2', 'note', e.target.value)}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '151pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'center',
              }}
            >
              기 타 분
            </p>
          </td>
          <td
            style={{
              width: '72pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.zeroRate.other.taxBase}
              onChange={value =>
                updateTotalSales('zeroRate', 'other', 'taxBase', value)
              }
            />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
          >
            <NumericInput
              style={{
                width: 'calc(100% - 2pt)',
                height: '15pt',
                fontFamily: 'Arial',
              }}
              value={total.sales.zeroRate.other.taxAmount}
              onChange={value =>
                updateTotalSales('zeroRate', 'other', 'taxAmount', value)
              }
            />
          </td>
        </tr>
      </table>
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
        id="addPageBtn"
        onClick={onAddPage}
      >
        페이지추가
      </button>
    </div>
  );
}
