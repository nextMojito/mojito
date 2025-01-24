import { create } from "zustand";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import connectDB from "@/lib/db";
import { Member, MemberStore } from "@/lib/schemas/member";
import { NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
    // 카카오 Provider
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      //db정보 session 저장
      const user = await Member.findOne({ email: token.email });
      session.user.id = user._id;
      session.user.nickname = user.nickname;
      return session;
    },
    async signIn({ user, account }) {
      if (account && user.name && user.email) {
        const { name, email } = user;
        const { provider } = account;

        await connectDB();
        const existUser = await Member.findOne({ email });

        // 첫 로그인인 경우
        if (!existUser) {
          try {
            //회원 db 생성
            const newMember = await Member.create({
              name: name,
              email: email,
              provider: provider,
              nickname: name,
            });

            //member store db 생성
            const newStore = await MemberStore.create({
              userId: newMember.id,
            });

            console.log("📍회원가입 성공", NextResponse.json(newStore));
          } catch (error) {
            console.log("🔥회원가입 실패", error);
          }
        }
      }

      return true;
    },
  },
});
export { handler as GET, handler as POST };
