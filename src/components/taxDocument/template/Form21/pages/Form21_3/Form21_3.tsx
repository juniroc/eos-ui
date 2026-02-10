'use client';

import './form21_3.css';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form21Data, Form21InputData, } from '@/components/taxDocument/template/Form21/type';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';

type Props = UpdaterProps<Form21Data> & { inputType?: Form21InputData };

export default function Form21_3(props: Props) {
  const { updater, inputType } = props;
  const digitsOnly = (value: string) => value.replace(/[^0-9]/g, '');
  const updateNestedField = <K extends keyof Form21Data>(
    field: K,
    key: string,
    value: string | number
  ) => {
    const current = props[field] as Record<string, unknown>;
    updater(field, { ...current, [key]: value } as Form21Data[K]);
  };
  const getDigits = (value: string | undefined, length: number) =>
    Array.from({ length }, (_, i) => value?.[i] ?? '');
  const updateDigit = (
    value: string | undefined,
    length: number,
    index: number,
    nextDigit: string,
    onChange: (nextValue: string) => void
  ) => {
    const digits = getDigits(value, length);
    digits[index] = digitsOnly(nextDigit).slice(-1);
    onChange(digits.join(''));
  };
  const bizNumberDigits = getDigits(props.bizNumber, 10);
  const getCodeDigits = (value?: string) =>
    getDigits(digitsOnly(value ?? ''), 6);
  const updateCodeDigit = (
    field: 'taxFreeRevenue1' | 'taxFreeRevenue2' | 'taxFreeRevenueExcluded',
    index: number,
    nextDigit: string
  ) =>
    updateDigit(props[field].code, 6, index, nextDigit, value =>
      updateNestedField(field, 'code', value)
    );
  return (
    <div className="form21_3">
      <hr
        style={{
          margin: '0',
          marginTop: '5pt',
          width: '624pt',
          height: '1pt',
          border: 'none',
          borderTop: '1pt solid #000',
          marginLeft: '5.329pt',
          padding: '0',
        }}
      />
      <p
        style={{
          paddingLeft: '7pt',
          textIndent: '0pt',
          lineHeight: '9pt',
          textAlign: 'left',
          marginBottom: '2pt',
        }}
      >
        ※ 이 쪽은 해당 사항이 있는 사업자만 사용합니다.
      </p>
      <p
        style={{
          paddingTop: '2pt',
          paddingBottom: '2pt',
          paddingLeft: '10pt',
          textIndent: '0pt',
          textAlign: 'left',
          fontSize: '9pt',
        }}
      >
        사업자등록번호
        <span
          style={{
            marginLeft: '10pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            lineHeight: '16pt',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[0]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 0, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[1]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 1, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[2]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 2, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              height: '16pt',
              lineHeight: '16pt',
              verticalAlign: 'middle',
            }}
          >
            -
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[3]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 3, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[4]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 4, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              height: '16pt',
              lineHeight: '16pt',
              verticalAlign: 'middle',
            }}
          >
            -
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[5]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 5, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[6]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 6, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[7]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 7, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[8]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 8, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '12pt',
              height: '16pt',
              border: '0.5pt solid #c0c0c0',
              margin: '0',
              verticalAlign: 'middle',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              type="text"
              value={bizNumberDigits[9]}
              inputType={inputType?.bizNumber}
              onChange={value =>
                updateDigit(props.bizNumber, 10, 9, value, value =>
                  updater('bizNumber', value)
                )
              }
            />
          </span>
        </span>
        <span
          style={{
            marginLeft: '8pt',
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
        >
          *사업자등록번호는 반드시 적으시기 바랍니다.
        </span>
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
          marginBottom: '2pt',
          marginTop: '2pt',
        }}
        cellSpacing="0"
        id="table1"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '44pt' }}></col>
          <col style={{ width: '33pt' }}></col>
          <col style={{ width: '91pt' }}></col>
          <col style={{ width: '24pt' }}></col>
          <col style={{ width: '80pt' }}></col>
          <col style={{ width: '42pt' }}></col>
          <col style={{ width: '92pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={9}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              예정신고
              <br />
              누락분
              <br />
              명세
            </p>
          </td>
          <td
            style={{
              width: '44pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={6}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
            <p
              className="s3"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (7)매출
            </p>
          </td>
          <td
            style={{
              width: '148pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '43pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '5pt',
                paddingLeft: '8pt',
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              과세
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세금계산서
            </p>
          </td>
          <td
            style={{
              width: '40pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (36)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesTaxInvoice.amount}
              inputType={inputType?.omissionSalesTaxInvoice?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionSalesTaxInvoice',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              10/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesTaxInvoice.tax}
              inputType={inputType?.omissionSalesTaxInvoice?.tax}
              onChange={value =>
                updateNestedField(
                  'omissionSalesTaxInvoice',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              기타
            </p>
            s
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (37)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesOther.amount}
              inputType={inputType?.omissionSalesOther?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionSalesOther',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              10/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesOther.tax}
              inputType={inputType?.omissionSalesOther?.tax}
              onChange={value =>
                updateNestedField(
                  'omissionSalesOther',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '5pt',
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세금계산서
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (38)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesZeroTaxInvoice.amount}
              inputType={inputType?.omissionSalesZeroTaxInvoice?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionSalesZeroTaxInvoice',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              0/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              기타
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (39)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesZeroOther.amount}
              inputType={inputType?.omissionSalesZeroOther?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionSalesZeroOther',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              0/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (40)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesTotal.amount}
              inputType={inputType?.omissionSalesTotal?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionSalesTotal',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionSalesTotal.tax}
              inputType={inputType?.omissionSalesTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'omissionSalesTotal',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '44pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={3}
          >
            <p
              className="s3"
              style={{
                paddingLeft: '4pt',
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              (13) 매입
            </p>
          </td>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세금계산서
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (41)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionPurchaseTaxInvoice.amount}
              inputType={inputType?.omissionPurchaseTaxInvoice?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionPurchaseTaxInvoice',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionPurchaseTaxInvoice.tax}
              inputType={inputType?.omissionPurchaseTaxInvoice?.tax}
              onChange={value =>
                updateNestedField(
                  'omissionPurchaseTaxInvoice',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              그밖의공제매입세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (42)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionPurchaseOther.amount}
              inputType={inputType?.omissionPurchaseOther?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionPurchaseOther',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionPurchaseOther.tax}
              inputType={inputType?.omissionPurchaseOther?.tax}
              onChange={value =>
                updateNestedField(
                  'omissionPurchaseOther',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '125pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (43)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionPurchaseTotal.amount}
              inputType={inputType?.omissionPurchaseTotal?.amount}
              onChange={value =>
                updateNestedField(
                  'omissionPurchaseTotal',
                  'amount',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.omissionPurchaseTotal.tax}
              inputType={inputType?.omissionPurchaseTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'omissionPurchaseTotal',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
          marginBottom: '2pt',
        }}
        cellSpacing="0"
        id="table2"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '104pt' }}></col>
          <col style={{ width: '65pt' }}></col>
          <col style={{ width: '23pt' }}></col>
          <col style={{ width: '80pt' }}></col>
          <col style={{ width: '42pt' }}></col>
          <col style={{ width: '92pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '192pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '42pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '104pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                paddingBottom: '0',
              }}
            >
              신용카드매출전표등 수령
              <br />
              명세서 제출분
            </p>
          </td>
          <td
            style={{
              width: '65pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '4pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              일반매입
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (44)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedCreditCardGeneral.amount}
              inputType={inputType?.otherDedCreditCardGeneral?.amount}
              onChange={value =>
                updateNestedField(
                  'otherDedCreditCardGeneral',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.otherDedCreditCardGeneral.taxRate ?? ''}
              inputType={inputType?.otherDedCreditCardGeneral?.taxRate}
              onChange={value =>
                updateNestedField(
                  'otherDedCreditCardGeneral',
                  'taxRate',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedCreditCardGeneral.tax}
              inputType={inputType?.otherDedCreditCardGeneral?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedCreditCardGeneral',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '12pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '65pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '4pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              고정자산매입
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (45)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedCreditCardFixed.amount}
              inputType={inputType?.otherDedCreditCardFixed?.amount}
              onChange={value =>
                updateNestedField(
                  'otherDedCreditCardFixed',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.otherDedCreditCardFixed.taxRate ?? ''}
              inputType={inputType?.otherDedCreditCardFixed?.taxRate}
              onChange={value =>
                updateNestedField(
                  'otherDedCreditCardFixed',
                  'taxRate',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedCreditCardFixed.tax}
              inputType={inputType?.otherDedCreditCardFixed?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedCreditCardFixed',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '12pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              (15)
            </p>
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              의제매입세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (46)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedDeemedInput.amount}
              inputType={inputType?.otherDedDeemedInput?.amount}
              onChange={value =>
                updateNestedField(
                  'otherDedDeemedInput',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제5쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedDeemedInput.tax}
              inputType={inputType?.otherDedDeemedInput?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedDeemedInput',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              재활용폐자원등매입세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (47)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedRecycledInput.amount}
              inputType={inputType?.otherDedRecycledInput?.amount}
              onChange={value =>
                updateNestedField(
                  'otherDedRecycledInput',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제5쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedRecycledInput.tax}
              inputType={inputType?.otherDedRecycledInput?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedRecycledInput',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              그 밖의 공제
            </p>
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              과세사업전환 매입세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (48)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedTaxTrans.tax}
              inputType={inputType?.otherDedTaxTrans?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedTaxTrans',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              매입세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              재고매입세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (49)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.otherDedInventory.tax}
              inputType={inputType?.otherDedInventory?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedInventory',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
              }}
            >
              명세
            </p>
          </td>
        </tr>
        <tr style={{ height: '12pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              변제대손세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (50)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <NumericInput
                value={props.otherDedBadDebtRepay.amount}
                onChange={value =>
                  updateNestedField('otherDedBadDebtRepay', 'amount', value)
                }
              />
              <br />
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedBadDebtRepay.tax}
              inputType={inputType?.otherDedBadDebtRepay?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedBadDebtRepay',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.otherDedBadDebtRepay.taxRate ?? ''}
              inputType={inputType?.otherDedBadDebtRepay?.taxRate}
              onChange={value =>
                updateNestedField(
                  'otherDedBadDebtRepay',
                  'taxRate',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '100%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              외국인관광객에대한환급세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (51)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <NumericInput
                value={props.otherDedForeignerRefund.amount}
                onChange={v =>
                  updateNestedField('otherDedForeignerRefund', 'amount', v)
                }
              />
              <br />
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedForeignerRefund.tax}
              inputType={inputType?.otherDedForeignerRefund?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedForeignerRefund',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.otherDedForeignerRefund.taxRate ?? ''}
              inputType={inputType?.otherDedForeignerRefund?.taxRate}
              onChange={value =>
                updateNestedField(
                  'otherDedForeignerRefund',
                  'taxRate',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '169.0pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
            colSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (52)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedTotal.amount}
              inputType={inputType?.otherDedTotal?.amount}
              onChange={value =>
                updateNestedField(
                  'otherDedTotal',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '92pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.otherDedTotal.tax}
              inputType={inputType?.otherDedTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'otherDedTotal',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
          marginBottom: '2pt',
        }}
        cellSpacing="0"
        id="table3"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '83pt' }}></col>
          <col style={{ width: '30pt' }}></col>
          <col style={{ width: '56pt' }}></col>
          <col style={{ width: '23pt' }}></col>
          <col style={{ width: '80pt' }}></col>
          <col style={{ width: '43pt' }}></col>
          <col style={{ width: '91pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              (17)
            </p>
          </td>
          <td
            style={{
              width: '192.0pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={4}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '43pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '13pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              공제받지못할매입세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (53)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedInputTax.amount}
              inputType={inputType?.nonDedInputTax?.amount}
              onChange={value =>
                updateNestedField(
                  'nonDedInputTax',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedInputTax.tax}
              inputType={inputType?.nonDedInputTax?.tax}
              onChange={value =>
                updateNestedField(
                  'nonDedInputTax',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '4pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '8pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              공제받지
            </p>
          </td>
        </tr>
        <tr style={{ height: '4pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '9pt',
            }}
            colSpan={3}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              공통매입세액중면세사업등해당세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '9pt',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (54)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '9pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedCommonTax.amount}
              inputType={inputType?.nonDedCommonTax?.amount}
              onChange={value =>
                updateNestedField(
                  'nonDedCommonTax',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '9pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '9pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedCommonTax.tax}
              inputType={inputType?.nonDedCommonTax?.tax}
              onChange={value =>
                updateNestedField(
                  'nonDedCommonTax',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              못할
            </p>
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              매입세액
            </p>
          </td>
          <td
            style={{
              width: '113pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '15pt',
            }}
            colSpan={2}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              대손처분받은 세액
            </p>
          </td>
          <td
            style={{
              width: '56pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '15pt',
            }}
            rowSpan={2}
          ></td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '15pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (55)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '15pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedBadDebtDisposition.amount}
              inputType={inputType?.nonDedBadDebtDisposition?.amount}
              onChange={value =>
                updateNestedField(
                  'nonDedBadDebtDisposition',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '15pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '15pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedBadDebtDisposition.tax}
              inputType={inputType?.nonDedBadDebtDisposition?.tax}
              onChange={value =>
                updateNestedField(
                  'nonDedBadDebtDisposition',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '7.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              명세
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169.0pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
            }}
            colSpan={3}
          >
            <p
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                margin: '0',
                padding: '0',
                display: 'inline',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (56)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedTotal.amount}
              inputType={inputType?.nonDedTotal?.amount}
              onChange={value =>
                updateNestedField(
                  'nonDedTotal',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.nonDedTotal.tax}
              inputType={inputType?.nonDedTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'nonDedTotal',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
          marginBottom: '2pt',
        }}
        cellSpacing="0"
        id="table4"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '59pt' }}></col>
          <col style={{ width: '51pt' }}></col>
          <col style={{ width: '59pt' }}></col>
          <col style={{ width: '23pt' }}></col>
          <col style={{ width: '80pt' }}></col>
          <col style={{ width: '43pt' }}></col>
          <col style={{ width: '91pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '59pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '133.0pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
            colSpan={3}
          >
            <p
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                margin: '0',
                padding: '0',
                display: 'inline-block',
                width: '100%',
                textAlign: 'left',
                paddingLeft: '36pt',
              }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '43pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '13pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '110pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              전자신고 세액공제
            </p>
          </td>
          <td
            style={{
              width: '59pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          ></td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (57)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditElectronicReport.tax}
              inputType={inputType?.creditElectronicReport?.tax}
              onChange={value =>
                updateNestedField(
                  'creditElectronicReport',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '9pt',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              (19)
            </p>
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              전자세금계산서발급세액공제
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (58)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditElectronicInvoice.tax}
              inputType={inputType?.creditElectronicInvoice?.tax}
              onChange={value =>
                updateNestedField(
                  'creditElectronicInvoice',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '4pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              택시운송사업자경감세액
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (59)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
            rowSpan={2}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditTaxiTransport.tax}
              inputType={inputType?.creditTaxiTransport?.tax}
              onChange={value =>
                updateNestedField(
                  'creditTaxiTransport',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              그 밖의
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              경감ㆍ공제
            </p>
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              대리납부세액공제
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (60)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditProxyPayment.tax}
              inputType={inputType?.creditProxyPayment?.tax}
              onChange={value =>
                updateNestedField(
                  'creditProxyPayment',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s2"
              style={{
                paddingLeft: '13pt',
                paddingRight: '12pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              세액 명세
            </p>
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              현금영수증사업자세액공제
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (61)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditCashReceiptBiz.tax}
              inputType={inputType?.creditCashReceiptBiz?.tax}
              onChange={value =>
                updateNestedField(
                  'creditCashReceiptBiz',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.creditOther.taxRate ?? ''}
              inputType={inputType?.creditOther?.taxRate}
              onChange={value =>
                updateNestedField('creditOther', 'taxRate', value)
              }
            />
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              기타
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (62)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditOther.tax}
              inputType={inputType?.creditOther?.tax}
              onChange={value =>
                updateNestedField(
                  'creditOther',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.creditTotal.tax}
              inputType={inputType?.creditTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'creditTotal',
                  'tax',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
          >
            <p
              className=""
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                padding: '0',
                margin: '0',
              }}
            >
              (63)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.creditTotal.tax}
              inputType={inputType?.creditTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'creditTotal',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
          marginBottom: '2pt',
        }}
        cellSpacing="0"
        id="table5"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '71pt' }}></col>
          <col style={{ width: '98pt' }}></col>
          <col style={{ width: '23pt' }}></col>
          <col style={{ width: '80pt' }}></col>
          <col style={{ width: '43pt' }}></col>
          <col style={{ width: '91pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            rowSpan={21}
          >
            <p style={{ textIndent: '0pt', textAlign: 'left' }}>
              <br />
            </p>
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              (29)
            </p>
            <p
              className="s2"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
              }}
            >
              가산세액 명세
            </p>
          </td>
          <td
            style={{
              width: '192pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={3}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '80pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              금액
            </p>
          </td>
          <td
            style={{
              width: '43pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              사업자미등록등
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (64)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyBizReg.amount}
              inputType={inputType?.penaltyBizReg?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyBizReg',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyBizReg.tax}
              inputType={inputType?.penaltyBizReg?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyBizReg',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '71pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={3}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              <br />
            </p>
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              세금계산서
            </p>
          </td>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              지연발급등
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (65)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyTaxInvoiceDelayIssue.amount}
              inputType={inputType?.penaltyTaxInvoiceDelayIssue?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyTaxInvoiceDelayIssue',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              1/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyTaxInvoiceDelayIssue.tax}
              inputType={inputType?.penaltyTaxInvoiceDelayIssue?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyTaxInvoiceDelayIssue',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              지연수취
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (66)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyTaxInvoiceDelayReceipt.amount}
              inputType={inputType?.penaltyTaxInvoiceDelayReceipt?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyTaxInvoiceDelayReceipt',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              5/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyTaxInvoiceDelayReceipt.tax}
              inputType={inputType?.penaltyTaxInvoiceDelayReceipt?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyTaxInvoiceDelayReceipt',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              미발급등
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (67)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyTaxInvoiceNonIssue.amount}
              inputType={inputType?.penaltyTaxInvoiceNonIssue?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyTaxInvoiceNonIssue',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyTaxInvoiceNonIssue.tax}
              inputType={inputType?.penaltyTaxInvoiceNonIssue?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyTaxInvoiceNonIssue',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '71pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                paddingRight: '7pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              전자세금계산서
              <br />
              발급명세
            </p>
          </td>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              지연전송
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (68)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyElecInvoiceDelayTrans.amount}
              inputType={inputType?.penaltyElecInvoiceDelayTrans?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyElecInvoiceDelayTrans',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              3/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyElecInvoiceDelayTrans.tax}
              inputType={inputType?.penaltyElecInvoiceDelayTrans?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyElecInvoiceDelayTrans',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              미전송
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (69)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyElecInvoiceNonTrans.amount}
              inputType={inputType?.penaltyElecInvoiceNonTrans?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyElecInvoiceNonTrans',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '8pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              5/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyElecInvoiceNonTrans.tax}
              inputType={inputType?.penaltyElecInvoiceNonTrans?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyElecInvoiceNonTrans',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '71pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              세금계산서합계표
            </p>
          </td>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제출불성실
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (70)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={
                props.penaltySummaryTableSubmitUnfaithful.amount
              }
              inputType={inputType?.penaltySummaryTableSubmitUnfaithful?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltySummaryTableSubmitUnfaithful',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '7pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              5/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltySummaryTableSubmitUnfaithful.tax}
              inputType={inputType?.penaltySummaryTableSubmitUnfaithful?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltySummaryTableSubmitUnfaithful',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              지연제출
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (71)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltySummaryTableDelaySubmit.amount}
              inputType={inputType?.penaltySummaryTableDelaySubmit?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltySummaryTableDelaySubmit',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '7pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              3/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltySummaryTableDelaySubmit.tax}
              inputType={inputType?.penaltySummaryTableDelaySubmit?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltySummaryTableDelaySubmit',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '71pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={4}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              <br />
            </p>
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              신고불성실
            </p>
          </td>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              무신고(일반)
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (72)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyNoReportGeneral.amount}
              inputType={inputType?.penaltyNoReportGeneral?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyNoReportGeneral',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyNoReportGeneral.tax}
              inputType={inputType?.penaltyNoReportGeneral?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyNoReportGeneral',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              무신고(부당)
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (73)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyNoReportFraud.amount}
              inputType={inputType?.penaltyNoReportFraud?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyNoReportFraud',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyNoReportFraud.tax}
              inputType={inputType?.penaltyNoReportFraud?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyNoReportFraud',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              과소ㆍ초과환급신고(일반)
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (74)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyUnderReportGeneral.amount}
              inputType={inputType?.penaltyUnderReportGeneral?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyUnderReportGeneral',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyUnderReportGeneral.tax}
              inputType={inputType?.penaltyUnderReportGeneral?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyUnderReportGeneral',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              과소ㆍ초과환급신고(부당)
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (75)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyUnderReportFraud.amount}
              inputType={inputType?.penaltyUnderReportFraud?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyUnderReportFraud',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyUnderReportFraud.tax}
              inputType={inputType?.penaltyUnderReportFraud?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyUnderReportFraud',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              납부지연
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (76)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyLatePayment.amount}
              inputType={inputType?.penaltyLatePayment?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyLatePayment',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyLatePayment.tax}
              inputType={inputType?.penaltyLatePayment?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyLatePayment',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              영세율과세표준신고불성실
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (77)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyZeroRateUnfaithful.amount}
              inputType={inputType?.penaltyZeroRateUnfaithful?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyZeroRateUnfaithful',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '7pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              5/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyZeroRateUnfaithful.tax}
              inputType={inputType?.penaltyZeroRateUnfaithful?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyZeroRateUnfaithful',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              현금매출명세서불성실
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (78)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyCashSalesUnfaithful.amount}
              inputType={inputType?.penaltyCashSalesUnfaithful?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyCashSalesUnfaithful',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '7pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              1/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.penaltyCashSalesUnfaithful.tax}
              inputType={inputType?.penaltyCashSalesUnfaithful?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyCashSalesUnfaithful',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              부동산임대공급가액명세서불성실
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (79)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyRealEstateUnfaithful.amount}
              inputType={inputType?.penaltyRealEstateUnfaithful?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyRealEstateUnfaithful',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '7pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              1/100
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.penaltyRealEstateUnfaithful.tax}
              inputType={inputType?.penaltyRealEstateUnfaithful?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyRealEstateUnfaithful',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '71pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
                lineHeight: '120%',
              }}
            >
              매입자납부특례
            </p>
          </td>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              거래계좌미사용
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (80)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltySpecialAccountUnused.amount}
              inputType={inputType?.penaltySpecialAccountUnused?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltySpecialAccountUnused',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.penaltySpecialAccountUnused.tax}
              inputType={inputType?.penaltySpecialAccountUnused?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltySpecialAccountUnused',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '98pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '11pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              거래계좌지연입금
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (81)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltySpecialAccountDelay.amount}
              inputType={inputType?.penaltySpecialAccountDelay?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltySpecialAccountDelay',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              제6쪽 참조
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.penaltySpecialAccountDelay.tax}
              inputType={inputType?.penaltySpecialAccountDelay?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltySpecialAccountDelay',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '8pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              신용카드매출전표등수령명세서미제출
              <span className="s6">･</span>
              과다기재
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (82)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltyCreditCardUnsubmitted.amount}
              inputType={inputType?.penaltyCreditCardUnsubmitted?.amount}
              onChange={value =>
                updateNestedField(
                  'penaltyCreditCardUnsubmitted',
                  'amount',
                  value
                )
              }
              
            />
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s5"
              style={{
                paddingTop: '2pt',
                textIndent: '0pt',
                lineHeight: '7pt',
                textAlign: 'center',
                fontSize: '8pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              5/1,000
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              
              value={props.penaltyCreditCardUnsubmitted.tax}
              inputType={inputType?.penaltyCreditCardUnsubmitted?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltyCreditCardUnsubmitted',
                  'tax',
                  value
                )
              }
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '169pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              합계
            </p>
          </td>
          <td
            style={{
              width: '23pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (83)
            </p>
          </td>
          <td
            style={{
              width: '80pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '43pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              backgroundColor: '#C1C1C1',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.penaltySumTotal.tax}
              inputType={inputType?.penaltySumTotal?.tax}
              onChange={value =>
                updateNestedField(
                  'penaltySumTotal',
                  'tax',
                  value
                )
              }
              
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
          marginBottom: '2pt',
        }}
        cellSpacing="0"
        id="table6"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '19pt' }}></col>
          <col style={{ width: '69pt' }}></col>
          <col style={{ width: '145pt' }}></col>
          <col style={{ width: '13pt' }}></col>
          <col style={{ width: '14pt' }}></col>
          <col style={{ width: '14pt' }}></col>
          <col style={{ width: '13pt' }}></col>
          <col style={{ width: '14pt' }}></col>
          <col style={{ width: '14pt' }}></col>
          <col style={{ width: '91pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            rowSpan={5}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                verticalAlign: 'middle',
                lineHeight: '120%',
              }}
            >
              <br />
            </p>
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              면세사업
              <br />
              수입금액
            </p>
          </td>
          <td
            style={{
              width: '88pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              업태
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
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              종목
            </p>
          </td>
          <td
            style={{
              width: '82pt',
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
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            colSpan={6}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              코드번호
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              금액
            </p>
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '19pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (84)
            </p>
          </td>
          <td
            style={{
              width: '69pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.taxFreeRevenue1.bizType ?? ''}
              inputType={inputType?.taxFreeRevenue1?.bizType}
              onChange={value =>
                updateNestedField('taxFreeRevenue1', 'bizType', value)
              }
            />
          </td>
          <td
            style={{
              width: '145pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.taxFreeRevenue1.bizItem ?? ''}
              inputType={inputType?.taxFreeRevenue1?.bizItem}
              onChange={value =>
                updateNestedField('taxFreeRevenue1', 'bizItem', value)
              }
            />
          </td>
          <td
            style={{
              width: '13pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue1.code)[0]}
              inputType={inputType?.taxFreeRevenue1?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue1', 0, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue1.code)[1]}
              inputType={inputType?.taxFreeRevenue1?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue1', 1, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue1.code)[2]}
              inputType={inputType?.taxFreeRevenue1?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue1', 2, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '13pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue1.code)[3]}
              inputType={inputType?.taxFreeRevenue1?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue1', 3, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue1.code)[4]}
              inputType={inputType?.taxFreeRevenue1?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue1', 4, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue1.code)[5]}
              inputType={inputType?.taxFreeRevenue1?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue1', 5, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.taxFreeRevenue1.amount}
              inputType={inputType?.taxFreeRevenue1?.amount}
              onChange={value =>
                updateNestedField(
                  'taxFreeRevenue1',
                  'amount',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '19pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (85)
            </p>
          </td>
          <td
            style={{
              width: '69pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.taxFreeRevenue2.bizType ?? ''}
              inputType={inputType?.taxFreeRevenue2?.bizType}
              onChange={value =>
                updateNestedField('taxFreeRevenue2', 'bizType', value)
              }
            />
          </td>
          <td
            style={{
              width: '145pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.taxFreeRevenue2.bizItem ?? ''}
              inputType={inputType?.taxFreeRevenue2?.bizItem}
              onChange={value =>
                updateNestedField('taxFreeRevenue2', 'bizItem', value)
              }
            />
          </td>
          <td
            style={{
              width: '13pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue2.code)[0]}
              inputType={inputType?.taxFreeRevenue2?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue2', 0, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue2.code)[1]}
              inputType={inputType?.taxFreeRevenue2?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue2', 1, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue2.code)[2]}
              inputType={inputType?.taxFreeRevenue2?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue2', 2, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '13pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue2.code)[3]}
              inputType={inputType?.taxFreeRevenue2?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue2', 3, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue2.code)[4]}
              inputType={inputType?.taxFreeRevenue2?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue2', 4, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenue2.code)[5]}
              inputType={inputType?.taxFreeRevenue2?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenue2', 5, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.taxFreeRevenue2.amount}
              inputType={inputType?.taxFreeRevenue2?.amount}
              onChange={value =>
                updateNestedField(
                  'taxFreeRevenue2',
                  'amount',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '19pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (86)
            </p>
          </td>
          <td
            style={{
              width: '69pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              수입금액제외
            </p>
          </td>
          <td
            style={{
              width: '145pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              value={props.taxFreeRevenueExcluded.bizItem ?? ''}
              inputType={inputType?.taxFreeRevenueExcluded?.bizItem}
              onChange={value =>
                updateNestedField(
                  'taxFreeRevenueExcluded',
                  'bizItem',
                  value
                )
              }
            />
          </td>
          <td
            style={{
              width: '13pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenueExcluded.code)[0]}
              inputType={inputType?.taxFreeRevenueExcluded?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenueExcluded', 0, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenueExcluded.code)[1]}
              inputType={inputType?.taxFreeRevenueExcluded?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenueExcluded', 1, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenueExcluded.code)[2]}
              inputType={inputType?.taxFreeRevenueExcluded?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenueExcluded', 2, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '13pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenueExcluded.code)[3]}
              inputType={inputType?.taxFreeRevenueExcluded?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenueExcluded', 3, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenueExcluded.code)[4]}
              inputType={inputType?.taxFreeRevenueExcluded?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenueExcluded', 4, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '14pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <Input
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                padding: '0.2pt',
              }}
              maxLength={1}
              value={getCodeDigits(props.taxFreeRevenueExcluded.code)[5]}
              inputType={inputType?.taxFreeRevenueExcluded?.code}
              onChange={value =>
                updateCodeDigit('taxFreeRevenueExcluded', 5, value)
              }
              type="text"
            />
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.taxFreeRevenueExcluded.amount}
              inputType={inputType?.taxFreeRevenueExcluded?.amount}
              onChange={value =>
                updateNestedField(
                  'taxFreeRevenueExcluded',
                  'amount',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '88pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            colSpan={1}
          ></td>
          <td
            style={{
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
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          ></td>
          <td
            style={{
              width: '145pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <p
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              <br />
            </p>
          </td>
          <td
            style={{
              width: '82pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
            colSpan={6}
          >
            <p
              className="s4"
              style={{
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'center',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (87) 합계
            </p>
          </td>
          <td
            style={{
              width: '91pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                margin: '0',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.taxFreeRevenueTotal.amount}
              inputType={inputType?.taxFreeRevenueTotal?.amount}
              onChange={value =>
                updateNestedField(
                  'taxFreeRevenueTotal',
                  'amount',
                  value
                )
              }
              
            />
          </td>
        </tr>
      </table>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: '5.329pt',
          tableLayout: 'fixed',
          width: '624pt',
        }}
        cellSpacing="0"
        id="table7"
      >
        <colgroup>
          <col style={{ width: '73pt' }}></col>
          <col style={{ width: '88pt' }}></col>
          <col style={{ width: '318pt' }}></col>
        </colgroup>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
              textAlign: 'center',
            }}
            rowSpan={2}
          >
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              계산서 발급
            </p>
            <p
              className="s2"
              style={{
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              및 수취 명세
            </p>
          </td>
          <td
            style={{
              width: '88pt',
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
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '9pt',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (88)계산서발급금액
            </p>
          </td>
          <td
            style={{
              width: '318pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '188pt',
                height: '12pt',
                border: 'none',
                outline: 'none',
                margin: '0',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.billIssuedAmount.amount}
              inputType={inputType?.billIssuedAmount?.amount}
              onChange={value =>
                updateNestedField(
                  'billIssuedAmount',
                  'amount',
                  value
                )
              }
              
            />
          </td>
        </tr>
        <tr style={{ height: '13.5pt' }}>
          <td
            style={{
              width: '88pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#808080',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '1pt',
                textIndent: '0pt',
                lineHeight: '120%',
                textAlign: 'left',
                fontSize: '9pt',
                fontFamily: '돋움체, monospace',
                letterSpacing: '0',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                wordSpacing: '0',
              }}
            >
              (89)계산서수취금액
            </p>
          </td>
          <td
            style={{
              width: '318pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#808080',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#808080',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              verticalAlign: 'middle',
              height: '12pt',
            }}
          >
            <NumericInput
              style={{
                width: '188pt',
                height: '12pt',
                border: 'none',
                outline: 'none',
                margin: '0',
                textAlign: 'right',
                fontFamily: 'Arial',
                fontSize: '8pt',
                background: 'transparent',
                boxSizing: 'border-box',
                paddingTop: '0.2pt',
                paddingBottom: '0.2pt',
                paddingLeft: '0.2pt',
                paddingRight: '3pt',
              }}
              value={props.billReceivedAmount.amount}
              inputType={inputType?.billReceivedAmount?.amount}
              onChange={value =>
                updateNestedField(
                  'billReceivedAmount',
                  'amount',
                  value
                )
              }
              
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
