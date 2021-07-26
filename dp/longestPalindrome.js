/**
 * 动态规划
 * 5. 最长回文子串
 * 
 * 给你一个字符串s，找出s中最长的回文子串
 * 
 *  "babad" -> "bas" ("aba"同样符合)
 */

function check(s) {
  let res = true

  for(let i = 0;i < s.length / 2;i++) {
    if(s[i] !== s[s.length - i - 1]) {
      res = false
      break
    }
  }

  return res
}

 
 /**
  * longestPalindrome
  * @param {number}} number
  * @return {number}
  */
 function longestPalindrome_exhaustion (s) {
   let res = ""
   // 穷举
   for(let i = 0; i < s.length; i++) {
    for(let j = i+1; j < s.length; j++) {
      let copy = s.slice(i, j)
      if(check(copy) && copy.length > res.length) {
        res = copy
      }
    }
   }

   return res
 };
 
 function longestPalindrome_exhaustion_memo (s) {

 };
 
function longestPalindrome_dp (s) {
  if(s.length === 1) return s;
  if(s.length === 2) return s[0] === s[1] ? s : s[0]
  // dp[i][j] 表示：子串 s[i..j] 是否为回文子串，这里子串 s[i..j] 定义为左闭右闭区间，即可以取到 s[i] 和 s[j]。
  let dp = []
  for(let i = 0;i < s.length;i++) {
    dp.push([])
  }

  let start =0,end = 0;

  for(let j = 1; j < s.length;j++) {
    for(let i = 0; i < j; i++) {
      if(s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }

        if (dp[i][j] && (j - i > end - start)) {
          end = j;
          start = i;
        }
      }
    } 
  }

  console.log(dp)

  return s.slice(start, end+1)
};
 
 
 const case1 = "aaaa"
//  const result1 = longestPalindrome_exhaustion(case1)
//  const result2 = longestPalindrome_exhaustion_memo(case1)
//  const result3 = longestPalindrome_dp(case1)
 // console.log("count1===", count1)
 // console.log("count2===", count2)
 
//  console.log(result3)
//  console.log(result2)
//  console.log(result3)