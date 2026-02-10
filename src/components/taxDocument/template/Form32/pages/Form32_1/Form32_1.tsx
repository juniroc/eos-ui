'use client';
import './form32_1.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import Input from '@/components/taxDocument/template/common/Input';
import {Form32Data, Form32InputData} from '@/components/taxDocument/template/Form32/type';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import { MAX_BUILDING_MANAGEMENT_ITEM_LENGTH } from '@/components/taxDocument/template/Form32/constants';
import InputField from '@/components/taxDocument/template/common/InputField';
type Props = FormPageProps<Form32Data> & { inputType?: Form32InputData };

export default function Form32_1({
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
  buildingManagementTotal,
  buildingManagementItems,
}: Props) {

  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

  const createEmptyItem = (): Form32Data['buildingManagementItems'][number] => ({
    floor: '',
    roomName: '',
    area: 0,
    tenantName: '',
    tenantBizRegNumber: '',
    moveInDate: '',
    moveOutDate: '',
    managementFee: 0,
  });

  const total = buildingManagementTotal ?? {
    totalArea: 0,
    totalManagementFee: 0,
  };

  const startIndex = pageIndex * MAX_BUILDING_MANAGEMENT_ITEM_LENGTH;
  const items = Array.from({ length: MAX_BUILDING_MANAGEMENT_ITEM_LENGTH }, (_, i) => {
    return buildingManagementItems[startIndex + i] ?? createEmptyItem();
  });

  const updateSubmitterInfo = (
    field: keyof Form32Data['submitterInfo'],
    value: string
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const updateItem = (
    absIndex: number,
    updaterFn: (
      current: Form32Data['buildingManagementItems'][number]
    ) => Form32Data['buildingManagementItems'][number]
  ) => {
    const next = [...buildingManagementItems];
    const current = next[absIndex] ?? createEmptyItem();
    next[absIndex] = updaterFn(current);
    updater('buildingManagementItems', next);
  };

  const updateItemField = (
    absIndex: number,
    field: keyof Form32Data['buildingManagementItems'][number],
    value: string | number
  ) => {
    updateItem(absIndex, current => ({
      ...current,
      [field]: value,
    }));
  };

  const updateTotal = (
    field: keyof Form32Data['buildingManagementTotal'],
    value: number
  ) => {
    updater('buildingManagementTotal', {
      ...total,
      [field]: value,
    });
  };

  const renderItemRow = (
    item: Form32Data['buildingManagementItems'][number],
    absIndex: number
  ) => (
    <tr style={{ height: '18pt' }} key={absIndex}>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#939393',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#939393',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#939393',
          padding: '1pt',
          verticalAlign: 'middle',
          textAlign: 'center',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontFamily: 'Arial',
          }}
          value={absIndex + 1}
        />
      </td>
      <td
        style={{
          width: '28pt',
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
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <Input
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={item.floor}
          onChange={value => updateItemField(absIndex, 'floor', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.floor}
        />
      </td>
      <td
        style={{
          width: '64pt',
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
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <Input
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={item.roomName}
          onChange={value => updateItemField(absIndex, 'roomName', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.roomName}
        />
      </td>
      <td
        style={{
          width: '43pt',
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
          value={item.area}
          onChange={value => updateItemField(absIndex, 'area', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.area}
        />
      </td>
      <td
        style={{
          width: '72pt',
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
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <Input
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={item.tenantName}
          onChange={value => updateItemField(absIndex, 'tenantName', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.tenantName}
        />
      </td>
      <td
        style={{
          width: '86pt',
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
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <Input
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          value={item.tenantBizRegNumber}
          onChange={value =>
            updateItemField(absIndex, 'tenantBizRegNumber', value)
          }
          inputType={inputType?.buildingManagementItems?.[absIndex]?.tenantBizRegNumber}
        />
      </td>
      <td
        style={{
          width: '44pt',
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
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <Input
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontSize: '9pt',
          }}
          value={item.moveInDate}
          onChange={value => updateItemField(absIndex, 'moveInDate', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.moveInDate}
        />
      </td>
      <td
        style={{
          width: '47pt',
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
          padding: '1pt',
          verticalAlign: 'middle',
        }}
      >
        <Input
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            fontSize: '9pt',
          }}
          value={item.moveOutDate}
          onChange={value => updateItemField(absIndex, 'moveOutDate', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.moveOutDate}
        />
      </td>
      <td
        style={{
          width: '67pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#939393',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#939393',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#939393',
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
          value={item.managementFee}
          onChange={value => updateItemField(absIndex, 'managementFee', value)}
          inputType={inputType?.buildingManagementItems?.[absIndex]?.managementFee}
        />
      </td>
    </tr>
  );
  return (
    <div className="form32">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '3pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제32호서식]
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
        건물관리명세서
      </p>
      <h1 style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'center' }}>
        <Input
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          maxLength={4}
          value={attributionYear}
          onChange={value => updater('attributionYear', digitsOnly(value))}
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
            fontFamily: 'Arial',
          }}
          maxLength={2}
          value={attributionTerm}
          onChange={value => updater('attributionTerm', digitsOnly(value))}
          inputType={inputType?.attributionTerm}
        />
        기(
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          maxLength={2}
          value={taxPeriodStartMonth}
          onChange={value =>
            updater('taxPeriodStartMonth', digitsOnly(value))
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
            fontFamily: 'Arial',
          }}
          maxLength={2}
          value={taxPeriodStartDay}
          onChange={value =>
            updater('taxPeriodStartDay', digitsOnly(value))
          }
          inputType={inputType?.taxPeriodStartDay}
        />
        일~
        <Input
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          maxLength={2}
          value={taxPeriodEndMonth}
          onChange={value =>
            updater('taxPeriodEndMonth', digitsOnly(value))
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
            fontFamily: 'Arial',
          }}
          maxLength={2}
          value={taxPeriodEndDay}
          onChange={value =>
            updater('taxPeriodEndDay', digitsOnly(value))
          }
          inputType={inputType?.taxPeriodEndDay}
        />
        일)
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
        <tr style={{ height: '26pt' }}>
          <td
            style={{
              width: '48pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '8pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              제출자
            </p>
          </td>
          <td
            style={{
              width: '218pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
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
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                display: 'inline-block',
                margin: '0',
                marginRight: '5pt',
                width: '90pt',
              }}
            >
              ① 부동산 소재지
            </p>
            <Input
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
                fontFamily: 'Arial',
              }}
              value={submitterInfo.propertyLocation}
              onChange={value =>
                updateSubmitterInfo('propertyLocation', value)
              }
          inputType={inputType?.submitterInfo?.propertyLocation}
            />
          </td>
          <td
            style={{
              width: '214pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                display: 'inline-block',
                margin: '0',
                marginRight: '5pt',
                width: '90pt',
              }}
            >
              ② 건물명
            </p>
            <Input
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
                fontFamily: 'Arial',
              }}
              value={submitterInfo.buildingName}
              onChange={value => updateSubmitterInfo('buildingName', value)}
          inputType={inputType?.submitterInfo?.buildingName}
            />
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '218pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                display: 'inline-block',
                margin: '0',
                marginRight: '5pt',
                width: '90pt',
              }}
            >
              ③ 상호
              <span className="s5">(관리업자)</span>
            </p>
            <Input
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
                fontFamily: 'Arial',
              }}
              value={submitterInfo.managerCompanyName}
              onChange={value =>
                updateSubmitterInfo('managerCompanyName', value)
              }
          inputType={inputType?.submitterInfo?.managerCompanyName}
            />
          </td>
          <td
            style={{
              width: '214pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                display: 'inline-block',
                margin: '0',
                marginRight: '5pt',
                width: '90pt',
              }}
            >
              ④ 사업자등록번호
            </p>
            <Input
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
                fontFamily: 'Arial',
              }}
              value={submitterInfo.managerBizRegNumber}
              onChange={value =>
                updateSubmitterInfo('managerBizRegNumber', value)
              }
          inputType={inputType?.submitterInfo?.managerBizRegNumber}
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
          margin: '0 auto',
        }}
      />
      <p
        className="s6"
        style={{ paddingTop: '5pt', textIndent: '0pt', textAlign: 'center' }}
      >
        건물관리명세
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
        <tr style={{ height: '46pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '6pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑤
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              일련
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              번호
            </p>
          </td>
          <td
            style={{
              width: '28pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '6pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑥
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              층별
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑦
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              호실명ㆍ번호
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑧
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              면 적
            </p>
            <p
              className="s8"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              (㎡)
            </p>
          </td>
          <td
            style={{
              width: '72pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑨
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              상 호
            </p>
            <p
              className="s8"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              (성명)
            </p>
          </td>
          <td
            style={{
              width: '86pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑩
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              사업자등록번호
            </p>
            <p
              className="s8"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              (주민등록번호)
            </p>
          </td>
          <td
            style={{
              width: '44pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑪
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              입주일
            </p>
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑫
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              퇴거일
            </p>
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '5pt',
                textIndent: '0pt',
                lineHeight: '12pt',
                textAlign: 'center',
              }}
            >
              ⑬
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              관리비
            </p>
            <p
              className="s8"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              (원)
            </p>
          </td>
        </tr>
        <tr style={{ height: '23pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '4pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '28pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={total.totalArea}
              onChange={value => updateTotal('totalArea', value)}
          inputType={inputType?.buildingManagementTotal?.totalArea}
            />
          </td>
          <td
            style={{
              width: '72pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '86pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '44pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
            <InputField className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
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
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontFamily: 'Arial',
              }}
              value={total.totalManagementFee}
              onChange={value => updateTotal('totalManagementFee', value)}
          inputType={inputType?.buildingManagementTotal?.totalManagementFee}
            />
          </td>
        </tr>
        {items.map((item, localIndex) =>
          renderItemRow(item, startIndex + localIndex)
        )}
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
        id="addPageBtn"
        onClick={onAddPage}
      >
        페이지추가
      </button>
    </div>
  );
}