'use client';
import './form47_2.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import {Form47Data, SalesItem, Form47InputData} from '@/components/taxDocument/template/Form47/type';
import InputField from '@/components/taxDocument/template/common/InputField';
const FORM_47_1_SALES_ITEM_MAX_LENGTH = 13;
const FORM_47_2_SALES_ITEM_MAX_LENGTH = 13;

type Props = FormPageProps<Form47Data> & { inputType?: Form47InputData };

export default function Form47_2({
  pageIndex,
  updater,
  inputType,
  onAddPage,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterInfo,
  salesItems,
}: Props) {
  const baseSalesItem: SalesItem = {
    supplyDate: '',
    exemptionReason: '',
    animalType: '',
    diagnosisDetails: '',
    supplyPrice: 0,
    recipientName: '',
    recipientResidentNumber: '',
    recipientContact: '',
    remarks: '',
  };

  const startIndex =
    FORM_47_1_SALES_ITEM_MAX_LENGTH +
    pageIndex * FORM_47_2_SALES_ITEM_MAX_LENGTH;
  const mappedSalesItems = Array.from(
    { length: FORM_47_2_SALES_ITEM_MAX_LENGTH },
    (_, i) => salesItems[startIndex + i] ?? baseSalesItem
  );

  const submitterInfoUpdater = <
    K extends keyof Form47Data['submitterInfo'],
  >(
    field: K,
    value: Form47Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const salesItemUpdater = <K extends keyof SalesItem>(
    absIndex: number,
    field: K,
    value: SalesItem[K]
  ) => {
    const items = [...salesItems];
    const target = items[absIndex] ?? baseSalesItem;

    items[absIndex] = {
      ...target,
      [field]: value,
    };

    updater('salesItems', items);
  };
  return (
    <div className="form47_2">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '3pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제47호서식(2)]
          </p>
        </li>
      </ul>
      <p
        className="s1"
        style={{
          paddingTop: '6pt',
          paddingLeft: '11pt',
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        동물진료용역매출대장
        <span className="s2" style={{ fontFamily: 'HY견고딕, sans-serif' }}>
          (을)
        </span>
      </p>
      <h1
        style={{
          paddingTop: '5pt',
          paddingBottom: '1pt',
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <Input
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          maxLength={4}
          value={attributionYear}
          onChange={value =>
            updater('attributionYear', value.replace(/[^0-9]/g, ''))
          }
        inputType={inputType?.attributionYear}
        />
        년<span style={{ paddingLeft: '15pt' }}></span>
        제
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          maxLength={2}
          value={attributionTerm}
          onChange={value =>
            updater('attributionTerm', value.replace(/[^0-9]/g, ''))
          }
        inputType={inputType?.attributionTerm}
        />
        기 (
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          maxLength={2}
          value={taxPeriodStartMonth}
          onChange={value =>
            updater('taxPeriodStartMonth', value.replace(/[^0-9]/g, ''))
          }
        inputType={inputType?.taxPeriodStartMonth}
        />
        월
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          maxLength={2}
          value={taxPeriodStartDay}
          onChange={value =>
            updater('taxPeriodStartDay', value.replace(/[^0-9]/g, ''))
          }
        inputType={inputType?.taxPeriodStartDay}
        />
        일 ~
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          maxLength={2}
          value={taxPeriodEndMonth}
          onChange={value =>
            updater('taxPeriodEndMonth', value.replace(/[^0-9]/g, ''))
          }
        inputType={inputType?.taxPeriodEndMonth}
        />
        월
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '10pt',
          }}
          maxLength={2}
          value={taxPeriodEndDay}
          onChange={value =>
            updater('taxPeriodEndDay', value.replace(/[^0-9]/g, ''))
          }
        inputType={inputType?.taxPeriodEndDay}
        />
        일)
      </h1>
      <hr
        style={{
          width: '882pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
      <p style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '431pt',
          marginRight: '10pt',
          width: '441pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
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
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              textAlign: 'center',
              verticalAlign: 'middle',
              display: 'table-cell',
              position: 'relative',
              padding: '1pt',
            }}
          >
            <p
              className="s3"
              style={{
                padding: '0',
                paddingBottom: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                margin: '0',
                lineHeight: '20pt',
                display: 'inline-block',
              }}
            >
              사업자등록번호
            </p>
            <Input
              style={{
                width: 'calc(100% - 152pt)',
                height: '18pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                position: 'absolute',
                right: '1pt',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              value={submitterInfo.bizRegNumber}
              onChange={value => submitterInfoUpdater('bizRegNumber', value)}
            inputType={inputType?.submitterInfo?.bizRegNumber}
            />
          </td>
          <td
            style={{
              width: '311pt',
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
            <Input
              style={{
                width: 'calc(100% - 2pt)',
                height: '18pt',
                padding: '1.5pt',
              }}
              value={submitterInfo.companyName}
              onChange={value => submitterInfoUpdater('companyName', value)}
            inputType={inputType?.submitterInfo?.companyName}
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.297pt',
          marginTop: '15pt',
          width: '882pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '37pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑤ 일련
            </p>
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              번호
            </p>
          </td>
          <td
            style={{
              width: '53pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑥ 공급
            </p>
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              일자
            </p>
          </td>
          <td
            style={{
              width: '54pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑦ 면세
            </p>
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              사유
            </p>
          </td>
          <td
            style={{
              width: '49pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '13pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑧ 동물의
            </p>
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              종류
            </p>
          </td>
          <td
            style={{
              width: '217pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑨ 진료내용
            </p>
          </td>
          <td
            style={{
              width: '67pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑩ 공급가액
            </p>
          </td>
          <td
            style={{
              width: '192pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              공급받은 자
            </p>
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑭ 비고
            </p>
          </td>
        </tr>
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '58pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑪ 성명
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑫ 주민등록번호
            </p>
          </td>
          <td
            style={{
              width: '54pt',
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
              padding: '0',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑬ 연락처
            </p>
          </td>
        </tr>
        
        {mappedSalesItems.map((item, index) => {
          const absIndex = startIndex + index;

          return (
            <tr style={{ height: '20pt' }} key={`sales-${absIndex}`}>
              <td
                style={{
                  width: '37pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1pt',
                  borderTopColor: '#787878',
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
                <InputField
                  className="form-input form-input-text"
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                    textAlign: 'center',
                  }}
                  type="text"
                  value={String(absIndex + 1)}
                  readOnly
                />
              </td>
              <td
                style={{
                  width: '53pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.supplyDate}
                  onChange={value => salesItemUpdater(absIndex, 'supplyDate', value)}
                inputType={inputType?.salesItems?.[absIndex]?.supplyDate}
                />
              </td>
              <td
                style={{
                  width: '54pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.exemptionReason}
                  onChange={value => salesItemUpdater(absIndex, 'exemptionReason', value)}
                inputType={inputType?.salesItems?.[absIndex]?.exemptionReason}
                />
              </td>
              <td
                style={{
                  width: '49pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.animalType}
                  onChange={value => salesItemUpdater(absIndex, 'animalType', value)}
                inputType={inputType?.salesItems?.[absIndex]?.animalType}
                />
              </td>
              <td
                style={{
                  width: '217pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.diagnosisDetails}
                  onChange={value => salesItemUpdater(absIndex, 'diagnosisDetails', value)}
                inputType={inputType?.salesItems?.[absIndex]?.diagnosisDetails}
                />
              </td>
              <td
                style={{
                  width: '67pt',
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
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.supplyPrice}
                  onChange={value => salesItemUpdater(absIndex, 'supplyPrice', value)}
                inputType={inputType?.salesItems?.[absIndex]?.supplyPrice}
                />
              </td>
              <td
                style={{
                  width: '58pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.recipientName}
                  onChange={value => salesItemUpdater(absIndex, 'recipientName', value)}
                inputType={inputType?.salesItems?.[absIndex]?.recipientName}
                />
              </td>
              <td
                style={{
                  width: '80pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.recipientResidentNumber}
                  onChange={value => salesItemUpdater(absIndex, 'recipientResidentNumber', value)}
                inputType={inputType?.salesItems?.[absIndex]?.recipientResidentNumber}
                />
              </td>
              <td
                style={{
                  width: '54pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.recipientContact}
                  onChange={value => salesItemUpdater(absIndex, 'recipientContact', value)}
                inputType={inputType?.salesItems?.[absIndex]?.recipientContact}
                />
              </td>
              <td
                style={{
                  width: '57pt',
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
                <Input
                  style={{
                    width: '100%',
                    height: 'calc(100% + 2pt)',
                    padding: '1pt',
                  }}
                  value={item.remarks ?? ''}
                  onChange={value => salesItemUpdater(absIndex, 'remarks', value)}
                />
              </td>
            </tr>
          );
        })}
      </table>
      <p style={{ paddingTop: '12pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
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
      <h2
        style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}
      >
        작 성 방 법
      </h2>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        style={{
          paddingTop: '4pt',
          paddingBottom: '4pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        이 서식은 『동물 진료용역 매출대장(갑)』
        <span className="s6">[별지 제47호서식(1)]</span>을 초과하는 매출분이
        있는 경우 작성합니다.
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
        className="print:hidden"
        id="addTableBtn"
      >
        페이지추가
      </button>
    </div>
  );
}
