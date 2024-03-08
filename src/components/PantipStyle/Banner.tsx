import { bannerHeight } from '../../constants'

export const Banner = () => {
  return (
    <>
      <div
        className='w-full bg-tertiary banner hidden xl:block'
        style={{ height: bannerHeight, maxHeight: bannerHeight }}
      />

      <div className='block xl:hidden'>
        <img src='https://ptcdn.info/doodle/2024/5d07273900d01f33da0f618c_kltlxiu7k8.png' />
      </div>
    </>
  )
}
