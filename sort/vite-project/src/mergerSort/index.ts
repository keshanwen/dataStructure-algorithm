import Sort from "../Sort";

class MergeSort<T = number> extends Sort<T> {
    leftArray:T[] = [];

    sort() {
        let begin = 0;
        let end = this.array.length;
        this.mergeSort(begin, end);
    }
    /*
        对[begin, end) 范围的数据进行归并排序    
    */ 
    mergeSort(begin: number, end: number):void {
        if (end - begin < 2) return;

        let mid = (begin + end) >> 1;
        this.mergeSort(begin,mid)
        this.mergeSort(mid, end);
        this.merge(begin, mid, end);
    }

    /*
        将 [begin, mid) 和 [mid, end) 范围序列合并成一个有序序列
    */ 
    merge(begin: number, mid: number, end: number) {
       let li = begin;
       let le = mid;
       let ri = mid;
       let re = end;
       let ai = begin;

       // 备份左变数组
       for (let i = li; i < le; i++) {
          this.leftArray[i] = this.array[i]
       }

       // 如果左边还没有结束
       // 思考如果左边结束了还需要排序吗？
       while(li < le) {
        if (ri < re && this.cmp((<number>this.array[ri]), (<number>this.leftArray[li])) < 0) {
            this.array[ai++] = this.array[ri++];
        } else {
            this.array[ai++] = this.leftArray[li++];
        } 
       }
    }
}

const arr = [9,8,7,6,5,20,4,3,2,1]

const sortInstance = new MergeSort()
sortInstance.Sort(arr)
sortInstance.toString()