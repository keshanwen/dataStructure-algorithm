export default abstract class Sort<T> {
    protected array: T[] = [];
    private cmpCount: number = 0;
    private swapCount: number = 0;
    private time: number = 0;

    public Sort(array: T[]) {
        if (array == null || array.length < 2) return;
        this.array = array;

        let begin: number = Date.now()
        this.sort();
        this.time = Date.now() - begin;
    }

    protected abstract sort(): void;

    /*
	 * 返回值等于0，代表 array[i1] == array[i2]
	 * 返回值小于0，代表 array[i1] < array[i2]
	 * 返回值大于0，代表 array[i1] > array[i2]
	 */
    protected cmp(v1:number,v2:number):number {
        this.cmpCount++;
        return v1 - v2;
    }

    protected swap(i1: number, i2: number) {
        this.swapCount++;
        let tmp = this.array[i1];
        this.array[i1] = this.array[i2];
        this.array[i2] = tmp;
    }

    public toString() {
        let timeStr = `耗时${this.time}毫秒`
        let cmpCountStr = `比较${this.cmpCount}次`
        let swapCountStr = `交换${this.swapCount}次`
        console.log(`${timeStr} \n ${cmpCountStr} \n ${swapCountStr} \n ${this.array}`)
    }

}