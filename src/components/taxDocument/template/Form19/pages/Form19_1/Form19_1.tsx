'use client';
import './form19_1.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  badDebtDeductionItem,
  Form19Data,
  Form19InputData,
  repaymentTaxItem,
} from '@/components/taxDocument/template/Form19/type';
import {
  FORM19_1_BAD_DEBT_ITEM_LENGTH,
  FORM19_1_REPAYMENT_ITEM_LENGTH,
} from '@/components/taxDocument/template/Form19/constants';
import Stamp from '@/components/taxDocument/template/common/Stamp';

type Props = Form19Data &
  UpdaterProps<Form19Data> & {
    onAddBadDebtPage: () => void;
    onAddRepaymentPage: () => void;
    inputType?: Form19InputData;
  };

export default function Form19_1({
  updater,
  inputType,
  onAddBadDebtPage,
  onAddRepaymentPage,
  companyName,
  bizNumber,
  repName,
  bizAddress,
  badDebtDeductionItems,
  repaymentTaxItems,
  writeYear,
  writeMonth,
  writeDay,
  submitterName,
}: Props) {
  const mappedBadDebtDeductionItems: (badDebtDeductionItem | null)[] =
    Array.from(
      { length: FORM19_1_BAD_DEBT_ITEM_LENGTH },
      (_, i) => badDebtDeductionItems[i] ?? null
    );

  const mappedRepaymentTaxItems: (repaymentTaxItem | null)[] = Array.from(
    { length: FORM19_1_REPAYMENT_ITEM_LENGTH },
    (_, i) => repaymentTaxItems[i] ?? null
  );

  const badDebtItemUpdater = <
    K extends keyof Props['badDebtDeductionItems'][number],
  >(
    index: number,
    field: K,
    value: Props['badDebtDeductionItems'][number][K]
  ) => {
    const items = [...badDebtDeductionItems];
    const target = items[index] ?? {};

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('badDebtDeductionItems', items);
  };

  const repaymentItemUpdater = <
    K extends keyof Props['repaymentTaxItems'][number],
  >(
    index: number,
    field: K,
    value: Props['repaymentTaxItems'][number][K]
  ) => {
    const items = [...repaymentTaxItems];
    const target = items[index] ?? {};

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('repaymentTaxItems', items);
  };
  return (
    <div className="form19">
      <p
        style={{
          paddingTop: '4pt',
          paddingLeft: '4pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        <span className="s1">■부가가치세법 시행규칙 [별지 제19호서식(1)]</span>
        <span className="s2">&lt;개정 2022. 3. 18.&gt;</span>
      </p>
      <p style={{ paddingTop: '10pt', textIndent: '0pt', textAlign: 'center' }}>
        <span className="s3">대손세액 공제(변제)신고서(갑)</span>
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
          marginTop: '10pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '208pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'left',
              backgroundColor: '#c0c0c0',
            }}
          >
            <p className="s5" style={{ textIndent: '0pt', textAlign: 'left' }}>
              접수번호
            </p>
          </td>
          <td
            style={{
              width: '208pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'left',
              backgroundColor: '#c0c0c0',
            }}
          >
            <p className="s5" style={{ textIndent: '0pt', textAlign: 'left' }}>
              접수일
            </p>
          </td>
          <td
            style={{
              width: '208pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'left',
              backgroundColor: '#c0c0c0',
            }}
          >
            <p className="s5" style={{ textIndent: '0pt', textAlign: 'left' }}>
              처리기간
              <span style={{ marginLeft: '40pt' }}>즉시</span>
            </p>
          </td>
        </tr>
      </table>
      <h1
        style={{
          paddingTop: '8pt',
          paddingLeft: '4pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        1. 신고인 인적사항
      </h1>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
          marginTop: '4pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '35pt' }}>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ① 상호(법인명)
            </p>
          </td>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={companyName}
              onChange={value => updater('companyName', value)}
              inputType={inputType?.companyName}
            />
          </td>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ② 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={bizNumber}
              onChange={value => updater('bizNumber', value)}
              inputType={inputType?.bizNumber}
            />
          </td>
        </tr>
        <tr style={{ height: '35pt' }}>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ③ 성명
            </p>
          </td>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={repName}
              onChange={value => updater('repName', value)}
              inputType={inputType?.repName}
            />
          </td>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ④ 사업장 소재지
            </p>
          </td>
          <td
            style={{
              width: '156pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <textarea
              className="form-input form-input-address"
              style={{
                width: 'calc(100% - 2pt)',
                height: '30pt',
                fontSize: '9pt',
              }}
              rows={2}
              value={bizAddress}
              onChange={e => updater('bizAddress', e.target.value)}
            ></textarea>
          </td>
        </tr>
      </table>
      <h1
        style={{
          paddingTop: '8pt',
          paddingLeft: '4pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        2. 대손세액 계산신고 내용
      </h1>
      <table
        className="third-table"
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
          marginTop: '4pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '34pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑤ 당초 공급
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              연월일
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
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑥ 대손확정
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              연월일
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑦ 대손
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              금액
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
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑧ 공제율
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              (10/110)
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
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑨ 대손
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              세액
            </p>
          </td>
          <td
            style={{
              width: '184pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            colSpan={3}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              공급받는 자
            </p>
          </td>
          <td
            style={{
              width: '100pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑬ 대손
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              사유
            </p>
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '60pt',
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
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑩ 상호
            </p>
          </td>
          <td
            style={{
              width: '60pt',
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
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑪ 성명
            </p>
          </td>
          <td
            style={{
              width: '64pt',
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
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑫ 사업자등록번호
            </p>
          </td>
        </tr>
        {mappedBadDebtDeductionItems.map((item, itemIndex) => (
          <tr style={{ height: '18pt' }} key={`badDebt-${itemIndex}`}>
            <td
              style={{
                width: '70pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderLeftStyle: 'none',
                borderLeftWidth: '0pt',
                borderLeftColor: 'transparent',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#7E7E7E',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.originalSupplyDate ?? ''}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'originalSupplyDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.badDebtConfirmDate ?? ''}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'badDebtConfirmDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '80pt',
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
                padding: '1pt',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.badDebtAmount}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'badDebtAmount', value)
                }
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                10/110
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.badDebtTaxAmount}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'badDebtTaxAmount', value)
                }
              />
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.recipientCompanyName ?? ''}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'recipientCompanyName', value)
                }
              />
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.recipientRepName ?? ''}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'recipientRepName', value)
                }
              />
            </td>
            <td
              style={{
                width: '64pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.recipientBizNumber ?? ''}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'recipientBizNumber', value)
                }
              />
            </td>
            <td
              style={{
                width: '100pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#7E7E7E',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#7E7E7E',
                borderRightStyle: 'none',
                borderRightWidth: '0pt',
                borderRightColor: 'transparent',
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.badDebtReason ?? ''}
                onChange={value =>
                  badDebtItemUpdater(itemIndex, 'badDebtReason', value)
                }
              />
            </td>
          </tr>
        ))}
      </table>
      <div
        style={{
          position: 'relative',
          width: '624pt',
          marginTop: '2pt',
          height: '20pt',
        }}
      >
        <button
          style={{
            position: 'absolute',
            right: '10pt',
            bottom: '0pt',
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
          className="print:hidden"
          id="addThirdTableBtn"
          onClick={onAddBadDebtPage}
        >
          (을)표추가
        </button>
      </div>
      <h1
        style={{
          paddingTop: '8pt',
          paddingLeft: '4pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        3. 변제세액 계산신고 내용
      </h1>
      <table
        className="fourth-table"
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
          marginTop: '4pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '34pt' }}>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑭ 당초 대손
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              확정연월일
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
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑮ 변제
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              연월일
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑯ 변제
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              금액
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
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑰ 공제율
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              (10/110)
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
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑱ 변제
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              세액
            </p>
          </td>
          <td
            style={{
              width: '184pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            colSpan={3}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              공급자
            </p>
          </td>
          <td
            style={{
              width: '100pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ㉒ 변제
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              사유
            </p>
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '60pt',
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
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑲ 상호
            </p>
          </td>
          <td
            style={{
              width: '60pt',
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
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ⑳ 성명
            </p>
          </td>
          <td
            style={{
              width: '64pt',
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
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              ㉑ 사업자등록번호
            </p>
          </td>
        </tr>
        {mappedRepaymentTaxItems.map((item, itemIndex) => (
          <tr style={{ height: '18pt' }} key={`repayment-${itemIndex}`}>
            <td
              style={{
                width: '70pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderLeftStyle: 'none',
                borderLeftWidth: '0pt',
                borderLeftColor: 'transparent',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#7E7E7E',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#7E7E7E',
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.originalBadDebtConfirmDate ?? ''}
                onChange={value =>
                  repaymentItemUpdater(
                    itemIndex,
                    'originalBadDebtConfirmDate',
                    value
                  )
                }
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.repaymentDate ?? ''}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'repaymentDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '80pt',
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
                padding: '1pt',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.repaymentAmount}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'repaymentAmount', value)
                }
              />
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            >
              <p
                className="s5"
                style={{ textIndent: '0pt', textAlign: 'center' }}
              >
                10/110
              </p>
            </td>
            <td
              style={{
                width: '70pt',
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
                padding: '1pt',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.repaymentTaxAmount}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'repaymentTaxAmount', value)
                }
              />
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.supplierCompanyName ?? ''}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'supplierCompanyName', value)
                }
              />
            </td>
            <td
              style={{
                width: '60pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.supplierRepName ?? ''}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'supplierRepName', value)
                }
              />
            </td>
            <td
              style={{
                width: '64pt',
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
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.supplierBizNumber ?? ''}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'supplierBizNumber', value)
                }
              />
            </td>
            <td
              style={{
                width: '100pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#7E7E7E',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#7E7E7E',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#7E7E7E',
                borderRightStyle: 'none',
                borderRightWidth: '0pt',
                borderRightColor: 'transparent',
                padding: '1pt',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 2pt)',
                  height: 'calc(100% - 1pt)',
                  fontSize: '9pt',
                }}
                value={item?.repaymentReason ?? ''}
                onChange={value =>
                  repaymentItemUpdater(itemIndex, 'repaymentReason', value)
                }
              />
            </td>
          </tr>
        ))}
      </table>
      <div
        style={{
          position: 'relative',
          width: '624pt',
          marginTop: '2pt',
          height: '20pt',
        }}
      >
        <button
          style={{
            position: 'absolute',
            right: '10pt',
            bottom: '0pt',
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
          className="print:hidden"
          id="addFourthTableBtn"
          onClick={onAddRepaymentPage}
        >
          (병)표추가
        </button>
      </div>
      <p
        style={{
          paddingTop: '10pt',
          paddingLeft: '4pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        <span className="s5" style={{ fontSize: '10pt' }}>
          「부가가치세법 시행령」 제87조제4항에 따라 대손세액을
          공제받기(매입세액에 가산하기) 위하여 신고합니다.
        </span>
      </p>
      <p
        style={{
          paddingTop: '10pt',
          paddingRight: '5pt',
          textIndent: '0pt',
          textAlign: 'right',
        }}
      >
        <Input
          style={{
            width: '50pt',
            height: '15pt',
            fontSize: '9pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          value={writeYear}
          onChange={value => updater('writeYear', value.replace(/[^0-9]/g, ''))}
          inputType={inputType?.writeYear}
        />
        <span className="s5" style={{ fontSize: '9pt', fontWeight: 'normal' }}>
          년
        </span>
        <Input
          style={{
            width: '25pt',
            height: '15pt',
            fontSize: '9pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          value={writeMonth}
          onChange={value =>
            updater('writeMonth', value.replace(/[^0-9]/g, ''))
          }
          inputType={inputType?.writeMonth}
        />
        <span className="s5" style={{ fontSize: '9pt', fontWeight: 'normal' }}>
          월
        </span>
        <Input
          style={{
            width: '25pt',
            height: '15pt',
            fontSize: '9pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          value={writeDay}
          onChange={value => updater('writeDay', value.replace(/[^0-9]/g, ''))}
          inputType={inputType?.writeDay}
        />
        <span className="s5" style={{ fontSize: '9pt', fontWeight: 'normal' }}>
          일
        </span>
      </p>
      <p
        style={{
          paddingTop: '10pt',
          paddingRight: '5pt',
          textIndent: '0pt',
          textAlign: 'right',
          position: 'relative',
        }}
      >
        <span className="s5">신고인</span>
        <Input
          style={{
            width: '100pt',
            height: '20pt',
            fontSize: '9pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '20pt',
            marginRight: '20pt',
            textAlign: 'center',
          }}
          value={submitterName}
          onChange={value => updater('submitterName', value)}
          inputType={inputType?.submitterName}
        />
        <Stamp className="s5" style={{ color: '#C0C0C0' }}>
          (서명 또는 인)
        </Stamp>
      </p>
      <p
        style={{
          paddingTop: '10pt',
          paddingLeft: '25pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        <span className="s4" style={{ fontWeight: 'bold', fontSize: '13pt' }}>
          세무서장
        </span>
        <span className="s4" style={{ marginLeft: '30pt' }}>
          귀하
        </span>
      </p>
      <hr
        style={{
          width: '624pt',
          height: '2pt',
          backgroundColor: '#000',
          border: 'none',
          marginTop: '4pt',
          marginBottom: '0pt',
          marginLeft: '0pt',
        }}
      />
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
          marginTop: '10pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '100pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              첨부서류
            </p>
          </td>
          <td
            style={{
              width: '424pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '2pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              1. 대손확정사실을 증명하는 서류 및 관련 세금계산서
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              2. 변제사실을 증명하는 서류
            </p>
          </td>
          <td
            style={{
              width: '100pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '2pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              수수료
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              없음
            </p>
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
          marginTop: '10pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '24pt' }}>
          <td
            style={{
              width: '624pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '4pt',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              작성방법
            </p>
          </td>
        </tr>
        <tr style={{ height: 'auto' }}>
          <td
            style={{
              width: '624pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'none',
              borderLeftWidth: '0pt',
              borderLeftColor: 'transparent',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'none',
              borderRightWidth: '0pt',
              borderRightColor: 'transparent',
              padding: '4pt',
              verticalAlign: 'top',
            }}
          >
            <p
              className="s6"
              style={{
                paddingTop: '2pt',
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑤ ~ ⑬: 재화 또는 용역을 공급한 사업자가 「부가가치세법」
              제45조제1항에 따라 대손세액을 공제받으려는 경우에 작성하며,
            </p>
            <p
              className="s6"
              style={{
                paddingLeft: '18pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑤에는 대손(회수불능)이 제공한 재화 또는 용역의 당초 공급연월일을
              적습니다.
            </p>
            <p
              className="s6"
              style={{
                paddingTop: '4pt',
                paddingLeft: '2pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑭ ~ ㉒: 재화 또는 용역을 공급받은 사업자가 당초 대손이 확정된 날이
              속하는 과세기간에 대손세액을 매입세액에서 차감 후
            </p>
            <p
              className="s6"
              style={{
                paddingLeft: '18pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              대손금액의 전부 또는 일부를 변제한 경우 「부가가치세법」
              제45조제4항에 따라 변제 관련 대손세액을 매입세액에
            </p>
            <p
              className="s6"
              style={{
                paddingLeft: '18pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              가산하려는 경우에 작성하며, ⑭에는 당초 대손확정연월일을 적습니다.
            </p>
            <p
              className="s6"
              style={{
                paddingTop: '4pt',
                paddingLeft: '2pt',
                paddingBottom: '5pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ※ 대손(변제)세액 계산신고 내용이 많은 경우에는 별지 제19호서식(2)
              또는 별지 제19호서식(3)에 이어서 작성합니다.
            </p>
            <hr
              style={{
                width: '624pt',
                height: '1pt',
                backgroundColor: '#000',
                border: 'none',
                marginTop: '0pt',
                marginBottom: '20pt',
                marginLeft: '0pt',
              }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
