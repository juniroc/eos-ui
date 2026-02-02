'use client';
import 'src/components/taxDocument/template/Form30/form30.css';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form30Data,
  SalesDetail,
} from '@/components/taxDocument/template/Form30/type';

export default function Form30({
  updater,
  attributionYear,
  attributionTerm,
  taxPeriodStartMonth,
  taxPeriodStartDay,
  taxPeriodEndMonth,
  taxPeriodEndDay,
  submitterInfo,
  salesDetails,
  totalSales,
}: UpdaterProps<Form30Data>) {
  const updateSubmitterInfo = <K extends keyof Form30Data['submitterInfo']>(
    field: K,
    value: Form30Data['submitterInfo'][K]
  ) => {
    updater('submitterInfo', {
      ...submitterInfo,
      [field]: value,
    });
  };

  const updateSalesDetail = <K extends keyof SalesDetail>(
    section:
      | 'livestockDiagnosis'
      | 'aquaticAnimalDiagnosis'
      | 'serviceDogDiagnosis'
      | 'basicLivelihoodRecipientAnimal'
      | 'diseasePreventionTreatment',
    field: K,
    value: SalesDetail[K]
  ) => {
    updater('salesDetails', {
      ...salesDetails,
      [section]: {
        ...salesDetails[section],
        [field]: value,
      },
    });
  };

  const updateOtherDiagnosis = <
    K extends keyof Form30Data['salesDetails']['otherDiagnosis'],
  >(
    field: K,
    value: Form30Data['salesDetails']['otherDiagnosis'][K]
  ) => {
    updater('salesDetails', {
      ...salesDetails,
      otherDiagnosis: {
        ...salesDetails.otherDiagnosis,
        [field]: value,
      },
    });
  };

  const updateTotalSales = <K extends keyof Form30Data['totalSales']>(
    field: K,
    value: Form30Data['totalSales'][K]
  ) => {
    updater('totalSales', {
      ...totalSales,
      [field]: value,
    });
  };

  return (
    <div className="form30">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '17pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제30호서식]
            <span className="s2">&lt;개정 2024. 3. 22.&gt;</span>
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '10pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p
        className="s3"
        style={{ textIndent: '0pt', lineHeight: '22pt', textAlign: 'center' }}
      >
        동물 진료용역 매출명세서
      </p>
      <h1
        style={{ textIndent: '0pt', lineHeight: '13pt', textAlign: 'center' }}
      >
        <input
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          type="text"
          value={attributionYear}
          onChange={e => updater('attributionYear', e.target.value)}
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
            fontFamily: 'Arial',
          }}
          type="text"
          value={attributionTerm}
          onChange={e => updater('attributionTerm', e.target.value)}
        />
        기(
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          type="text"
          value={taxPeriodStartMonth}
          onChange={e => updater('taxPeriodStartMonth', e.target.value)}
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
            fontFamily: 'Arial',
          }}
          type="text"
          value={taxPeriodStartDay}
          onChange={e => updater('taxPeriodStartDay', e.target.value)}
        />
        일~
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
          }}
          type="text"
          value={taxPeriodEndMonth}
          onChange={e => updater('taxPeriodEndMonth', e.target.value)}
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
            fontFamily: 'Arial',
          }}
          type="text"
          value={taxPeriodEndDay}
          onChange={e => updater('taxPeriodEndDay', e.target.value)}
        />
        일)
      </h1>
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
        <tr style={{ height: '31pt' }}>
          <td
            style={{
              width: '84pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                margin: '0',
              }}
            >
              제출자 인적사항
            </p>
          </td>
          <td
            style={{
              width: '226pt',
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
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s5"
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
              ① 상호
              <span className="s6">(법인명)</span>
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
              }}
              type="text"
              value={submitterInfo.companyName}
              onChange={e => updateSubmitterInfo('companyName', e.target.value)}
            />
          </td>
          <td
            style={{
              width: '170pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s5"
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
              ② 사업자등록번호
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
              }}
              type="text"
              value={submitterInfo.bizRegNumber}
              onChange={e =>
                updateSubmitterInfo('bizRegNumber', e.target.value)
              }
            />
          </td>
        </tr>
        <tr style={{ height: '31pt' }}>
          <td
            style={{
              width: '226pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s5"
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
              ③ 성명
              <span className="s6">(대표자)</span>
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
              }}
              type="text"
              value={submitterInfo.representativeName}
              onChange={e =>
                updateSubmitterInfo('representativeName', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '170pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              className="s5"
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
              ④ 거래기간
            </p>
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 100pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                display: 'inline-block',
              }}
              type="text"
              value={submitterInfo.transactionPeriod}
              onChange={e =>
                updateSubmitterInfo('transactionPeriod', e.target.value)
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
        <tr style={{ height: '28pt' }}>
          <td
            style={{
              width: '84pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={8}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '19pt',
                textIndent: '0pt',
                textAlign: 'left',
                margin: '0',
              }}
            >
              매출 명세
            </p>
          </td>
          <td
            style={{
              width: '151pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '45pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑤ 면세 사유
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '7pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑥ 공급 건수
            </p>
          </td>
          <td
            style={{
              width: '116pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '30pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑦ 공급가액
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '7pt',
                paddingLeft: '13pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              비 고
            </p>
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              가축 진료
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.livestockDiagnosis.supplyCount}
              onChange={value =>
                updateSalesDetail('livestockDiagnosis', 'supplyCount', value)
              }
            />
          </td>
          <td
            style={{
              width: '116pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.livestockDiagnosis.supplyPrice}
              onChange={value =>
                updateSalesDetail('livestockDiagnosis', 'supplyPrice', value)
              }
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
              padding: '1pt',
              verticalAlign: 'middle',
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
              value={salesDetails.livestockDiagnosis.remarks ?? ''}
              onChange={e =>
                updateSalesDetail(
                  'livestockDiagnosis',
                  'remarks',
                  e.target.value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              수산동물 진료
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.aquaticAnimalDiagnosis.supplyCount}
              onChange={value =>
                updateSalesDetail(
                  'aquaticAnimalDiagnosis',
                  'supplyCount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '116pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.aquaticAnimalDiagnosis.supplyPrice}
              onChange={value =>
                updateSalesDetail(
                  'aquaticAnimalDiagnosis',
                  'supplyPrice',
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
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              type="text"
              value={salesDetails.aquaticAnimalDiagnosis.remarks ?? ''}
              onChange={e =>
                updateSalesDetail(
                  'aquaticAnimalDiagnosis',
                  'remarks',
                  e.target.value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              장애인 보조견 진료
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.serviceDogDiagnosis.supplyCount}
              onChange={value =>
                updateSalesDetail('serviceDogDiagnosis', 'supplyCount', value)
              }
            />
          </td>
          <td
            style={{
              width: '116pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.serviceDogDiagnosis.supplyPrice}
              onChange={value =>
                updateSalesDetail('serviceDogDiagnosis', 'supplyPrice', value)
              }
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
              padding: '1pt',
              verticalAlign: 'middle',
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
              value={salesDetails.serviceDogDiagnosis.remarks ?? ''}
              onChange={e =>
                updateSalesDetail(
                  'serviceDogDiagnosis',
                  'remarks',
                  e.target.value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              기초수급자가 기르는 동물 진료
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.basicLivelihoodRecipientAnimal.supplyCount}
              onChange={value =>
                updateSalesDetail(
                  'basicLivelihoodRecipientAnimal',
                  'supplyCount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '116pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.basicLivelihoodRecipientAnimal.supplyPrice}
              onChange={value =>
                updateSalesDetail(
                  'basicLivelihoodRecipientAnimal',
                  'supplyPrice',
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
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              type="text"
              value={salesDetails.basicLivelihoodRecipientAnimal.remarks ?? ''}
              onChange={e =>
                updateSalesDetail(
                  'basicLivelihoodRecipientAnimal',
                  'remarks',
                  e.target.value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
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
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              질병 예방 및 치료 목적 진료
            </p>
          </td>
          <td
            style={{
              width: '75pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.diseasePreventionTreatment.supplyCount}
              onChange={value =>
                updateSalesDetail(
                  'diseasePreventionTreatment',
                  'supplyCount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '116pt',
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
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              value={salesDetails.diseasePreventionTreatment.supplyPrice}
              onChange={value =>
                updateSalesDetail(
                  'diseasePreventionTreatment',
                  'supplyPrice',
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
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
              }}
              type="text"
              value={salesDetails.diseasePreventionTreatment.remarks ?? ''}
              onChange={e =>
                updateSalesDetail(
                  'diseasePreventionTreatment',
                  'remarks',
                  e.target.value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
              padding: '1pt',
              verticalAlign: 'middle',
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
              value={salesDetails.otherDiagnosis.exemptionReason}
              onChange={e =>
                updateOtherDiagnosis('exemptionReason', e.target.value)
              }
            />
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
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
              }}
              value={salesDetails.otherDiagnosis.supplyCount}
              onChange={value => updateOtherDiagnosis('supplyCount', value)}
            />
          </td>
          <td
            style={{
              width: '116pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#787878',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
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
              }}
              value={salesDetails.otherDiagnosis.supplyPrice}
              onChange={value => updateOtherDiagnosis('supplyPrice', value)}
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
              padding: '1pt',
              verticalAlign: 'middle',
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
              value={salesDetails.otherDiagnosis.remarks ?? ''}
              onChange={e => updateOtherDiagnosis('remarks', e.target.value)}
            />
          </td>
        </tr>
        <tr style={{ height: '30pt' }}>
          <td
            style={{
              width: '151pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '8pt',
                textIndent: '0pt',
                textAlign: 'center',
              }}
            >
              ⑧ 합 계
            </p>
          </td>
          <td
            style={{
              width: '75pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
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
              }}
              value={totalSales.totalSupplyCount}
              onChange={value => updateTotalSales('totalSupplyCount', value)}
            />
          </td>
          <td
            style={{
              width: '116pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#787878',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#787878',
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
              }}
              value={totalSales.totalSupplyPrice}
              onChange={value => updateTotalSales('totalSupplyPrice', value)}
            />
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
              padding: '1pt',
              verticalAlign: 'middle',
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
              value={totalSales.remarks ?? ''}
              onChange={e => updateTotalSales('remarks', e.target.value)}
            />
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: '200pt', textIndent: '0pt', textAlign: 'left' }}>
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
      <h2 style={{ paddingTop: '3pt', textIndent: '0pt', textAlign: 'center' }}>
        작 성 방 법
      </h2>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}></p>
      <p
        style={{
          paddingTop: '10pt',
          paddingLeft: '17pt',
          textIndent: '0pt',
          lineHeight: '160%',
          textAlign: 'left',
        }}
      >
        이 명세서는 아래의 작성방법에 따라 한글과 아라비아 숫자로 정확하게
        적어야 하며, 거래금액은 원 단위까지 표시하여야 합니다.
      </p>
      <p
        style={{
          paddingLeft: '16pt',
          textIndent: '0pt',
          lineHeight: '160%',
          textAlign: 'left',
        }}
      >
        ① ~ ④: 제출자 인적사항을 적습니다.
      </p>
      <p
        style={{
          paddingTop: '2pt',
          paddingLeft: '16pt',
          textIndent: '0pt',
          lineHeight: '160%',
          textAlign: 'left',
        }}
      >
        ⑤: 「부가가치세법 시행령」 제35조제5호 각 목에 따른 면세 사유를
        말합니다.
      </p>
      <p
        style={{
          paddingTop: '2pt',
          paddingLeft: '16pt',
          textIndent: '0pt',
          lineHeight: '160%',
          textAlign: 'left',
        }}
      >
        ⑥: 각 면세 사유별로 해당하는 총 공급 건수를 적습니다.
      </p>
      <p
        style={{
          paddingTop: '3pt',
          paddingLeft: '16pt',
          textIndent: '0pt',
          lineHeight: '160%',
          textAlign: 'left',
        }}
      >
        ⑦: 각 면세 사유별로 해당하는 공급의 총 공급가액을 적습니다.
      </p>
      <p
        style={{
          paddingTop: '3pt',
          paddingLeft: '16pt',
          textIndent: '0pt',
          lineHeight: '160%',
          textAlign: 'left',
        }}
      >
        ⑧: 부가가치세 면세대상 동물 진료용역 공급의 총 공급 건수, 총 공급가액의
        합계를 적습니다.
      </p>
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
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
    </div>
  );
}
