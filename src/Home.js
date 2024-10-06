import './css/Home.css'
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from "react-share";
function Home(props) {
    const shareUrl = "NguyenMinhHoangAnh.com";
    return (
        <div className='home__base'>
            <input hidden id="popup__thongbao" type='checkbox' />
            <label htmlFor='popup__thongbao' className='over__background'></label>
            <div className="hidden__popup">
                <i className="fas fa-check-circle"></i>
                <h3>Bạn đã thêm thành công lời khuyên yêu thích!</h3>
                <label htmlFor='popup__thongbao' className='button_ok'>ok</label>
            </div>
            <div className="container">
                <div className="home__advice">
                    <div className="title_advice">
                        <h1>ADVICE : #{props.advicerandomshow.id || "#"}</h1>
                        <p>"{props.advicerandomshow.advice || "Hãy click bên dưới để nhận một lời khuyên siêu dễ thương của riêng bạn"}"</p>
                        <div className="border__advice">
                            <hr style={{ width: '45%' }}></hr>
                            <i className="fas fa-mobile-alt"></i>
                            <i className="fas fa-tablet-alt"></i>
                            <i className="fas fa-desktop"></i>
                            <hr style={{ width: '45%' }}></hr>
                        </div>
                    </div>
                    <div className="icons_advice">
                        <span><i className="fas fa-share"></i>
                            <div className='share'>
                                <div>
                                    <div>
                                        <FacebookShareButton url={shareUrl} quote={props.advicerandomshow.advice} hashtag="#NguyenNgocHoang" >
                                        <FacebookIcon size={32} round/>
                                        </FacebookShareButton >
                                    </div>
                                    <div>
                                        <TwitterShareButton url={shareUrl} title={"hello"}>
                                        <TwitterIcon size={32} round/>
                                        </TwitterShareButton >
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span onClick={() => { props.handleRanDomAdvice() }}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg></span>
                        <span onClick={() => { props.handleLikeAdvice(props.advicerandomshow.id) }}><i className="fas fa-heart"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home