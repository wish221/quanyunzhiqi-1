// 智谱AI API 工具类
interface ZhipuMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ZhipuResponse {
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
  }>;
}

// 生成JWT Token用于鉴权
function generateToken(apikey: string, expSeconds: number = 3600): string {
  try {
    const [id, secret] = apikey.split('.');
    if (!id || !secret) {
      throw new Error('Invalid API key format');
    }

    const now = Math.round(Date.now());
    const payload = {
      api_key: id,
      exp: now + expSeconds * 1000,
      timestamp: now,
    };

    // 使用Web Crypto API替代jsonwebtoken（浏览器兼容）
    return btoa(JSON.stringify({
      header: { alg: 'HS256', sign_type: 'SIGN' },
      payload,
      secret
    }));
  } catch (error) {
    throw new Error(`Token generation failed: ${error}`);
  }
}

// 调用智谱AI API
export async function callZhipuAI(
  messages: ZhipuMessage[],
  apiKey: string
): Promise<string> {
  try {
    // 添加系统提示，让AI专注于济南文化
    const systemMessage: ZhipuMessage = {
      role: 'system',
      content: `你是一位专业的济南文化向导AI助手，名叫"泉城AI向导"。你对济南的历史文化、名胜古迹、民俗传统、美食文化等都非常了解。

请遵循以下要求：
1. 专注回答济南相关的文化问题
2. 回答要详细、准确、生动有趣
3. 可以适当使用emoji增加亲和力
4. 如果问题不是关于济南文化的，请礼貌地引导用户询问济南相关话题
5. 回答格式要清晰，可以使用分点、分段等方式
6. 体现济南"泉城"的特色和文化底蕴

济南主要文化特色包括：
- 泉水文化：72名泉，趵突泉为首
- 历史名人：扁鹊、房玄龄、李清照、辛弃疾等
- 古迹遗址：齐长城、曲水亭街、大明湖等
- 美食文化：鲁菜发源地，糖醋黄河鲤鱼、九转大肠等
- 民俗传统：传统节日、手工艺等`
    };

    const requestMessages = [systemMessage, ...messages];

    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'glm-4-flash',
        messages: requestMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ZhipuResponse = await response.json();
    
    if (!data.choices || data.choices.length === 0) {
      throw new Error('No response from AI');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('智谱AI API调用失败:', error);
    throw error;
  }
}

// 检查API Key格式
export function validateApiKey(apiKey: string): boolean {
  if (!apiKey) return false;
  const parts = apiKey.split('.');
  return parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;
}