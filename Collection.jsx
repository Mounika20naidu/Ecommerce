import React from 'react'

const Collection = (props) => {
    let{title,image1,image2,image3,image4,image5,image6,price1,price2,price3,price4,price5,price6}=props.gentsFashion
  return (
    <div className='collectionSection'>
        <img src="assets/bannerimg.jpg" alt="" />
        
        <div className="menImages">

<img src={image1} alt={title} />
<img src={image2} alt={title} />
<img src={image3} alt={title} />
<img src={image4} alt={title} />
<img src={image5} alt={title} />
<img src={image6} alt={title} />
</div>
    </div>
  )
}

export default Collection