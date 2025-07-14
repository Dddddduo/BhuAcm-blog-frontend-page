import { Result } from "@/model";
import request from "@/utils/request";
import { AxiosPromise } from "axios";

/**
 * gpt问答
 * @param message 问题内容
 * @returns 回答内容
 */
export function chatgpt(message: string): AxiosPromise<Result<string>> {
	return request({
		url: "/deepseek",
		method: "get",
		params: { message } // 修改为params传递查询参数
	});
}
