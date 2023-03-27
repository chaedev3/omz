package com.ssafy.omz.dto.resp;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.entity.Chat;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatPagingResponseDto {

    private Long chatRoomId; // 필요 없을 거 같은데

    private String message;

    private String memberId;

    private String nickname;

    private String createdTime;

    public static ChatPagingResponseDto of(Chat chat){
        return ChatPagingResponseDto.builder()
                .memberId(String.valueOf(chat.getFromMember().getMemberId()))
                .nickname(chat.getFromMember().getNickname())
                .chatRoomId(chat.getChatRoom().getChatRoomId())
                .createdTime(chat.getCreatedTime())
                .message(chat.getMessage())
                .build();
    }

    public static ChatPagingResponseDto byChatMessageDto(ChatMessage chatMessage){
        return ChatPagingResponseDto.builder()
                .memberId(chatMessage.getMemberId())
                .nickname(chatMessage.getNickName())
                .createdTime(chatMessage.getCreatedTime())
                .chatRoomId(Long.valueOf(chatMessage.getRoomId()))
                .message(chatMessage.getMessage())
                .build();
    }
}