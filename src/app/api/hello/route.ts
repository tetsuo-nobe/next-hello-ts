// POST メソッド時に実行する関数
export async function POST(request: Request) {
  const reqBody: any = await request.json()  
  const name: string = reqBody.yourname
  const msg: string = `こんにちは！ ${name}`  
  return Response.json({ message: msg })
}
