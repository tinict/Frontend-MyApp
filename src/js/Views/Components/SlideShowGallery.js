import '../../../css/StyleComponents/SlideShowGallery.css';

const SlideShow = () => {
    return (
        <div className="Banner">
            <div className='BlockBanner'>
                <div className='BlockLeft'>
                    <img className='itemBanner' src='https://static.vecteezy.com/system/resources/previews/003/755/267/non_2x/super-mega-sale-banner-template-vector.jpg' />
                </div>
                <div className='BlockRight'>
                    <img className='itemBanner__right' src='https://media.istockphoto.com/id/1372789466/vector/sale-banner-template-design-with-geometric-background-big-sale-special-offer-up-to-80-off.jpg?s=612x612&w=0&k=20&c=6nBlC7inlvrzz2AckmanQiW6xOUkuahO5_lA0K5jz9E=' />
                    <img className='itemBanner__right' src='https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg' />
                </div>
            </div>
        </div>
    )
};

export default SlideShow;