'use client';
import './form42_1.css';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import {
  AttachmentItem,
  Form42Data,
} from '@/components/taxDocument/template/Form42/type';

export default function Form42_1({
  updater,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterInfo,
  transactionPeriod,
  writingDate,
  submissionReason,
  attachmentItems,
}: FormPageProps<Form42Data>) {
  const baseAttachmentItem: AttachmentItem = {
    documentName: '',
    issuerName: '',
    issueDate: '',
    shippingDate: '',
    currencyCode: '',
    exchangeRate: '',
    currentSubmissionAmount: {
      foreign: 0,
      won: 0,
    },
    currentReportPortion: {
      foreign: 0,
      won: 0,
    },
    remarks: '',
  };

  const mappedAttachmentItems = Array.from(
    { length: 19 },
    (_, i) => attachmentItems[i] ?? baseAttachmentItem
  );

  const submitterInfoUpdater = <K extends keyof Form42Data['submitterInfo']>(
    field: K,
    value: Form42Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const attachmentItemUpdater = <K extends keyof AttachmentItem>(
    index: number,
    field: K,
    value: AttachmentItem[K]
  ) => {
    const items = [...attachmentItems];
    const target = items[index] ?? baseAttachmentItem;

    items[index] = {
      ...target,
      [field]: value,
    };

    updater('attachmentItems', items);
  };

  const attachmentAmountUpdater = (
    index: number,
    section: 'currentSubmissionAmount' | 'currentReportPortion',
    field: 'foreign' | 'won',
    value: number
  ) => {
    const items = [...attachmentItems];
    const target = items[index] ?? baseAttachmentItem;

    items[index] = {
      ...target,
      [section]: {
        ...target[section],
        [field]: value,
      },
    };

    updater('attachmentItems', items);
  };
  return (
    <div className="form42">
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
            부가가치세법 시행규칙 [별지 제42호서식]
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
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕, serif',
        }}
      >
        영세율 첨부서류 제출명세서
      </p>
      <p
        style={{
          paddingTop: '12pt',
          paddingLeft: '13pt',
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
        />
        일)
      </p>
      <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              textAlign: 'center',
              padding: '0',
            }}
            rowSpan={3}
          >
            <p
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              <br />
            </p>
            <p
              className="s3"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '160%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              제출자
              <br />
              인적사항
            </p>
          </td>
          <td
            style={{
              width: '275pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                verticalAlign: 'middle',
              }}
            >
              ① 사업자등록번호
            </p>
            <Input
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              value={submitterInfo.bizRegNumber}
              onChange={value => submitterInfoUpdater('bizRegNumber', value)}
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#5D5D5D',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ② 상호
              <span className="s5">(법인명)</span>
            </p>
            <Input
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              value={submitterInfo.companyName}
              onChange={value => submitterInfoUpdater('companyName', value)}
            />
          </td>
        </tr>
        <tr style={{ height: '32pt' }}>
          <td
            style={{
              width: '275pt',
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
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ③ 성명
              <span className="s5">(대표자)</span>
            </p>
            <Input
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              value={submitterInfo.representativeName}
              onChange={value =>
                submitterInfoUpdater('representativeName', value)
              }
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ④ 사업장 소재지 및 연락처
            </p>
            <Input
              style={{
                width: 'calc(100% - 3pt)',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                fontSize: '10pt',
              }}
              value={submitterInfo.addressAndContact}
              onChange={value =>
                submitterInfoUpdater('addressAndContact', value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '275pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'none',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑤ 업태
              <span className="s5">(종목)</span>
            </p>
            <Input
              style={{
                width: '114pt',
                height: '20pt',
                padding: '1.5pt',
                verticalAlign: 'middle',
                float: 'right',
                marginRight: '1pt',
                fontSize: '10pt',
              }}
              value={submitterInfo.bizTypeAndItem}
              onChange={value => submitterInfoUpdater('bizTypeAndItem', value)}
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#939393',
              borderLeftStyle: 'none',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <input
              className="text-input"
              type="text"
              value={submitterInfo.bizTypeAndItem}
              onChange={e =>
                submitterInfoUpdater('bizTypeAndItem', e.target.value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '342pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#5D5D5D',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '5pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑥ 거래기간
            </p>
            <Input
              style={{
                width: 'calc(100% - 103pt)',
                height: '20pt',
                padding: '1.5pt',
                float: 'right',
                textAlign: 'center',
                fontSize: '10pt',
              }}
              value={transactionPeriod}
              onChange={value => updater('transactionPeriod', value)}
            />
          </td>
          <td
            style={{
              width: '282pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#5D5D5D',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#5D5D5D',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑦ 작성일자
            </p>
            <Input
              style={{
                width: 'calc(100% - 103pt)',
                height: '20pt',
                padding: '1.5pt',
                float: 'right',
                textAlign: 'center',
                fontSize: '10pt',
              }}
              value={writingDate}
              onChange={value => updater('writingDate', value)}
            />
          </td>
        </tr>
      </table>
      <p
        className="s6"
        style={{
          paddingTop: '3pt',
          paddingLeft: '5pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        ⑧ 제출사유
      </p>
      <Input
        style={{
          width: 'calc(100% - 103pt)',
          height: '20pt',
          padding: '1.5pt',
          verticalAlign: 'middle',
          float: 'right',
          fontSize: '10pt',
        }}
        value={submissionReason}
        onChange={value => updater('submissionReason', value)}
      />
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          borderBottom: '1pt solid #000',
          clear: 'both',
          marginTop: '-4pt',
          width: '624pt',
        }}
      >
        <br />
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '0',
          width: '624pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '25pt' }}>
          <td
            style={{
              width: '34pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑨
              <br />
              일련 번호
            </p>
          </td>
          <td
            style={{
              width: '51pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑩
              <br />
              서류명
            </p>
          </td>
          <td
            style={{
              width: '51pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑪
              <br />
              발급자
            </p>
          </td>
          <td
            style={{
              width: '51pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑫
              <br />
              발급 일자
            </p>
          </td>
          <td
            style={{
              width: '51pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑬
              <br />
              선적 일자
            </p>
          </td>
          <td
            style={{
              width: '49pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑭
              <br />
              통화 코드
            </p>
          </td>
          <td
            style={{
              width: '46pt',
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
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑮
              <br />
              환율
            </p>
          </td>
          <td
            style={{
              width: '114pt',
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
            }}
            colSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              당기제출금액
            </p>
          </td>
          <td
            style={{
              width: '114pt',
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
            }}
            colSpan={2}
          >
            <p
              className="s7"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              당기신고해당분
            </p>
          </td>
          <td
            style={{
              width: '63pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
            }}
            rowSpan={2}
          >
            <p
              style={{
                paddingTop: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              <br />
            </p>
            <p
              className="s8"
              style={{
                padding: '0',
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              <span style={{ fontSize: '8pt' }}>⑳</span>
              <span className="s7">비고</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td
            style={{
              width: '57pt',
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
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑯
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              외화
            </p>
          </td>
          <td
            style={{
              width: '57pt',
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
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑰
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              원화
            </p>
          </td>
          <td
            style={{
              width: '57pt',
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
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑱
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              외화
            </p>
          </td>
          <td
            style={{
              width: '57pt',
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
            }}
          >
            <p
              className="s9"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              ⑲
            </p>
            <p
              className="s10"
              style={{
                padding: '0',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontSize: '9pt',
              }}
            >
              원화
            </p>
          </td>
        </tr>

        {mappedAttachmentItems.map((item, index) => (
          <tr style={{ height: '20pt' }} key={`attachment-${index}`}>
            <td
              style={{
                width: '34pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#939393',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                borderRightStyle: 'solid',
                borderRightWidth: '1pt',
                borderRightColor: '#939393',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <input
                className="form-input form-input-text"
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                type="text"
                value={String(index + 1)}
                readOnly
              />
            </td>
            <td
              style={{
                width: '51pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                value={item.documentName}
                onChange={value =>
                  attachmentItemUpdater(index, 'documentName', value)
                }
              />
            </td>
            <td
              style={{
                width: '51pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                value={item.issuerName}
                onChange={value =>
                  attachmentItemUpdater(index, 'issuerName', value)
                }
              />
            </td>
            <td
              style={{
                width: '51pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                value={item.issueDate}
                onChange={value =>
                  attachmentItemUpdater(index, 'issueDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '51pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                value={item.shippingDate}
                onChange={value =>
                  attachmentItemUpdater(index, 'shippingDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '38pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                value={item.currencyCode}
                onChange={value =>
                  attachmentItemUpdater(index, 'currencyCode', value)
                }
              />
            </td>
            <td
              style={{
                width: '46pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  textAlign: 'center',
                  fontSize: '8pt',
                }}
                value={item.exchangeRate}
                onChange={value =>
                  attachmentItemUpdater(index, 'exchangeRate', value)
                }
              />
            </td>
            <td
              style={{
                width: '57pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '8pt',
                }}
                value={item.currentSubmissionAmount.foreign}
                onChange={value =>
                  attachmentAmountUpdater(
                    index,
                    'currentSubmissionAmount',
                    'foreign',
                    value
                  )
                }
              />
            </td>
            <td
              style={{
                width: '57pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '8pt',
                }}
                value={item.currentSubmissionAmount.won}
                onChange={value =>
                  attachmentAmountUpdater(
                    index,
                    'currentSubmissionAmount',
                    'won',
                    value
                  )
                }
              />
            </td>
            <td
              style={{
                width: '57pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '8pt',
                }}
                value={item.currentReportPortion.foreign}
                onChange={value =>
                  attachmentAmountUpdater(
                    index,
                    'currentReportPortion',
                    'foreign',
                    value
                  )
                }
              />
            </td>
            <td
              style={{
                width: '57pt',
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
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '8pt',
                }}
                value={item.currentReportPortion.won}
                onChange={value =>
                  attachmentAmountUpdater(
                    index,
                    'currentReportPortion',
                    'won',
                    value
                  )
                }
              />
            </td>
            <td
              style={{
                width: '60pt',
                borderTopStyle: 'solid',
                borderTopWidth: '1pt',
                borderTopColor: '#939393',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1pt',
                borderLeftColor: '#939393',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1pt',
                borderBottomColor: '#939393',
                padding: '1.5pt',
                verticalAlign: 'middle',
              }}
            >
              <Input
                style={{
                  width: 'calc(100% - 3pt)',
                  height: '20pt',
                  padding: '1pt',
                  verticalAlign: 'middle',
                  fontSize: '8pt',
                }}
                value={item.remarks ?? ''}
                onChange={value =>
                  attachmentItemUpdater(index, 'remarks', value)
                }
              />
            </td>
          </tr>
        ))}
      </table>
      <div style={{ height: '20pt' }}></div>
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
      >
        페이지추가
      </button>
    </div>
  );
}
