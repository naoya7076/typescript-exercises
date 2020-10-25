export default null;
const c = 'pineapples'
let e = {type:'ficus'}
let f = [1, false]
const g = [2]
let h = null

/**
 * 3.4演習問題の2
 * エラーを投げる理由と解決方法を書く
 */

 /**
  *  a. iには'3'という型が入っているから
  *  */
 let i: 3 = 3;
 i = 3

 /**
  * jはnumber[]だからstringは入らない
  */
 let j = [1,2,3]
 j.push(4)

 /**
  * neverにnumberを割り当てることはできない
  * neverはwhile(true)やthrow Errorなどの返り値である
  */
let k: never = 4

/**
 * unknownで計算などを行いたい場合は型を明らかにしてから行う
 */
let l : unknown = 4
if (typeof l === 'number'){
  let m = l * 2
}