/*

1,首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
2，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3，重复第二步，只到所有元素都排序完毕
*/ 


const selectionSort = array => {
	const len = array.length;
	let minIndex, temp;
	for (let i = 0; i < len - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (array[j] < array[minIndex]) {
				// 寻找最小的数
				minIndex = j; // 将最小数的索引保存
			}
		}
		temp = array[i];
		array[i] = array[minIndex];
		array[minIndex] = temp;
		console.log('array: ', array);
	}
	return array;
};

