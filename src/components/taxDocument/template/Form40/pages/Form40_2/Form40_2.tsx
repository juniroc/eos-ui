'use client';
import './form40_2.css';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import { Form40Data, Form40InputData } from '@/components/taxDocument/template/Form40/type';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import InputField from '@/components/taxDocument/template/common/InputField';
import {
  FORM_40_1_MAX_EXPORT_DETAIL_LIST_MAX_LENGTH,
  FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form40/constants';
type Props = FormPageProps<Form40Data> & { inputType?: Form40InputData };

export default function Form40_2({
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
  exportItems,
}: Props) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

  const createEmptyExportItem = (): Form40Data['exportItems'][number] => ({
    exportDeclarationNumber: '',
    shippingDate: '',
    currencyCode: '',
    exchangeRate: '',
    foreignAmount: 0,
    wonAmount: 0,
  });

  const startIndex =
    FORM_40_1_MAX_EXPORT_DETAIL_LIST_MAX_LENGTH +
    pageIndex * FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH;
  const exportItemsSlice = Array.from(
    { length: FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH },
    (_, i) => exportItems[startIndex + i] ?? createEmptyExportItem()
  );

  const updateSubmitterInfo = (
    field: keyof Form40Data['submitterInfo'],
    value: string
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const updateExportItem = (
    absIndex: number,
    updaterFn: (
      item: Form40Data['exportItems'][number]
    ) => Form40Data['exportItems'][number]
  ) => {
    const next = [...exportItems];
    const current = next[absIndex] ?? createEmptyExportItem();
    next[absIndex] = updaterFn(current);
    updater('exportItems', next);
  };

  const updateExportItemField = (
    absIndex: number,
    field: keyof Form40Data['exportItems'][number],
    value: string | number
  ) => {
    updateExportItem(absIndex, item => ({
      ...item,
      [field]: value,
    }));
  };

  const renderExportItemRow = (
    item: Form40Data['exportItems'][number],
    absIndex: number
  ) => (
    <tr style={{ height: '24pt' }} key={absIndex}>
      <td
        style={{
          width: '35pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#5D5D5D',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          value={absIndex + 1}
        />
      </td>
      <td
        style={{
          width: '130pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#5D5D5D',
        }}
      >
        <InputField
          className="text-input"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={item.exportDeclarationNumber}
          onChange={e =>
            updateExportItemField(
              absIndex,
              'exportDeclarationNumber',
              e.target.value
            )
          }
          inputType={
            inputType?.exportItems?.[absIndex]?.exportDeclarationNumber
          }
        />
      </td>
      <td
        style={{
          width: '64pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#5D5D5D',
        }}
      >
        <InputField
          className="text-input"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          value={item.shippingDate}
          onChange={e =>
            updateExportItemField(absIndex, 'shippingDate', e.target.value)
          }
          inputType={inputType?.exportItems?.[absIndex]?.shippingDate}
        />
      </td>
      <td
        style={{
          width: '52pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#5D5D5D',
        }}
      >
        <InputField
          className="text-input"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={item.currencyCode}
          onChange={e =>
            updateExportItemField(absIndex, 'currencyCode', e.target.value)
          }
          inputType={inputType?.exportItems?.[absIndex]?.currencyCode}
        />
      </td>
      <td
        style={{
          width: '57pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#5D5D5D',
        }}
      >
        <InputField
          className="text-input"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={item.exchangeRate}
          onChange={e =>
            updateExportItemField(absIndex, 'exchangeRate', e.target.value)
          }
          inputType={inputType?.exportItems?.[absIndex]?.exchangeRate}
        />
      </td>
      <td
        style={{
          width: '55pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#5D5D5D',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={item.foreignAmount}
          onChange={value =>
            updateExportItemField(absIndex, 'foreignAmount', value)
          }
          inputType={inputType?.exportItems?.[absIndex]?.foreignAmount}
        />
      </td>
      <td
        style={{
          width: '87pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderTopColor: '#5D5D5D',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#5D5D5D',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#5D5D5D',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={item.wonAmount}
          onChange={value =>
            updateExportItemField(absIndex, 'wonAmount', value)
          }
          inputType={inputType?.exportItems?.[absIndex]?.wonAmount}
        />
      </td>
    </tr>
  );
  return (
    <div className="form40_2">
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
            부가가치세법 시행규칙 [별지 제40호서식(2)]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '15pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{ paddingLeft: '11pt', textIndent: '0pt', textAlign: 'center' }}
      >
        수출실적명세서
        <span className="s3">(을)</span>
      </p>
      <h1
        style={{
          paddingTop: '5pt',
          paddingLeft: '13pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <InputField
          className="form-input form-input-text"
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
          type="text"
          maxLength={4}
          value={attributionYear}
          onChange={e => updater('attributionYear', digitsOnly(e.target.value))}
          inputType={inputType?.attributionYear}
        />
        년<span style={{ paddingLeft: '15pt' }}></span>
        제
        <InputField
          className="form-input form-input-text"
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
          type="text"
          maxLength={2}
          value={attributionTerm}
          onChange={e => updater('attributionTerm', digitsOnly(e.target.value))}
          inputType={inputType?.attributionTerm}
        />
        기 (
        <InputField
          className="form-input form-input-text"
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
          type="text"
          maxLength={2}
          value={taxPeriodStartMonth}
          onChange={e =>
            updater('taxPeriodStartMonth', digitsOnly(e.target.value))
          }
          inputType={inputType?.taxPeriodStartMonth}
        />
        월
        <InputField
          className="form-input form-input-text"
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
          type="text"
          maxLength={2}
          value={taxPeriodStartDay}
          onChange={e =>
            updater('taxPeriodStartDay', digitsOnly(e.target.value))
          }
          inputType={inputType?.taxPeriodStartDay}
        />
        일 ~
        <InputField
          className="form-input form-input-text"
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
          type="text"
          maxLength={2}
          value={taxPeriodEndMonth}
          onChange={e =>
            updater('taxPeriodEndMonth', digitsOnly(e.target.value))
          }
          inputType={inputType?.taxPeriodEndMonth}
        />
        월
        <InputField
          className="form-input form-input-text"
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
          type="text"
          maxLength={2}
          value={taxPeriodEndDay}
          onChange={e => updater('taxPeriodEndDay', digitsOnly(e.target.value))}
          inputType={inputType?.taxPeriodEndDay}
        />
        일)
      </h1>
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
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: '0',
          width: '350pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '9pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              padding: '1pt',
            }}
          >
            <InputField
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                textAlign: 'center',
                fontSize: '10pt',
              }}
              type="text"
              value={submitterInfo.bizRegNumber}
              onChange={e =>
                updateSubmitterInfo('bizRegNumber', e.target.value)
              }
              inputType={inputType?.submitterInfo?.bizRegNumber}
            />
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '18pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑫
              <br />
              일련
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '130pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑬ 수출신고번호
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
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑭
              <br />
              선(기)적
              <br />
              일자
            </p>
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              ⑮
              <br />
              통화
              <br />
              코드
            </p>
          </td>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s6"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                fontSize: '8pt',
                textAlign: 'center',
              }}
            >
              ⑯
              <br />
            </p>
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              환율
            </p>
          </td>
          <td
            style={{
              width: '142pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '55pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                fontSize: '8pt',
                textAlign: 'center',
              }}
            >
              ⑰<span className="s8">외화</span>
            </p>
          </td>
          <td
            style={{
              width: '87pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                margin: '0',
                textIndent: '0',
                lineHeight: '120%',
                fontSize: '8pt',
                textAlign: 'center',
              }}
            >
              ⑱<span className="s8">원화</span>
            </p>
          </td>
        </tr>
        {exportItemsSlice.map((item, localIndex) =>
          renderExportItemRow(item, startIndex + localIndex)
        )}
      </table>
      <p style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
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
      <h2 style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'center' }}>
        작성방법
      </h2>
      <p
        style={{ textIndent: '0pt', textAlign: 'left', paddingTop: '5pt' }}
      ></p>
      <p
        style={{
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'left',
          fontSize: '9pt',
        }}
      >
        이 서식은 『수출실적명세서(갑)』[별지 제40호서식(1)]을 초과하는
        수출실적분에 대해서만 작성합니다.
      </p>
      <p
        style={{
          paddingBottom: '4pt',
          paddingLeft: '444pt',
          textIndent: '0pt',
          textAlign: 'right',
        }}
      >
        (
        <InputField
          className="form-input form-input-text"
          style={{
            width: '15pt',
            height: '15pt',
            fontSize: '8pt',
            padding: '1pt',
            verticalAlign: 'middle',
            display: 'inline-block',
            position: 'relative',
            top: '0',
            left: '0',
          }}
          type="text"
        />
        )쪽
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <p style={{ paddingTop: '20pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
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
        onClick={onAddPage}
      >
        페이지추가
      </button>
    </div>
  );
}
