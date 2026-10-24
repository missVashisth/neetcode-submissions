class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Better approach
        let arr = nums.map((val,idx)=>[val, idx]);
        arr.sort((a,b)=>a[0]-b[0]);

        let left = 0;
        let right = nums.length-1;

        while(left<right){
            let sum = arr[left][0]+arr[right][0];
            if(sum>target) right--;
            else if(sum<target)left++;
            else return [arr[left][1], arr[right][1]];
        }


        // Brute force approach
        // for(let i=0;i<nums.length-1;i++){
        //     for(let j=i+1;j<nums.length;j++){
        //         let sum = nums[i]+nums[j];
        //         if(sum===target)return [i,j];
        //     }
        // }
    }
}
