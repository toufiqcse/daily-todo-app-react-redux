const ToBase64 = (str) => {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
};

export default ToBase64;
