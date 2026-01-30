'use client';
import './form25.css';
import React from 'react';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form25Data } from '@/components/taxDocument/template/Form25/type';
import { RENTAL_ITEM_MAX_LENGTH } from '@/components/taxDocument/template/Form25/constants';

type Props = Form25Data &
  UpdaterProps<Form25Data> & { index: number; onAddPage: () => void };

export default function Form25_1({
  index,
  onAddPage,
  updater,
  attributionYear,
  attributionTerm,
  periodStartMonth,
  periodStartDay,
  periodEndMonth,
  periodEndDay,
  propertyAddress,
  ownerName,
  bizNumber,
  subBizSerialNum,
  incomePeriodStartMonth,
  incomePeriodEndMonth,
  totalStats,
  rentalItems,
}: Props) {
  const mappedRentalItems = Array.from(
    { length: RENTAL_ITEM_MAX_LENGTH },
    (_, i) => rentalItems[index * RENTAL_ITEM_MAX_LENGTH + i] ?? null
  );

  const totalStatsUpdater = <K extends keyof Form25Data['totalStats']>(
    field: K,
    value: Form25Data['totalStats'][K]
  ) => {
    updater('totalStats', {
      ...totalStats,
      [field]: value,
    });
  };

  const rentalItemUpdater = <K extends keyof Form25Data['rentalItems'][number]>(
    i: number,
    field: K,
    value: Form25Data['rentalItems'][number][K]
  ) => {
    const targetIndex = index * RENTAL_ITEM_MAX_LENGTH + i;
    const items = [...rentalItems];
    const target = items[targetIndex] ?? {};

    items[targetIndex] = {
      ...target,
      [field]: value,
    };

    updater('rentalItems', items);
  };

  return (
    <div className="form25">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-10pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제25호서식]
            <span className="s2">&lt;개정 2021. 10. 28.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '7pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{ textIndent: '0pt', lineHeight: '21pt', textAlign: 'center' }}
      >
        부동산임대공급가액명세서
      </p>
      <h1
        style={{
          paddingLeft: '0pt',
          textIndent: '0pt',
          lineHeight: '13pt',
          textAlign: 'center',
        }}
      >
        <Input
          style={{
            display: 'inline-block',
            width: '32pt',
            height: '20pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          maxLength={4}
          value={attributionYear}
          onChange={value =>
            updater('attributionYear', value.replace(/[^0-9]/g, ''))
          }
        />
        년 제
        <Input
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '20pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
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
            display: 'inline-block',
            width: '20pt',
            height: '20pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          maxLength={2}
          value={periodStartMonth}
          onChange={value =>
            updater('periodStartMonth', value.replace(/[^0-9]/g, ''))
          }
        />
        월
        <Input
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '20pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          maxLength={2}
          value={periodStartDay}
          onChange={value =>
            updater('periodStartDay', value.replace(/[^0-9]/g, ''))
          }
        />
        일 ~
        <Input
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '20pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          maxLength={2}
          value={periodEndMonth}
          onChange={value =>
            updater('periodEndMonth', value.replace(/[^0-9]/g, ''))
          }
        />
        월
        <Input
          style={{
            display: 'inline-block',
            width: '20pt',
            height: '20pt',
            verticalAlign: 'middle',
            margin: '0 2pt',
          }}
          maxLength={2}
          value={periodEndDay}
          onChange={value =>
            updater('periodEndDay', value.replace(/[^0-9]/g, ''))
          }
        />
        일)
      </h1>
      <p style={{ paddingTop: '1pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '880pt',
          marginLeft: '0pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '36pt' }}>
          <td
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'none',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ① 부동산 소재지
            </p>
          </td>
          <td
            style={{
              width: '240pt',
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
              borderLeftStyle: 'none',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={propertyAddress}
              onChange={value => updater('propertyAddress', value)}
            />
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
              borderRightStyle: 'none',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ② 상호
              <span className="s5">(소유자 성명)</span>
            </p>
          </td>
          <td
            style={{
              width: '240pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
              borderLeftStyle: 'none',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={ownerName}
              onChange={value => updater('ownerName', value)}
            />
          </td>
        </tr>
        <tr style={{ height: '36pt' }}>
          <td
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'none',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ③ 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '240pt',
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
              borderLeftStyle: 'none',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={bizNumber}
              onChange={value => updater('bizNumber', value)}
            />
          </td>
          <td
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'none',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '2pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ④ 사업자 단위 과세자의 종된 사업장 일련번호
            </p>
          </td>
          <td
            style={{
              width: '240pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
              borderLeftStyle: 'none',
            }}
          >
            <Input
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              value={subBizSerialNum ?? ''}
              onChange={value => updater('subBizSerialNum', value)}
            />
          </td>
        </tr>
      </table>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '880pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
      <h1
        style={{
          paddingTop: '5pt',
          paddingBottom: '0pt',
          paddingLeft: '0pt',
          textIndent: '0pt',
          textAlign: 'center',
          position: 'relative',
          width: '880pt',
        }}
      >
        <span style={{ display: 'inline-block' }}>
          수입금액 내용
          <span
            className="p"
            style={{
              fontFamily: '돋움, monospace',
              fontSize: '11pt',
              fontWeight: 'bold',
            }}
          >
            (기간
            <Input
              style={{
                display: 'inline-block',
                width: '20pt',
                height: '20pt',
                verticalAlign: 'middle',
                margin: '0 2pt',
              }}
              maxLength={2}
              value={incomePeriodStartMonth}
              onChange={value =>
                updater('incomePeriodStartMonth', value.replace(/[^0-9]/g, ''))
              }
            />
            월 ~
            <Input
              style={{
                display: 'inline-block',
                width: '20pt',
                height: '20pt',
                verticalAlign: 'middle',
                margin: '0 2pt',
              }}
              maxLength={2}
              value={incomePeriodEndMonth}
              onChange={value =>
                updater('incomePeriodEndMonth', value.replace(/[^0-9]/g, ''))
              }
            />
            월)
          </span>
        </span>
        <span
          className="s6"
          style={{ position: 'absolute', right: '10pt', top: '2pt' }}
        >
          (단위:
          <div
            style={{
              display: 'inline-block',
              width: '24pt',
              height: '20pt',
              verticalAlign: 'middle',
              margin: '0 2pt',
            }}
          />
          원)
        </span>
      </h1>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '880pt',
          marginLeft: '0pt',
          marginTop: '-6pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '21pt' }}>
          <td
            style={{
              width: '117pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
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
                paddingTop: '3pt',
                paddingLeft: '38pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              임대사항
            </p>
          </td>
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
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s7"
              style={{
                paddingTop: '10pt',
                textIndent: '0pt',
                lineHeight: '11pt',
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
              임대면적
              <br />
              (㎡)
            </p>
          </td>
          <td
            style={{
              width: '398pt',
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
            colSpan={7}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              임차인 인적사항 및 임대차 계약내용
            </p>
          </td>
          <td
            style={{
              width: '161pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingTop: '3pt',
                paddingLeft: '23pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              임대수입금액 (과세표준)
            </p>
          </td>
        </tr>
        <tr style={{ height: '37pt' }}>
          <td
            style={{
              width: '37pt',
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
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingLeft: '14pt',
                paddingRight: '13pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'center',
              }}
            >
              ⑤ 동
            </p>
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
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingLeft: '17pt',
                paddingRight: '17pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'center',
              }}
            >
              ⑥ 층
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
              className="s7"
              style={{
                paddingTop: '7pt',
                paddingLeft: '12pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'center',
              }}
            >
              ⑦ 호
            </p>
          </td>
          <td
            style={{
              width: '68pt',
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
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              ⑨
            </p>
            <p
              className="s7"
              style={{
                paddingLeft: '20pt',
                paddingRight: '20pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'center',
              }}
            >
              상 호
              <br />
              (성명)
            </p>
          </td>
          <td
            style={{
              width: '82pt',
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
              className="s7"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                lineHeight: '11pt',
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
              <br />
              (주민등록번호)
            </p>
          </td>
          <td
            style={{
              width: '49pt',
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
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '11pt',
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
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '11pt',
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
              갱신일
            </p>
          </td>
          <td
            style={{
              width: '47pt',
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
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '11pt',
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
              퇴거일
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
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              ⑭
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              보증금
            </p>
          </td>
          <td
            style={{
              width: '52pt',
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
              className="s7"
              style={{
                paddingTop: '6pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              ⑮
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              월 임대료
            </p>
          </td>
          <td
            style={{
              width: '52pt',
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
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              ⑯
            </p>
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              계
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
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              ⑰
            </p>
            <p
              className="s7"
              style={{
                paddingLeft: '8pt',
                paddingRight: '7pt',
                textIndent: '0pt',
                lineHeight: '92%',
                textAlign: 'center',
              }}
            >
              보 증 금
              <br />
              이자(계)
            </p>
          </td>
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
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '7pt',
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              ⑱
            </p>
            <p
              className="s9"
              style={{
                textIndent: '0pt',
                lineHeight: '11pt',
                textAlign: 'center',
              }}
            >
              월 임대료(계)
            </p>
          </td>
        </tr>
        <tr style={{ height: '27pt' }}>
          <td
            style={{
              width: '117pt',
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
                paddingTop: '6pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              합 계
            </p>
          </td>
          <td
            style={{
              width: '50pt',
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
              value={totalStats.totalArea}
              onChange={value => totalStatsUpdater('totalArea', value)}
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
          <td
            style={{
              width: '68pt',
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
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '82pt',
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
            <input className="text-input" type="text" />
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
          >
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '47pt',
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
            <input className="text-input" type="text" />
          </td>
          <td
            style={{
              width: '47pt',
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
            <input className="text-input" type="text" />
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
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={totalStats.totalDeposit}
              onChange={value => totalStatsUpdater('totalDeposit', value)}
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
          <td
            style={{
              width: '52pt',
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
              value={totalStats.totalMonthlyRent}
              onChange={value => totalStatsUpdater('totalMonthlyRent', value)}
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
          <td
            style={{
              width: '52pt',
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
              value={totalStats.grandTotalSupplyValue}
              onChange={value =>
                totalStatsUpdater('grandTotalSupplyValue', value)
              }
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
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
          >
            <NumericInput
              value={totalStats.totalDepositInterest}
              onChange={value =>
                totalStatsUpdater('totalDepositInterest', value)
              }
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
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
              borderBottomColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={totalStats.totalMonthlyRentSum}
              onChange={value =>
                totalStatsUpdater('totalMonthlyRentSum', value)
              }
              style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
            />
          </td>
        </tr>
        {mappedRentalItems.map((item, index) => (
          <tr key={`rental-item-${index}`} style={{ height: '27pt' }}>
            <td
              style={{
                width: '37pt',
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
            >
              <Input
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.buildingDong}
                onChange={value =>
                  rentalItemUpdater(index, 'buildingDong', value)
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
            >
              <Input
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.floor}
                onChange={value => rentalItemUpdater(index, 'floor', value)}
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
            >
              <Input
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.unitHo}
                onChange={value => rentalItemUpdater(index, 'unitHo', value)}
              />
            </td>
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
                value={item?.area}
                onChange={value => rentalItemUpdater(index, 'area', value)}
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              />
            </td>
            <td
              style={{
                width: '68pt',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.tenantName}
                onChange={value =>
                  rentalItemUpdater(index, 'tenantName', value)
                }
              />
            </td>
            <td
              style={{
                width: '82pt',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.tenantBizNumber}
                onChange={value =>
                  rentalItemUpdater(index, 'tenantBizNumber', value)
                }
              />
            </td>
            <td
              style={{
                width: '49pt',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.moveInDate}
                onChange={value =>
                  rentalItemUpdater(index, 'moveInDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '47pt',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.renewalDate}
                onChange={value =>
                  rentalItemUpdater(index, 'renewalDate', value)
                }
              />
            </td>
            <td
              style={{
                width: '47pt',
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
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
                value={item?.moveOutDate}
                onChange={value =>
                  rentalItemUpdater(index, 'moveOutDate', value)
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
            >
              <NumericInput
                value={item?.deposit}
                onChange={value => rentalItemUpdater(index, 'deposit', value)}
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              />
            </td>
            <td
              style={{
                width: '52pt',
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
                value={item?.monthlyRent}
                onChange={value =>
                  rentalItemUpdater(index, 'monthlyRent', value)
                }
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              />
            </td>
            <td
              style={{
                width: '52pt',
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
                value={item?.totalSupplyValue}
                onChange={value =>
                  rentalItemUpdater(index, 'totalSupplyValue', value)
                }
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
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
            >
              <NumericInput
                value={item?.depositInterest}
                onChange={value =>
                  rentalItemUpdater(index, 'depositInterest', value)
                }
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              />
            </td>
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
                borderBottomColor: '#ADADAD',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
            >
              <NumericInput
                value={item?.monthlyRentSum}
                onChange={value =>
                  rentalItemUpdater(index, 'monthlyRentSum', value)
                }
                style={{ width: 'calc(100% - 2pt)', height: '20pt' }}
              />
            </td>
          </tr>
        ))}
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
