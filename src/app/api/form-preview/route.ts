import { readFile } from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const formCodeToFile: Record<string, string> = {
  '1500': '부가세15호-도장.html',
  '1600': '부가세16호(갑)-을표추가.html',
  '1900': '부가세19호(갑)-도장+을표.html',
  '2000': '부가세20호-도장.html',
  '2100': '부가세21호(1)-도장.html',
  '2500': '부가세25호-페이지추가.html',
  '2700': '부가세27호-도장.html',
  '2800': '부가세28호-페이지추가.html',
  '3200': '부가세32호-페이지추가.html',
  '3300': '부가세33호-도장.html',
  '3800': '부가세38호(갑)-을표추가.html',
  '3900': '부가세39호(갑)-을표추가.html',
  '4000': '부가세40호(갑)-을표추가.html',
  '4100': '부가세41호(갑)-도장+을표.html',
  '4200': '부가세42호-페이지추가.html',
  '4700': '부가세47(갑)-을표추가.html',
  '6900': '조특법69(갑)-도장+을표.html',
  '6902': '조특법69호의2(갑)-도장+을표.html',
};

export async function GET(request: NextRequest) {
  const formCode = request.nextUrl.searchParams.get('formCode');
  if (!formCode) {
    return NextResponse.json({ error: 'formCode is required' }, { status: 400 });
  }

  const fileName = formCodeToFile[formCode];
  if (!fileName) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const filePath = path.join(
      process.cwd(),
      'src/components/htmlSamples',
      fileName
    );
    const html = await readFile(filePath, 'utf-8');
    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
}
