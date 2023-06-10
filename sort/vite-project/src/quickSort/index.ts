import Sort from "../Sort";

class QuickSort<T = number> extends Sort<T> {

    sort() {
        this.quickSort(0, this.array.length)
    }

    // 对 [begin, end) 范围内的元素进行快速排序
    quickSort(begin: number, end: number) {
        if (end - begin < 2) return

        // 确定轴点位置 o(n)
        let mid = this.pivotIndex(begin, end)
        // 对子序列进行排序
        this.quickSort(begin, mid)
        this.quickSort(mid + 1, end)
    }

    /*
        构造出[begin, end) 范围的轴点元素
         return 轴点元素的最终位置   
    */ 
   pivotIndex(begin: number, end: number): number {
    // 随机选择一个元素跟begin位置进行交互
    this.swap(begin, begin + Math.floor(Math.random() * ( end - begin )))

    // 备份 begin 位置的元素
    let pivot: number = this.array[begin] as number

    // end 指向最后一个元素
    end--

    while (begin < end) {
        while(begin < end) {
            if (this.cmp(pivot, this.array[end] as number) < 0) { // 右边元素 > 轴点元素
                end--
            } else { // 右边元素 <= 轴点元素
                this.array[begin++] = this.array[end]
                break
            }
        }

        while(begin < end) {
            if (this.cmp(pivot, this.array[begin] as number) > 0) { // 左边元素 小于 轴点元素
                begin++
            } else { // 左边元素 >= 轴点元素
                this.array[end--] = this.array[begin]
                break
            }
        }

    }

    // 将轴点元素放入最终的位置
    this.array[begin] = pivot as any
    // 返回轴点元素的位置
    return begin
   }
}

const arr = [9,8,7,6,5,20,4,3,2,1]

const sortInstance = new QuickSort()
sortInstance.Sort(arr)
sortInstance.toString()