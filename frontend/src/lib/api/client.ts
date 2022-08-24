import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

// applyCaseMiddleware:
// axiosの通信で下記の変換を行ってくれる
// ・受け取ったレスポンスの値をスネークケース→キャメルケース
// ・送信するリクエストの値をキャメルケース→スネークケース

const options = {
  ignoreHeaders: true // ヘッダーはケバブケースのままで良いので適用を無視
};

const client = applyCaseMiddleware(axios.create({
  baseURL: "http://localhost:3001/api/v1"
}), options);

export default client;