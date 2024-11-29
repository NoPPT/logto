import { z } from 'zod';

export const wechatConfigGuard = z.object({
  appId: z.string(),
  appSecret: z.string(),
  scope: z.string().optional(),
});

export type WechatConfig = z.infer<typeof wechatConfigGuard>;

export const accessTokenResponseGuard = z.object({
  access_token: z.string().optional(),
  expires_in: z.number().optional(), // In seconds
  refresh_token: z.string().optional(),
  openid: z.string().optional(),
  scope: z.string().optional(),
  is_snapshotuser: z.number().optional(),
  unionid: z.string().optional(),
  errcode: z.number().optional(),
  errmsg: z.string().optional(),
});

export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;

export type GetAccessTokenErrorHandler = (accessToken: Partial<AccessTokenResponse>) => void;

export const userInfoResponseGuard = z.object({
  openid: z.string().optional(),
  nickname: z.string().optional(),
  sex: z.number().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  headimgurl: z.string().optional(),
  unionid: z.string().optional(),
  privilege: z.array(z.string()).optional(),
  errcode: z.number().optional(),
  errmsg: z.string().optional(),
});

export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;

export type UserInfoResponseMessageParser = (userInfo: Partial<UserInfoResponse>) => void;

export const authResponseGuard = z.object({ code: z.string() });
