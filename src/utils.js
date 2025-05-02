import { LoremIpsum } from "lorem-ipsum";

export function createElement(tag, id, content){
    const el = document.createElement(tag)
    el.id = id
    el.textContent = content;
    return el
}

export const lorem = new LoremIpsum({
    sentencesPerParagraph:{
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})