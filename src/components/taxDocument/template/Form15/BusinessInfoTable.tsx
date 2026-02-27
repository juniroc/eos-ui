import React from 'react';
import {
  BusinessInfo,
  Form15Data,
  Form15InputData,
} from '@/components/taxDocument/template/Form15/types';
import Input from '@/components/taxDocument/template/common/Input';

export type Props = BusinessInfo & {
  onChange: <K extends keyof Form15Data>(
    field: K,
    value: Form15Data[K]
  ) => void;
  inputType?: Form15InputData;
};

function BusinessInfoTable({
  companyName,
  inputType,
  bizNumber,
  bizType,
  bizItem,
  onChange,
}: Props) {
  return (
    <li data-list-text="1.">
      <p
        className="s5"
        style={{
          paddingTop: '1pt',
          paddingLeft: '22pt',
          textIndent: '-13pt',
          textAlign: 'left',
          lineHeight: '150%',
        }}
      >
        신고인 인적사항
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
            }}
          >
            <p
              className="s6"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ① 상호<span className="s7">(법인명)</span>
            </p>
          </td>
          <td
            style={{
              width: '162pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={companyName}
              onChange={value => onChange('companyName', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            inputType={inputType?.companyName}
            />
          </td>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
            }}
          >
            <p
              className="s6"
              style={{
                paddingTop: '1pt',
                paddingLeft: '5pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ② 사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '162pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={bizNumber}
              onChange={value => onChange('bizNumber', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            inputType={inputType?.bizNumber}
            />
          </td>
        </tr>
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              className="s6"
              style={{
                paddingTop: '1pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ③ 업태
            </p>
          </td>
          <td
            style={{
              width: '162pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={bizType}
              onChange={value => onChange('bizType', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            inputType={inputType?.bizType}
            />
          </td>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
          >
            <p
              className="s6"
              style={{
                paddingTop: '1pt',
                paddingLeft: '5pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ④ 종목
            </p>
          </td>
          <td
            style={{
              width: '162pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={bizItem}
              onChange={value => onChange('bizItem', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            inputType={inputType?.bizItem}
            />
          </td>
        </tr>
      </table>
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          height: '5pt',
          margin: '0pt',
          padding: '0pt',
          lineHeight: '5pt',
        }}
      >
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
    </li>
  );
}

export default BusinessInfoTable;
