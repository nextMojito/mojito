"use client";

import style from "./ProfileSettingModal.module.scss";
import Button from "../button/Button";
import Person from "@public/Person.svg";
import EmojiPickerUI from "@/components/emoji_picker/EmojiPicker";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useModalStore } from "@/lib/store/modalStore";
import { useUserStore } from "@/lib/store/userStore";

type ProfileSettingModalProps = {
  nickname: string;
  profileImage: string | null;
  onSave: (name: string, profileImage: string) => Promise<void>;
};

export default function ProfileSettingModal({
  nickname,
  profileImage,
  onSave,
}: ProfileSettingModalProps) {
  const { profileModalOpen, closeProfileModal } = useModalStore();
  const { profileImageState, nicknameState } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [nicknameLocal, setNicknameLocal] = useState("");

  const [profileImageLocal, setProfileImageLocal] = useState<string>(
    profileImage || ""
  );

  useEffect(() => {
    if (nickname && nickname.trim() !== "") {
      setNicknameLocal(nickname);
    }
  }, [nickname]);
  // 닉네임 버튼을 클릭 시 수정 모드로 전환하는 함수
  const handleModifyNickname = (name: string) => {
    if (name.length < 1 || name.trim() === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }
    setNicknameLocal(name);
    setIsEditing(false);
  };
  // 프로필 저장 버튼 클릭 시 실행되는 함수
  const handlesaveProfile = (
    event: React.MouseEvent<HTMLButtonElement>,
    modified_nickname: string,
    modified_profileImage: string
  ) => {
    // 닉네임과 프로필 이미지가 변경되지 않았을 때
    if (
      profileImageState === modified_profileImage &&
      nicknameState === modified_nickname
    ) {
      event.preventDefault();
      alert("변경된 내용이 없습니다.");
      return;
    }
    // 닉네임이 비어있을 때
    if (modified_nickname.trim() === "") {
      event.preventDefault();
      alert("닉네임을 입력해주세요.");
      return;
    }
    // 정상 작동시
    onSave(modified_nickname, modified_profileImage)
      .then(() => {
        alert("✨프로필이 저장되었습니다.✨");
        console.log("프로필 저장 성공:", {
          modified_nickname,
          modified_profileImage,
        });
        closeProfileModal();
      })
      .catch((error: unknown) => {
        console.error("프로필 저장 실패:", error);
        alert("프로필 저장에 실패했습니다. 다시 시도해주세요.");
      });
  };
  // 취소 버튼 클릭 시 닉네임과 프로필 이미지, 닉네임 수정 상태 초기화
  const handleCancelProfile = () => {
    setNicknameLocal(nickname);
    setProfileImageLocal(profileImage || "");
    setIsEditing(false);
    closeProfileModal();
  };

  if (!profileModalOpen) return null;

  return (
    <div className={style.overlay}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={`${style.modal_inner}`}>
          <div className={`${style.modal_upper}`}>
            <Button
              text="취소"
              color="red"
              className={`${style.close_button}`}
              onClick={handleCancelProfile}
            ></Button>
            <Button
              text="완료"
              color="orange"
              className={`${style.confirm_button}`}
              onClick={(event: any) =>
                handlesaveProfile(event, nicknameLocal, profileImageLocal)
              }
            ></Button>
            <h1 className={`${style.profile_title}`}>프로필 설정</h1>
            <div className={style.profile_image}>
              {profileImageLocal ? (
                <img src={profileImageLocal} alt="profile Image"></img>
              ) : profileImage ? (
                <img src={profileImage}></img>
              ) : (
                <Person />
              )}
            </div>

            <div className={`${style.nickname_container}`}>
              <h5>닉네임</h5>
              {!isEditing ? (
                <button
                  className={`${style.nickname_button}`}
                  onClick={() => setIsEditing(true)}
                >
                  {nickname.length < 1 ? (
                    <p className={`${style.empty_nickname}`}>
                      닉네임을 설정해주세요
                    </p>
                  ) : (
                    nicknameLocal
                  )}
                </button>
              ) : (
                <div className={`${style.nickname_edit}`}>
                  <div className={`${style.nickname_input_container}`}>
                    <input
                      type="text"
                      value={nicknameLocal}
                      onChange={(e) => setNicknameLocal(e.target.value)}
                      maxLength={15}
                      className={`${style.nickname_input}`}
                    />
                    <button
                      className={`${style.nickname_edit_button}`}
                      onClick={() => handleModifyNickname(nicknameLocal)}
                    >
                      수정
                    </button>
                  </div>
                  <p
                    className={`${
                      nicknameLocal.length >= 15
                        ? style.nickname_warning
                        : style.nickname_none
                    }`}
                  >
                    닉네임은 최대 15자까지 입력 가능합니다.
                  </p>
                </div>
              )}
            </div>
          </div>
          <EmojiPickerUI setProfileImageLocal={setProfileImageLocal} />
        </div>
      </div>
    </div>
  );
}
