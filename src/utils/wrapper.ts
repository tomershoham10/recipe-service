const wrapper = async (func: Function) => {
    try {
        func();
    } catch (err: any) {
        throw new Error(err)
    }
}


export default wrapper;