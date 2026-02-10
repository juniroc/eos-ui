'use client';
import './form47_1.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import {Form47Data, SalesItem, Form47InputData} from '@/components/taxDocument/template/Form47/type';
import InputField from '@/components/taxDocument/template/common/InputField';
const FORM_47_1_SALES_ITEM_MAX_LENGTH = 13;

type Props = FormPageProps<Form47Data> & { inputType?: Form47InputData };

export default function Form47_1({
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

  const startIndex = pageIndex * FORM_47_1_SALES_ITEM_MAX_LENGTH;
  const mappedSalesItems = Array.from(
    { length: FORM_47_1_SALES_ITEM_MAX_LENGTH },
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
    <div className="form47">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제47호서식(1)]
            <span className="s1">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p
        className="s2"
        style={{
          paddingLeft: '10pt',
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, sans-serif',
        }}
      >
        동물진료용역매출대장
        <span className="s3" style={{ fontFamily: 'HY견고딕, sans-serif' }}>
          (갑)
        </span>
      </p>
      <h1
        style={{
          paddingTop: '5pt',
          paddingBottom: '2pt',
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
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.537pt',
          width: '882pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '220pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderLeftStyle: 'none',
              borderRightStyle: 'none',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '8pt',
                textIndent: '0pt',
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            >
              ① 상호(법인명)
            </p>
          </td>
          <td
            style={{
              width: '221pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderLeftStyle: 'none',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <Input
              style={{ width: '100%', height: '19pt', padding: '1.5pt' }}
              value={submitterInfo.companyName}
              onChange={value => submitterInfoUpdater('companyName', value)}
            inputType={inputType?.submitterInfo?.companyName}
            />
          </td>
          <td
            style={{
              width: '220pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderRightStyle: 'none',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '8pt',
                textIndent: '0pt',
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            >
              ② 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '221pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#4B4B4B',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              borderLeftStyle: 'none',
              borderRightStyle: 'none',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <Input
              style={{ width: '100%', height: '19pt', padding: '1.5pt' }}
              value={submitterInfo.bizRegNumber}
              onChange={value => submitterInfoUpdater('bizRegNumber', value)}
            inputType={inputType?.submitterInfo?.bizRegNumber}
            />
          </td>
        </tr>
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '220pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderLeftStyle: 'none',
              borderRightStyle: 'none',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '8pt',
                textIndent: '0pt',
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            >
              ③ 성명(대표자)
            </p>
          </td>
          <td
            style={{
              width: '221pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderLeftStyle: 'none',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <Input
              style={{ width: '100%', height: '19pt', padding: '1.5pt' }}
              value={submitterInfo.representativeName}
              onChange={value =>
                submitterInfoUpdater('representativeName', value)
              }
            inputType={inputType?.submitterInfo?.representativeName}
            />
          </td>
          <td
            style={{
              width: '220pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderRightStyle: 'none',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '8pt',
                textIndent: '0pt',
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            >
              ④ 거래기간
            </p>
          </td>
          <td
            style={{
              width: '221pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderLeftStyle: 'none',
              borderRightStyle: 'none',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <Input
              style={{ width: '100%', height: '19pt', padding: '1.5pt' }}
              value={submitterInfo.transactionPeriod}
              onChange={value =>
                submitterInfoUpdater('transactionPeriod', value)
              }
            inputType={inputType?.submitterInfo?.transactionPeriod}
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
          marginLeft: '5.537pt',
          width: '882pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '20pt' }}>
          <td
            style={{
              width: '34pt',
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
              width: '201pt',
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
              width: '51pt',
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
              width: '59pt',
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
              width: '84pt',
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
                  width: '34pt',
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
                  width: '59pt',
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
                  width: '84pt',
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
                  value={item.recipientContact}
                  onChange={value => salesItemUpdater(absIndex, 'recipientContact', value)}
                inputType={inputType?.salesItems?.[absIndex]?.recipientContact}
                />
              </td>
              <td
                style={{
                  width: '51pt',
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
        (을)표추가
      </button>
    </div>
  );
}
