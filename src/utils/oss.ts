import OSS from 'ali-oss'

const client = new OSS({
  region: 'oss-cn-hongkong',
  accessKeyId: import.meta.env.VITE_OSS_ACCESS_KEY_ID,
  accessKeySecret: import.meta.env.VITE_OSS_ACCESS_KEY_SECRET,
  bucket: 'tb-web',
})

export default client
