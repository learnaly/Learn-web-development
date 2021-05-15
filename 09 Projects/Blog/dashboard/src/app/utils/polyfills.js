function ArrayBufferFunction() {
    // this: File or Blob
    return new Promise(resolve => {
        let fileReader = new FileReader();

        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsArrayBuffer(this);
    })
};

const ArrayBuffer = () => {
    if ('File' in window.self) File.prototype.arrayBuffer = File.prototype.arrayBuffer || ArrayBufferFunction;
    Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || ArrayBufferFunction;
};

const polyfills = () => {
    ArrayBuffer();
};

export default polyfills;
