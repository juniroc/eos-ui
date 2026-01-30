'use client';

import './form41_2.css';
import { FormPageProps } from '@/components/taxDocument/template/common/type';
import { Form41Data } from '@/components/taxDocument/template/Form41/type';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import Input from '@/components/taxDocument/template/common/Input';
import {
  FORM_41_1_MAX_DETAIL_LIST_MAX_LENGTH,
  FORM_41_2_MAX_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form41/constants';

export default function Form41_2({
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
}: FormPageProps<Form41Data>) {
  const baseDetailItem = {
    type: '',
    documentNumber: '',
    issueDate: '',
    buyerBizRegNumber: '',
    amount: 0,
    remarks: '',
  };

  const startIndex =
    FORM_41_1_MAX_DETAIL_LIST_MAX_LENGTH +
    pageIndex * FORM_41_2_MAX_DETAIL_LIST_MAX_LENGTH;

  const mappedDetailList = Array.from(
    { length: FORM_41_2_MAX_DETAIL_LIST_MAX_LENGTH },
    (_, i) => detailList[startIndex + i] ?? baseDetailItem
  );

  const submitterInfoUpdater = <
    K extends keyof Form41Data['submitterInfo'],
  >(
    field: K,
    value: Form41Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const detailItemUpdater = <K extends keyof Form41Data['detailList'][number]>(
    absIndex: number,
    field: K,
    value: Form41Data['detailList'][number][K]
  ) => {
    const items = [...detailList];
    const target = items[absIndex] ?? baseDetailItem;

    items[absIndex] = {
      ...target,
      [field]: value,
    };

    updater('detailList', items);
  };
  return (
    <div className="form41_2">
      <ul id="l1">
        <li data-list-text="■">
          <p
            style={{
              paddingTop: '2pt',
              paddingLeft: '19pt',
              textIndent: '-11pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제41호서식(2)]
          </p>
        </li>
      </ul>
      <p style={{ textIndent: '0pt', textAlign: 'left', paddingTop: '10pt' }}>
        <br />
      </p>
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'center',
          fontFamily: 'HY견고딕,sans-serif',
          fontSize: '16.5pt',
        }}
      >
        내국신용장
        <span style={{ fontWeight: 'bold', fontSize: '16pt' }}>ㆍ</span>
        구매확인서 전자발급명세서
        <span style={{ fontSize: '15.5pt' }}>(을)</span>
      </p>
      <h2
        style={{
          paddingTop: '8pt',
          paddingLeft: '11pt',
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
            fontSize: '9pt',
          }}
          maxLength={4}
          value={attributionYear}
          onChange={value =>
            updater('attributionYear', value.replace(/[^0-9]/g, ''))
          }
        />
        년<span style={{ paddingLeft: '10pt' }}></span>
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
            fontSize: '9pt',
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
            fontSize: '9pt',
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
            fontSize: '9pt',
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
            fontSize: '9pt',
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
            fontSize: '9pt',
          }}
          maxLength={2}
          value={taxPeriodEndDay}
          onChange={value =>
            updater('taxPeriodEndDay', value.replace(/[^0-9]/g, ''))
          }
        />
        일)
      </h2>
      <p style={{ paddingTop: '10pt' }}></p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '607pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '19pt' }}>
          <td
            style={{
              width: '148.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              verticalAlign: 'middle',
              padding: '1.5pt',
              paddingLeft: '4pt',
            }}
          >
            <p
              className="s3"
              style={{
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'left',
              }}
            >
              ① 상호(법인명)
            </p>
          </td>
          <td
            style={{
              width: '155pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <Input
              style={{ width: '100%', height: '20pt' }}
              value={submitterInfo.companyName}
              onChange={value => submitterInfoUpdater('companyName', value)}
            />
          </td>
          <td
            style={{
              width: '148.5pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              verticalAlign: 'middle',
              padding: '1.5pt',
              paddingLeft: '4pt',
            }}
          >
            <p
              className="s3"
              style={{
                textIndent: '0pt',
                lineHeight: '130%',
                textAlign: 'left',
              }}
            >
              ② 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '155pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              verticalAlign: 'middle',
              padding: '1.5pt',
            }}
          >
            <Input
              style={{ width: '100%', height: '20pt' }}
              value={submitterInfo.bizRegNumber}
              onChange={value => submitterInfoUpdater('bizRegNumber', value)}
            />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <span>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0 auto',
            }}
          />
        </span>
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
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
        <tr style={{ height: '32pt' }}>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              ⑫
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              번호
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
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              ⑬
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '71pt',
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
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              ⑭
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              서류번호
            </p>
          </td>
          <td
            style={{
              width: '53pt',
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
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              ⑮
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              발급일
            </p>
          </td>
          <td
            style={{
              width: '101pt',
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
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              <span style={{ fontSize: '9pt' }}>⑯</span>
              공급받는 자의
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '85pt',
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
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              ⑰
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              금액(원)
            </p>
          </td>
          <td
            style={{
              width: '66pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#939393',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#939393',
              verticalAlign: 'middle',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              ⑱
            </p>
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                lineHeight: '130%',
              }}
            >
              비고
            </p>
          </td>
        </tr>
        
        {mappedDetailList.map((detail, index) => {
          const absIndex = startIndex + index;

          return (
            <tr style={{ height: '19pt' }} key={`detail-${absIndex}`}>
              <td
                style={{
                  width: '47pt',
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
                  style={{ textAlign: 'center' }}
                  type="text"
                  value={String(absIndex + 1)}
                  readOnly
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
                <Input
                  style={{ textAlign: 'center' }}
                  value={detail.type}
                  onChange={value => detailItemUpdater(absIndex, 'type', value)}
                />
              </td>
              <td
                style={{
                  width: '71pt',
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
                  value={detail.documentNumber}
                  onChange={value =>
                    detailItemUpdater(absIndex, 'documentNumber', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '53pt',
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
                  value={detail.issueDate}
                  onChange={value => detailItemUpdater(absIndex, 'issueDate', value)}
                />
              </td>
              <td
                style={{
                  width: '101pt',
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
                  value={detail.buyerBizRegNumber}
                  onChange={value =>
                    detailItemUpdater(absIndex, 'buyerBizRegNumber', value)
                  }
                />
              </td>
              <td
                style={{
                  width: '85pt',
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
                  value={detail.amount}
                  onChange={value => detailItemUpdater(absIndex, 'amount', value)}
                />
              </td>
              <td
                style={{
                  width: '66pt',
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
                  value={detail.remarks ?? ''}
                  onChange={value => detailItemUpdater(absIndex, 'remarks', value)}
                />
              </td>
            </tr>
          );
        })}
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p style={{ paddingTop: '11pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <span>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0 auto',
            }}
          />
        </span>
      </p>
      <p
        className="s6"
        style={{ paddingTop: '4pt', textIndent: '0pt', textAlign: 'center' }}
      >
        작성방법
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        style={{
          paddingTop: '10pt',
          paddingLeft: '12pt',
          textIndent: '0pt',
          textAlign: 'left',
          fontSize: '9pt',
        }}
      >
        이 서식은 『내국신용장ㆍ구매확인서 전자발급명세서(갑)』[별지
        제41호서식(1)]을 초과하는 공급실적분에 대해서만 작성합니다.
      </p>
      <p
        style={{
          paddingLeft: '446pt',
          textIndent: '0pt',
          textAlign: 'right',
          fontSize: '9pt',
        }}
      >
        (
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '15pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'relative',
            top: '0',
            left: '0',
            fontSize: '9pt',
          }}
          type="text"
        />
        )쪽
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: '5pt',
          textIndent: '0pt',
          lineHeight: '130%',
          textAlign: 'left',
        }}
      >
        <span>
          <hr
            style={{
              width: '624pt',
              border: 'none',
              borderTop: '1pt solid #000',
              margin: '0 auto',
            }}
          />
        </span>
      </p>
      <p style={{ paddingBottom: '20pt' }}></p>
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
      >
        페이지추가
      </button>
    </div>
  );
}
