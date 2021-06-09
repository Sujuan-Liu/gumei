const fillArray = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * len));
  }
  return arr;
};

const normalizeArray = arr => {
  const newArr = [];
  for (const i in arr) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  newArr.sort(function (a, b) {
    return a - b; // asc
  });
  return newArr;
};

const list = [1, 2, 3];
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
      console.log(num * num);
    }, 1000);
  });
};

let promise = Promise.resolve();
function test(i = 0) {
  if (i === list.length) return;
  promise = promise.then(() => square(list[i]));
  test(i + 1);
}
// test();

const normalize = str => {
  let arr = str.split(/[\[\]]/).filter(Boolean);
  let i = 0,
    obj = {},
    cur = obj;
  while (i < arr.length) {
    if (i > 0) cur = cur.children = {};
    cur.value = arr[i];
    i++;
  }
  console.log(obj);
  return obj;
};

// normalize('[abc[bcd[def]]]');

const indexOf = (a, b) => {
  const reg = new RegExp(`${b}`, 'gi');
  const c = reg.exec(a);
  console.log(c);
  return c ? c.index : -1;
};

// indexOf('szdfargrgegdfgsdfgr', 'gR');

// binary search

const all = [];
const search = (nums, target) => {
  const findNextTillNotTarget = (p, target) => {
    if (nums[p] === target) {
      all.push({ p, target });
      findNextTillNotTarget(p + 1, target);
    }
  };
  const helpSearch = (nums, begin, end, target) => {
    // if (begin > end) return -1; // not found or end
    let mid = (begin + end) >>> 1; // the same as Math.floor((begin+end)/2)
    if (nums[mid] == target) {
      all.push({ p: mid, target });
      findNextTillNotTarget(mid + 1, target);
    } else if (nums[mid] > target) helpSearch(nums, begin, mid - 1, target);
    else {
      helpSearch(nums, mid + 1, end, target);
    }
  };
  helpSearch(nums, 0, nums.length - 1, target); //initial
  console.log(all);
};

const sortArr = [2, 4, 5, 6, 7, 8, 8, 2, 4, 5, 6, 7, 8, 9, 9, 0, 7, 5, 4].sort(
  (a, b) => {
    return a - b;
  }
);
// search(sortArr, 8);

/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * 
 *  示例 1：
    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2,2]

    示例 2:
    输入：nums1 = [4,9,5,4], nums2 = [9,4,9,8,4]
    输出：[4,4,9]
 */
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序
const getIntersection = (arr1, arr2) => {
  let result = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let [shortArr, longArr] =
    arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

  for (const one of shortArr) {
    const index = longArr.indexOf(one);
    if (index !== -1) {
      result.push(one);
      longArr[index] = undefined;
    }
  }
  return result;
};

function intersect(arr1, arr2) {
  // more efficiency
  let result = [];
  for (const one of arr1) {
    const index = arr2.indexOf(one);
    if (index !== -1) {
      result.push(one);
      arr2[index] = undefined;
    }
  }
  return result;
}
const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];

/**
 *
 * 给你一个按升序排序的整数数组 num（可能包含重复数字），
 * 请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。
 * 如果可以完成上述分割，则返回 true ；否则，返回 false 。
 * [1,2,3,3,4,5]
 */

function isPossible(nums) {
  let result = 'False';
  let canbe = [];
  let tempNums;
  function recursion(_nums) {
    const len = _nums.length;
    let temp; // last num
    for (const [i, n] of _nums.entries()) {
      console.log(_nums);
      if (temp === n) {
        tempNums = _nums.slice(i);
        recursion(tempNums);
      } else {
        temp = n;
        canbe.push(n);
        tempNums = _nums.slice(i);
      }
    }
  }
  recursion(nums);
  // console.log(canbe);
  return result;
}

console.time('getIntersection');
isPossible([1, 2, 3, 3, 4, 5]);
console.timeEnd('getIntersection');
