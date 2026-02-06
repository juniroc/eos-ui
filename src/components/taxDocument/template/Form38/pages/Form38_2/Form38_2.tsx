'use client';
import './form38_2.css';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import { Form38Data } from '@/components/taxDocument/template/Form38/type';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import {
  FORM_38_1_MAX_DETAIL_LIST_MAX_LENGTH,
  FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form38/constants';

export default function Form38_2({
  pageIndex,
  updater,
  onAddPage,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterInfo,
  detailList,
}: FormPageProps<Form38Data>) {
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');

  const createEmptySplit =
    (): Form38Data['summary']['grandTotal']['supplyPrice'] => ({
      trillion: 0,
      billion: 0,
      million: 0,
      thousand: 0,
      one: 0,
    });

  const createEmptyDetail = (): Form38Data['detailList'][number] => ({
    bizRegNumber: '',
    companyName: '',
    invoiceCount: 0,
    supplyPrice: createEmptySplit(),
    tax: createEmptySplit(),
    remarks: '',
  });

  const startIndex =
    FORM_38_1_MAX_DETAIL_LIST_MAX_LENGTH +
    pageIndex * FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH;
  const detailItems = Array.from(
    { length: FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH },
    (_, i) => detailList[startIndex + i] ?? createEmptyDetail()
  );

  const updateDetailItem = (
    absIndex: number,
    updaterFn: (
      item: Form38Data['detailList'][number]
    ) => Form38Data['detailList'][number]
  ) => {
    const next = [...detailList];
    const current = next[absIndex] ?? createEmptyDetail();
    next[absIndex] = updaterFn(current);
    updater('detailList', next);
  };

  const updateDetailField = (
    absIndex: number,
    field: keyof Form38Data['detailList'][number],
    value: string | number
  ) => {
    updateDetailItem(absIndex, item => ({
      ...item,
      [field]: value,
    }));
  };

  const updateDetailSplit = (
    absIndex: number,
    field: 'supplyPrice' | 'tax',
    part: keyof Form38Data['detailList'][number]['supplyPrice'],
    value: number
  ) => {
    updateDetailItem(absIndex, item => ({
      ...item,
      [field]: {
        ...item[field],
        [part]: value,
      },
    }));
  };

  const renderDetailRow = (
    detail: Form38Data['detailList'][number],
    absIndex: number
  ) => (
    <tr style={{ height: '26pt' }} key={absIndex}>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
          textAlign: 'center',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          type="text"
          value={String(absIndex + 1)}
          readOnly
        />
      </td>
      <td
        style={{
          width: '64pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          type="text"
          value={detail.bizRegNumber}
          onChange={e =>
            updateDetailField(absIndex, 'bizRegNumber', e.target.value)
          }
        />
      </td>
      <td
        style={{
          width: '64pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          type="text"
          value={detail.companyName}
          onChange={e =>
            updateDetailField(absIndex, 'companyName', e.target.value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.invoiceCount}
          onChange={value => updateDetailField(absIndex, 'invoiceCount', value)}
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.supplyPrice.trillion}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'trillion', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.supplyPrice.billion}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'billion', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.supplyPrice.million}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'million', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.supplyPrice.thousand}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'thousand', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.supplyPrice.one}
          onChange={value =>
            updateDetailSplit(absIndex, 'supplyPrice', 'one', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.tax.trillion}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'trillion', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.tax.billion}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'billion', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.tax.million}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'million', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.tax.thousand}
          onChange={value =>
            updateDetailSplit(absIndex, 'tax', 'thousand', value)
          }
        />
      </td>
      <td
        style={{
          width: '29pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
          borderRightStyle: 'solid',
          borderRightWidth: '1pt',
          borderRightColor: '#808080',
        }}
      >
        <NumericInput
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          value={detail.tax.one}
          onChange={value => updateDetailSplit(absIndex, 'tax', 'one', value)}
        />
      </td>
      <td
        style={{
          width: '50pt',
          borderTopStyle: 'solid',
          borderTopWidth: '1pt',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1pt',
          borderLeftColor: '#808080',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1pt',
          borderBottomColor: '#808080',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: 'calc(100% - 2pt)',
            height: '20pt',
            padding: '1pt',
            verticalAlign: 'middle',
          }}
          type="text"
          value={detail.remarks ?? ''}
          onChange={e => updateDetailField(absIndex, 'remarks', e.target.value)}
        />
      </td>
    </tr>
  );
  return (
    <div className="form38_2">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제38호서식(2)]
            <span className="s1">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s2"
        style={{
          paddingTop: '15pt',
          paddingLeft: '0pt',
          paddingRight: '0pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        매출처별 세금계산서합계표
        <span className="s3">(을)</span>
      </p>
      <h1
        style={{
          paddingLeft: '0pt',
          paddingRight: '0pt',
          textIndent: '0pt',
          textAlign: 'center',
        }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          type="text"
          maxLength={4}
          value={attributionYear}
          onChange={e => updater('attributionYear', digitsOnly(e.target.value))}
        />
        년<span style={{ paddingLeft: '15pt' }}></span>
        제
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
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
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodStartMonth}
          onChange={e =>
            updater('taxPeriodStartMonth', digitsOnly(e.target.value))
          }
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodStartDay}
          onChange={e =>
            updater('taxPeriodStartDay', digitsOnly(e.target.value))
          }
        />
        일 ~
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodEndMonth}
          onChange={e =>
            updater('taxPeriodEndMonth', digitsOnly(e.target.value))
          }
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
          type="text"
          maxLength={2}
          value={taxPeriodEndDay}
          onChange={e => updater('taxPeriodEndDay', digitsOnly(e.target.value))}
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
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: '0',
          width: '360pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '125pt',
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
                paddingTop: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '235pt',
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
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                textAlign: 'center',
              }}
              type="text"
              value={submitterInfo.bizRegNumber}
              onChange={e =>
                updater('submitterInfo', {
                  ...submitterInfo,
                  bizRegNumber: e.target.value,
                })
              }
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
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '48pt' }}>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑪
              <br />
              번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑫
              <br />
              사업자
              <br />
              등록번호
            </p>
          </td>
          <td
            style={{
              width: '64pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑬ 상 호
              <br />
              (법인명)
            </p>
          </td>
          <td
            style={{
              width: '29pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                lineHeight: '123%',
                textAlign: 'center',
              }}
            >
              ⑭
              <br />
              매수
            </p>
          </td>
          <td
            style={{
              width: '145pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={5}
          >
            <p
              className="s5"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '10pt',
              }}
            >
              ⑮ 공급가액
            </p>
            <p
              className="s6"
              style={{
                paddingTop: '9pt',
                textIndent: '0pt',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <span>조</span>
              <span>십억</span>
              <span>백만</span>
              <span>천</span>
              <span>일</span>
            </p>
          </td>
          <td
            style={{
              width: '145pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={5}
          >
            <p
              className="s7"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '9pt' }}>⑯</span>
              <span className="s5">세액</span>
            </p>
            <p
              className="s6"
              style={{
                paddingTop: '9pt',
                paddingRight: '5pt',
                textIndent: '0pt',
                textAlign: 'right',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <span>조</span>
              <span>십억</span>
              <span>백만</span>
              <span>천</span>
              <span>일</span>
            </p>
          </td>
          <td
            style={{
              width: '50pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              style={{
                paddingTop: '0pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s5"
              style={{
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              비고
            </p>
          </td>
        </tr>
        {detailItems.map((detail, localIndex) =>
          renderDetailRow(detail, startIndex + localIndex)
        )}
      </table>
      <p style={{ paddingTop: '10pt', textIndent: '0pt', textAlign: 'left' }}>
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
        className="s8"
        style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'center' }}
      >
        작 성 방 법
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        style={{
          paddingTop: '12pt',
          paddingLeft: '14pt',
          textIndent: '2pt',
          textAlign: 'left',
          fontSize: '8pt',
          lineHeight: '150%',
        }}
      >
        이 서식은 과세기간 종료일 다음 달 11일
        <span className="s9">
          까지 전송된 전자세금계산서 외 발급분 매출처가
        </span>
        6개 이상으로서
        <span className="s9">
          『매출처별 세금계 산서합계표(갑)』[별지 제38호서식(1)]
        </span>
        을 초과하는 경우에 사용합니다.
      </p>
      <p style={{ textIndent: '0pt', lineHeight: '10pt', textAlign: 'right' }}>
        (
        <input
          className="form-input form-input-text"
          style={{
            width: '15pt',
            height: '15pt',
            fontSize: '8pt',
            padding: '1pt',
            verticalAlign: 'middle',
            display: 'inline-block',
          }}
          type="text"
        />
        )쪽
      </p>
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
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{ borderCollapse: 'collapse', marginLeft: '15.594pt' }}
        cellSpacing="0"
      >
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '109pt',
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
              className="s7"
              style={{
                paddingTop: '0pt',
                paddingLeft: '7pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '9pt' }}>⑰</span>
              <span className="s10">관리번호(매출)</span>
            </p>
          </td>
          <td
            style={{
              width: '110pt',
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
              className="s11"
              style={{
                paddingRight: '8pt',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              -
            </p>
          </td>
        </tr>
      </table>
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
        id="addTableBtn"
        onClick={onAddPage}
      >
        페이지추가
      </button>
    </div>
  );
}
