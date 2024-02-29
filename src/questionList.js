import 김치찌개 from './image/김치찌개.png'
import 된장찌개 from './image/된장찌개.png'
import 고등어무조림 from './image/고등어무조림.png'
import 짜글이 from './image/짜글이.png'
import 라면 from './image/라면.png'
import 칼국수 from './image/칼국수.png'
import 민어전 from './image/민어전.png'
import 동그랑땡 from './image/동그랑땡.png'
import 고등어회 from './image/고등어회.png'
import 흑돼지구이 from './image/흑돼지구이.png'
import 불고기 from './image/불고기.png'
import 제육볶음 from './image/제육볶음.png'
import 간장게장 from './image/간장게장.png'
import 양념게장 from './image/양념게장.png'
import 나베전골 from './image/나베전골.png'
import 짬뽕탕 from './image/짬뽕탕.png'
import 두부조림 from './image/두부조림.png'
import 간장계란조림 from './image/간장계란조림.png'

import 간장 from './image/간장.png'
import 고기파 from './image/고기파.png'
import 고추장 from './image/고추장.png'
import 깔끔한 from './image/깔끔한.png'
import 생선파 from './image/생선파.png'
import 얼큰한 from './image/얼큰한.png'


export const optionList = [
    {
        options: ['김치찌개', '된장찌개'],
        imgPath: [ 김치찌개 , 된장찌개]
    },
    {
        options: ['고등어무조림', '짜글이'],
        imgPath: [ 고등어무조림, 짜글이]
    },
    {
        options: ['라면', '칼국수'],
        imgPath: [라면,칼국수]
    },
    {
        options: ['민어전', '동그랑땡'],
        imgPath: [민어전 , 동그랑땡]
    },
    {
        options: ['고등어회', '흑돼지구이'],
        imgPath: [고등어회 , 흑돼지구이]
    },
    {
        options: ['불고기', '제육볶음'],
        imgPath: [불고기 , 제육볶음]
    },
    {
        options: ['간장게장.', '양념게장'],
        imgPath: [간장게장 , 양념게장]
    },
    {
        options: ['나베전골', '짬뽕탕'],
        imgPath: [나베전골 , 짬뽕탕]
    },
    {
        options: ['두부조림', '간장계란조림'],
        imgPath: [두부조림 , 간장계란조림]
    },
];



export const questionList = [
    {
        question: "1. 평생 한 가지만 찌개만 먹을 수 있다면?",
        A: "S",
        B: "N"
    },
    {
        question: "2. 뜨거운 흰 쌀밥에 같이 먹고 싶은 것은?",
        A: "E",
        B: "F"
    },
    {
        question: "3. 둘 중 하나의 음식만 면치기 할 수 있다면?",
        A: "S",
        B: "N"
    },
    {
        question: "4. 명절 둘 중 한 가지 전을 먹는다면?",
        A: "T",
        B: "F"
    },
    {
        question: "5. 제주도에서 둘 중 꼭 먹어야하는 것은?",
        A: "T",
        B: "F"
    },
    {
        question: "6. 둘 중 밥상에 올리고 싶은 고기 요리는?",
        A: "I",
        B: "E"
    },
    {
        question: "7. 둘 중 더 밥도둑은?",
        A: "I",
        B: "E"
    },
    {
        question: "8. 안주로 더 좋은 국물요리는?",
        A: "N",
        B: "S"
    },
    {
        question: "9. 둘 중 더 먹고 싶은 밥 반찬은?",
        A: "E",
        B: "I"
    },
]

export const resultList = {
    E: ["고추장 베이스의 반찬",고추장],
    I: ["간장 베이스의 반찬",간장],
    S: ["얼큰한 국물",얼큰한],
    N: ["깔끔한 국물",깔끔한],
    F: ["고기파 밥상이 완성됐어요!!",고기파],
    T: ["생선파 밥상이 완성됐어요!!",생선파],
}