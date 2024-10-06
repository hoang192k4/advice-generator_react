import { useState } from 'react'
import './css/Add.css'
function Add(props) {
    const [inputValue,setInputValue]=useState('');
    return (
        <div className="add_advices">
            <input hidden id="popup__advice" type='checkbox' />
            <label htmlFor='popup__advice' className='over__background'></label>
            <div className="hidden__popup">
                <i className="fas fa-check-circle"></i>
                <h3>Bạn đã thêm lời khuyên thành công!</h3>
                <label htmlFor='popup__advice' className='button_ok'>ok</label>
            </div>
            <div className="container advicentn">
                <div className="add_advice">
                    <h1>Thêm lời khuyên của bạn</h1>
                    <div className="add_advice_submit">
                        <input type="text" placeholder="Advice..." id="value_advice" onChange={(e) => setInputValue(e.target.value)}/>
                        <button onClick={()=>  props.handleAddAdivce(inputValue)}>Thêm lời khuyên</button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#00cba9" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,117.3C384,149,480,203,576,197.3C672,192,768,128,864,96C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Add